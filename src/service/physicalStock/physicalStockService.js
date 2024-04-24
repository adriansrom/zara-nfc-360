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
    {
      reference: '0678642040136-V2024',
      stock: 4
    },
    {
      reference: '0678632040138-V2024',
      stock: 18
    },
    {
      reference: '0678642040144-V2024',
      stock: 4
    },
    {
      reference: '0678632080038-V2024',
      stock: 3
    },
    {
      reference: '0678632080040-V2024',
      stock: 6
    },
    {
      reference: '0678632080042-V2024',
      stock: 7
    },
    {
      reference: '0678632080044-V2024',
      stock: 1
    },
    {
      reference: '0678632080740-V2024',
      stock: 7
    },
    {
      reference: '0193433071038-V2024',
      stock: 9
    },
    {
      reference: '0193433071044-V2024',
      stock: 4
    },
    {
      reference: '0193443071048-V2024',
      stock: 1
    },
    {
      reference: '0104415780003-V2024',
      stock: 1
    },
    {
      reference: '0104415780004-V2024',
      stock: 5
    },
    {
      reference: '0104415780004-V2024',
      stock: 9
    },
    {
      reference: '0104415725002-V2024',
      stock: 4
    },
    {
      reference: '0104415725004-V2024',
      stock: 8
    },
    {
      reference: '0104415780002-V2024',
      stock: 3
    },
    {
      reference: '0104415771102-V2024',
      stock: 3
    },
    {
      reference: '0104415771103-V2024',
      stock: 6
    },
    {
      reference: '0104415771104-V2024',
      stock: 1
    },
  ]
console.log(reference)
  const availabilityStock = physicalStock.find(stock => stock.reference === reference)

  return availabilityStock?.stock ?? 0
}