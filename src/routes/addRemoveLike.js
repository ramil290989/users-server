/* eslint-disable no-unused-expressions */
import { verify } from '../token.js';
import state from '../state.js';

const likePath = '/like';

const like = (req, res) => {
  try {
    const removedItem = 1;
    const { users } = state;
    const token = req.headers.auth;
    const { likeId } = req.body;
    const userEmail = verify(token).email;
    const user = users.find((u) => u.email === userEmail);
    const { favoriteUsers } = user;
    console.log(favoriteUsers);
    console.log(likeId);
    favoriteUsers.includes(likeId)
      ? favoriteUsers.splice(favoriteUsers.indexOf(likeId), removedItem)
      : favoriteUsers.push(likeId);
    console.log(`${userEmail} add/remove like`);
    console.log(JSON.stringify(user));
    res.end();
  } catch (e) {
    res
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

export { likePath, like };
