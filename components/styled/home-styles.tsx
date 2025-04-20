"use client"

import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1rem 3rem;
  text-align: center;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MainHeading = styled.h1`
  font-size: 3.5rem;
  color: #1A1E2E;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const SubHeading = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 4rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
`

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const FeatureIcon = styled.div`
  color: #E6C87D;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #1A1E2E;
  margin-bottom: 1rem;
  line-height: 1.3;
`

export const FeatureText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`

export const CTAButton = styled.button`
  background-color: #E6C87D;
  color: #1A1E2E;
  border: none;
  border-radius: 8px;
  padding: 1rem 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2rem;
  
  &:hover {
    background-color: #d4b76b;
    transform: translateY(-2px);
  }
`
