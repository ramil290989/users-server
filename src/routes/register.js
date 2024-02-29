import state, { defaultAvatar } from '../state.js';
import { generateToken } from '../token.js';

const registerPath = '/register';

const register = (req, res) => {
  const { userList, users } = state;
  const { name, email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user) {
    res
      .status(409)
      .send({ error: 'Conflict' });
  } else {
    const step = 1;
    const id = users.length ? users[users.length - step].id + step : step;
    const uId = id;
    const favoriteUsers = [];
    const newUser = {
      uId,
      email,
      password,
      favoriteUsers,
    };
    const newUserToList = {
      id,
      name,
      email,
      defaultAvatar,
    };
    users.push(newUser);
    userList.push(newUserToList);
    const token = generateToken(email);
    console.log(`${email} registered`);
    res.send({ token });
  }
};

export { registerPath, register };
