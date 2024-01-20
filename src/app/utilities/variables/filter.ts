import { Filter, OptionsFilter } from "../interface/filter";

let string:OptionsFilter[] = [
  {
    label: 'Igual',
    value: '==',
  },
  {
    label: 'Diferente',
    value: '!=',
  },
  {
    label:'Contenga',
    value:'contain',
  }
];
let boolean:OptionsFilter[]=[
  {
    label: 'Igual',
    value: '==',
  },
  {
    label: 'Diferente',
    value: '!=',
  },
];
let numberAndDate:any[]=[
  {
    label: 'Igual',
    value: '==',
  },
  {
    label: 'Diferente',
    value: '!=',
  },
  {
    label: 'Mayor',
    value: '>',
  },
  {
    label: 'Mayor e igual',
    value: '>=',
  },
  {
    label: 'Menor ',
    value: '<',
  },
  {
    label: 'Menor e igual',
    value: '<=',
  },
  {
    label: 'Rango',
    value: 'range',
  },
]
export const filter:Filter = {
  cart:{
    fields:[
      {label:'Amount', value:'amount'},
      {label:'Product Name', value:'products'},
      {label:'User Name', value:'custom_user'},
      {label:'Sale Amount', value:'sale'},
    ],
    operators:{
      amount: numberAndDate,
      products: string,
      custom_user: string,
      sale:numberAndDate
    }
  },
  credit:{
    fields:[
      {label:'Limit',value:'limit'},
      {label:'Start Date',value:'start_date'},
      {label:'End Date',value:'end_date'},
      {label:'Validity',value:'validity'},
      {label:'Interests',value:'interests'},
      {label:'Status',value:'status'},
      {label:'Payments Amount',value:'payments'},
      {label:'Payment Method Card Number',value:'payment_method'},
      {label:'User Name', value:'custom_user'},
    ],
    operators:{
      limit:numberAndDate,
      start_date: numberAndDate,
      end_date: numberAndDate,
      validity: numberAndDate,
      interests: numberAndDate,
      status: string,
      payments:numberAndDate,
      payment_method:numberAndDate,
      custom_user: string,
    }
  },
  dimension:{
    fields:[
      {label:'Name',value:'name'},
      {label:'Width',value:'width'},
      {label:'Height',value:'height' },
      {label:'Long',value:'long'},
      {label:'Products Name', value:'products'}
    ],
    operators:{
      name:string,
      width:numberAndDate,
      height:numberAndDate,
      long:numberAndDate,
      products:string
    },
  },
  egress:{
    fields:[
      {label:'Name Product',value:'name_product'},
      {label:'Quantity',value:'quantity'},
      {label:'Unit Price',value:'unit_price'},
      {label:'Total Egress',value:'total_egress'},
      {label:'Date',value:'date'},
      {label:'Provider Name',value:'provider'
      },
      {label:'Payment Method Card Number',value:'payment_method'}
    ],
    operators:{
      name_product:string,
      quantity:numberAndDate,
      unit_price:numberAndDate,
      total_egress:numberAndDate,
      date:numberAndDate,
      provider:string,
      payment_method:numberAndDate
    },
  },
  expense:{
    fields:[
      {label:'Description',value:'description'},
      {label:'Date',value:'date'},
      {label:'Amount',value:'amount'},
      {label:'Category',value:'category' },
      {label:'Status',value:'status'},
      {label:'Trucks Serial Number',value:'trucks'},
      {label:'User Name',value:'custom_user'}
    ],
    operators:{
      description:string,
      date:numberAndDate,
      amount:numberAndDate,
      category:string,
      status: string,
      trucks: numberAndDate,
      custom_user: string
    },
  },
  history:{
    fields: [
      { label: 'Date', value: 'date' },
      { label: 'Start Time', value: 'start_time' },
      { label: 'End Time', value: 'end_time' },
      { label: 'Status', value: 'status' },
      { label: 'User Name', value: 'custom_user' },
      { label: 'Truck Serial Number', value: 'truck' },
    ],
    operators: {
      date: numberAndDate,
      start_time: numberAndDate,
      end_time: numberAndDate,
      status: string,
      custom_user: string,
      truck: numberAndDate,
    },
  },
  income:{
    fields: [
      { label: 'Product Name', value: 'product' },
      { label: 'Quantity Sold', value: 'quantity_sold' },
      { label: 'Price', value: 'price' },
      { label: 'Total Income', value: 'total_income' },
      { label: 'Date', value: 'date' },
      { label: 'User Name', value: 'client' },
      { label: 'Payment Method Card Number', value: 'payment_method' },
    ],
    operators: {
      product: string,
      quantity_sold: numberAndDate,
      price: numberAndDate,
      total_income: numberAndDate,
      date: numberAndDate,
      client: string,
      payment_method: numberAndDate,
    },
  },
  lot:{
    fields: [
      { label: 'Internal Code', value: 'internal_code' },
      { label: 'Arrival Date', value: 'arrival_date' },
      { label: 'Expiration Date', value: 'expiration_date' },
      { label: 'Acquisition Date', value: 'acquisition_date' },
      { label: 'Cost', value: 'cost' },
      { label: 'Purchases Cost', value: 'purchases' },
      { label: 'Products Name', value: 'products' },
    ],
    operators: {
      internal_code:numberAndDate,
      arrival_date: numberAndDate,
      expiration_date: numberAndDate,
      acquisition_date: numberAndDate,
      cost: numberAndDate,
      purchases: numberAndDate,
      products: string,
    },
  },
  payment:{
    fields: [
      { label: 'Amount', value: 'amount' },
      { label: 'Date', value: 'date' },
      { label: 'Status', value: 'status' },
      { label: 'Credit Start Date', value: 'credit' },
      { label: 'User Name', value: 'custom_user' },
    ],
    operators: {
      amount:numberAndDate,
      date: numberAndDate,
      status: string,
      credit: numberAndDate,
      custom_user: string,
    },
  },
  payment_method:{
    fields: [
      { label: 'Card Number', value: 'card_number' },
      { label: 'Month', value: 'month' },
      { label: 'Year', value: 'year' },
      { label: 'CVC', value: 'cvc' },
      { label: 'Holder', value: 'holder' },
      { label: 'Folio', value: 'folio' },
      { label: 'Issue Date', value: 'issue_date' },
      { label: 'Entry Date', value: 'entry_date' },
      { label: 'Description', value: 'description' },
      { label: 'Reference', value: 'reference' },
      { label: 'Type', value: 'type' },
      { label: 'Credits Start Date', value: 'credits' },
      { label: 'Purchases Cost', value: 'purchases' },
      { label: 'User Name', value: 'custom_user' },
      { label: 'Sales Amount', value: 'sales' },
      { label: 'Egress Product Name', value: 'egress' },
      { label: 'Income Product', value: 'income' },
    ],
    operators: {
      card_number: numberAndDate,
      month: numberAndDate,
      year: numberAndDate,
      cvc: numberAndDate,
      holder: string,
      folio: string,
      issue_date: numberAndDate,
      entry_date: numberAndDate,
      description: string,
      reference: string,
      type: string,
      credits: numberAndDate,
      purchases: numberAndDate,
      custom_user: string,
      sales: numberAndDate,
      egress: string,
      income: string,
    },
  },
  premise:{
    fields: [
      { label: 'Name', value: 'name' },
      { label: 'Alias', value: 'alias' },
      { label: 'Business Name', value: 'business_name' },
      { label: 'RFC', value: 'rfc' },
      { label: 'Start Date', value: 'start_date' },
      { label: 'Street', value: 'street' },
      { label: 'Neighborhood', value: 'neighborhood' },
      { label: 'Exterior Number', value: 'exterior_number' },
      { label: 'Municipality', value: 'municipality' },
      { label: 'Interior Number', value: 'interior_number' },
      { label: 'City', value: 'city' },
      { label: 'Postal Code', value: 'postal_code' },
      { label: 'Latitude', value: 'latitude' },
      { label: 'Longitude', value: 'longitude' },
      { label: 'Phone', value: 'phone' },
      { label: 'Cell Phone', value: 'cell_phone' },
      { label: 'Business Type', value: 'business_type' },
      { label: 'Status', value: 'status' },
      { label: 'User Name', value: 'custom_users' },
      { label: 'Sales Amount', value: 'sales' },
    ],
    operators: {
      name: string,
      alias: string,
      business_name: string,
      rfc: string,
      start_date: numberAndDate,
      street: string,
      neighborhood: string,
      exterior_number: numberAndDate,
      municipality: string,
      interior_number: numberAndDate,
      city: string,
      postal_code: numberAndDate,
      latitude: numberAndDate,
      longitude: numberAndDate,
      phone: numberAndDate,
      cell_phone: numberAndDate,
      business_type: numberAndDate,
      status: string,
      custom_users: string,
      sales: numberAndDate,
    },
  },
  product:{
    fields: [
      { label: 'Name', value: 'name' },
      { label: 'Net Weight', value: 'net_weight' },
      { label: 'Presentation', value: 'presentation' },
      { label: 'Brand', value: 'brand' },
      { label: 'Generic Description', value: 'generic_description' },
      { label: 'Price', value: 'price' },
      { label: 'Cost', value: 'cost' },
      { label: 'Available Inventory', value: 'available_inventory' },
      { label: 'Min Value', value: 'min_value' },
      { label: 'Barcode', value: 'barcode' },
      { label: 'Internal Code', value: 'internal_code' },
      { label: 'Status', value: 'status' },
      { label: 'Unit of Measure', value: 'unit_of_measure' },
      { label: 'Measurement', value: 'measurement' },
      { label: 'Carts', value: 'carts' },
      { label: 'Dimension', value: 'dimension' },
      { label: 'Lots', value: 'lots' },
      { label: 'Promotions', value: 'promotions' },
      { label: 'Provider', value: 'provider' },
    ],
    operators: {
      name: string, // Valor inicial de operador vacío
      net_weight: numberAndDate, // Valor inicial de operador vacío
      presentation: string, // Valor inicial de operador vacío
      brand: string, // Valor inicial de operador vacío
      generic_description: string, // Valor inicial de operador vacío
      price: numberAndDate, // Valor inicial de operador vacío
      cost: numberAndDate, // Valor inicial de operador vacío
      available_inventory: numberAndDate, // Valor inicial de operador vacío
      min_value: numberAndDate, // Valor inicial de operador vacío
      barcode: numberAndDate, // Valor inicial de operador vacío
      internal_code: numberAndDate, // Valor inicial de operador vacío
      status: string, // Valor inicial de operador vacío
      unit_of_measure: string, // Valor inicial de operador vacío
      measurement: string, // Valor inicial de operador vacío
      carts: numberAndDate, // Valor inicial de operador vacío
      dimension: string, // Valor inicial de operador vacío
      lots: numberAndDate, // Valor inicial de operador vacío
      promotions: numberAndDate, // Valor inicial de operador vacío
      provider: string, // Valor inicial de operador vacío
    },
  },
  promotion:{
    fields:[],
    operators:{},
  },
  provider:{
    fields:[],
    operators:{},
  },
  purchase:{
    fields:[],
    operators:{},
  },
  role:{
    fields:[],
    operators:{},
  },
  route:{
    fields:[],
    operators:{},
  },
  sale:{
    fields:[],
    operators:{},
  },
  seller:{
    fields:[],
    operators:{},
  },
  truck:{
    fields:[],
    operators:{},
  },
  user:{
    fields:[],
    operators:{},
  },
}
