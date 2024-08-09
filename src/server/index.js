import express from "express";
import { remultExpress } from 'remult/remult-express';


const app = express();
// Initialize Remult as Express middleware
const api = remultExpress();
app.use(api);

app.get('/api/hi', (req,res) =>  res.send('Hi my name is dotan'));
app.listen(3002, () => console.log("started server"));

