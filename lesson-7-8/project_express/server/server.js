const express = require('express');
const fs = require('fs');
const router = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', router);


app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

// app.get('/api/cart/:id', (req, res) => {
//    // res.send(req.params.id);
//     res.send(req.query);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));