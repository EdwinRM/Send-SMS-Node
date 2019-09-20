setInterval(function () { // run this code every amount of time
    console.log("running a task every minute");
    var numbers = []; // your array of numbers
    var message = 'Hello World!';

    for (let i = 0, p = Promise.resolve(); i < numbers.length; i++) { // use promises with the for beacause for loops are to fast and AT comands needs time  
        var SerialPort = require('serialport'); //open port
        p = p.then(_ => new Promise(resolve =>
            setTimeout(function () {
                var port = new SerialPort('/dev/ttyS0', { //Serial port 0 make sure its enabled on the raspberrypi3   
                    baudRate: 115200 //the baudRAte, you will need to configure some docs in raspberry pi to change the baudeRate 
                });
                console.log('port is now open');
                port.on("open", function () {
                    port.on('data', function (data) {
                        console.log("Received data: " + data);
                    });
                    console.log("***********");
                    console.log(numbers[i]);
                    console.log("***********");
                    var att = at(port), cmm = cm(port), cmgss = cmgs(port), restt = rest(port), ctrll = ctrl(port), closee = close(port);
                    Promise.all([att, cmm, cmgss, restt, ctrll, closee]).then(values => { }); //promise all for each function that has a diferent time
                });  //port on 
                resolve(); // resolve the promise 
            }, 5000), // time for each interation
        ));
    }   //for

    //Functions to send the AT commands to the module gsm 900 every function its a promise 
    var at = (port) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AT');
                port.write('AT'); //just to check if its working 
                port.write('\r');
                resolve();
            }, 1500);
        });
    }

    var cm = (port) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AT+CMGF=1'); //set comand for sending text
                port.write('AT+CMGF=1');
                port.write('\r');
                resolve();
            }, 2000);
        });
    }

    var cmgs = (port) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AT+CMGS=number');  //add the number with AT+CMGS comand
                port.write('AT+CMGS="' + numbers + '"\r');
                resolve();
            }, 2500);
        });
    }

    var rest = (port) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(message);
                port.write(message);
                resolve();
            }, 3000);
        });
    }

    var ctrl = (port) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('cntrl+z');
                port.write('\032');  // this its super important  send a cntrl+z in node, this will send the message
                resolve();
            }, 3500);
        });
    }

    var close = (port) => {  // close the port otherwise its gonna break after the first message
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                port.close(function (err) {
                    console.log('port closed', err);
                    bandera = 0;
                    resolve();
                });
            }, 4000);
        });
    }


}, 60000); 
