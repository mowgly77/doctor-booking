# Doctor Booking System

A responsive and accessible medical appointment booking system.

## Features

- Doctor directory with specialty and availability filters
- Appointment booking modal with date and time selection
- Scheduled appointments view
- Responsive design for mobile, tablet, and desktop
- Full accessibility (ARIA, keyboard navigation)

## Technologies

- React 18.2.0
- TypeScript 5
- Next.js 15.2.4
- TailwindCSS 3.4.17
- Styled Components
- Lucide React (icons)
- Zod (data validation)

## Project Structure

```
├── app/                 # Application pages
│   ├── page.tsx        # Main page
│   ├── doctors/        # Doctors page
│   └── components/     # Page-specific components
├── components/         # Reusable components
│   ├── doctor-card.tsx
│   ├── booking-modal.tsx
│   ├── appointments-list.tsx
│   ├── filter-bar.tsx
│   └── styled/         # Component styles
│       ├── doctor-card-styles.tsx
│       ├── booking-modal-styles.tsx
│       └── filter-bar-styles.tsx
├── lib/                # Utilities and configurations
│   └── registry.tsx    # Styled Components registry
├── styles/             # Global styles
└── public/             # Static files
```

## Installation

1. Clone the repository:
   ```bash
   git clone [REPOSITORY_URL]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. For production:
   ```bash
   npm run build
   npm run start
   ```

## AI Tools Usage

### Cursor / v0 (Vercel)
- Base component generation
- Code optimization
- Implementation suggestions
- TypeScript error correction
- Accessibility improvements
- Performance optimization

### ChatGPT
- Code validation
- Accessibility suggestions
- UX/UI improvements
- Performance optimization
- Best practices review
- Project structure suggestions

## Main Components

### DoctorCard
- Displays doctor information (name, specialty, photo)
- Star rating system
- Availability indicator
- Appointment booking button

### BookingModal
- Date and time selection
- Availability validation
- Appointment confirmation
- Responsive design

### FilterBar
- Specialty filtering
- Availability filtering
- Accessible design
- Intuitive interface

### AppointmentsList
- List of scheduled appointments
- Detailed view of each appointment
- Responsive design
- Empty states handled

## Accessibility

- Keyboard navigation implemented
- Appropriate ARIA roles
- Descriptive labels
- Adequate color contrast
- Visible focus states
- Clear error messages

## Next Steps

- Implement user authentication
- Connect to real backend
- Add notification system
- Implement pagination in doctor listing
- Add more search filters
- Implement review system
- Add doctor location map

## Current Limitations

- Data is mocked
- No data persistence
- No authentication system
- No advanced form validation
- No pagination system
- No text search system 