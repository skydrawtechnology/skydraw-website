import { CollectionConfig } from 'payload'
import { ImageCarousalBlock } from './blocks/ImageCarousalBlock'
import { IntroBlock } from './blocks/IntroBlock'

export const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'Title',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'layouts',
            label: 'Layouts',
            type: 'blocks',
            blocks: [ImageCarousalBlock, IntroBlock],
        },
    ],
}
