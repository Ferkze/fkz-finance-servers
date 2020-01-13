import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const database = require("./config/database.json");

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send(`${req.ip}: Hello World`);
    });
  }

  private database(): void {
    mongoose.connect(database.connectionString, {
      useNewUrlParser: true
    });
  }
}

export default new App().express;
