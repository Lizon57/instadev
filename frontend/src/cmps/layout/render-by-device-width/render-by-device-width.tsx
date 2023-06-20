import { useEffect, useState } from "react"
import { useWindowSize } from "../../../hooks/use-window-size"
import { SCREEN_WIDTH_MAP } from "../../../constants/screen-width-map"



export const RenderByDeviceWidth = ({ children, minDeviceWide, maxDeviceWide, isInclusive, isExclusive }: Props) => {
    const { width: actualDeviceWidth } = useWindowSize()
    const [shouldRender, setShouldRender] = useState(false)


    useEffect(() => {
        const inclusiveness = isInclusive ? -1 : isExclusive ? 1 : 0

        if (minDeviceWide && maxDeviceWide) {
            if ((actualDeviceWidth > SCREEN_WIDTH_MAP[minDeviceWide] + inclusiveness)
                && (actualDeviceWidth < SCREEN_WIDTH_MAP[maxDeviceWide] - inclusiveness)) {
                !shouldRender && setShouldRender(true)
            } else if (shouldRender) setShouldRender(false)
        }

        else if (minDeviceWide) {
            if (actualDeviceWidth > SCREEN_WIDTH_MAP[minDeviceWide] + inclusiveness) {
                !shouldRender && setShouldRender(true)
            } else if (shouldRender) setShouldRender(false)
        }

        else if (maxDeviceWide) {
            if (actualDeviceWidth < SCREEN_WIDTH_MAP[maxDeviceWide] - inclusiveness) {
                !shouldRender && setShouldRender(true)
            } else if (shouldRender) setShouldRender(false)
        }
    }, [actualDeviceWidth, minDeviceWide, maxDeviceWide, isInclusive, shouldRender])


    return shouldRender ? <>{children}</> : null
}


type Props = {
    minDeviceWide?: WidthSizes
    maxDeviceWide?: WidthSizes
    isInclusive?: boolean
    isExclusive?: boolean
    children: JSX.Element
}

type WidthSizes = 'tiny' | 'small' | 'medium' | 'large' | 'wide'