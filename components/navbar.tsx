"use client"

import Link from "next/link"
import { NavContainer, Logo, NavLinks, NavLink, ContactButton } from "./styled/navbar-styles"
import { useEffect, useState } from "react"

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NavContainer>
      <Link href="/" passHref legacyBehavior>
        <Logo>MedBook</Logo>
      </Link>
      <NavLinks>
        <Link href="/" passHref legacyBehavior>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/doctors" passHref legacyBehavior>
          <NavLink>Doctors</NavLink>
        </Link>
        <Link href="/specialties" passHref legacyBehavior>
          <NavLink>Specialties</NavLink>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <ContactButton>Contact</ContactButton>
        </Link>
      </NavLinks>
    </NavContainer>
  )
}
