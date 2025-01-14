import { Descripiton } from '@/components/Description/Description'
import ImageCarousal from '@/components/ImageCarousal/ImageCarousal'
import React from 'react'

type BlockListType = {
    [key: string]: React.ComponentType<any>
}

export const blocksList: any = {
    'image-carousal': ImageCarousal,
    intro: Descripiton,
}
