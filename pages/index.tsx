import AppOverlay from '@/components/AppOverlay';
import HallPanorama from '@/components/Hall/HallPanorama';
import AppLayout from '@/layouts/AppLayout';
import { useUIStore } from '@/stores/uiStore';
import * as ga from '@/utils/ga';
import React, { useEffect } from 'react';

const IndexPage = () => {
    const setLocked = useUIStore(state => state.setLocked)

    useEffect(() => {
        ga.event({
            action: "mainVisit",
            params: {
                userId: 'u4402'
            }
        })
       setLocked(false)
    }, [])


    return (
        <AppLayout title="Главная">
            <AppOverlay back={false}>
                <HallPanorama />
            </AppOverlay>
        </AppLayout>
    )
}

export default IndexPage