import express from "express";

const app = express();

app.use(express.static('data'))

app.listen(4000);
