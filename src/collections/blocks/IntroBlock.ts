import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const IntroBlock: Block = {
    slug: 'intro',
    fields: [
        {
            name: 'introContent',
            type: 'richText',
            label: 'IntroContent',
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
            }),
        },
        lexicalHTML('introContent', { name: 'introContent_html' }),
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
    ],
}
