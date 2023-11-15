# Send-SMS-With-Nodejs
Send SMS with node js a Raspberry pi3 and a gsm module 900

# GSM Module Communication Script

## Description
This Node.js script communicates with a GSM module (GSM 900) using AT commands. The script is designed to send text messages to specified numbers at regular intervals.

## Usage
1. Ensure that the required Node.js modules are installed. You can install them using `npm install serialport`.
2. Connect the GSM module to the Raspberry Pi's Serial Port 0 (`/dev/ttyS0`). Make sure the port is enabled on the Raspberry Pi.
3. Configure the baud rate in the script based on the requirements of your GSM module.
4. Update the `numbers` array with the desired phone numbers.
5. Adjust the `message` variable to contain the message you want to send.
6. Run the script using `node your_script_name.js`.

## Script Structure
- The script uses the `serialport` module to communicate with the GSM module over the serial port.
- It sends a sequence of AT commands to the GSM module, including setting the text mode, specifying the recipient number, and sending the message.
- Each AT command is encapsulated in a promise to ensure proper sequencing, as AT commands require specific timing.
- The entire sequence is run every 60 seconds (`setInterval`).

## Dependencies
- Node.js
- `serialport` module (`npm install serialport`)

## Configuration
- **Serial Port:** `/dev/ttyS0` (Make sure it's enabled on the Raspberry Pi)
- **Baud Rate:** 115200 (Adjust based on your GSM module requirements)

## Notes
- Adjust the timing in the promises based on the response time of your GSM module.
- Ensure that the control character `\032` (Ctrl+Z) is properly sent to submit the message.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
Edwin Ramirez Mondragon


##Things you need :

1.- raspberrypi3

2.- module gsm 900

3.- intall node in raspian or any OS you choose

4.- open Serial ports in my case in raspbian OS

4.- test it with minicom (google it)

5.- probably you will need to configure some docs in your raspberry (change baudrate)

6.- run the code

Contact for more inf. 
