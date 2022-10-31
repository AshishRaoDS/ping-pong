const app = require('./api')
const sockets = require('./sockets')
const server = require('http').createServer(app)
const io = require("socket.io")(server, {
    allowEIO3: true,
    cors: {
        origin: true,
        credentials: true,
        methods: ['GET', 'POST']
    }
})

const PORT = 3000

server.listen(PORT)
console.log(`Listening to port ${PORT}`)

sockets.listen(io)