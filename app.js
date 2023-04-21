const express = require('express');
const app = express();
const PORT = 3333
const userRoute = require('./router/user.js') 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api/v1/user",userRoute)

app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
})