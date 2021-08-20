import React from 'react'
import styled from 'styled-components'
import portrait from '../img/portrait.png'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'

const HomeHeader = () => {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PortraitImg src={portrait} alt='me' />
          <div>
            <h2>Personal dev blog by</h2>
            <Logo>Deniz Abdurrahmani</Logo>
          </div>
        </div>
        <SocialIconWrapper>
          <a href='https://github.com/abdeniz'>
            <SocialIcon src={github} alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/denizabdurrahmani/'>
            <SocialIcon src={linkedin} alt='linkedin' />
          </a>
        </SocialIconWrapper>
      </HomeHeaderContent>
    </HomeHeaderWrapper>
  )
}

const HomeHeaderWrapper = styled.section`
  border-bottom: solid 1px #e8e8e8;
`

const HomeHeaderContent = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PortraitImg = styled.img`
  border-radius: 50%;
  width: 75px;
  margin-right: 16px;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`

const Logo = styled.h1`
  line-height: 100%;
`

const SocialIconWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const SocialIcon = styled.img`
  width: 35px;
  margin-left: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 750px) {
    margin-left: 0;
    margin-bottom: 8px;
  }
`

export default HomeHeader
