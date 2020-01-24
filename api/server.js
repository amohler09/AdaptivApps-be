//dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
//!dependencies

//middleware
// const authenticate = require("../auth/auth-middleware.js");
//!middleware

//router

//!router

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "API IS WORKING!!", dbenv: process.env.DB_ENV });
});

module.exports = server;
