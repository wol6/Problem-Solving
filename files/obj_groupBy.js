const inventory = [
  { name: "Asparagus", type: "vegetables" },
  { name: "Bananas", type: "fruit" },
  { name: "Goat Cheese", type: "dairy" },
  { name: "Cherries", type: "fruit" }
]

const result = Object.groupBy(inventory,(item)=>item.type)
console.log(result)

