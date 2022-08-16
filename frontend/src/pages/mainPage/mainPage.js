// ----------------react & hooks-------------------------------------
import React, { useRef} from 'react'

// ----------------style & css---------------------------------------
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-regular-svg-icons'
// ----------------components & data---------------------------------
import {Header,Footer} from 'components/common'
import {Profile, Information, AboutMe, TechStack, MyProject, Question} from 'components/MainPage'


const PositionContainer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 100px;
    z-index: 0;

    // 데스크탑
    @media screen and (min-width: 480px) {
        right: 5%;
    }
`

const TopButton = styled.button.attrs(() => ({
    type: 'button',
    title: '맨 위로 가기',
    'aria-label': '맨 위로 가기',
}))`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
`

function MainPage() {
    const NavRef = useRef([])

    // 클릭하면 이동시키는 로직
    const handleIndexClick = (index) =>
        NavRef.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    // handleScroll.js
    const handleScroll = (e) => {
        if (!window.scrollY) return
        // 현재 위치가 이미 최상단일 경우 return

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div style={{width:'100%'}}>
            <Header handleIndexClick={handleIndexClick}></Header>

            <Profile handleIndexClick={handleIndexClick}></Profile>
            <Information></Information>

            <div ref={(el) => (NavRef.current[0] = el)}>
            <AboutMe></AboutMe>
            </div>
               
            

            <div ref={(el) => (NavRef.current[1] = el)}>
                <TechStack></TechStack>
            </div>

            <div ref={(el) => (NavRef.current[2] = el)}>
                <MyProject></MyProject>
            </div>
            <div ref={(el) => (NavRef.current[3] = el)}>
                <Question></Question>
            </div>

            <PositionContainer>
            
                <TopButton onClick={handleScroll}>
                    <FontAwesomeIcon
                        icon={faCircleUp}
                        color="#efa212"
                        size="3x"
                    />
                </TopButton>
            </PositionContainer>

            <Footer></Footer>
        </div>
    )
}

export default MainPage
