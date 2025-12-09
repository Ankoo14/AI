console.log("Hello via Bun!");
import express from "express";
import { CreateChatSchema } from "./types";

const app = express();
app.use(express.json());

app.post("/chat", (req, res) => {
    const {success, data} = CreateChatSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Incorrect Inputs"
        })
        return
    }    
    const { message } = data;
  
});
const port = 3000;