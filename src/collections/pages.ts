import { CollectionConfig } from "payload";
import { ImageCarousalBlock } from "./blocks/ImageCarousalBlock";

export const Pages:CollectionConfig = {
    slug:'pages',
    fields:[
        {
            name:'slug',
            type:'text',
            admin:{
                position:'sidebar'
            }
        },
        {
            name:'Title',
            type:'text',
            admin:{
                position:'sidebar'
            }
        },
        {
            name:'layouts',
            label:'Layouts',
            type:'blocks',
            blocks:[ImageCarousalBlock]
        }

    ]
}
