import gql from 'graphql-tag';

export const FETCH_CATEGORIES = gql`
query{
    fetchCategories{
      name
      id
    }
  }
`