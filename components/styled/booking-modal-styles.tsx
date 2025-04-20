"use client"

import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  color: #1A1E2E;
  margin: 0;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.25rem;
  
  &:hover {
    color: #1A1E2E;
  }
  
  &:focus {
    outline: 2px solid #E6C87D;
    outline-offset: 2px;
  }
`

export const ModalContent = styled.div`
  padding: 1.5rem;
`

export const DateSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const DateOption = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.selected ? "#E6C87D" : "#ddd")};
  background-color: ${(props) => (props.selected ? "#E6C87D" : "white")};
  color: ${(props) => (props.selected ? "#1A1E2E" : "#666")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => (props.selected ? "#d4b76b" : "#f8f9fa")};
  }
  
  &:focus {
    outline: 2px solid #1A1E2E;
    outline-offset: 2px;
  }
`

export const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TimeSlot = styled.button`
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.selected ? "#E6C87D" : "#ddd")};
  background-color: ${(props) => (props.selected ? "#E6C87D" : "white")};
  color: ${(props) => (props.selected ? "#1A1E2E" : "#666")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => (props.selected ? "#d4b76b" : "#f8f9fa")};
  }
  
  &:focus {
    outline: 2px solid #1A1E2E;
    outline-offset: 2px;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#E6C87D")};
  color: ${(props) => (props.disabled ? "#666" : "#1A1E2E")};
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#d4b76b")};
  }
  
  &:focus {
    outline: 2px solid #1A1E2E;
    outline-offset: 2px;
  }
`
