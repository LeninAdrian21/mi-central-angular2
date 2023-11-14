import { gql } from "apollo-angular";

export const getData:any = {
  products: gql`
    query{
      products{
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
        carts{
          amount
        }
        dimension{
          name
        }
        lots{
          internal_code
        }
        promotions{
          creation_date
        }
        provider{
          name
        }
      }
    }
  `,
}
