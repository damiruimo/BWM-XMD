const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW5OqOBj8L3nVOYKgAaumavGCgIAXwNvWeQgQEbmHKOCU/32LudTMw57Z2TylQtLpdPf38QLSLCzxAjdg9AJyEt4Qxe2UNjkGIzC+nk6YgC7wEUVgBJBidOLGoMFxGdVaauyHB9+bjQ0H36moayy2CoN3TShHs2fw6IL86sah9w2gfd6qnQM/ju+EnoeysbpuSvMuHP26s6S3xXYeHINhkCeDufEMHi0iCkmYBrP8jBNMULzAzQqF5Gf0DVWMvCq/UwGdbJGviVDYpuzYOtfLI8k2m4pncW8LiWP8jD5UqxscJ4N4vpJlf2yTwdmUpIT0HPXcLyXfMSJjZvfImlHf6JdhkGJf9XFKQ9r8WPdIkw2V32kZSvFpYYfLaMoh1VnsjH2k1JPQXGj13bteCCv9jPhOFjocJPOVUi2njHJv1NIPqV3lsDr4sMcOXNc4TK5rqwq+El+Rj6xE/0f3zmpzPF/kjauuhkp1yD209/VJNFa3RrMZ09kKzTMNW02tCD+jHx37M2ajwcW0UBbW1hVWMpkvqAtdO1TGJkw2zFmMgqkzcz7pI3ol37HU18ExN3fRudQPxKFz87C/nR3FPG213FK5YnPg+0Vu1MXaKoYwUKJMu++EqW9oa/awn9p1AdXOlisHlkdYiVX6U0mcVM+vL4pwo/pgxD66gOAgLClBNMzSdq0/4LsA+TcLewTTV3lB6qZ31QyuBn/YccVmA2d60Y9SQWBrE8ds33TTm6BVjYnKZ9AFOck8XJbYV8KSZqQxcFmiAJdg9PfvLkhxTd+Ma6/j2C44haSkTnrN4wz5H65+fESel11TajWpN2knmIAR87mMKQ3ToGx1vKaIeOfwhidnREswOqG4xI8u8PEt9HCLB/L1LlPL/sRaWnw1gav8WBiM1FI+Z+nblr6LMecPxKfBaQifeF4YPokDFz55aOhBj2H60OVAF4TvNdOe+aOFXhBwg/pSk7pZKjx0i2NA+WN0lyPm1YY37THBPhhRcsVd4CIvuuZ2FuH0G9yjc5nt/bMuFIQUaLiYaZk7xxc3DoMvuG+egtHLZ5+aZH6Lx0sKpy+mY9AFyWsEw/blIg95DvJQZLmROPir/FW1OqI8/5Vi2sK+a94e8DFFYVyCEZgYUO4QVZ4th6UIs/lcigJpErSifnj0Efa3MDEdl0dIdfbGpbeQdIk/bGW0HOtOf6BUG5MnjL+G9TS/3aXnfwEBI7CFAtLWhXqw47hZNzpLubij6h6i/PAAe2i/HLjX7IYMJtQXcGddOKcOVpvznY3z2cFNZ3u+ibf5rohgtL1UvKifdKmtjI+sfL0smWjFNE1qQ42ItxxjkaHiVOZM2ONVe9Ov5oI2JBPPDV2R0WpluqTQ8maJjixLHs4nzp3bL42UjOcZY4mZfr6vNXYsvZXhaxuI39tv+FogL+/JOoX4tZulqHXoP7z5mnHm0f0C8d4e/5Cjsb9KOvMklOW72muCSbWcy5vdJbBY87oRZjZeiIqzFNZDV6jA4/G7C/IY0VNGkvbnm/okC33QBTEqqfRZpnaY4JKiJAcjFnJ8n+EYhu+CpJHy3KKIflQ3kNoxTRTw+Ae1b1bp+QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "zeeker",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "94743747913",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

