import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'


import Routes from './routes'

const App = express();
const Port = 3000;

// parse application/x-www-form-urlencoded 
App.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
App.use(bodyParser.json())
App.use(morgan('combined'))


App.use(Routes);

App.listen(Port,()=>{
console.log('Server running on port '+Port)
})