"use client"

import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #1A1E2E;
  color: white;
  padding: 2rem;
  text-align: center;
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const FooterTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterName>Rob Alcántara</FooterName>
        <FooterTitle>Fullstack Developer | Product Owner | Branding | UX/UI</FooterTitle>
        <FooterLink href="https://github.com/mowgly77" target="_blank" rel="noopener noreferrer">
          github.com/mowgly77
        </FooterLink>
      </FooterContent>
    </FooterContainer>
  )
} 