import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/RoomPanorama'
import DercosModal from '@/components/Vichy/modals/DercosModal'
import Liftactivodal from '@/components/Vichy/modals/LiftactivModal'
import MineralModal from '@/components/Vichy/modals/MineralModal'
import VichyStage from '@/components/Vichy/VichyStage'
import AppLayout from '@/layouts/AppLayout'
import { useVichyModalStore } from '@/stores/vichyModalStore'
import React, { useEffect } from 'react'
import NeovadiolModal from '../components/Vichy/modals/NeovadiolModal'

const VichyPage = () => {
    const closeAll = useVichyModalStore(state => state.closeAll)

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.vichyEnterRoom).catch(console.log)

        return () => closeAll()
    }, [])

    return (
        <AppLayout title="Vichy">
            <AppOverlay>
                <RoomPanorama>
                    <VichyStage />
                </RoomPanorama>
            </AppOverlay>

            <NeovadiolModal />
            <DercosModal />
            <Liftactivodal />
            <MineralModal />
        </AppLayout>
    )
}

export default VichyPage