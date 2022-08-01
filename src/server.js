import express from 'express';
import { DB } from './db';
import { routes } from './routes';

const app = express();
app.use(express.json())
//above app.use is body parser which is required while post request
// and client should receive reponse body, thats why we need to add app.use() thing 

routes?.forEach(route=>{
    app[route.method](route.path,route.handler);
})

const start = async () => {
    await DB.connect('mongodb://localhost:27017');
    await app.listen(8080);
    console.log("Server is listening on port 8080");
}

start();