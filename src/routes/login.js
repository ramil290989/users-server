import state from '../state.js';
import { generateToken } from '../token.js';

const loginPath = '/login';

const login = (req, res) => {
  const { users } = state;
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user && user.password === password) {
    console.log(`${user.name} login`);
    const token = generateToken(user.email);
    res.send({ token, email });
  } else {
    res
      .status(401)
      .send({ error: 'Unauthorized' });
  }
};

export { loginPath, login };
