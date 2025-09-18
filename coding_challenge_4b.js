

let products = [
    { sku: "E-120", name:"TV", category:"Electronics", price: 120.78, inventory: 22 },
    { sku: "E-130", name:"Rake", category:"Tools", price: 20.78, inventory: 29 },
    { sku: "E-140", name:"Shirt", category:"Clothing", price: 12.78, inventory: 40 },
    { sku: "E-150", name:"Football", category:"Sports", price: 10.78, inventory: 24 },
    { sku: "E-160", name:"Cleats", category:"Footwear", price: 520.88, inventory: 10 },
    
 
]


for (let product of products) {
    let discount = 0;
switch (product.category) {
    case "Electronics":
    discount = .2
    break;
    case "Tools":
    discount = .15
    break;
    case "clothing":
    case "Footwear":
    discount = .1
    break;


}
    let promoprice = product.price * (1-discount); 
     product.promoprice = promoprice;
}
console.log (products)




