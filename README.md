# Doctor Booking System

## Description
A responsive and accessible medical appointment booking system built with Next.js, TypeScript, and Tailwind CSS. Allows users to view medical specialties, available doctors, and book appointments.

## Challenge Requirements

### Objective
Design and build a fully responsive and accessible appointment booking UI for a healthcare platform. This task focuses purely on front-end implementation — layout, interaction, accessibility, and code quality.

### Implementation Status

#### 1. Doctor Directory View ✅
- [x] Mock list of doctors (name, photo, specialty, availability, location)
- [x] Filter by specialty and availability
- [x] "Book Appointment" button on each card

#### 2. Booking Modal ✅
- [x] Opens when clicking "Book Appointment"
- [x] Shows doctor name and available time slots (mocked)
- [x] Allows time slot selection and confirmation

#### 3. Appointments Summary View ✅
- [x] Section to view booked appointments
- [x] Shows doctor name, date/time, specialty, and location

### Technical Requirements

#### Tech Stack ✅
- React
- TypeScript
- HTML
- CSS
- TailwindCSS for styling
- Zustand for state management

#### Interface Requirements ✅
- Doctor Card with:
  - Name, specialty, rating, availability
  - "Book" button
- Filter Component (dropdown for specialties)
- Appointment Modal with:
  - Doctor name
  - Available time slots
  - Confirm button
- My Appointments Section with confirmed appointments list

#### Accessibility Goals ✅
- [x] All elements keyboard navigable
- [x] Use of aria-label, role, and aria-describedby
- [x] Responsive across mobile, tablet, and desktop
- [x] Passes basic checks in Lighthouse

### AI Tools Usage
- Cursor for:
  - Base component generation
  - Mock data creation
  - Accessibility optimization
  - Basic test case generation

## Build and Validation

### Local Build

1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate production build:
   ```bash
   npm run build
   ```

3. Start production server:
   ```bash
   npm run start
   ```

### Requirements Validation

1. **Accessibility**
   ```bash
   npm run test:a11y
   ```

2. **Responsive Design**
   - Verify on mobile, tablet, and desktop devices
   - Use Chrome DevTools for responsive testing

3. **Functionality**
   - Verify doctor filtering
   - Test appointment booking
   - Validate booked appointments view

4. **Performance**
   ```bash
   npm run build
   # Check Lighthouse metrics
   ```

## Known Limitations

1. **Mock Data**
   - Data is static and non-persistent
   - No real backend integration

2. **Authentication**
   - No authentication system implemented
   - Appointments are browser-local

3. **Pending Features**
   - Notification system
   - Real-time availability calendar
   - Doctor review system

## Next Steps

1. Implement user authentication
2. Connect to real backend
3. Add notification system
4. Implement review system
5. Add location map

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

## Technologies Used

- **Next.js**: React framework for web applications
- **TypeScript**: JavaScript with static typing
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI components
- **Styled Components**: For custom styling

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Medical specialties viewing
- Doctor listing by specialty
- Appointment booking system
- Modern and responsive UI
- Accessible and reusable components

## Data Structure

### Doctors
Each doctor has the following structure:
```typescript
{
  id: string
  name: string
  specialty: string
  description: string
  image?: string
  availability?: string
  location?: string
}
```

### Specialties
Each specialty has the following structure:
```typescript
{
  id: string
  name: string
  description: string
  doctors: Doctor[]
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details. 