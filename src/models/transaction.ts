export type TransactionType = 'withdraw' | 'deposit'

export interface Transaction {
  id: number
  title: string
  amount: number
  type: TransactionType
  category: string
  created_at: string
}
