import 'dotenv/config';
import jwt from 'jsonwebtoken';

const { TOKENKEY } = process.env;

const generateToken = (email) => jwt.sign({ email }, TOKENKEY, { expiresIn: '1h', algorithm: 'HS256' });

const verify = (token) => jwt.verify(token, TOKENKEY);

export { generateToken, verify };
