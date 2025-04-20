"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import StyledComponentsRegistry from "@/lib/registry"
import { Navbar } from "@/components/navbar"
import { SpecialtyCard } from "@/components/specialty-card"
import { Container, PageTitle } from "@/components/styled/common-styles"
import { Doctor } from "@/types/doctor"

interface Specialty {
  id: string
  name: string
  description: string
  doctors: Doctor[]
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    description: "Specialist in cardiology with over 15 years of experience.",
    availability: "morning",
    location: "Central Hospital"
  },
  {
    id: "2",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    description: "Expert in preventive cardiology and cardiac rehabilitation.",
    availability: "afternoon",
    location: "South Clinic"
  },
  {
    id: "3",
    name: "Dr. Michael Brown",
    specialty: "Dermatology",
    description: "Specialist in clinical and aesthetic dermatology.",
    availability: "morning",
    location: "Central Hospital"
  },
  {
    id: "4",
    name: "Dr. Emily Davis",
    specialty: "Pediatrics",
    description: "Pediatrician specialized in child development.",
    availability: "afternoon",
    location: "South Clinic"
  }
]

const mockSpecialties: Specialty[] = [
  {
    id: "1",
    name: "Cardiology",
    description: "Medical specialty that deals with disorders of the heart and blood vessels.",
    doctors: mockDoctors.filter(doctor => doctor.specialty === "Cardiology")
  },
  {
    id: "2",
    name: "Dermatology",
    description: "Medical specialty that focuses on the diagnosis and treatment of skin disorders.",
    doctors: mockDoctors.filter(doctor => doctor.specialty === "Dermatology")
  },
  {
    id: "3",
    name: "Pediatrics",
    description: "Medical specialty that focuses on the health and medical care of infants, children, and adolescents.",
    doctors: mockDoctors.filter(doctor => doctor.specialty === "Pediatrics")
  }
]

export default function SpecialtiesPage() {
  console.log("Initial mockSpecialties:", mockSpecialties)
  
  const [specialtiesList, setSpecialtiesList] = useState(mockSpecialties)

  useEffect(() => {
    console.log("Specialties data in useEffect:", specialtiesList)
  }, [specialtiesList])

  if (!specialtiesList || specialtiesList.length === 0) {
    console.log("No specialties data available")
    return (
      <StyledComponentsRegistry>
        <ThemeProvider theme={{}}>
          <Navbar />
          <Container>
            <PageTitle>Medical Specialties</PageTitle>
            <p>Loading specialties...</p>
          </Container>
        </ThemeProvider>
      </StyledComponentsRegistry>
    )
  }

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={{}}>
        <Navbar />
        <Container>
          <PageTitle>Medical Specialties</PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {specialtiesList.map((specialty) => {
              console.log("Rendering specialty:", specialty)
              return (
                <div key={specialty.id} className="w-full">
                  <SpecialtyCard
                    name={specialty.name}
                    description={specialty.description}
                    doctors={specialty.doctors}
                  />
                </div>
              )
            })}
          </div>
        </Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
} 