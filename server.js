const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');

// Middleware
app.use(express.json());        // convert string format data to json format.
app.use(express.urlencoded({ extended: true }));        // extended:true allow nesting conversion from stringify data to json  
app.use(cors());
app.use('/api/users', userRouter);

require('dotenv').config();             // not saving in variable bcz we are not using that var in future.
const PORT = process.env.PORT || 3000;

require('./database/connect')();

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});