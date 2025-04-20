"use client"

import { ThemeProvider } from "styled-components"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import {
  Container,
  MainHeading,
  SubHeading,
  FeatureCard,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  CTAButton,
} from "@/components/styled/home-styles"
import { Calendar, Users, Clock, Star } from "lucide-react"

export function HomePage() {
  return (
    <ThemeProvider theme={{}}>
      <Navbar />
      <Container>
        <MainHeading>Find Your Doctor</MainHeading>
        <SubHeading>Book appointments with top specialists in your area</SubHeading>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <Users size={32} />
            </FeatureIcon>
            <FeatureTitle>Expert Specialists</FeatureTitle>
            <FeatureText>Access to a wide network of qualified healthcare professionals</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Calendar size={32} />
            </FeatureIcon>
            <FeatureTitle>Easy Scheduling</FeatureTitle>
            <FeatureText>Book appointments that fit your schedule with just a few clicks</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Clock size={32} />
            </FeatureIcon>
            <FeatureTitle>Instant Confirmation</FeatureTitle>
            <FeatureText>Receive immediate confirmation for your appointments</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Star size={32} />
            </FeatureIcon>
            <FeatureTitle>Verified Reviews</FeatureTitle>
            <FeatureText>Read authentic patient reviews to help you choose the right doctor</FeatureText>
          </FeatureCard>
        </FeatureGrid>

        <Link href="/doctors" passHref>
          <CTAButton>Find Doctors</CTAButton>
        </Link>
      </Container>
    </ThemeProvider>
  )
} 