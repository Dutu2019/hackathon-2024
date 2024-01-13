import http from "http"
import express, {Request, Response} from "express"
const app = express()
const HTTPServer = http.createServer(app)


app.get('/', (req: Request, res: Response) => {
    res.send("Hello there")
})

HTTPServer.listen(3001, () => {console.log("Server listening...")})