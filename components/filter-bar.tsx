"use client"

import { useState } from "react"
import { FilterContainer, FilterLabel, FilterSelect, FilterButton } from "./styled/filter-bar-styles"

export const FilterBar = ({ onFilter }) => {
  const [specialty, setSpecialty] = useState("all")
  const [availability, setAvailability] = useState("all")

  const handleFilterClick = () => {
    onFilter(specialty, availability)
  }

  return (
    <FilterContainer>
      <div>
        <FilterLabel htmlFor="specialty">Specialty</FilterLabel>
        <FilterSelect
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          aria-label="Filter by specialty"
        >
          <option value="all">All Specialties</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </FilterSelect>
      </div>

      <div>
        <FilterLabel htmlFor="availability">Availability</FilterLabel>
        <FilterSelect
          id="availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          aria-label="Filter by availability"
        >
          <option value="all">All Availability</option>
          <option value="Available today">Available today</option>
          <option value="Available tomorrow">Available tomorrow</option>
          <option value="Available this week">Available this week</option>
        </FilterSelect>
      </div>

      <FilterButton onClick={handleFilterClick} aria-label="Apply filters">
        Apply Filters
      </FilterButton>
    </FilterContainer>
  )
}
