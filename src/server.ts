import express from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('** App is listening on port 3000!');
});