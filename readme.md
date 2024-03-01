[![Maintainability](https://api.codeclimate.com/v1/badges/3f141bfc25c85d513feb/maintainability)](https://codeclimate.com/github/ramil290989/users-server/maintainability)

# Приложение USERS-SERVER

**Реализовано:** работа с api (отправка данных, получение данных), работа с полученными данными.

**Использованные технологии:** ExpressJS.

**Возможности:** отправка токена при авторизации или регистрации пользователя, проверка токена, прием данных, отправка данных.

**Описание:** После авторизации или регистрации пользователю отправляется токен. При входящих запросах происходит верификация токена, в случае успешной верификации вносятся изменения в стейт или отправка данных.

## API
пример с использованием axios:

**Регистрация:**

*Запрос*
```
const registerRoute = 'http://server:3000/api/register';
const registerData = { name, email, password };
const response = await axios.post(registerRoute, registerData);
```
*Ответ*
```
const { token } = response.data;
```
*Ошибки*
```
response.status 409;
{ error: 'Conflict' }
Пользователь с таким Email уже существует
```

**Авторизация:**

*Запрос*
```
const loginRoute = 'http://server:3000/api/login';
const loginData = { name, email, password };
const response = await axios.post(loginRoute, loginData);
```
*Ответ*
```
const { token } = response.data;
```
*Ошибки*
```
response.status 401;
{ error: 'Unauthorized'' }
Неверный Email или пароль
```

**Получение данных:**

*Запрос*
```
const dataRoute = 'http://server:3000/api/data';
const headers = { auth: token };
const response = await axios.get(dataRoute, headers);
```
*Ответ*
```
const { userList, uId, favoriteUsers } = response.data;
```
*Ошибки*
```
response.status 403;
{ error: 'Forbidden' }
Неверный токен
```

**Отметка пользователя лайком:**

*Запрос*
```
const likeRoute = 'http://server:3000/api/like';
const headers = { auth: token };
const response = await axios.post(likePath, { likeId }, headers);
```
*Ответ*
```
response.status = 200;
```
*Ошибки*
```
response.status 403;
{ error: 'Forbidden' }
Неверный токен
```