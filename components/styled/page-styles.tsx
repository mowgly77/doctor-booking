"use client"

import styled from "styled-components"

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 7rem 1rem 3rem;
  min-height: 100vh;
`

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #1A1E2E;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const PageDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #1A1E2E;
  margin-bottom: 0.5rem;
`

export const CardText = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const CardMeta = styled.p`
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
` 