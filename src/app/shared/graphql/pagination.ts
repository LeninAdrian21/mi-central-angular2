import { gql } from "apollo-angular";

export const Pagination:any = {
  paginationDataEgress: gql`
  query paginationDataEgress(
    $start: Int
    $limit: Int
    $filters: [FilterEgressField]
  ){
    paginationDataEgress(start: $start, limit: $limit, filters: $filters){
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges{
        node{
          id
          name_product
          quantity
          unit_price
          total_egress
          date
          provider{
            id
            name
          }
          payment_method{
            id
            card_number
          }
        }
      }
    }
  }`,
  paginationDataIncome: gql`
  query paginationDataIncome(
    $start: Int
    $limit: Int
    $filters: [FilterIncomeField]
  ){
    paginationDataIncome(start: $start, limit: $limit, filters: $filters){
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges{
        node{
          id
          product
          quantity_sold
          price
          total_income
          date
          client{
            id
            name
            last_name
            middle_name
          }
          payment_method{
            id
          	card_number
          }
        }
      }
    }
  }`,
  paginationDataProduct: gql`
  query paginationDataProduct(
    $start: Int
    $limit: Int
    $filters: [FilterProductField]
  ){
    paginationDataProduct(start: $start, limit: $limit, filters: $filters){
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges{
        node{
          id
          name
          net_weight
          presentation
          brand
          generic_description
          price
          cost
          available_inventory
          min_value
          barcode
          internal_code
          status
          unit_of_measure
          measurement
          dimension{
            id
            name
          }
          provider{
            id
            name
          }
          carts{
            id
            amount
          }
          lots{
            id
            internal_code
          }
        }
      }
    }
  }`,
}
