import Head from 'next/head'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useUIStore } from '../stores/uiStore'

const AppLayout = ({ children, title = '', style = {} }) => {
    const setConnection = useUIStore(state => state.setConnection)

    useEffect(() => {
        const connectionSpeed = navigator && navigator.connection && navigator.connection.downlink || 2
        setConnection(connectionSpeed)
    }, [])

    return (
        <Wrapper style={style}>
            <Head>
                <title>{title} | Loreal Congress 2021</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no" />
            </Head>
            {children}
        </Wrapper>
    )
}

export default AppLayout

const Wrapper = styled.div`
    margin: 0 !important;
    min-height: 100vh;
    height: 100vh;
    position: relative;
`