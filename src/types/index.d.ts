export interface StateShape {
  people: Person[]
  bill: Bill
  serviceCharge: ServiceCharge
}

export interface Bill {
  items: BillItem[]
}

export interface Person {
  id: string
  name: string
}

export interface BillItem {
  id: string
  name: string
  price: number
  personId: string
}

export type ServiceCharge = number
