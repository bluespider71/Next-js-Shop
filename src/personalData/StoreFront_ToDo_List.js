/*
---------------------------------------------------------
| Important!* Using the implemented REST fetch approach |
---------------------------------------------------------

#1) Refactor and update the Product DataType at "src/framework/basic-rest/types.ts" file 
   taking into account to the attached graphql query and its corresponding response.

2) Update and refactor the required product properties of the fake data files 
   at "public/api" json files according to the product properties that the graphql 
   response is actually bringing.
   -----------
   | Example |
   -------------------------------------------------------------------------------------------------------------------------------------------------------------
   | OldFakeProduct{                                                                                                                                           |
   |     name: "prod1",                                                                                                                                        |
   |     price: 12.5,                                                                                                                                          |
   |     sale_price: 11.5,                                                                                                                                     |
   |     sku: "asdc_53",                                                                                                                                       |
   |     image: [{id: 5, thumbnail: "xxxxxx", original: "xxxxxx"}, ....],                                                                                      |
   |     variations: [{id: 2, value: "", attribute: {id: 3, name: "xxxxxx", slug: "xxxxxx"}}, ....],                                                           |
   |     ...,                                                                                                                                                  |
   |     ...,                                                                                                                                                  |
   |     ...,                                                                                                                                                  |
   | }                                                                                                                                                         |
   | UpdatedProduct{                                                                                                                                           |
   |     name: "prod1",                                                                                                                                        |
   |     price: 12.5,                                                                                                                                          |
   |     offertPrice: 11.5,                                                                                                                                    |
   |     image: ["https://xxxxxx", "https://xxxxxx", ....],                                                                                                    |
   |     variant: [ {name: "xxxxxx", sku: "xxxxxx", pictures: ["https://xxxxxx", "https://xxxxxx", ....], sizes: [{size: "Small", stock: 3}, ....]}, ....],    |
   |     ....,                                                                                                                                                 |
   |     ....,                                                                                                                                                 |
   |     ....,                                                                                                                                                 |
   | }                                                                                                                                                         |
   -------------------------------------------------------------------------------------------------------------------------------------------------------------
3) Update all the product property names in all pages and components according to 
   the product properties that the graphql response is actually bringing.

4) Based on the following example: 
   https://www.amazon.com/-/es/Legendary-Whitetails-Camisa-franela-hombre/dp/B0846PX2D5/ref=sr_1_2?dchild=1&qid=1632593871&rnid=1040658&s=fashion-mens-intl-ship&sr=1-2&th=1
   Update the product view, to follow the same UI showed by the variants at the provided example, 
   using the fake products data updated in previous steps.

Take Into Account:
    * Each product has at least one variant.
    * A product is defined by its variants. All variants share the 
      product common properties as: name, price, offertPrice, etc. 
    * The main product that should appear in the list of products 
      is the first variant. The rest of variants can only be accessed 
      entering into the product and selecting the variant.
    * It might be required to refactor several components because the 
      product is the center of all the shop. Then, take care while 
      doing the refactor and update. If it is required, create 
      several git LOCAL branches as required, but just upload the branches 
      strictly required to be stored in the history of the respository
      for future revisions.
    * The amazon provided url example is just to take into account 
      about how the UI just for the variants, should look like after
      the update and refactoring.
    * Try to complete each task following the given order, in order to 
      facilitate the job and avoid less errors. Update the existing 
      property names by the new ones could be a good point of start.
      


#1) Remove the "brand" product property if exists
2) Remove brands component
3) Remove brand filter if exists
#4) the backend response send a property named "folder" for the categories object. This is property do not exist anymore
---------------------------------------------------------------
| Important!* In case you require some acclarations send me a |
| message to whatsapp and I'll reply you as soon as posible   |
---------------------------------------------------------------


*/