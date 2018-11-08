const http = require('http')
const exec = require('child_process').exec

http
  .createServer((_, res) => {
    exec('./live', (_, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data.replace('Content-type: text/html', ''))
      return res.end()
    })
  })
  .listen(80)
