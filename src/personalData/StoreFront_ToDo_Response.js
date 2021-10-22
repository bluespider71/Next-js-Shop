/*Attached Graphql query request and response:

getAllProducts(
    limit: Int
    offset: Int
): ProductPagination

type ProductPagination {
    totalDocs: Int
    limit: Int
    totalPages: Int
    page: Int
    pagingCounter: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
    hasMore: Int
    docs: [Product]
}

type Product {
    id: ID!
    name: String!
    description: String!
    categoryIds: [Category]
    subCategoryIds: [SubCategory]
    subSubCategoryIds: [SubSubCategory]
    price: Float!
    offerPrice: Int
    ownerId: ID
    ratings: Float
    totalViews: Int
    status: Boolean!
    variants: [Variant]
    wholesale1: Int!
    wholesale2: Int!
    retailPrice1: Float!
    retailPrice2: Float!
    createdAt: Date!
    updateAt: Date!
}

type Variant {
    name: String
    sku: String
    pictures: [String]
    sizes: [Size]
}

type Size {
    size: String
    stock: Int
}

type Category {
    id: ID!
    name: String!
    slug: String!
    image: String
    icon: String
    subCategoryId: [SubCategory]
    products: [Product]
    status: String
    createdAt: String
    updateAt: String
}

type SubCategory {
    id: ID!
    name: String!
    subSubCategoryId: [SubSubCategory]
    products: [Product]
    createdAt: String
    updateAt: String
}

type SubSubCategory {
    id: ID!
    name: String!
    products: [Product]
    createdAt: Date
}

*/
