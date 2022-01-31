import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

import { Transaction, TransactionType } from '../../models/transaction'

export function makeServer() {
  return createServer({
    models: {
      transaction: Model.extend<Partial<Transaction>>({}),
    },
    serializers: {
      application: ActiveModelSerializer,
    },
    factories: {
      transaction: Factory.extend({
        title() {
          return faker.commerce.product()
        },
        amount() {
          return parseFloat(faker.commerce.price(0.01, 100, 2))
        },
        type() {
          const possibleTypes = ['withdraw', 'deposit']
          const randomIndex = Math.floor(Math.random() * possibleTypes.length)

          return possibleTypes[randomIndex] as TransactionType
        },
        category() {
          return faker.commerce.department()
        },
        createdAt() {
          return faker.date.recent(10, new Date()).toString()
        },
      }),
    },
    seeds(server) {
      server.createList('transaction', 20)
    },
    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      // request.requestBody [string]
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        // schema = BD
        return schema.create('transaction', data)
      })
    },
  })
}
