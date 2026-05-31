import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/buy", auth, (req, res) => {});

app.post("/sell", auth, (req, res) => {});

app.post("/split", auth, (req, res) => {});

app.post("/merge", auth, (req, res) => {});

app.post("/history", auth, (req, res) => {});

app.post("/position", auth, (req, res) => {});

app.get("/balance", auth, (req, res) => {});
