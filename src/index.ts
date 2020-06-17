import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(express.static(__dirname + String.raw`\validation`))
app.listen(process.env.PORT || 3344, () => {
    console.log('Server is running!')
})