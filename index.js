let express = require('express');
let app = express();
let router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Apple");
});
app.use('/api/', router);
var server = app. listen(500, () =>{
   console.log("Node server is running on http://localhost:5000...");
});


