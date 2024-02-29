import { verify } from '../token.js';
import state from '../state.js';

const dataPath = '/data';

const data = (req, res) => {
  try {
    const { userList, users } = state;
    const token = req.headers.auth;
    const userEmail = verify(token).email;
    const user = users.find((u) => u.email === userEmail);
    const { uId, favoriteUsers } = user;
    console.log(`${userEmail} fetch data`);
    res.send({ userList, uId, favoriteUsers });
  } catch (e) {
    res
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

export { dataPath, data };
