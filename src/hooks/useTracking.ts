import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactGA from "react-ga"

declare global {
    interface Window {
        gtag?: (
            key: string,
            trackingId: string,
            config: { page_path: string }
        ) => void
    }
}

export const useTracking = (trackingId: string) => {
    ReactGA.initialize(trackingId)
}
