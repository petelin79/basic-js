const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(move = true) {
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.move = move;
    }

    encrypt(msg, key) {
        if (!msg || !key) throw new Error('Incorrect arguments!');

        msg = msg.toUpperCase();
        key = key.toUpperCase();

        let res = '';
        let idx = 0;

        for (let i = 0; i < msg.length; i++) {
            if (this.abc.includes(msg[i])) {
                let step = this.abc.indexOf(key[idx % key.length]);
                let place = (this.abc.indexOf(msg[i]) + step) % this.abc.length;
                res += this.abc[place];
                idx++;
            } else {
                res += msg[i];
            }
        }

        return this.move ? res : res.split('').reverse().join('');
    }

    decrypt(msg, key) {
        if (!msg || !key) throw new Error('Incorrect arguments!');

        msg = msg.toUpperCase();
        key = key.toUpperCase();

        let res = '';
        let idx = 0;

        for (let i = 0; i < msg.length; i++) {
            if (this.abc.includes(msg[i])) {
                let step = this.abc.indexOf(key[idx % key.length]);
                let place = (this.abc.indexOf(msg[i]) - step + this.abc.length) % this.abc.length;
                res += this.abc[place];
                idx++;
            } else {
                res += msg[i];
            }
        }

        return this.move ? res : res.split('').reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
