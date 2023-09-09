import Express from "express";
import bodyParser from "body-parser";
import { startConnection } from "./src/mongo/index.mjs";
import FiltersRouter from "./src/handlers/filters/index.mjs"

const app = Express();
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.send("ok");
})

app.use("/images", FiltersRouter);

const PORT = 3000;

const startServer = async () => {
    await startConnection();
    app.listen(PORT, () => {
                console.log("http://localhost:3000")
    })
}

startServer();