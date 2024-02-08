import { gql } from "apollo-angular";
import { Filter, OptionsFilter, Query } from "../interface/filter";


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
    fields: [
      { label: 'Creation Date', value: 'creation_date' },
      { label: 'Expiration Date', value: 'expiration_date' },
      { label: 'Discount Value', value: 'discount_value' },
      { label: 'Reference Code', value: 'reference_code' },
      { label: 'Condition', value: 'condition' },
      { label: 'Product Name', value: 'products' },
    ],
    operators: {
      creation_date: numberAndDate,
      expiration_date: numberAndDate,
      discount_value: numberAndDate,
      reference_code: numberAndDate,
      condition: string,
      products: string,
    },
  },
  provider:{
    fields: [
      { label: 'Name', value: 'name' },
      { label: 'Business Name', value: 'business_name' },
      { label: 'RFC', value: 'rfc' },
      { label: 'Registration Date', value: 'registration_date' },
      { label: 'Street', value: 'street' },
      { label: 'Number', value: 'number' },
      { label: 'Neighborhood', value: 'neighborhood' },
      { label: 'Postal Code', value: 'postal_code' },
      { label: 'Municipality', value: 'municipality' },
      { label: 'City', value: 'city' },
      { label: 'Country', value: 'country' },
      { label: 'Scheduled Visit', value: 'scheduled_visit' },
      { label: 'Status', value: 'status' },
      { label: 'Products Name', value: 'products' },
      { label: 'Purchases Cost', value: 'purchases' },
      { label: 'Egresses Name Product', value: 'egresses' },
    ],
    operators: {
      name: string,
      business_name: string,
      rfc: string,
      registration_date: numberAndDate,
      street: string,
      number: numberAndDate,
      neighborhood: string,
      postal_code: numberAndDate,
      municipality: string,
      city: string,
      country: string,
      scheduled_visit: numberAndDate,
      status: string,
      products: string,
      purchases: numberAndDate,
      egresses: string,
    },
  },
  purchase:{
    fields: [
      { label: 'Cost', value: 'cost' },
      { label: 'Order Date', value: 'order_date' },
      { label: 'Reference', value: 'reference' },
      { label: 'Arrival Date', value: 'arrival_date' },
      { label: 'Status', value: 'status' },
      { label: 'Lot', value: 'lot' },
      { label: 'Payment Method Card Number', value: 'payment_method' },
      { label: 'Provider Name', value: 'provider' },
      { label: 'Users Name', value: 'custom_users' },
    ],
    operators: {
      cost: numberAndDate,
      order_date: numberAndDate,
      reference: string,
      arrival_date: numberAndDate,
      status: string,
      lot: numberAndDate,
      payment_method: numberAndDate,
      provider: string,
      custom_users: string,
    },
  },
  role:{
    fields: [
      { label: 'Role', value: 'role' },
      { label: 'Users', value: 'users' },
    ],
    operators: {
      role: string,
      users: string,
    },
  },
  route:{
    fields: [
      { label: 'Description', value: 'description' },
      { label: 'Origin', value: 'origin' },
      { label: 'Destination', value: 'destination' },
      { label: 'Departure Date', value: 'departure_date' },
      { label: 'Arrival Date', value: 'arrival_date' },
      { label: 'Reference', value: 'reference' },
      { label: 'Received Goods Name', value: 'received_goods_name' },
      { label: 'Comments', value: 'comments' },
      { label: 'Status', value: 'status' },
      { label: 'Cyclic Route', value: 'cyclic_route' },
      { label: 'Trucks Serial Number', value: 'trucks' },
      { label: 'Sales Amount', value: 'sales' },
    ],
    operators: {
      description: string,
      origin: string,
      destination: string,
      departure_date: numberAndDate,
      arrival_date: numberAndDate,
      reference: string,
      received_goods_name: string,
      comments: string,
      status: string,
      cyclic_route: boolean,
      trucks: numberAndDate,
      sales: numberAndDate,
    },
  },
  sale:{
    fields: [
      { label: 'Amount', value: 'amount' },
      { label: 'Total Amount', value: 'total_amount' },
      { label: 'Date', value: 'date' },
      { label: 'Invoice', value: 'invoice' },
      { label: 'Classification', value: 'classification' },
      { label: 'Delivery Date', value: 'delivery_date' },
      { label: 'Pending Delivery', value: 'pending_delivery' },
      { label: 'Paid', value: 'paid' },
      { label: 'Status', value: 'status' },
      { label: 'Carts Amount', value: 'carts' },
      { label: 'Premise Name', value: 'premise' },
      { label: 'Payment Methods Card Number', value: 'payment_methods' },
      { label: 'Routes Description', value: 'routes' },
      { label: 'User Name', value: 'custom_user' },
      { label: 'Sellers Name', value: 'sellers' },
    ],
    operators: {
      amount: numberAndDate,
      total_amount: numberAndDate,
      date: numberAndDate,
      // invoice: '',
      classification:string,
      delivery_date: numberAndDate,
      pending_delivery: boolean,
      paid: boolean,
      status: string,
      carts: numberAndDate,
      premise: string,
      payment_methods: numberAndDate,
      routes: string,
      custom_user: string,
      sellers: string,
    },
  },
  seller:{
    fields: [
      { label: 'Name', value: 'name' },
      { label: 'Sales', value: 'sales' },
    ],
    operators: {
      name: string,
      sales: numberAndDate,
    },
  },
  truck:{
    fields: [
      // { label: 'Plate Details', value: 'plate_details' },
      { label: 'Serial Number', value: 'serial_number' },
      { label: 'VIN', value: 'vin' },
      { label: 'Expenses', value: 'expenses' },
      { label: 'Histories', value: 'histories' },
      { label: 'Routes Description', value: 'routes' },
      { label: 'User Name', value: 'custom_user' },
    ],
    operators: {
      // plate_details: '',
      serial_number: numberAndDate,
      vin: numberAndDate,
      expenses: string,
      histories: numberAndDate,
      routes: string,
      custom_user: string,
    },
  },
  user:{
    fields: [
      { label: 'Name', value: 'name' },
      { label: 'Last Name', value: 'last_name' },
      { label: 'Middle Name', value: 'middle_name' },
      { label: 'Birthdate', value: 'birthdate' },
      { label: 'Gender', value: 'gender' },
      { label: 'Registration Date', value: 'registration_date' },
      { label: 'Activation Date', value: 'activation_date' },
      { label: 'RFC', value: 'rfc' },
      { label: 'CURP', value: 'curp' },
      { label: 'NSS', value: 'nss' },
      { label: 'Cell Phone', value: 'cell_phone' },
      { label: 'Email', value: 'email' },
      { label: 'Password', value: 'password' },
      { label: 'Blood Type', value: 'blood_type' },
      { label: 'License', value: 'license' },
      { label: 'Allergies', value: 'allergies' },
      { label: 'Ailments', value: 'ailments' },
      { label: 'Nationality', value: 'nationality' },
      { label: 'Street', value: 'street' },
      { label: 'Number', value: 'number' },
      { label: 'Neighborhood', value: 'neighborhood' },
      { label: 'Postal Code', value: 'postal_code' },
      { label: 'Municipality', value: 'municipality' },
      { label: 'City', value: 'city' },
      { label: 'Country', value: 'country' },
      { label: 'Address Reference', value: 'address_reference' },
      { label: 'Comment', value: 'comment' },
      { label: 'Last Logging', value: 'last_loggin' },
      { label: 'Status', value: 'status' },
      { label: 'Confirmation', value: 'confirmation' },
      { label: 'Role', value: 'role' },
      { label: 'Payments', value: 'payments' },
      { label: 'Carts', value: 'carts' },
      { label: 'Credits', value: 'credits' },
      { label: 'Expenses', value: 'expenses' },
      { label: 'Histories', value: 'histories' },
      { label: 'Premises', value: 'premises' },
      { label: 'Payment Methods', value: 'payment_methods' },
      { label: 'Purchases', value: 'purchases' },
      { label: 'Sales', value: 'sales' },
      { label: 'Trucks', value: 'trucks' },
      { label: 'Income', value: 'income' },
    ],
    operators: {
      name: string,
      last_name: string,
      middle_name: string,
      birthdate: numberAndDate,
      gender: string,
      registration_date:numberAndDate ,
      activation_date: numberAndDate,
      rfc: string,
      curp: string,
      nss: string,
      cell_phone: numberAndDate,
      email: string,
      // password: string,
      blood_type: string,
      license: string,
      allergies: string,
      ailments: string,
      nationality: string,
      street: string,
      number: numberAndDate,
      neighborhood: string,
      postal_code: numberAndDate,
      municipality: string,
      city: string,
      country: string,
      address_reference: string,
      comment: string,
      // last_loggin: numberAndDate,
      status: string,
      // confirmation: boolean,
      role: string,
      payments: numberAndDate,
      carts: numberAndDate,
      credits: numberAndDate,
      expenses: string,
      histories: numberAndDate,
      premises: string,
      payment_methods: numberAndDate,
      purchases: numberAndDate,
      sales: numberAndDate,
      trucks: numberAndDate,
      income: string,
    },
  },
}
export const query: Query  ={
  cart:gql`
  query {
    carts{
      id
      amount
      products{
        id
        name
      }
      sale{
        id
        amount
      }
    }
  }
  `,
  credit: gql`
  query {
    credit{
      limit
      start_date
      end_date
      validity
      interests
      status
      payments{
        id
        amount
      }
      payment_method{
        id
        card_number
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  dimension: gql`
  query {
    dimension{
      name
      width
      height
      long
      products{
        id
        name
      }
    }
  }`,
  egress: gql`
  query{
    egres{
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
  `,
  expense: gql`
  query{
    expense{
      description
      date
      amount
      category
      status
      trucks{
        id
        serial_number
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  history: gql`
  query{
    history{
      date
      start_time
      end_time
      status
      custom_user{
        name
        last_name
        middle_name
      }
      truck{
        id
        serial_number
      }
    }
  }`,
  income: gql`
  query{
    income{
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
  `,
  lot: gql`
  query{
    lot{
      internal_code
      arrival_date
      expiration_date
      acquisition_date
      cost
      purchases{
        id
        cost
      }
      products{
        id
        name
      }
    }
  }
  `,
  payment: gql`
  query{
    payment{
      amount
      date
      status
      credit{
        id
        start_date
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  payment_method: gql`
  query{
    payment_method{
      card_number
      month
      year
      cvc
      holder
      folio
      issue_date
      entry_date
      description
      referense
      type
      credits{
        id
        start_date
      }
      purchases{
        id
        cost
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
      sales{
        id
        amount
      }
      egress{
        id
        name_product
      }
      income{
        id
        product
      }
    }
  }
  `,
  premise: gql`
  query{
    premise{
      name
      alias
      business_name
      rfc
      start_date
      street
      neigthborhood
      exterior_number
      municipality
      interior_number
      city
      postal_code
      latitude
      longitude
      phone
      cell_phone
      business_type
      status
      accounts
      custom_users{
        id
        name
        last_name
        middle_name
      }
      sales{
        id
        amount
      }
    }
  }
  `,
  product: gql`
  query{
    product{
      name
      net_weight
      presentation
      brand
      generic_description
      price
      cost
      available_inventory
      min_value
      bardcode
      internal_code
      status
      unt_of_measure
      measurement
      carts{
        id
        amount
      }
      dimension{
        id
        name
      }
      lots{
        id
        internal_code
      }
      promotions{
        id
        creation_date
      }
      provider{
        id
        name
      }
    }
  }
  `,
  promotion: gql`
  query{
    promotion{
      creation_date
      expiration_date
      discount_value
      reference_date
      condition
      products{
        id
        name
      }
    }
  }
  `,
  provider: gql`
  query{
    provider{
      name
      business_name
      rfc
      registration_date
      street
      number
      neighbourhood
      postal_code
      municipality
      city
      country
      scheduled_visit
      status
      products{
        id
        name
      }
      purchases{
        id
        cost
      }
      egresses{
        id
        name_product
      }
    }
  }
  `,
  purchase: gql`
  query{
    purchase{
      cost
      order_date
      reference
      arrival_date
      status
      lot{
        id
        internal_code
      }
      payment_method{
        id
        card_number
      }
      provider{
        id
        name
      }
      custom_users{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  role: gql`
  query{
    role{
      role
      users{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  route: gql`
  query{
    route{
      description
      origin
      destination
      departure_date
      arrival_date
      reference
      received_goods_name
      comments
      status
      cyclic_route
      trucks{
        id
        serial_number
      }
      sales{
        id
        amount
      }
    }
  }
  `,
  sale: gql`
  query{
    sale{
      amount
      total_amount
      date
      invoice
      classification
      delivery_date
      pending_delivery
      paid
      status
      carts{
        id
        amount
      }
      premise{
        id
        name
      }
      payment_methods{
        id
        card_number
      }
      routes{
        id
        description
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
      sellers{
        id
        name
      }
    }
  }
  `,
  seller: gql`
  query{
    seller{
      name
      sales{
        id
        name
      }
    }
  }
  `,
  truck: gql`
  query{
    truck{
      plate_details
      serial_number
      vin
      expenses{
        id
        description
      }
      histories{
        id
        date
      }
      routes{
        id
        description
      }
      custom_user{
        id
        name
        last_name
        middle_name
      }
    }
  }
  `,
  user: gql`
  query{
    user{
      name
      last_name
      middle_name
      birthdate
      gender
      registration_date
      activation_date
      rfc
      curp
      nss
      cell_phone
      email
      blood_type
      license
      allergies
      ailments
      nationality
      street
      number
      neighborhood
      postal_code
      munipality
      city
      country
      address_reference
      comment
      last_loggin
      status
      confirmation
      role{
        id
        role
      }
      payments{
        id
        amount
      }
      carts{
        id
        amount
      }
      credist{
        id
        start_date
      }
      expenses{
        id
        description
      }
      histories{
        id
        date
      }
      premises{
        id
        name
      }
      payment_methods{
        id
        card_number
      }
      purchases{
        id
        cost
      }
      sales{
        id
        amount
      }
      trucks{
        id
        serial_number
      }
      income{
        id
        product
      }
    }
  }
  `,
}
