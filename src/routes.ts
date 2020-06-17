/*
    For each new function created, possibly a new route will need it, do it here
*/

import { Router } from 'express';
import welcome from './controllers/welcome';
import sendMail from './controllers/sendMail';

const routes = Router();
routes.get('/', async (req, res) => {
   
    const resWelcome = welcome();
    res.send(resWelcome)
})

routes.post('/sendMail', async (req, res) => {
    const { transporter, sender } = req.body;
    const resSendMail = await sendMail(transporter, sender);
    res.status(resSendMail.appStatusCode).send(resSendMail)
})



export default routes;