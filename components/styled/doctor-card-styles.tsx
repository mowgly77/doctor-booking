"use client"

import styled from "styled-components"

interface StarIconProps {
  $filled: boolean
}

interface AvailabilityTagProps {
  $available: boolean
}

export const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const DoctorImage = styled.div`
  margin-right: 1.5rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const DoctorInfo = styled.div`
  flex: 1;
`

export const DoctorName = styled.h3`
  font-size: 1.25rem;
  color: #1A1E2E;
  margin-bottom: 0.25rem;
`

export const DoctorSpecialty = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const StarIcon = styled.span<StarIconProps>`
  color: ${(props) => (props.$filled ? "#E6C87D" : "#ccc")};
  margin-right: 2px;
`

export const RatingText = styled.span`
  margin-left: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`

export const AvailabilityTag = styled.span<AvailabilityTagProps>`
  display: inline-block;
  background-color: ${(props) => (props.$available ? "#e6f7e9" : "#f7f7e7")};
  color: ${(props) => (props.$available ? "#2e7d32" : "#856404")};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`

export const LocationText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

export const BookButton = styled.button`
  background-color: #E6C87D;
  color: #1A1E2E;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #d4b76b;
  }
  
  &:focus {
    outline: 2px solid #1A1E2E;
    outline-offset: 2px;
  }
`

export const AppointmentInfo = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 4px;
`

export const AppointmentTime = styled.p`
  font-weight: 500;
  color: #1A1E2E;
`
