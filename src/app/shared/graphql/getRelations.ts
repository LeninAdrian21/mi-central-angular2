import { gql } from "apollo-angular";

export const getRelations:any = {
  providers: gql`
    query{
      providers{
        id
        name
      }
    }
  `,
  paymentMethods:gql`
    query{
      paymentMethods{
        id
        card_number
      }
    }
  `,
  customUsers:gql`
    query{
      customUsers{
        id
        name
        last_name
        middle_name
      }
    }
  `,
}
