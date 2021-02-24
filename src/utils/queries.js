import gql from 'graphql-tag';

export const FETCH_CATEGORIES = gql`
query{
    fetchCategories{
      name
      id
    }
  }
`

export const FETCH_PRODUCTS = gql`
query{
    fetchProducts{
      name
      id
      description
      images
      sizes
      price
    }
  }
`
export const FETCH_PRODUCT = gql`
query fetchProduct($id: String!){
    fetchProduct(id: $id){
      name
      id
      description
      images
      sizes
      price
    }
  }
`

export const FILTER_BY_CATEGORY = gql`
mutation filterByCategory($categoryId: ID!){
    filterByCategory(categoryId: $categoryId){
      name
      id
      description
      images
      sizes
      price
    }
  }
`

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    token
  }
}
`;

export const REGISTER_USER = gql`
mutation register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    id
    email
    token
  }
}
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $cartId: String! 
    $productId: String!, 
    $size: String!, 
    $quantity: Int!)
  {
  addProduct(
    cartId: $cartId, 
    productId: $productId, 
    size: $size, 
    quantity: $quantity){
    id
    products {
      id
      name
      description
      images
      sizes 
      price
      size
      quantity
    }
  }
}
`