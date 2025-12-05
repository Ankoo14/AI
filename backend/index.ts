console.log("Hello via Bun!");
import express from "express";

const app = express();
app.post("/chat", (req, res) => {
    const {success, data} = CreateChatSchema.safeParse(req.body);
  
});
const port = 3000;