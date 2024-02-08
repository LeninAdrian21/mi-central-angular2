import { gql } from "apollo-angular";
import { Query, Table } from "../interface/list";
/**
 * cart:amount,
 * credit:start_date o limit
 * dimension:name
 * egress:name_product
 * expense:description
 * history:date
 * income:product
 * lot:internal_code
 * paymaent:amount
 * payment_method:card_number
 * premise:name
 * product:name
 * promotion:creation_date
 * provider:name
 * purchase:cost
 * role:role
 * route:description
 * sale:amount
 * seller:name
 * truck:serial_number
 * user:name last_name middle_name
 */
export const query: Query  ={
  cart:gql`
  query paginationDataCart(
    $start: Int
    $limit: Int
    $filters: [FilterCartField]
  ){
    paginationDataCart(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  credit: gql`
  query paginationDataCredit(
    $start: Int
    $limit: Int
    $filters: [FilterCreditField]
  ){
    paginationDataCredit(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  dimension: gql`
  query paginationDataDimension(
    $start: Int
    $limit: Int
    $filters: [FilterDimensionField]
  ){
    paginationDataDimension(start: $start, limit: $limit, filters: $filters){
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
          width
          height
          long
          products{
            id
            name
          }
        }
      }
    }
  }`,
  egress: gql`
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
  }
  `,
  expense: gql`
  query paginationDataExpense(
    $start: Int
    $limit: Int
    $filters: [FilterExpenseField]
  ){
    paginationDataExpense(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  history: gql`
  query paginationDataHistory(
    $start: Int
    $limit: Int
    $filters: [FilterHistoryField]
  ){
    paginationDataHistory(start: $start, limit: $limit, filters: $filters){
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
      }
    }
  }
  `,
  income: gql`
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
  }
  `,
  lot: gql`
  query paginationDataLot(
    $start: Int
    $limit: Int
    $filters: [FilterLotField]
  ){
    paginationDataLot(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  payment: gql`
  query paginationDataPayment(
    $start: Int
    $limit: Int
    $filters: [FilterPaymentField]
  ){
    paginationDataPayment(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  payment_method: gql`
  query paginationDataPaymentMethod(
    $start: Int
    $limit: Int
    $filters: [FilterPaymentMethodField]
  ){
    paginationDataPaymentMethod(start: $start, limit: $limit, filters: $filters){
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
          card_number
          month
          year
          cvc
          holder
          folio
          issue_date
          entry_date
          description
          reference
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
    }
  }
  `,
  premise: gql`
  query paginationDataPremise(
    $start: Int
    $limit: Int
    $filters: [FilterPremiseField]
  ){
    paginationDataPremise(start: $start, limit: $limit, filters: $filters){
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
          alias
          business_name
          rfc
          start_date
          street
          neighborhood
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
    }
  }
  `,
  product: gql`
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
    }
  }
  `,
  promotion: gql`
  query paginationDataPromotion(
    $start: Int
    $limit: Int
    $filters: [FilterPromotionField]
  ){
    paginationDataPromotion(start: $start, limit: $limit, filters: $filters){
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
          creation_date
          expiration_date
          discount_value
          reference_code
          condition
          products{
            id
            name
          }
        }
      }
    }
  }
  `,
  provider: gql`
  query paginationDataProvider(
    $start: Int
    $limit: Int
    $filters: [FilterProviderField]
  ){
    paginationDataProvider(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  purchase: gql`
  query paginationDataPurchase(
    $start: Int
    $limit: Int
    $filters: [FilterPurchaseField]
  ){
    paginationDataPurchase(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  role: gql`
  query paginationDataRole(
    $start: Int
    $limit: Int
    $filters: [FilterRoleField]
  ){
    paginationDataRole(start: $start, limit: $limit, filters: $filters){
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
          role
          users{
            id
            name
            last_name
            middle_name
          }
        }
      }
    }
  }
  `,
  route: gql`
  query paginationDataRoute(
    $start: Int
    $limit: Int
    $filters: [FilterRouteField]
  ){
    paginationDataRoute(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  sale: gql`
  query paginationDataSale(
    $start: Int
    $limit: Int
    $filters: [FilterSaleField]
  ){
    paginationDataSale(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  seller: gql`
  query paginationDataSeller(
    $start: Int
    $limit: Int
    $filters: [FilterSellerField]
  ){
    paginationDataSeller(start: $start, limit: $limit, filters: $filters){
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
          sales{
            id
            name
          }
        }
      }
    }
  }
  `,
  truck: gql`
  query paginationDataTruck(
    $start: Int
    $limit: Int
    $filters: [FilterTruckField]
  ){
    paginationDataTruck(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
  user: gql`
  query paginationDataUser(
    $start: Int
    $limit: Int
    $filters: [FilterUserField]
  ){
    paginationDataUser(start: $start, limit: $limit, filters: $filters){
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
    }
  }
  `,
}
export const table:Table ={
  cart: {
    fields: {
      amount:'Amount',
      products:'Products Name',
      sale:'Sale Amount'
    },
    columns: ['position','amount','products','sale']
  },
  credit: {
    fields: {
      limit:'Limit',
      start_date:'Start Date',
      end_date:'End Date',
      validity:'Validity',
      interests:'Interests',
      status:'Status',
      payments:'Payments Amount',
      payment_method:'Payment Method Card Number',
      custom_user:'User Name',
    },
    columns: ['position','limit', 'start_date','end_date','validity','interests','status','payments','payment_method','custom_user']
  },
  dimension: {
    fields: {
      name:'Name',
      width:'Width',
      height:'Height',
      long:'Long',
      products:'Products Name',
    },
    columns: ['position','name','width','height','long','products']
  },
  egress: {
    fields: {
      name_product:'Name Product',
      quantity:'Quantity',
      unit_price:'Unit Price',
      total_egress:'Total Egress',
      date:'Date',
      provider:'Provider Name',
      payment_method:'Payment Method Card Number'
    },
    columns: ['position','name_product','quantity','unit_price','total_egress','date','provider','payment_method']
  },
  expense: {
    fields: {
      description:'Description',
      date:'Date',
      amount:'Amount',
      category:'Category',
      status:'Status',
      trucks:'Trucks Serial Number',
      custom_user:'User Name'
    },
    columns: ['position','description','date','amount','category','status','trucks','custom_user']
  },
  history:{
    fields: {
      date:'Date',
      start_time:'Start Time',
      end_time:'End Time',
      status:'Status',
      custom_user:'User Name',
      truck:'Truck Serial Number'
    },
    columns: ['position','date','start_time','end_time','status','custom_user','truck']
  },
  income: {
    fields: {
      product:'Product Name',
      quantity_sold:'Quantity Sold',
      price:'Price',
      total_income:'Total Income',
      date:'Date',
      client:'User Name',
      payment_method:'Payment Method Card Method',
    },
    columns: ['position','product','quantity_sold','price','total_income','date','client','payment_method']
  },
  lot:{
    fields: {
      internal_code:'Internal Code',
      arrival_date:'Arrival Date',
      expiration_date:'Expiration Date',
      acquisition_date:'Acquisition Date',
      cost:'Cost',
      purchases:'Purchase Cost',
      products:'Products Name'

    },
    columns: ['position','internal_code','arrival_date','expiration_date','acquisition_date','cost','purchases','products']
  },
  payment: {
    fields: {
      amount:'Amount',
      date:'Date',
      status:'Status',
      credit:'Credit Start End',
      custom_user:'User Name'
    },
    columns: ['position', 'amount','date','status','credit','custom_user'],
  },
  payment_method: {
    fields: {
      card_number:'Card Number',
      month:'Month',
      year:'Year',
      cvc:'CVC',
      holder:'Holder',
      folio:'Folio',
      issue_date:'Issue Date',
      entry_date:'Entry Date',
      description:'Description',
      referense:'Referense',
      type:'type',
      credits:'Credit Start Date',
      purchases:'Purchase Cost',
      custom_user:'User Name',
      sales:'Sales Amount',
      egress:'Egress Name Product',
      income:'Income Product',

    },
    columns: ['position','card_number','month','year','cvc','holder','folio','issue_date','entry_date','description','referense','type','credits','purchases','custom_user','sales','egress','income']
  },
  premise:{
    fields: {
      name:'Name',
      alias:'Alias',
      business_name:'Business Name',
      rfc:'RFC',
      start_date:'Start Date',
      street:'Street',
      neigthborhood:'Neighborhood',
      exterior_number:'Exterior Number',
      municipality:'Municipality',
      interior_number:'Interior Number',
      city:'City',
      postal_code:'Postal Code',
      latitude:'Latitude',
      longitude:'Longitude',
      phone:'Phone',
      cell_phone:'Cell Phone',
      business_type:'Business Type',
      status:'Status',
      accounts:'Accounts',
      custom_users:'User Name',
      sales:'Sales Amount',
    },
    columns: ['position','name','alias','business_name','rfc','start_date','street','neigthborhood','exterior_number','municipality','interior_number','city','postal_code','latitude','longitude','phone','cell_phone','business_type','status','accounts','custom_users','sales',
  ]
  },
  product:{
    fields: {
      name:'Name',
      net_weight:'Net Weight',
      presentation:'Presentation',
      brand:'Brand',
      generic_description:'Generic description',
      price:'Price',
      cost:'Cost',
      available_inventory:'Available inventory',
      min_value:'Min Value',
      bardcode:'Bardcode',
      internal_code:'Internal Code',
      status:'Status',
      unt_of_measure:'Unit Of Measure',
      measurement:'Measurement',
      carts:'Carts Amount',
      dimension:'Dimension Name',
      lots:'Lots Internal Code',
      promotions:'Promotions Creation Date',
      provider:'Provider Name',
    },
    columns: ['position','functions','name',
    'net_weight',
    'presentation',
    'brand',
    'generic_description',
    'price',
    'cost',
    'available_inventory',
    'min_value',
    'bardcode',
    'internal_code',
    'status',
   'unt_of_measure',
    'measurement',
    'carts',
    'dimension',
    'lots',
    'promotions',
    'provider']
  },
  promotion: {
    fields: {
      creation_date:'Creation Date',
      expiration_date:'Expiration Date',
      discount_value:'Discount Value',
      reference_date:'Reference Date',
      condition:'Condition',
      products:'Product Name'
    },
    columns: ['position','creation_date','expiration_date','discount_value','reference_date','condition','products']
  },
  provider: {
    fields: {
      name:'Name',
      business_name:'Business Name',
      rfc:'RFC',
      registration_date:'Registration Date',
      street:'Street',
      number:'Number',
      neighbourhood:'Neighbourhood',
      postal_code:'Postal Code',
      municipality:'Municipality',
      city:'City',
      country:'Country',
      scheduled_visit:'Scheduled Visit',
      status:'Status',
      products:'Products Name',
      purchases:'Purchases Cost',
      egresses:'Egresses Name Prduct',
    },
    columns: ['position','name',
    'business_name','rfc','registration_date','street','number','neighbourhood','postal_code','municipality','city','country','scheduled_visit','status','products','purchases','egresses']
  },
  purchase: {
    fields: {
      cost:'Cost',
      order_date:'Order Date',
      reference:'Reference',
      arrival_date:'Arrival Date',
      status:'Status',
      lot:'Lot Internal Code',
      payment_method:'Payment Method Card Number',
      provider:'Provider Name',
      custom_users:'User Name'
    },
    columns: ['position','cost','order_date','reference','arrival_date','status','lot','payment_method','provider','custom_users']
  },
  role:{
    fields: {
      role:'Role',
      users:'users',
    },
    columns: ['position','role','users']
  },
  route: {
    fields: {
      description:'Description',
      origin:'Origin',
      destination:'Destination',
      departure_date:'Departure Date',
      arrival_date:'Arrival Date',
      reference:'Reference',
      received_goods_name:'Received Goods Name',
      comments:'Comments',
      status:'Status',
      cyclic_route:'Cyclic Route',
      trucks:'Trucks Serial Number',
      sales:'Sales Amount',
    },
    columns: ['position','description','origin','destination','departure_date','arrival_date','reference','received_goods_name','comments','status','cyclic_route','trucks','sales']
  },
  sale: {
    fields: {
      amount:'Amount',
      total_amount:'Total Amount',
      date:'Date',
      invoice:'Invoice',
      classification:'Classification',
      delivery_date:'Delivery Date',
      pending_delivery:'Pending Delivery',
      paid:'Paid',
      status:'Status',
      cards:'Card Amount',
      premise:'Premise Name',
      payment_methods:'Payment Methods Card Number',
      routes:'Routes Description',
      custom_user:'User Name',
      sellers:'Sellers Name'
    },
    columns: ['position','amount','total_amount','date','invoice','classification','delivery_date','pending_delivery','paid','status','cards','premise','payment_methods','routes','custom_user','sellers']
  },
  seller: {
    fields: {
      name:'Name',
      sales:'Sales Name',
    },
    columns: ['position','name','sales']
  },
  truck:{
    fields: {
      plate_details:'Plate Details',
      serial_number:'Serial Number',
      vin:'Vin',
      expenses:'Expenses Description',
      histories:'Histories Date',
      routes:'Routes Description',
      custom_user:'User Name'
    },
    columns: ['position','plate_details','serial_number','vin','expenses','histories','routes','custom_user']
  },
  user: {
    fields:{
      name:'Name',
      last_name:'Last Name',
      middle_name:'Middle Name',
      birthdate:'Birthdate',
      gender:'Gender',
      registration_date:'Registration Date',
      activation_date:'Activation Date',
      rfc:'RFC',
      curp:'Curp',
      nss:'NSS',
      cell_phone:'Cell Phone',
      email:'Email',
      blood_type:'Blood Type',
      license:'License',
      allergies:'Allergies',
      ailments:'Ailments',
      nationality:'Nationality',
      street:'Street',
      number:'Number',
      neighborhood:'Neighborhood',
      postal_code:'Postal Code',
      munipality:'Municipality',
      city:'City',
      country:'Country',
      'address-reference':'Address Reference',
      comment:'Comment',
      last_loggin:'Last Loggin',
      status:'Status',
      confirmation:'Confirmation',
      role:'Role',
      payments:'Payments Amount',
      carts:'Carts Amount',
      credist:'Credist Start Date',
      expenses:'Expenses Description',
      histories:'Histories Date',
      premises:'Premises Name',
      payment_methods:'Payment Methods Card Number',
      purchases:'Purchases Cost',
      sales:'Sales Amount',
      trucks:'Trucks Serial Number',
      income:'Income Product',
    },
    columns: ['position','name','last_name','middle_name','birthdate','gender','registration_date','activation_date','rfc','curp','nss','cell_phone','email','blood_type','license','allergies','ailments','nationality','street','number','neighborhood','postal_code','munipality','city','country','address-reference','comment','last_loggin','status','confirmation','role','payments','carts','credist','expenses','histories','premises','payment_methods','purchases','sales','trucks','income']
  }
}
