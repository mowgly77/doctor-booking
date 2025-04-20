"use client"

import styled from "styled-components"

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #1A1E2E;
`

export const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 200px;
  
  &:focus {
    outline: 2px solid #E6C87D;
    border-color: #E6C87D;
  }
`

export const FilterButton = styled.button`
  background-color: #E6C87D;
  color: #1A1E2E;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-end;
  
  &:hover {
    background-color: #d4b76b;
  }
  
  &:focus {
    outline: 2px solid #1A1E2E;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    align-self: stretch;
  }
`
