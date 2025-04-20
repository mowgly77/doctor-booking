"use client"

import { DoctorCard } from "./doctor-card"

interface TimeSlot {
  date: string
  time: string
}

interface Doctor {
  name: string
  specialty: string
  location: string
}

interface Appointment {
  doctor: Doctor
  timeSlot: TimeSlot
}

interface AppointmentsListProps {
  appointments: Appointment[]
}

export const AppointmentsList = ({ appointments }: AppointmentsListProps) => {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
        <p className="text-gray-600">You don't have any appointments scheduled yet.</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appointment: Appointment, index: number) => (
          <DoctorCard
            key={index}
            doctor={appointment.doctor}
            isAppointment={true}
            appointmentDetails={{
              doctorName: appointment.doctor.name,
              doctorSpecialty: appointment.doctor.specialty,
              location: appointment.doctor.location,
              timeSlot: appointment.timeSlot,
            }}
          />
        ))}
      </div>
    </div>
  )
} 