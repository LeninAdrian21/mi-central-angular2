import { Validators } from "@angular/forms";
import { Form, Table } from "../interface/relations";
import { Query } from "../interface/filter";
import { gql } from "apollo-angular";
const form:Form = {
  cart: [
    {
      label: 'Amount',
      name: 'amount',
      type: 'number',
      placeholder: 'Amount',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  credit: [
    {
      label:'Limit',
      name:'limit',
      placeholder: 'Limit',
      type:'number',
      validators: [],
      disabled:false,
      default: '',
    },
    {
      label:'Start Date',
      name:'start_date',
      placeholder: 'Start Date',
      type:'date',
      validators: [],
      disabled:false,
      default: '',
    },
    {
      label:'End Date',
      name:'end_date',
      placeholder: 'End Date',
      type:'date',
      validators: [],
      disabled:false,
      default: '',
    },
    {
      label:'Validity',
      name:'validity',
      placeholder: 'Validity',
      type:'date',
      validators: [],
      disabled:false,
      default: '',
    },
    {
      label:'Interests',
      name:'interests',
      placeholder: 'Interests',
      type:'number',
      validators: [],
      disabled:false,
      default: '',
    },
    {
      label:'Status',
      name:'status',
      placeholder: 'Status',
      type:'checkbox',
      validators: [],
      disabled:false,
      default: '',
    },
  ],
  dimension: [
    {
      label:'Name',
      name:'name',
      placeholder: 'Name',
      type:'text',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Width',
      name:'width',
      placeholder: 'Width',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Height',
      name:'height',
      placeholder: 'Height',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Long',
      name:'long',
      placeholder: 'Long',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
  ],
  egress: [
    {
      label:'Name Product',
      name:'name_product',
      placeholder:'Name Product',
      type:'text',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Quantity',
      name:'quantity',
      placeholder:'Quantity',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Unit Price',
      name:'unit_price',
      placeholder:'Unit Price',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Total Egress',
      name:'total_egress',
      placeholder:'Total Egress',
      type:'number',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
    {
      label:'Date',
      name:'date',
      placeholder:'Date',
      type:'date',
      validators: [Validators.required],
      disabled:false,
      default: '',
    },
  ],
  expense: [
    {
      label: 'Description',
      name: 'description',
      placeholder: 'Description',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Date',
      name: 'date',
      placeholder: 'Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Amount',
      name: 'amount',
      placeholder: 'Amount',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Category',
      name: 'category',
      placeholder: 'Category',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  history: [
    {
      label: 'Date',
      name: 'date',
      placeholder: 'Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Start Time',
      name: 'start_time',
      placeholder: 'Start Time',
      type: 'time',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'End Time',
      name: 'end_time',
      placeholder: 'End Time',
      type: 'time',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  income:[
    {
      label: 'Product',
      name: 'product',
      placeholder: 'Product',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Quantity Sold',
      name: 'quantity_sold',
      placeholder: 'Quantity Sold',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Price',
      name: 'price',
      placeholder: 'Price',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Total Income',
      name: 'total_income',
      placeholder: 'Total Income',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Date',
      name: 'date',
      placeholder: 'Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  lot: [
    {
      label: 'Internal Code',
      name: 'internal_code',
      placeholder: 'Internal Code',
      type: 'number',
      validators: [],
      disabled: false,
      default: '',
    },
    {
      label: 'Arrival Date',
      name: 'arrival_date',
      placeholder: 'Arrival Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Expiration Date',
      name: 'expiration_date',
      placeholder: 'Expiration Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Acquisition Date',
      name: 'acquisition_date',
      placeholder: 'Acquisition Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Cost',
      name: 'cost',
      placeholder: 'Cost',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  payment: [
    {
      label: 'Amount',
      name: 'amount',
      placeholder: 'Amount',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Date',
      name: 'date',
      placeholder: 'Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default:'',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default:'',
    },
    {
      label: 'Display',
      name: 'display',
      placeholder: 'Display',
      type: 'checkbox',
      validators: [Validators.required],
      default: '',
      disabled: false,
    },
  ],
  payment_method: [
    {
      label: 'Card Number',
      name: 'card_number',
      placeholder: 'Card Number',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Month',
      name: 'month',
      placeholder: 'Month',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Year',
      name: 'year',
      placeholder: 'Year',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'CVC',
      name: 'cvc',
      placeholder: 'CVC',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Holder',
      name: 'holder',
      placeholder: 'Holder',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Folio',
      name: 'folio',
      placeholder: 'Folio',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default:''
    },
    {
      label: 'Issue Date',
      name: 'issue_date',
      placeholder: 'Issue Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Entry Date',
      name: 'entry_date',
      placeholder: 'Entry Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Description',
      name: 'description',
      placeholder: 'Description',
      type: 'textarea',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Reference',
      name: 'reference',
      placeholder: 'Reference',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Type',
      name: 'type',
      placeholder: 'Type',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
  ],
  premise: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Alias',
      name: 'alias',
      placeholder: 'Alias',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Business Name',
      name: 'business_name',
      placeholder: 'Business Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'RFC',
      name: 'rfc',
      placeholder: 'RFC',
      type: 'text',
      validators: [Validators.required],
      minlength:'The minimum number of characters is 14',
      maxlength: 'The maximum number of characters is 14',
      disabled: false,
      default: '',
    },
    {
      label: 'Start Date',
      name: 'start_date',
      placeholder: 'Start Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Street',
      name: 'street',
      placeholder: 'Street',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Neighborhood',
      name: 'neighborhood',
      placeholder: 'Neighborhood',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Exterior Number',
      name: 'exterior_number',
      placeholder: 'Exterior Number',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Municipality',
      name: 'municipality',
      placeholder: 'Municipality',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Interior Number',
      name: 'interior_number',
      placeholder: 'Interior Number',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'City',
      name: 'city',
      placeholder: 'City',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Postal Code',
      name: 'postal_code',
      placeholder: 'Postal Code',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Latitude',
      name: 'latitude',
      placeholder: 'Latitude',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Longitude',
      name: 'longitude',
      placeholder: 'Longitude',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: 'Phone',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Cell Phone',
      name: 'cell_phone',
      placeholder: 'Cell Phone',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Business Type',
      name: 'business_type',
      placeholder: 'Business Type',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    // {
    //   label: 'Accounts',
    //   name: 'accounts',
    //   placeholder: 'Accounts',
    //   type: 'json',
    //   validators: [],
    //   comment: 'Cuentas',
    //   disabled: false,
    //   default: '',
    // },
  ],
  product: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Net Weight',
      name: 'net_weight',
      placeholder: 'Net Weight',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Presentation',
      name: 'presentation',
      placeholder: 'Presentation',
      type: 'textarea',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Brand',
      name: 'brand',
      placeholder: 'Brand',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Generic Description',
      name: 'generic_description',
      placeholder: 'Generic Description',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Price',
      name: 'price',
      placeholder: 'Price',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Cost',
      name: 'cost',
      placeholder: 'Cost',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Available Inventory',
      name: 'available_inventory',
      placeholder: 'Available Inventory',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Min Value',
      name: 'min_value',
      placeholder: 'Min Value',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Barcode',
      name: 'barcode',
      placeholder: 'Barcode',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Internal Code',
      name: 'internal_code',
      placeholder: 'Internal Code',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Unit of Measure',
      name: 'unit_of_measure',
      placeholder: 'Unit of Measure',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Measurement',
      name: 'measurement',
      placeholder: 'Measurement',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  promotion: [
    {
      label: 'Creation Date',
      name: 'creation_date',
      placeholder: 'Creation Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Expiration Date',
      name: 'expiration_date',
      placeholder: 'Expiration Date',
      type: 'date',
      validators: [Validators.required,],
      disabled: false,
      default: '',
    },
    {
      label: 'Discount Value',
      name: 'discount_value',
      placeholder: 'Discount Value',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Reference Code',
      name: 'reference_code',
      placeholder: 'Reference Code',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Condition',
      name: 'condition',
      placeholder: 'Condition',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  provider: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Business Name',
      name: 'business_name',
      placeholder: 'Business Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'RFC',
      name: 'rfc',
      placeholder: 'RFC',
      type: 'text',
      validators: [Validators.required],
      minlength:'The minimum number of characters is 14',
      maxlength:'The maximum number of characters is 14',
      disabled: false,
      default: '',
    },
    {
      label: 'Registration Date',
      name: 'registration_date',
      placeholder: 'Registration Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Street',
      name: 'street',
      placeholder: 'Street',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Number',
      name: 'number',
      placeholder: 'Number',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Neighborhood',
      name: 'neighborhood',
      placeholder: 'Neighborhood',
      type: 'text',
      validators: [Validators.required,],
      disabled: false,
      default: '',
    },
    {
      label: 'Postal Code',
      name: 'postal_code',
      placeholder: 'Postal Code',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Municipality',
      name: 'municipality',
      placeholder: 'Municipality',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'City',
      name: 'city',
      placeholder: 'City',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Country',
      name: 'country',
      placeholder: 'Country',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Scheduled Visit',
      name: 'scheduled_visit',
      placeholder: 'Scheduled Visit',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },

  ],
  purchase: [
    {
      label: 'Cost',
      name: 'cost',
      placeholder: 'Cost',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Order Date',
      name: 'order_date',
      placeholder: 'Order Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Reference',
      name: 'reference',
      placeholder: 'Reference',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Arrival Date',
      name: 'arrival_date',
      placeholder: 'Arrival Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  role: [
    {
      label: 'Role',
      name: 'role',
      placeholder: 'Role',
      type: 'select',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  route: [
    {
      label: 'Description',
      name: 'description',
      placeholder: 'Description',
      type: 'textarea',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Origin',
      name: 'origin',
      placeholder: 'Origin',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Destination',
      name: 'destination',
      placeholder: 'Destination',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Departure Date',
      name: 'departure_date',
      placeholder: 'Departure Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Arrival Date',
      name: 'arrival_date',
      placeholder: 'Arrival Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Reference',
      name: 'reference',
      placeholder: 'Reference',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Received Goods Name',
      name: 'received_goods_name',
      placeholder: 'Received Goods Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Comments',
      name: 'comments',
      placeholder: 'Comments',
      type: 'textarea',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Cyclic Route',
      name: 'cyclic_route',
      placeholder: 'Cyclic Route',
      type: 'checkbox',
      validators: [],
      disabled: false,
      default: false,
    },
  ],
  sale: [
    {
      label: 'Amount',
      name: 'amount',
      placeholder: 'Amount',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Total Amount',
      name: 'total_amount',
      placeholder: 'Total Amount',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Date',
      name: 'date',
      placeholder: 'Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    // {
    //   label: 'Invoice',
    //   name: 'invoice',
    //   placeholder: 'Invoice',
    //   type: 'json',
    //   validators: [Validators.required],
    //   disabled: false,
    //   default: '',
    // },
    {
      label: 'Classification',
      name: 'classification',
      placeholder: 'Classification',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Delivery Date',
      name: 'delivery_date',
      placeholder: 'Delivery Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
    {
      label: 'Pending Delivery',
      name: 'pending_delivery',
      placeholder: 'Pending Delivery',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: false,
    },
    {
      label: 'Paid',
      name: 'paid',
      placeholder: 'Paid',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: false,
    },
    {
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type: 'checkbox',
      validators: [Validators.required],
      disabled: false,
      default: false,
    },
  ],
  seller: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: '',
    },
  ],
  truck: [
    // {
    //   label: 'Plate Details',
    //   name: 'plate_details',
    //   placeholder: 'Plate Details',
    //   type: 'json',
    //   validators: [Validators.required],
    //   disabled: false,
    //   default: '',
    // },
    {
      label: 'Serial Number',
      name: 'serial_number',
      placeholder: 'Serial Number',
      type: 'number',
      validators: [Validators.required],
      min: 10000000000000000,
      max: 100000000000000000,
      disabled: false,
      default: '',
    },
    {
      label: 'VIN',
      name: 'vin',
      placeholder: 'VIN',
      type: 'number',
      validators: [Validators.required],
      min: 10000000000000000,
      max: 100000000000000000,
      disabled: false,
      default: '',
    },
  ],
  user: [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
      minlength: 'The minimum number of characters is 3',
      disabled: false,
      default: ''
    },
    {
      label: 'Last Name',
      name: 'last_name',
      placeholder: 'Last Name',
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
      minlength: 'The minimum number of characters is 3',
      disabled: false,
      default: ''
    },
    {
      label: 'Middle Name',
      name: 'middle_name',
      placeholder: 'Middle name',
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
      minlength: 'The minimum number of characters is 3',
      disabled: false,
      default: ''
    },
    {
      label: 'Birthdate',
      name: 'birthdate',
      placeholder: 'Birthdate',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Gender',
      name: 'gender',
      placeholder: 'Select your gender',
      type: 'select',
      validators: [Validators.required],
      disabled: false,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ],
      default: ''
    },
    {
      label: 'Registration Date',
      name: 'registration_date',
      placeholder: 'Registration Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Activation Date',
      name: 'activation_date',
      placeholder: 'Activation Date',
      type: 'date',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'RFC',
      name: 'rfc',
      placeholder: 'Ingrese su RFC',
      type: 'text',
      validators: [Validators.required, Validators.minLength(14), Validators.maxLength(14)],
      minlength: 'The minimum number of characters is 14',
      maxlength: 'The maximum number of characters is 14',
      disabled: false,
      default: ''
    },
    {
      label: 'CURP',
      name: 'curp',
      placeholder: 'CURP',
      type: 'text',
      validators: [Validators.required, Validators.minLength(18), Validators.maxLength(18)],
      minlength: 'The minimum number of characters is 18',
      maxlength: 'The maximum number of characters is 18',
      disabled: false,
      default: ''
    },
    {
      label: 'NSS',
      name: 'nss',
      placeholder: 'NSS',
      type: 'text',
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      minlength: 'The minimum number of characters is 8',
      maxlength: 'The maximum number of characters is 8',
      disabled: false,
      default: ''
    },
    {
      label: 'Cell Phone',
      name: 'cell_phone',
      placeholder: 'Cell Phone',
      type: 'number',
      validators: [Validators.required, Validators.min(1000000000), Validators.max(9999999999)],
      min: 'The minimum number of characters is 10',
      max: 'The maximum number of characters is 10',
      disabled: false,
      default: ''
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email,],
      email: 'It is not an email',
      disabled: false,
      default: ''
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      validators: [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])(?!.*(.)\1)[A-Za-z\d$@!%*?&]{8,15}(?!\s)/), Validators.minLength(8), Validators.maxLength(15)],
      minlength: 'The minimum number of characters is 8',
      maxlength: 'The maximum number of characters is 15',
      pattern: 'At least one lowercase letter, at least one uppercase letter, at least one digit, at least one special character ($@$!%*?&) and no duplicate digits and no spaces',
      disabled: false,
      default: ''
    },
    {
      label: 'Blood Type',
      name: 'blood_type',
      placeholder: 'Seleccione su tipo de sangre',
      type: 'select',
      validators: [Validators.required],
      disabled: false,
      options: [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' }
      ],
      default: ''
    },
    {
      label: 'License',
      name: 'license',
      placeholder: 'License',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Allergies',
      name: 'allergies',
      placeholder: 'Allergies',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Ailments',
      name: 'ailments',
      placeholder: 'Ailments',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Nationality',
      name: 'nationality',
      placeholder: 'Nationality',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Street',
      name: 'street',
      placeholder: 'Street',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Number',
      name: 'number',
      placeholder: 'Number',
      type: 'number',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Neighborhood',
      name: 'neighborhood',
      placeholder: 'Neighborhood',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Postal Code',
      name: 'postal_code',
      placeholder: 'Postal Code',
      type: 'text',
      validators: [Validators.required, Validators.minLength(5)],
      minlength: 'The minimum number of characters is 5',
      disabled: false,
      default: ''
    },
    {
      label: 'Municipality',
      name: 'municipality',
      placeholder: 'municipality',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'City',
      name: 'city',
      placeholder: 'City',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Country',
      name: 'country',
      placeholder: 'country',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Adress Reference',
      name: 'adress_reference',
      placeholder: 'Adress Reference',
      type: 'text',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Comment',
      name: 'comment',
      placeholder: 'Comment',
      type: 'textarea',
      validators: [Validators.required],
      disabled: false,
      default: ''
    },
    {
      // type: 'select',
      // validators: [Validators.required],
      // options: [
        //   { value: 'activo', label: 'Activo' },
        //   { value: 'inactivo', label: 'Inactivo' }
        // ],
      label: 'Status',
      name: 'status',
      placeholder: 'Status',
      type:'checkbox',
      validators:[Validators.required],
      disabled: false,
      default: ''
    },
    {
      label: 'Role',
      name: 'role',
      placeholder: 'Role',
      type: 'select',
      validators: [],
      disabled: true,
      default: '653ee9ed24f7d70c94c8f3d3',
      options: [
        { value: '653ee9ed24f7d70c94c8f3d3', label: 'User' }
      ]
    },
  ],
}
export const table:Table = {
  carts: {
    fields: {
      amount: 'Amount',
    },
    columns: ['select', 'position', 'amount'],
    nameTable: '',
    search: '',
    title: 'Cart',
    select: true,
    formInfo: form.cart,
    btn: 'Add Cart'
  },
  credit: {
    fields: {
      start_date: 'Start Date',
    },
    columns: ['select', 'position', 'start_date'],
    nameTable: '',
    search: '',
    title: 'Credit',
    select: false,
    formInfo: form.credit,
    btn: 'Add Credit'
  },
  credits: {
    fields: {
      start_date: 'Start Date',
    },
    columns: ['select', 'position', 'start_date'],
    nameTable: '',
    search: '',
    title: 'Credit',
    select: false,
    formInfo: form.credit,
    btn: 'Add Credit'
  },
  dimension: {
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Dimension',
    select: false,
    formInfo: form.dimension,
    btn: 'Add Dimension'
  },
  egress: {
    fields: {
      name_product: 'Name Product',
    },
    columns: ['select', 'position', 'name_product'],
    nameTable: '',
    search: '',
    title: 'Egress',
    select: false,
    formInfo: form.egress,
    btn: 'Add Egress'
  },
  egresses: {
    fields: {
      name_product: 'Name Product',
    },
    columns: ['select', 'position', 'name_product'],
    nameTable: '',
    search: '',
    title: 'Egress',
    select: false,
    formInfo: form.egress,
    btn: 'Add Egress'
  },
  expenses: {
    fields: {
      description: 'Description',
    },
    columns: ['select', 'position', 'description'],
    nameTable: '',
    search: '',
    title: 'Expense',
    select: false,
    formInfo: form.expense,
    btn: 'Add Expense',
  },
  histories:{
    fields: {
      date: 'Date',
    },
    columns: ['select', 'position', 'date'],
    nameTable: '',
    search: '',
    title: 'History',
    select: false,
    formInfo: form.history,
    btn: 'Add History'
  },
  income: {
    fields: {
      product: 'Product Name',
    },
    columns: ['select', 'position', 'product'],
    nameTable: '',
    search: '',
    title: 'Income',
    select: false,
    formInfo: form.income,
    btn: 'Add Income'
  },
  lot:{
    fields: {
      internal_code: 'Internal Code',
    },
    columns: ['select', 'position', 'internal_code'],
    nameTable: '',
    search: '',
    title: 'Lot',
    select: false,
    formInfo: form.lot,
    btn: 'Add Lot'
  },
  lots:{
    fields: {
      internal_code: 'Internal Code',
    },
    columns: ['select', 'position', 'internal_code'],
    nameTable: '',
    search: '',
    title: 'Lot',
    select: false,
    formInfo: form.lot,
    btn: 'Add Lot'
  },
  payments: {
    fields: {
      amount: 'Amount',
    },
    columns: ['select', 'position', 'amount'],
    nameTable: '',
    search: '',
    title: 'Payment',
    select: false,
    formInfo: form.payment,
    btn: 'Add Payment',
  },
  payment_method: {
    fields: {
      card_number: 'Card Number',
    },
    columns: ['select', 'position', 'card_number'],
    nameTable: '',
    search: '',
    title: 'Payment Method',
    select: false,
    formInfo: form.payment_method,
    btn: 'Add Payment Method',
  },
  payment_methods: {
    fields: {
      card_number: 'Card Number',
    },
    columns: ['select', 'position', 'card_number'],
    nameTable: '',
    search: '',
    title: 'Payment Method',
    select: false,
    formInfo: form.payment_method,
    btn: 'Add Payment Method'
  },
  premise:{
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Premise',
    select: false,
    formInfo: form.premise,
    btn: 'Add Premise'
  },
  premises:{
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Premise',
    select: false,
    formInfo: form.premise,
    btn: 'Add Premise'
  },
  products:{
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Product',
    select: false,
    formInfo: form.product,
    btn: 'Add Product'
  },
  promotions: {
    fields: {
      creation_date: 'Creation Date',
    },
    columns: ['select', 'position', 'creation_date'],
    nameTable: '',
    search: '',
    title: 'Promotion',
    select: false,
    formInfo: form.promotion,
    btn: 'Add Promotion',
  },
  provider: {
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Provider',
    select: false,
    formInfo: form.provider,
    btn: 'Add Provider'
  },
  purchases: {
    fields: {
      cost: 'Cost',
    },
    columns: ['select', 'position', 'cost'],
    nameTable: '',
    search: '',
    title: 'Purchase',
    select: false,
    formInfo: form.purchase,
    btn: 'Add Purchase',
  },
  role:{
    fields: {
      role: 'Role',
    },
    columns: ['select', 'position', 'role'],
    nameTable: '',
    search: '',
    title: 'Role',
    select: false,
    formInfo: form.role,
    btn: 'Add Role'
  },
  routes: {
    fields: {
      description: 'Description',
    },
    columns: ['select', 'position', 'description'],
    nameTable: '',
    search: '',
    title: 'Route',
    select: false,
    formInfo: form.route,
    btn: 'Add Route',
  },
  sale: {
    fields: {
      amount: 'Amount',
    },
    columns: ['select', 'position', 'amount'],
    nameTable: '',
    search: '',
    title: 'Sale',
    select: false,
    formInfo: form.sale,
    btn: 'Add Sale'
  },
  sales: {
    fields: {
      amount: 'Amount',
    },
    columns: ['select', 'position', 'amount'],
    nameTable: '',
    search: '',
    title: 'Sale',
    select: false,
    formInfo: form.sale,
    btn: 'Add Sale'
  },
  sellers: {
    fields: {
      name: 'Name',
    },
    columns: ['select', 'position', 'name'],
    nameTable: '',
    search: '',
    title: 'Seller',
    select: false,
    formInfo: form.seller,
    btn: 'Add Seller'
  },
  truck:{
    fields: {
      serial_number: 'Serial Number',
    },
    columns: ['select', 'position', 'serial_number'],
    nameTable: '',
    search: '',
    title: 'Truck',
    select: false,
    formInfo: form.truck,
    btn: 'Add Truck'
  },
  trucks:{
    fields: {
      serial_number: 'Serial Number',
    },
    columns: ['select', 'position', 'serial_number'],
    nameTable: '',
    search: '',
    title: 'Truck',
    select: false,
    formInfo: form.truck,
    btn: 'Add Truck'
  },
  custom_user: {
    fields: {
      name: 'Name',
      last_name: 'Last Name',
      middle_name: 'Middle Name',
    },
    columns: ['select', 'position', 'name', 'last_name', 'middle_name'],
    nameTable: '',
    search: '',
    title: 'User',
    select: false,
    formInfo: form.user,
    btn: 'Add User'
  },
  custom_users: {
    fields: {
      name: 'Name',
      last_name: 'Last Name',
      middle_name: 'Middle Name',
    },
    columns: ['select', 'position', 'name', 'last_name', 'middle_name'],
    nameTable: '',
    search: '',
    title: 'User',
    select: false,
    formInfo: form.user,
    btn: 'Add User'
  },
  client: {
    fields: {
      name: 'Name',
      last_name: 'Last Name',
      middle_name: 'Middle Name',
    },
    columns: ['select', 'position', 'name', 'last_name', 'middle_name'],
    nameTable: '',
    search: '',
    title: 'User',
    select: false,
    formInfo: form.user,
    btn: 'Add User'
  },
  users: {
    fields: {
      name: 'Name',
      last_name: 'Last Name',
      middle_name: 'Middle Name',
    },
    columns: ['select', 'position', 'name', 'last_name', 'middle_name'],
    nameTable: '',
    search: '',
    title: 'user',
    select: false,
    formInfo: form.user,
    btn: 'Add User'
  },
}
export const queryRelation: Query  ={
  carts: gql`
  query {
    carts{
      id
      amount
    }
  }
  `,
  credit: gql`
  query {
    credits{
      id
      start_date
    }
  }
  `,
  credits: gql`
  query {
    credits{
      id
      start_date
    }
  }
  `,
  dimension: gql`
  query {
    dimensions{
      id
      name
    }
  }`,
  egress: gql`
  query{
    egresses{
      id
      name_product
    }
  }
  `,
  egresses: gql`
  query{
    egresses{
      id
      name_product
    }
  }
  `,
  expenses: gql`
  query{
    expenses{
      id
      description
    }
  }
  `,
  histories: gql`
  query{
    histories{
      id
      date
    }
  }`,
  income: gql`
  query{
    incomes{
      id
      product
    }
  }
  `,
  lot: gql`
  query{
    lots{
      id
      internal_code
    }
  }
  `,
  lots: gql`
  query{
    lots{
      id
      internal_code
    }
  }
  `,
  payments: gql`
  query{
    payments{
      id
      amount
    }
  }
  `,
  payment_method: gql`
  query{
    paymentMethods{
      id
      card_number
    }
  }
  `,
  payment_methods: gql`
  query{
    paymentMethods{
      id
      card_number
    }
  }
  `,
  premise: gql`
  query{
    premises{
      id
      name
    }
  }
  `,
  products: gql`
  query{
    products{
      id
      name
    }
  }
  `,
  promotions: gql`
  query{
    promotions{
      id
      creation_date
    }
  }
  `,
  provider: gql`
  query{
    providers{
      id
      name
    }
  }
  `,
  purchases: gql`
  query{
    purchases{
      id
      cost
    }
  }
  `,
  role: gql`
  query{
    roleTypes{
      id
      role
    }
  }
  `,
  routes: gql`
  query{
    routes{
      id
      description
    }
  }
  `,
  sale: gql`
  query{
    sales{
      id
      amount
    }
  }
  `,
  sales: gql`
  query{
    sales{
      id
      amount
    }
  }
  `,
  sellers: gql`
  query{
    sellers{
      id
      name
    }
  }
  `,
  trucks: gql`
  query{
    trucks{
      id
      serial_number
    }
  }
  `,
  custom_user: gql`
  query{
    customUsers{
      id
      name
      last_name
      middle_name
    }
  }
  `,
  custom_users: gql`
  query{
    customUsers{
      id
      name
      last_name
      middle_name
    }
  }
  `,
  client: gql`
  query{
    customUsers{
      id
      name
      last_name
      middle_name
    }
  }
  `,
  users: gql`
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
