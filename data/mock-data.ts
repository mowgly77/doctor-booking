export interface Doctor {
  id: string
  name: string
  specialty: string
  description: string
  image?: string
  availability?: string
  location?: string
}

export interface Specialty {
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

export { mockDoctors, mockSpecialties } 