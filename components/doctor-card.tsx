"use client"
import Image from "next/image"
import { Star } from "lucide-react"
import {
  Card,
  DoctorImage,
  DoctorInfo,
  DoctorName,
  DoctorSpecialty,
  RatingContainer,
  StarIcon,
  RatingText,
  AvailabilityTag,
  LocationText,
  BookButton,
  AppointmentInfo,
  AppointmentTime,
} from "./styled/doctor-card-styles"

interface TimeSlot {
  date: string
  time: string
}

interface Doctor {
  name: string
  specialty: string
  location: string
  photoUrl?: string
  rating: number
  availability: string
}

interface AppointmentDetails {
  doctorName: string
  doctorSpecialty: string
  location: string
  timeSlot: TimeSlot
}

interface DoctorCardProps {
  doctor: Doctor
  onBookAppointment?: (doctor: Doctor) => void
  isAppointment?: boolean
  appointmentDetails?: AppointmentDetails | null
}

export const DoctorCard = ({ doctor, onBookAppointment, isAppointment = false, appointmentDetails = null }: DoctorCardProps) => {
  if (isAppointment && appointmentDetails) {
    return (
      <Card>
        <DoctorInfo>
          <DoctorName>{appointmentDetails.doctorName}</DoctorName>
          <DoctorSpecialty>{appointmentDetails.doctorSpecialty}</DoctorSpecialty>
          <LocationText>{appointmentDetails.location}</LocationText>
          <AppointmentInfo>
            <AppointmentTime>
              {appointmentDetails.timeSlot.date} at {appointmentDetails.timeSlot.time}
            </AppointmentTime>
          </AppointmentInfo>
        </DoctorInfo>
      </Card>
    )
  }

  return (
    <Card>
      <DoctorImage>
        <Image
          src={doctor.photoUrl || "/placeholder.svg"}
          alt={`Dr. ${doctor.name}`}
          width={100}
          height={100}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </DoctorImage>
      <DoctorInfo>
        <DoctorName>Dr. {doctor.name}</DoctorName>
        <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
        <RatingContainer>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} $filled={i < doctor.rating}>
              <Star size={16} />
            </StarIcon>
          ))}
          <RatingText>{doctor.rating.toFixed(1)}</RatingText>
        </RatingContainer>
        <AvailabilityTag $available={doctor.availability === "Available today"}>{doctor.availability}</AvailabilityTag>
        <LocationText>{doctor.location}</LocationText>
        {onBookAppointment && (
          <BookButton onClick={() => onBookAppointment(doctor)} aria-label={`Book appointment with Dr. ${doctor.name}`}>
            Book Appointment
          </BookButton>
        )}
      </DoctorInfo>
    </Card>
  )
}
