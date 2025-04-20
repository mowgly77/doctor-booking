"use client"
import { DoctorCard } from "./doctor-card"
import { DoctorsGrid } from "./styled/doctors-list-styles"

export const DoctorsList = ({ doctors = [], appointments = [], onBookAppointment, isAppointmentList = false }) => {
  if (isAppointmentList) {
    return (
      <DoctorsGrid>
        {appointments.map((appointment) => (
          <DoctorCard key={appointment.id} isAppointment={true} appointmentDetails={appointment} />
        ))}
      </DoctorsGrid>
    )
  }

  return (
    <DoctorsGrid>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onBookAppointment={onBookAppointment} />
      ))}
    </DoctorsGrid>
  )
}
