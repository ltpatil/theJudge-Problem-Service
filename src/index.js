const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const  apiRouter = require('./routes');
const errorHandler = require('./utils/errorhandler');
const connToDB = require('./config/db.config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ Message: `Problem Service is alive` });
});
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    await connToDB();
    console.log("SUCESS TO DB");
});