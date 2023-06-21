const express = require('express')
const app = express();
const cors = require("cors");
app.use(cors({
    origin: '*'
}));
// app.use(__dirname, 'index.html');
// console.log(__dirname);
// app.use(express.static('index.html'));
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     // res.send('Yo!')
//     res.sendFile('index.html', { root: __dirname })
// })
app.all('/message', (req, res) => {
    console.log("Just got a request!")
    res.json({
        name: 'Max'
    });
})
app.listen(process.env.PORT || 3000)