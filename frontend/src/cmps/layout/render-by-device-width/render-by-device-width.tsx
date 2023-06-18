import { useEffect, useState } from "react"
import { useWindowSize } from "../../../hooks/use-window-size"


const SIZE_MAP = {
    small: 768,
    medium: 1160,
    large: 1264,
    wide: 1920
}


export const RenderByDeviceWidth = ({ children, minDeviceWide, maxDeviceWide, isInclusive }: Props) => {
    const { width: actualDeviceWidth } = useWindowSize()
    const [shouldRender, setShouldRender] = useState(false)


    useEffect(() => {
        if (isInclusive) {
            if (minDeviceWide && maxDeviceWide) {
                if ((actualDeviceWidth >= SIZE_MAP[minDeviceWide]) && (actualDeviceWidth <= SIZE_MAP[maxDeviceWide])) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (actualDeviceWidth >= SIZE_MAP[minDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (actualDeviceWidth <= SIZE_MAP[maxDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        } else {
            if (minDeviceWide && maxDeviceWide) {
                if ((actualDeviceWidth > SIZE_MAP[minDeviceWide]) && (actualDeviceWidth < SIZE_MAP[maxDeviceWide])) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (actualDeviceWidth > SIZE_MAP[minDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (actualDeviceWidth < SIZE_MAP[maxDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        }
    }, [actualDeviceWidth, minDeviceWide, maxDeviceWide, isInclusive, shouldRender])


    return shouldRender ? <>{children}</> : null
}


type Props = {
    minDeviceWide?: WidthSizes
    maxDeviceWide?: WidthSizes
    isInclusive?: boolean
    children: JSX.Element
}

type WidthSizes = 'small' | 'medium' | 'large' | 'wide'