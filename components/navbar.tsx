"use client"

import Link from "next/link"
import { NavContainer, Logo, NavLinks, NavLink, ContactButton } from "./styled/navbar-styles"

export const Navbar = () => {
  return (
    <NavContainer>
      <Link href="/" passHref>
        <Logo>MedBook</Logo>
      </Link>
      <NavLinks>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/doctors" passHref>
          <NavLink>Doctors</NavLink>
        </Link>
        <Link href="/specialties" passHref>
          <NavLink>Specialties</NavLink>
        </Link>
        <Link href="#" passHref>
          <ContactButton>Contact</ContactButton>
        </Link>
      </NavLinks>
    </NavContainer>
  )
}
