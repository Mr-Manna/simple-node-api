import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const Port = 3000
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/crmDb',{
    useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('App is running')
})

routes(app);

app.listen(Port,()=>{
    console.log(`app is running on port ${Port}`);
})