// const fs = require('fs');
// import fs from 'fs';
import { MD5 } from 'crypto-js';

// let pvk = fs.readFileSync('keys/private.key', 'utf8');
// let pbk = fs.readFileSync('keys/public.key', 'utf8');


const nodeEnv = process.env.NODE_ENV || 'development';

const url = 'https://gateway.marvel.com:443';

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const ts = new Date().getTime();
const hash = MD5(ts + privateKey + publicKey);

export {
  publicKey, ts, hash, url
}