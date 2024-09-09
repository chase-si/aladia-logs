// app.js
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const cors = require('cors');

const app = express();
const PORT = 3018;

// 使用 body-parser 解析请求体
app.use(bodyParser.json());
app.use(cors());

// 日志 API - 接收并记录日志
app.post('/log', (req, res) => {
  const { level, message } = req.body;

  // 根据请求中的日志级别记录日志
  if (logger[level]) {
    logger[level](message);
    res.status(200).json({ status: 'success', message: 'Log recorded' });
  } else {
    res.status(400).json({ status: 'error', message: 'Invalid log level' });
  }
});

// 启动服务器
app.listen(PORT, () => {
  logger.info(`Log service running on port ${PORT}`);
});
