import { verify } from '../token.js';
import state from '../state.js';

const dataPath = '/data';

const data = (req, res) => {
  try {
    const { users } = state;
    const token = req.headers.auth;
    const userEmail = verify(token).email;
    const user = users.find((u) => u.email === userEmail);
    console.log(`${user.name} fetch data`);
    res.send(users);
  } catch (e) {
    res
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

export { dataPath, data };
