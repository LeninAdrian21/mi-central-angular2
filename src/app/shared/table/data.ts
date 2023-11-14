import { Table } from "src/app/guards/table";
export const table:Table =  {
  egress:{
    fields:{
      name_product:'Nombre del producto',
      quantity:'Cantidad del producto',
      unit_price:'Precio Unitario',
      total_egress: 'Total Egreso',
      date: 'Fecha',
      provider: 'Proveedor',
      payment_method:'Metodo de pago',
      actions:'Acciones'
    },
    columns:['position','name_product','quantity','unit_price','total_egress','date','provider','payment_method']
  },
  income:{
    fields:{
      product:"Nombre del Producto",
      quantity_sold:"Cantidad de Venta",
      price:"Precio",
      total_income:"Total de Ingreso",
      date:"Fecha",
      client:"Usuario",
      payment_method: "Metodo de pago",
      actions:'Acciones'
    },
    columns:['position','product','quantity_sold','price','total_income','date','client','payment_method']
  },
  product:{
    fields:{
      functions:'Funciones',
      name:'Nombre',
      net_weight: 'Peso neto',
      presentation: 'Presentación',
      brand: 'Marca',
      generic_description:'Descripción genérica',
      price:'Precio',
      cost:'Costo',
      available_inventory:'Inventario disponible',
      min_value:'Valor mínimo',
      barcode:'Código de barras',
      internal_code: 'Código interno',
      status: 'Estado del producto',
      unit_of_measure:'Unidad de medida',
      measurement:'Medida',
      carts:'Carritos',
      dimension:'Dimension',
      lots:'Lote',
      promotions:'Promociones',
      provider: 'Proveedor',
      actions:'Acciones',
    },
    columns:['position',
    // 'functions',
    'name','net_weight','presentation','brand','generic_description','price','cost','available_inventory','min_value','barcode','internal_code','status','unit_of_measure','measurement','carts','dimension','lots','promotions','provider'],
  },

}
