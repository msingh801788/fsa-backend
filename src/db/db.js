import { MongoClient } from "mongodb";

const DB_NAME = 'my-database';

export const DB = {
    _dbClient: null,
    connect: async function(url){
        const client = await MongoClient.connect(url,{
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        this._dbClient = client
    },
    getConnection: function(){
        if(!this._dbClient){
            console.log("you need to call the connect function or above connect function didnt connect well with mongodb");
            process.exit(1);
        }
        return this._dbClient.db(DB_NAME);
    }
}