"use client"

import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;
`

export const MainHeading = styled.h1`
  font-size: 3rem;
  color: #1A1E2E;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const SubHeading = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const FeatureIcon = styled.div`
  color: #E6C87D;
  margin-bottom: 1rem;
`

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #1A1E2E;
  margin-bottom: 0.5rem;
`

export const FeatureText = styled.p`
  color: #666;
  font-size: 0.9rem;
`

export const CTAButton = styled.button`
  background-color: #E6C87D;
  color: #1A1E2E;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #d4b76b;
  }
`
