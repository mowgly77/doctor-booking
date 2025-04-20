"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  TimeSlotGrid,
  TimeSlot,
  ConfirmButton,
  DateSelector,
  DateOption,
} from "./styled/booking-modal-styles"

export const BookingModal = ({ doctor, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState("Today")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const modalRef = useRef(null)

  const dates = ["Today", "Tomorrow", "In 2 days"]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleConfirm = () => {
    if (selectedTimeSlot) {
      onConfirm(doctor, {
        date: selectedDate,
        time: selectedTimeSlot,
      })
    }
  }

  return (
    <ModalOverlay role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <ModalContainer ref={modalRef}>
        <ModalHeader>
          <ModalTitle id="booking-modal-title">Book Appointment with Dr. {doctor.name}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <DateSelector>
            {dates.map((date) => (
              <DateOption
                key={date}
                selected={selectedDate === date}
                onClick={() => setSelectedDate(date)}
                aria-label={`Select ${date}`}
                aria-selected={selectedDate === date}
                role="option"
              >
                {date}
              </DateOption>
            ))}
          </DateSelector>

          <TimeSlotGrid>
            {timeSlots.map((time) => (
              <TimeSlot
                key={time}
                selected={selectedTimeSlot === time}
                onClick={() => setSelectedTimeSlot(time)}
                aria-label={`Select time slot: ${time}`}
                aria-selected={selectedTimeSlot === time}
                role="option"
              >
                {time}
              </TimeSlot>
            ))}
          </TimeSlotGrid>

          <ConfirmButton onClick={handleConfirm} disabled={!selectedTimeSlot} aria-label="Confirm appointment booking">
            Confirm Booking
          </ConfirmButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  )
}
