import { Block } from "payload";

const Heading:Block={
    slug:'heading',
    fields:[
        {
            name:'heading',
            type:'text'
        }
    ]
}

export const HeroBlock:Block = {
    slug:'heroBlock',
    fields:[
        {
            name:'blocks',
            type:'blocks',
            blocks:[Heading]
        }
    ]
}
