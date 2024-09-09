// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// 定义日志输出格式
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// 创建 logger
const logger = createLogger({
  format: combine(
    timestamp(), // 添加时间戳
    logFormat    // 使用自定义的日志格式
  ),
  transports: [
    new transports.Console(), // 输出到控制台
    new transports.File({ filename: 'logs/error.log', level: 'error' }),  // 错误日志
    new transports.File({ filename: 'logs/combined.log' })  // 所有日志
  ]
});

module.exports = logger;
