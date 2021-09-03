import React from 'react'
import styled from 'styled-components'

interface IMobileMenu {
  setMobileMenuOpen: (open: boolean) => void
  mobileMenuOpen: boolean
}

const MobileMenu = ({ setMobileMenuOpen, mobileMenuOpen }: IMobileMenu) => {
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

const MobileMenuWrapper = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100vw;
  z-index: 1;
  backdrop-filter: blur(4px);
  opacity: ${({ open }) => (open ? 1 : 0)};

  transition: 0.2s opacity;
  transition: 0.2s backdrop-filter;
  transition: 0.2s left;
`

const MobileMenuBackground = styled.div<{ open?: boolean }>`
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

const Nav = styled.nav<{ open?: boolean }>`
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
      }

      &:nth-of-type(1) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.2s;
      }

      &:nth-of-type(2) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.3s;
      }

      &:nth-of-type(3) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.4s;
      }

      &:nth-of-type(4) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.5s;
      }

      &:nth-of-type(5) {
        transform: ${({ open }) =>
          open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.6s;
      }
    }
  }
`

export default MobileMenu
