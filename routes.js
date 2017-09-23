import express from 'express';


// Controllers 
import mainCtrl        from './controllers/main'
import userCtrl from './controllers/users'


const Routes = express();

// Main Controller
Routes.get('/',mainCtrl.index);

// User Controller
Routes.post('/check-login',userCtrl.Checklogin);


export default Routes;