# test Demos

info:
```sh
curl -X POST http://localhost:3018/log -H "Content-Type: application/json" -d '{"level": "info", "message": "This is an info log message"}'
```

error:
```sh
curl -X POST http://localhost:3000/log -H "Content-Type: application/json" -d '{"level": "error", "message": "This is an error log message"}'
```