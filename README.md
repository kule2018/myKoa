# myKoa

## start

```
npm i
npm run watch
```

## test

- curl -v http://localhost:9050/user
- curl -v http://localhost:9050/user?userId=1
- curl -v http://localhost:9050/user -d "userId=test&userName=test&avatar=test&score=0"
- curl -v -X DELETE http://localhost:9050/user?userId=test
