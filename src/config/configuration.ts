import { config } from 'dotenv';
import IConfig from './IConfig';
config();
const configuration: IConfig = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secretKey: process.env.secretKey
});
export default configuration;

