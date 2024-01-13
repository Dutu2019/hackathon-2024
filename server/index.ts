import http from "http"
import express, {NextFunction, Request, Response} from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const HTTPServer = http.createServer(app)

interface User {
        name: string,
        lastname: string,
        email: string,
        isAuth: boolean
}

function authToken(req, res, next) {
    if (req.cookies && req.cookies.jwt) {
      jwt.verify(req.cookies.jwt, "Hackathon2024", (err, user) => {
        if (err) return res.send(err);
        req.user = user;
      });
    }
    next();
  }


app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://172.29.6.157:3000"]
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser("Hackathon2024"))
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next()
})
app.use(authToken)

app.get('/', (req: Request, res: Response) => {
    res.send("Hello there")
})

app.get("/session", (req: Request, res: Response) => {
    console.log(req.cookies)
})

app.post("/postLogin", (req: Request, res: Response) => {
    const {email, password} = req.body
    const file: Array<Object> = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
    const user: any = file.find((el: User) => {if (el.email === email) {return true}})
    if (user) {
        if (user.password === password) {
            console.log("User logged in")
            res.cookie("jwt", jwt.sign(user, "Hackathon2024"), {
                expires: new Date(new Date().getTime() + 9999999)
            })
            res.send(user)
        } else {
            res.send(300)
        }
    } else {
        res.send(300)
    }
})

app.post("/postSignUp", (req: Request, res: Response) => {
    let {name, lastName, email, password, topics} = req.body
    topics = topics.split(",")
    const file: Array<Object> = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
    const user: any = file.find((el: User) => {if (el.email === email) {return true}})
    
    if (!user) {
        file.push({name: name, lastName: lastName, email: email, password: password, topics: JSON.stringify(topics)})
        fs.writeFileSync("./users.json", JSON.stringify(file))
        res.sendStatus(200)
    } else {
        res.sendStatus(201)
    }
})

HTTPServer.listen(3001, "172.29.6.157", () => {console.log("Server listening...")})