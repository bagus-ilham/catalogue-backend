if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
  }
  
  require('@babel/polyfill');
  const express = require('express')
  const cors = require('cors');
const router = require('./routers');
  const app = express()
  
  const allowedOrigins = ['http://localhost:5173'];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 204
  };
  
  app.use(cors(corsOptions));
  
  app.options('*', cors(corsOptions));
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json())
  
  app.use(router)
  
  module.exports = app