const express = require('express');
const app = express();
const router = express.Router();



app.use(express.static('public'));

app.listen(9000, () => {
    console.log("El servidor está escuchando por el port 9000...")
});