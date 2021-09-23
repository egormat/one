import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import AppOverlay from '@/components/AppOverlay'
import RoomPanorama from '@/components/RoomPanorama'
import CorrectingModal from '@/components/SkinCeuticals/modals/CorrectingModal'
import FerulicModal from '@/components/SkinCeuticals/modals/FerulicModal'
import SilymarinModal from '@/components/SkinCeuticals/modals/SilymarinModal'
import SkinCeuticalsStage from '@/components/SkinCeuticals/SkinCeuticalsStage'
import AppLayout from '@/layouts/AppLayout'
import { useSkinCeuticalsStore } from '@/stores/skinceuticalsStore'
import React, { useEffect } from 'react'

const SkinCeuticalsPage = () => {
    const setNewbie = useSkinCeuticalsStore(state => state.setNewbie)
    const closeAll = useSkinCeuticalsStore(state => state.closeAll)

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.scEnterRoom)

        const isNewbie = localStorage.getItem('sc')
        if (isNewbie) {
            setNewbie(false)
        }

        return () => closeAll()
    }, [])

    return (
        <AppLayout
            title="SkinCeuticals"
            style={{ background: 'linear-gradient(180deg, #C8C5C5 0%, #C9C7C6 24.12%, #D4D2D0 48.43%, #D9D8D6 70.81%, #DDDAD8 86.63%, #F0EEEC 100%)' }}
        >
            <AppOverlay roomKey='sc' setNewbie={setNewbie}>
                <RoomPanorama>
                    <SkinCeuticalsStage />
                </RoomPanorama>
            </AppOverlay>

            <CorrectingModal />
            <FerulicModal />
            <SilymarinModal />
        </AppLayout>
    )
}

export default SkinCeuticalsPage