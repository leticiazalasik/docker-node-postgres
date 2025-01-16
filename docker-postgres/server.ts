import fastfy from 'fastify'

const app = fastfy()

app.get('/hello', () => {
    return 'Hello NLW'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})