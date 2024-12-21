import { Block } from "payload";

export const ImageCarousalBlock:Block = {
    slug:'image-carousal', 
    fields:[
        {
            name:'images',
            type:'array', 
            fields:[
                {
                    name:'image',
                    label:'Upload Image',
                    type:'upload',
                    relationTo: 'media' 
                },
                {
                    name:'heading',
                    type:'text',
                    label:"Heading",
                },
                {
                    name:'description',
                    type:'textarea',
                    label:"Description",
                }
            ]
        },
    ]
}
