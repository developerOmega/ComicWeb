import { MD5 } from 'crypto-js';

const nodeEnv = process.env.NODE_ENV || 'development';

const url = 'https://gateway.marvel.com:443';

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

const ts = new Date().getTime();
const hash = MD5(ts + privateKey + publicKey);

export {
  publicKey, ts, hash, url
}