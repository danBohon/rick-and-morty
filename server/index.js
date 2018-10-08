const express=require('express');
const bodyParser = require('body-parser');

const charControl = require('./controllers/char_controllers')

const app = express();

app.use(bodyParser.json());


app.post('/data', charControl.create);
app.get('/data', charControl.read)
app.delete('/data/:id', charControl.delete)



const PORT = 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));