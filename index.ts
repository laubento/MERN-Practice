import dotenv from 'dotenv'
import server from './src/server/index'
import { LogSuccess } from './src/utils/logger'

// Configuration the .env file
dotenv.config()

const port = process.env.PORT || 8000

// Execute server
server.listen(port, () => {
    LogSuccess('Server on" Running')
})

server.on('error', (error) => {
    LogSuccess('Server error" ' + error)
})