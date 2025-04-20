# Doctor Booking System

A responsive and accessible medical appointment booking system built with Next.js, TypeScript, and styled-components. Allows users to view medical specialties, available doctors, and book appointments.

## 🔗 Live Demo
[Vercel Deployment](https://doctor-booking-bay.vercel.app)

## 📁 Repository
[GitHub Repository](https://github.com/mowgly77/doctor-booking)

## 🚀 Features

- Modern and responsive UI design
- User-friendly appointment booking system
- Specialist search and filtering
- Real-time appointment availability
- Secure user authentication
- Profile management
- Appointment history tracking

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: styled-components
- **Deployment**: Vercel
- **UI Components**: Custom components with modern design
- **State Management**: React Context API

## 📁 Project Structure

```
doctor-booking-system/
├── app/                    # Next.js app directory
│   ├── components/         # Page-specific components
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── footer.tsx          # Footer component
│   ├── navbar.tsx          # Navigation bar
│   ├── styled/             # Styled components
│   └── ui/                 # UI components
├── data/                   # Data files
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## 🎯 Implementation Status

### 1. Doctor Directory View ✅
- [x] Mock list of doctors (name, photo, specialty, availability, location)
- [x] Filter by specialty and availability
- [x] "Book Appointment" button on each card

### 2. Booking Modal ✅
- [x] Opens when clicking "Book Appointment"
- [x] Shows doctor name and available time slots (mocked)
- [x] Allows time slot selection and confirmation

### 3. Appointments Summary View ✅
- [x] Section to view booked appointments
- [x] Shows doctor name, date/time, specialty, and location

## 🔍 Technical Requirements

### Interface Requirements ✅
- Doctor Card with:
  - Name, specialty, rating, availability
  - "Book" button
- Filter Component (dropdown for specialties)
- Appointment Modal with:
  - Doctor name
  - Available time slots
  - Confirm button
- My Appointments Section with confirmed appointments list

### Accessibility Goals ✅
- [x] All elements keyboard navigable
- [x] Use of aria-label, role, and aria-describedby
- [x] Responsive across mobile, tablet, and desktop
- [x] Passes basic checks in Lighthouse

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mowgly77/doctor-booking.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Data Structure

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

## ⚠️ Known Limitations

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

## 📈 Next Steps

1. Implement user authentication
2. Connect to real backend
3. Add notification system
4. Implement review system
5. Add location map

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Rob Alcántara**
  - Fullstack Developer | Product Owner | Branding | UX/UI
  - GitHub: [mowgly77](https://github.com/mowgly77) 