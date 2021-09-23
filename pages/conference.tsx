import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import ConferenceStage from '@/components/Conference/ConferenceStage'
import RoomPanorama from '@/components/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useUIStore } from '../stores/uiStore'

const ConferencePage = () => {
    const router = useRouter()
    const scaleRatio = useUIStore(state => state.scaleRatio)
    const setLocked = useUIStore(state => state.setLocked)

    useEffect(() => {
       setLocked(false)

       // tracker info
       API.tracker.sendEvent(EventsEnum.confEnterRoom)
    }, [])

    return (
        <AppLayout
            title="Конференц-зал"
            style={{ background: 'linear-gradient(180deg, #C8C5C5 0%, #C9C7C6 24.12%, #D4D2D0 48.43%, #D9D8D6 70.81%, #DDDAD8 86.63%, #F0EEEC 100%)' }}
        >
            <AppOverlay>
                <RoomPanorama>
                    <ConferenceStage />
                </RoomPanorama>
            </AppOverlay>
        </AppLayout>
    )
}

export default ConferencePage
