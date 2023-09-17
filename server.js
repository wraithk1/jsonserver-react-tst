const json_server = require('json-server')
const auth = require('json-server-auth')
const router = json_server.router('db.json')
const middlewares = json_server.defaults({
  static: './build'
})

const app = json_server.create()
app.db = router.db

const rules = auth.rewriter({
  "/api/*": "/$1",
  "/contacts*": "/600/contacts$1"
})

app.use(middlewares)
app.use(rules)
app.use(auth)
app.use(router)

const port = 4000
app.listen(port, ()=> {
  console.log('JSON Server is running at :' + port)
})