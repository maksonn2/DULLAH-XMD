const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61VyY7rxhX9FaO2UlsszhTQQDhKouZ5CAKjSBapEmeyqOlBi6zi7IIsss8f2Iv+ieQr2l9isNWNbiT2cwdxrQrF4rnn3jr33C8gSUmJ+/gC2l9AVpAjorje0kuGQRtole/jAjSBhygCbcCryJe67DZZzbr2daMdpGRohtrYmrhH2Bq2hJbR981OpizVR3BrgqxyIuJ+BbAT09Yx59LeiEk2iUr0kVzsnd5W1t2CIfz8pNFttEkEft17BLcaEZGCJIGZ7XGMCxT18WWCSPE5+uZkkq9Ka6nMptp0P++d1txWjUNRN4PEd8m4u+ltemzUKNjT5+inu7XMyYoBr3rfEP2LHE349XqzWwzhrrPqhfbsfLY3PQMFzJ1+SYIEez0PJ5TQy6frfukzXWelKtwxmiJhQugq5ydneLGuy40RRtlOmi+GudJbrNPPET8z2XI8nvP2buNPZI63/a1/aXStHtcSwr1cZsvJOYKXBRNsPxKfFG9aCf+nuhvCap1n3rUIZE6dKa3Z/OpUB72xiFQ3XJTWsNKwu18PmeHn6Gd7bnupeCVv6Mwgc3dKmV7XeRaUxTCE20YjnLLOoNOQaRi800e0Kr7KktOx1lhhr5PMJoPNmOw6K7eVXcIoO0PbapUL/3o+ManYlxo9OdEbAjPBdL8xduFGPAozaJOe0z9vlXG3oCSvDF2ZBcHjS0YhvvQ80Ia3JihwQEpaIErSpD6TYBMg7zjHboHpS3XB+DRqJXaSFnuOM63RdhQ5mS2Pw2Ib2DKjHYXsUI543l4J6iNogqxIXVyW2OuSkqbFZYjLEgW4BO0/vjxUnXOB45Rim3igDaDMKoKgCIwi/qH89rRHtERZ9m2CKWgCv0jjIQZtWlS4CV7u85auQChrksQrUON5Q+QVXoW6yIsWhFCtE4zvMRckxiVFcQbaUOJFyEtQYm7N34WGBaHCGYLGmZbOCZoisIKhiqYhSjynCCL3GzTg70RDMFTW5FhRYTgW6pZpyJag87KgctA0LUX8Kg2Wgbc/NUGCz/TeS7UCONgEPilKukyqLEqR99Zobx+R66ZVQueXxNXrDS5A+8MxppQkQVknViWocPfkiPU6D9D2UVTiWxN4+EhcXOMBVTSt2BIXUxp/5x+k83coNgZBLaN9mtyvOAzCosgrD7zDwweed5QHhUPoAXKS4EEZyi7rgLocdxur//nVrsp35TLQ1knkdqTdabroXRnDPa00g5++dMa9HXCBvbcqO8gNq2yRhjj5Cq6356Yne1BsdTSrPGc7mbI7b3ASOwP+A+69zUD7y/vo0FOvxoOmwg7l0Q7Ur1XH+U8xtFnlv/WQoPoyeH76y7//+fz09+en7795fvr+ZfePf/3w/PTX56e//fTnH7/5v9ZDzf/1cWtmHqaIRCVoA32gH68NUzOHYsUM1U5HNQNVD1TwLoY3o7s7SZVyqON4eJSuhDPhyxgXw53rI1bQVMbCln7OCY5skuunx18AAW1wNcbxlbv09Vk4ImY5PISHBj9Y6tdzVjaKw2hDpygwFlInUip/K7FMJYVxqp9hQDBkcb+3wPFAG9ln1LHYef84Xjmqfnqso91F+TGYtHN1zVEXXRuH9n6xMlAjoMo4yVacnQfE1g+ZkvsZWg+Gy5bWJXg1TwMu3ruM3AtV1G+JMM73Y1ExdyuySPL53A3JqwW/jIDodfSSV3e8S9gn+GWSvb7ub4ngvZmYW/MDxOto/BXBak4+YvcxtzkgC7vbamAn+bWz6bK0mk5H2mY/LVGaZPNtHpTgVrtEFiHqp0UM2qCMHQSaIEIlVd/N4BdsTuSaIL6oWTaniL55CFDr1TVTcPsZ59teRvIJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
