const express=require('express');
const bodyParser = require('body-parser');

const charControl = require('./controllers/char_controllers')

const app = express();

app.use(bodyParser.json());

// const data = "Wubba lubba dub dub!"

// app.get('/data', (req, res) => {
//     res.status(200).json(data)
// })

app.post('/data', charControl.create);
// app.get('/data', charControl.read);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));