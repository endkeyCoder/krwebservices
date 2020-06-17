import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'validation')))

app.listen(process.env.PORT || 3344, () => {
    console.log('Server is running!')
    console.log('print de diretorio ==> ', path.join(__dirname, 'validation'))
})