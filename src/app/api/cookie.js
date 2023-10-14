import { parse } from 'cookie';

export default (req) => {
  // Get the request headers and cookies
  const cookies = parse(req.headers.cookie || '');

  // Access a specific cookie by name
  const myCookieValue = cookies.csrfToken;

  // Do something with the cookie value
  res.status(200).json({ cookieValue: myCookieValue });
};
