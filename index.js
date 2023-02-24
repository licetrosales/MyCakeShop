let express = require('express');
let app = express();
let router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Apple");
});


