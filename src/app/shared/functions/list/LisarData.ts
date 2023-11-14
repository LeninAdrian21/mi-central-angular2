import { GraphqlService } from "src/app/services/graphql.service";

export const ListarData = (graphql:GraphqlService,data:string,groupedData:any, ) => {
  graphql.GetData(data).subscribe(data =>{
    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (item && typeof item === 'object') {
          Object.keys(item).forEach((key) => {
            if (key !== '__typename') {
              if (!groupedData[key]) {
                groupedData[key] = [];
              }
              const value = item[key];
              if (typeof value === 'object' && value !== null && value !== undefined) {

                if(value.length > 0){
                  value.forEach((element: any) => {
                    Object.keys(element).forEach((item) => {
                      // console.log(item);
                      if (
                        item !== '__typename' &&
                        element[item] !== null &&
                        element[item] !== undefined
                      ) {
                        console.log(element[item]);
                        if (!groupedData[key].includes(element[item])) {
                          groupedData[key].push(element[item]);
                        }
                      }
                    });
                  });
                }
                Object.keys(value).forEach((keys) => {
                  if (
                    keys !== '__typename' &&
                    value[keys] !== null &&
                    value[keys] !== undefined
                  ) {
                    if (!groupedData[key].includes(value[keys])) {
                      groupedData[key].push(value[keys]);
                    }
                  }
                });
              } else if (value !== null && value !== undefined) {
                if (!groupedData[key].includes(value)) {
                  groupedData[key].push(value);
                }
              }
            }
          });
        }
      });
    }
  })
}
