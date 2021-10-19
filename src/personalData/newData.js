const data =  {
    "id": 1,
    "name": "Adidas Shoes Black",
    "description": "Men Black top sleeveless gown",
    "slug": "adidas-shoes-black",
    "image": {
        "id": 1,
        "thumbnail": "/assets/images/products/p-26-md.png",
        "original": "/assets/images/products/p-26-m.png"
    },
    "gallery": [{
            "id": 1,
            "thumbnail": "/assets/images/products/p-26-1.png",
            "original": "/assets/images/products/p-26-1.png"
        }, {
            "id": 2,
            "thumbnail": "/assets/images/products/p-26-2.png",
            "original": "/assets/images/products/p-26-2.png"
        }
    ],
    "price": 99.99,
    "sale_price": 45.00,
    "quantity": 320,
    "sold": 180,
    "variations": [{
            "id": 1,
            "value": "S",
            "attribute": {
                "id": 1,
                "name": "Size",
                "slug": "size"
            }
        }, {
            "id": 2,
            "value": "M",
            "attribute": {
                "id": 1,
                "name": "Size",
                "slug": "size"
            }
        }, {
            "id": 3,
            "value": "L",
            "attribute": {
                "id": 1,
                "name": "Size",
                "slug": "size"
            }
        }, {
            "id": 4,
            "value": "XL",
            "attribute": {
                "id": 1,
                "name": "Size",
                "slug": "size"
            }
        }, {
            "id": 5,
            "value": "Orange",
            "meta": "#e86c25",
            "attribute": {
                "id": 1,
                "name": "Color",
                "slug": "color"
            }
        }, {
            "id": 6,
            "value": "Pink",
            "meta": "#ffa5b4",
            "attribute": {
                "id": 1,
                "name": "Color",
                "slug": "color"
            }
        }, {
            "id": 7,
            "value": "Purple",
            "meta": "#8224e3",
            "attribute": {
                "id": 1,
                "name": "Color",
                "slug": "color"
            }
        }, {
            "id": 8,
            "value": "Red",
            "meta": "#dd3333",
            "attribute": {
                "id": 1,
                "name": "Color",
                "slug": "color"
            }
        }
    ]
};

 const newData = JSON.parse(data);
 
 export default newData;