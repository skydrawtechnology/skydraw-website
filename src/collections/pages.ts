import { CollectionConfig } from "payload";
import { HeroBlock } from "./blocks/HeroBlock";

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
            blocks:[HeroBlock]
        }

    ]
}
