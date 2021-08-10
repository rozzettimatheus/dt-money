import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    // cria valores iniciais ficticios
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 2000,
          createdAt: new Date('2021-03-10 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    // retorna um string em request.requestBody
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // schema = BD
      return schema.create('transaction', data)
    })

    this.put('/transactions/:id', (schema, request) => {
      const { id } = request.params

      return this.schema.db.transactions.update(id, { id, title: 'teste' })
    })
  },
})
