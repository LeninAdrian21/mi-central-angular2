import { TableRelations } from "src/app/interfaces/tableRelations";
import { formDataRelations } from "./form";

export const tableRelations:TableRelations = {
  provider:{
    fields:{
      position:'No.',
      name:'Name Provider'
    },
    columns:['select','position','name'],
    nameTable:'providers',
    search:'name',
    title:'Provider',
    select:false,
    formInfo:formDataRelations.provider,
  },
  payment_method:{
    fields:{
      position:'No.',
      card_number:'Card Number',
    },
    columns:['select','position','card_number'],
    nameTable:'paymentMethods',
    search:'card_number',
    title:'Payment Method',
    select:false,
    formInfo:formDataRelations.payment_method
  },
  client:{
    fields:{
      position:'No.',
      name:'Name',
      last_name:'Last Name',
      middle_name:'Middle Name',
    },
    columns:['select','position','name','last_name','middle_name'],
    nameTable:'customUsers',
    search:'name',
    title:'Users',
    select:false,
    formInfo:formDataRelations.client
  }
}
