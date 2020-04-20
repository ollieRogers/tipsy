import { formatCurrency } from './formatCurrency'

describe('formatCurrency',()=>{
  it('correctly formats numbers to currency strings',()=>{
    expect(formatCurrency(1)).toEqual('1.00')
    expect(formatCurrency(12.1)).toEqual('12.10')
    expect(formatCurrency(12.11)).toEqual('12.11')
  })
})
