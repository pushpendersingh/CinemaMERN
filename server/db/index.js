const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

const dbConnectionURL = {
    'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};

mongoose
    .connect(dbConnectionURL.LOCALURL, options)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection;

module.exports = db
