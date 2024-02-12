import state from '../state.js';
import { generateToken } from '../token.js';

const registerPath = '/register';

const register = (req, res) => {
  const { users } = state;
  const { name, email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user) {
    res
      .status(409)
      .send({ error: 'Conflict' });
  } else {
    const step = 1;
    const id = users.length ? users[users.length - step].id + step : step;
    const newUser = { id, name, password };
    users.push(newUser);
    const token = generateToken(email);
    console.log(`${name} registered`);
    res.send({ token, email });
  }
};

export { registerPath, register };
