"use client"

import styled from "styled-components"

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1A1E2E;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #E6C87D;
  cursor: pointer;
  text-decoration: none;
  display: block;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease;
  display: block;
  
  &:hover {
    color: #E6C87D;
  }
`

export const ContactButton = styled.a`
  background-color: #E6C87D;
  color: #1A1E2E;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: #d4b76b;
  }
`
