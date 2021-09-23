import { API } from '@/api'
import PhotoCabin from '@/components/Cabin'
import OnAir from '@/components/OnAir'
import useWindowSize from '@/hooks/useWindowSize'
import '@/utils/fonts.css'
import GlobalStyles from "@/utils/globalStyles"
import { NextComponentType, NextPageContext } from "next"
import { AppProps } from "next/app"
import { useEffect } from 'react'
import { animated, Transition } from "react-spring"
import styled from "styled-components"


type PageItemsProps = {
    id: string
    Component: NextComponentType<NextPageContext, any, {}>
    pageProps: any
}

const App: React.FC<AppProps> = ({ Component, router, ...pageProps }) => {

    const [width, height] = useWindowSize()

    useEffect(() => {
        let vh = height * 0.01;
        if (document) {
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.documentElement.style.setProperty('--app-height', `${height}px`);
        }
    }, [width, height])

    useEffect(() => {
        API.me.whoami().then(data => console.log(data))
    }, [])

    const items: PageItemsProps[] = [
        {
            id: router.route,
            Component,
            pageProps
        }
    ]

    return (
        <>
            <GlobalStyles />
            <OnAir />
            <Transition
                items={items}
                keys={(item: PageItemsProps) => item.id}
                initial={{ opacity: 0 }}
                from={{ opacity: 0, transform: "scale(0.9)" }}
                enter={{ opacity: 1, transform: "scale(1)" }}
                leave={{ opacity: 0, transform: "scale(1.1)" }}
            >
                {(styles, { pageProps, Component }) => (
                    <AbsoluteWrapper style={{ ...styles, width: '100vw', height: '100vh' }}>
                        <Component {...pageProps} />
                    </AbsoluteWrapper>
                )}
            </Transition>

            <PhotoCabin />
        </>
    )
}

export default App

const AbsoluteWrapper = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    will-change: transform, opacity;
`
