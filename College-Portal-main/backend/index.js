const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")
const port =3000

dotenv.config();

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/route', Routes);

app.listen(3000, () => {
    console.log("Server started at port no.3000");
})