import express, { Request, Response} from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from "body-parser";
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Now request object will have a body property
app.use(cookieSession({ keys: ['asdf'] })); // Now request object will have a session property
app.use(router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
})