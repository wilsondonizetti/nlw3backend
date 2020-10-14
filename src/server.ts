import express from 'express';

const app = express();


app.get('/', (request, response)=>{
    console.log('home');
    return response.json({ message: 'home'});
});

app.listen(3333);