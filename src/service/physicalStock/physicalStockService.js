export default async function getPhysicalStock(reference) {
  const physicalStock = [
    {
      reference: '0558426180002-V2024',
      stock: 10
    },
    {
      reference: '0558436180003-V2024',
      stock: 5
    },
    {
      reference: '0558436180004-V2024',
      stock: 1
    },
    {
      reference: '0558436180005-V2024',
      stock: 4
    },
    {
      reference: '0558436140102-V2024',
      stock: 14
    },
    {
      reference: '0558426140103-V2024',
      stock: 3
    },
    {
      reference: '0558436152703-V2024',
      stock: 7
    },
    {
      reference: '0558436152704-V2024',
      stock: 18
    },
  ]
console.log(reference)
  const availabilityStock = physicalStock.find(stock => stock.reference === reference)

  return availabilityStock?.stock ?? 0
}