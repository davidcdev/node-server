import http from 'http'

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify([
      { id: 1, description: 'Learn Node.js', completed: false },
      { id: 2, description: 'Learn Express', completed: false },
      { id: 3, description: 'Learn MongoDB', completed: false },
    ])
  )
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
