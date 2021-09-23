import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import CeraveStage from '@/components/Cerave/CeraveStage'
import CleaningModal from '@/components/Cerave/modals/CleaningModal'
import MoisturizingModal from '@/components/Cerave/modals/MoisturizingModal'
import SofteningModal from '@/components/Cerave/modals/SofteningModal'
import RoomPanorama from '@/components/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import { useCeraveStore } from '@/stores/ceraveStore'
import React, { useEffect } from 'react'

const CeravePage = () => {
    const setNewbie = useCeraveStore(state => state.setNewbie)
    const closeAll = useCeraveStore(state => state.closeAll)

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.ceraveEnterRoom)

        const isNewbie = localStorage.getItem('cerave')
        if (isNewbie) {
            setNewbie(false)
        }
       
        return () => closeAll()
    }, [])


    return (
        <AppLayout
            title="Cerave"
            style={{ background: 'linear-gradient(180deg, #C8C5C5 0%, #C9C7C6 24.12%, #D4D2D0 48.43%, #D9D8D6 70.81%, #DDDAD8 86.63%, #F0EEEC 100%)' }}
        >
            <AppOverlay roomKey='cerave' setNewbie={setNewbie}>
                <RoomPanorama>
                    <CeraveStage />
                </RoomPanorama>
            </AppOverlay>

            <MoisturizingModal />
            <SofteningModal />
            <CleaningModal />
        </AppLayout>
    )
}

export default CeravePage