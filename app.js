const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');

const app = express();

module.exports = app;

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong.', error);
    } else {
        console.log(`Server is running on port ${port}`)
    }
});