import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import LRPStage from '@/components/LRP/LRPStage'
import AntheliosModal from '@/components/LRP/modals/AntheliosModal'
import CicaplastModal from '@/components/LRP/modals/CicaplastModal'
import InvisibleModal from '@/components/LRP/modals/InvisibleModal'
import KidsModal from '@/components/LRP/modals/KidsModal'
import LipikarModal from '@/components/LRP/modals/LipikarModal'
import OncoCicaplastModal from '@/components/LRP/modals/OncoCicaplastModal'
import OncoLipikarModal from '@/components/LRP/modals/OncoLipikarModal'
import RetinolModal from '@/components/LRP/modals/RetinolModal'
import SerumModal from '@/components/LRP/modals/SerumModal'
import ToleraineModal from '@/components/LRP/modals/ToleraineModal'
import RoomPanorama from '@/components/RoomPanorama'
import AppLayout from '@/layouts/AppLayout'
import { useLRPStore } from '@/stores/lrpStore'
import React, { useEffect } from 'react'

const LRPPage = () => {
    const setNewbie = useLRPStore(state => state.setNewbie)
    const closeAll = useLRPStore(state => state.closeAll)

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.lrpEnterRoom)

        const isNewbie = localStorage.getItem('lrp')
        if (isNewbie) {
            setNewbie(false)
        }
       
        return () => closeAll()
    }, [])


    return (
        <AppLayout
            title="La Roche Posay"
        >
            <AppOverlay roomKey='lrp' setNewbie={setNewbie}>
                <RoomPanorama>
                    <LRPStage />
                </RoomPanorama>
            </AppOverlay>

            <LipikarModal />
            <AntheliosModal />
            <RetinolModal />
            <SerumModal />
            <CicaplastModal />
            <KidsModal />

            <OncoCicaplastModal />
            <OncoLipikarModal />
            <InvisibleModal />
            <ToleraineModal />

        </AppLayout>
    )
}

export default LRPPage
