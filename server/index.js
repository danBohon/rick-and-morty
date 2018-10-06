const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = "Wubba lubba dub dub!"

app.get('/data', (req, res) => {
    res.status(200).json(data)
})

const PORT = 3334;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));