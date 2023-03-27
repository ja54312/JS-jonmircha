const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

const totales = orders.map(order => order.total)

console.log(totales) // [ 60, 120, 180, 240 ]

// Ejemplo donde transformas los objetos originales
const tarifas = orders.map(order => {
    order.tax = 0.19
    return order
})

tarifas[0] === orders[0] // true
tarifas[1] === orders[1] // true

// Ejemplo donde no transformas los objetos originales
const tarifas2 = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

tarifas2[0] === orders[0] // false
tarifas2[1] === orders[1] // false