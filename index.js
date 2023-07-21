const jsonServer = require("json-server"); //json-server libary
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewers = jsonServer.defaults();
const port = process.env.PORT || 3001;


server.use(middlewers);
server.use(router);

server.listen(port)