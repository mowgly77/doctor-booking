import styled from "styled-components"

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  cursor: pointer;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }
`

export const ContactButton = styled(NavLink)`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
    color: white;
  }
` 