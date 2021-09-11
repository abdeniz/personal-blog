import React from 'react'
import styled from 'styled-components'

const MobileMenu = ({ setMobileMenuOpen, mobileMenuOpen }) => {
  return (
    <MobileMenuWrapper open={mobileMenuOpen}>
      <MobileMenuBackground open={mobileMenuOpen} />
      <MobileMenuContent>
        <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
        <Nav open={mobileMenuOpen}>
          <ul>
            <li>Latest</li>
            <li>Categories</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </Nav>
      </MobileMenuContent>
    </MobileMenuWrapper>
  )
}

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100vw;
  z-index: 3;
  backdrop-filter: blur(4px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.2s opacity;
  transition: 0.2s backdrop-filter;
  transition: 0.2s left;
`

const MobileMenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  opacity: ${({ open }) => (open ? 0.5 : 0)};
  transition: 0.2s opacity;
`

const MobileMenuContent = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 128px 64px;
`

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 28px;
  font-size: 32px;
  font-weight: 700;
`

const Nav = styled.nav`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: 0.2s transform, 0.2s opacity;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  & ul {
    display: flex;
    flex-direction: column;
    & li {
      margin-right: 32px;
      font-size: 28px;
      padding: 8px 0;
      &:nth-of-type(3),
      :nth-of-type(4),
      :nth-of-type(5) {
        margin-left: 16px;
        font-size: 20px;
        transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
      &:nth-of-type(1) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.7s;
      }
      &:nth-of-type(2) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.8s;
      }
      &:nth-of-type(3) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.9s;
      }
      &:nth-of-type(4) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 1s;
      }
      &:nth-of-type(5) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 1.1s;
      }
    }
  }
`

export default MobileMenu
