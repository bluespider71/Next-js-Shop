const data = {
  "id": 1,
  "name": "Adidas Shoes",
  "description": "Men Black top sleeveless gown",

  "price": 99.99,
  "offerPrice": 45.00,
  "quantity": 320,
  "variants": [
    {
      "name": "black",
      "sku": "black",
      "pictures": [
        "/assets/images/products/p-10.png",
        "/assets/images/products/p-10-side.png"
      ],
      "sizes": [
        { "size": "S", "stock": 2 },
        { "size": "M", "stock": 7 },
        { "size": "L", "stock": 5 },
        { "size": "X-L", "stock": 1 }
      ]
    },
    {
      "name": "green",
      "sku": "green",
      "pictures": [
        "/assets/images/products/p-3.png",
        "/assets/images/products/p-3-side.png"
      ],
      "sizes": [
        { "size": "S", "stock": 2 },
        { "size": "M", "stock": 7 },
        { "size": "L", "stock": 5 }
       
      ]
    }
  ],
  "status": "true",

  "wholesale1": 1,
  "wholesale2": 2,
  "retailPrice1": 3,
  "retailPrice2": 4,
  "createdAt": "21/10/2021",
  "updateAt": "21/10/2021"
};


 const newData = JSON.parse(JSON.stringify(data));
 
 export default newData;