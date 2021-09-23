import Box from '@/components/Box';
import MiniGame from '@/components/Game/MiniGame';
import OverviewModal from '@/components/Game/OverviewModal';
import AppLayout from "@/layouts/AppLayout";
import { useGameStore } from '@/stores/gameStore';
import media, { mediaMin } from '@/utils/media';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const GamePage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
    const resetGame = useGameStore(state => state.resetGame)

    useEffect(() => {
        return () => resetGame()
    }, [])

    return (
        <AppLayout title="Мини-игра" style={{ background: '#fff' }}>
            <Wrapper>
                <Header>
                    <Link href="/">
                        <BackButton>
                            <BackBox $flex $alignItems="center" $justifyContent="center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2101 22.7897L2.4205 11.9999L13.2101 1.21027" stroke="#5C6164" strokeWidth="3" />
                                </svg>
                                <BackTitle>ВЫЙТИ ИЗ ИГРЫ</BackTitle>
                            </BackBox>
                        </BackButton>
                    </Link>
                </Header>

                <Container>
                    <GameBox>
                        <Body>
                            <MiniGame />
                        </Body>

                        {!isMobile && (
                            <Footer>
                                <div>Мы всегда готовы Вам помочь</div>
                                <div><b>8 (800) 511-43-87</b></div>
                            </Footer>
                        )}
                    </GameBox>
                </Container>

                {isMobile && <OverviewModal />}
            </Wrapper>
        </AppLayout>
    )
}

export default GamePage

const BackTitle = styled(Box)`
    font-family: Gilroy;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: #262626;
`

const BackBox = styled(Box)`
    ${media.md`
        width: 100%;
        ${BackTitle} {
            flex-grow: 1;
            margin-left: -24px;
        }  
    `}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    height: var(--app-height);
    padding-top: 60px;
`

const GameBox = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    ${mediaMin.md`
        display: flex;
        flex-direction: column;
    `}
`

const BackButton = styled.div`
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    ${media.md`
        width: 100%;
    `}
`

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 28.4%, #FFFFFF 71.15%, rgba(255, 255, 255, 0) 100%);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
`

const Header = styled.div`
    height: 60px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .15);
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1101;
`

const Footer = styled.div`
    min-height: 86px;
    width: 100%;
    background: #01C0D9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-family: Gilroy;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
`

const Body = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;
`