import { useEffect, useState } from 'react'

export default function MobileHook () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

    function handleSizeChange () {
        return setIsMobile(window.innerWidth < 640)
    }

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange)

        return () => {
            window.removeEventListener('resize', handleSizeChange)
        }
    }, [isMobile])

    return isMobile
}
