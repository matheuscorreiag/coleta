import express from 'express';
import cors from 'cors'
import routes from './routes'

const app = express();
app.use(express.json());

//app.use((req, res, next) => {
//    res.header("Access-Control-Allow-Origin", "*")
/*     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE") */
/*     app.use(cors());
    next(); */
/* }) */

app.use(cors());
app.use(routes);

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

app.listen(3030);