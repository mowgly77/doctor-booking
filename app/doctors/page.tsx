"use client"

import { useState } from "react"
import { ThemeProvider } from "styled-components"
import StyledComponentsRegistry from "@/lib/registry"
import { Navbar } from "@/components/navbar"
import { DoctorsList } from "@/components/doctors-list"
import { FilterBar } from "@/components/filter-bar"
import { BookingModal } from "@/components/booking-modal"
import { Container, PageTitle } from "@/components/styled/common-styles"
import { mockDoctors } from "@/data/mock-data"

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState(mockDoctors)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [appointments, setAppointments] = useState([])

  const handleFilter = (specialty, availability) => {
    let filtered = [...mockDoctors]

    if (specialty && specialty !== "all") {
      filtered = filtered.filter((doctor) => doctor.specialty === specialty)
    }

    if (availability && availability !== "all") {
      filtered = filtered.filter((doctor) => doctor.availability === availability)
    }

    setDoctors(filtered)
  }

  const handleBooking = (doctor) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  const handleConfirmBooking = (doctor, timeSlot) => {
    const newAppointment = {
      id: Date.now(),
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      location: doctor.location,
      timeSlot,
    }

    setAppointments([...appointments, newAppointment])
    setIsModalOpen(false)
  }

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={{}}>
        <Navbar />
        <Container>
          <PageTitle>Find Available Doctors</PageTitle>
          <FilterBar onFilter={handleFilter} />
          <DoctorsList doctors={doctors} onBookAppointment={handleBooking} />

          {appointments.length > 0 && (
            <>
              <PageTitle>Your Appointments</PageTitle>
              <DoctorsList appointments={appointments} isAppointmentList={true} />
            </>
          )}

          {isModalOpen && selectedDoctor && (
            <BookingModal
              doctor={selectedDoctor}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmBooking}
            />
          )}
        </Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
