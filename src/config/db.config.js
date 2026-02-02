const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connToDB(){
    try {
        if (NODE_ENV == "dev") {
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log(`Wasnot able to connect to DB`);
        console.log(error);
    }
}

module.exports = connToDB;