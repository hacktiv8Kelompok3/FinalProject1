const express = require('express');
const app = express();
const PORT = 3334
const allRoutes = require('./router/index') 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(allRoutes)

app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
})