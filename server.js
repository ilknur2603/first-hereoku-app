const express = require("express");
const app = express();
//I used port 3000, Hereoku will connect it automaticly
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");



app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`you are listening port ${PORT}`)
})
