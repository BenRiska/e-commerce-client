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
