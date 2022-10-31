let playersReady = 0

function listen(io) {
    io.on('connection', (socket) => {
        let room;

        socket.on('ready', () => {
            room = 'room' + Math.floor(playersReady/2)
            socket.join(room)
            console.log('Player ready', socket.id, room)
            playersReady++;
            if(playersReady % 2 === 0) {
                io.in(room).emit('startGame', socket.id)
            }
        })
    
        socket.on('paddleMove', (paddlePosition) => {
            socket.to(room).emit('paddleMove', paddlePosition)
        })
    
        socket.on('ballMove', (ballPosition) => {
            socket.to(room).emit('ballMove', ballPosition)
        })

        socket.on('disconnect', (reason) => {
            console.log(`Client ${socket.id} disconnected: ${reason}`)
        })
    })
}

module.exports = {
    listen
}