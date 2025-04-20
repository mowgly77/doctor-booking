"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SpecialtyCard } from "@/components/specialty-card"

const specialties = [
  {
    id: "1",
    name: "Cardiología",
    description: "Especialidad médica que se ocupa de las afecciones del corazón y del aparato circulatorio.",
    doctors: [
      {
        id: "1",
        name: "Dr. Juan Pérez",
        specialty: "Cardiología",
        description: "Especialista en cardiología con más de 15 años de experiencia."
      },
      {
        id: "2",
        name: "Dra. María García",
        specialty: "Cardiología",
        description: "Experta en cardiología preventiva y rehabilitación cardíaca."
      }
    ]
  },
  {
    id: "2",
    name: "Dermatología",
    description: "Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades de la piel.",
    doctors: [
      {
        id: "3",
        name: "Dr. Carlos López",
        specialty: "Dermatología",
        description: "Especialista en dermatología clínica y estética."
      }
    ]
  },
  {
    id: "3",
    name: "Pediatría",
    description: "Especialidad médica que se ocupa de la salud y enfermedades de los niños.",
    doctors: [
      {
        id: "4",
        name: "Dra. Ana Martínez",
        specialty: "Pediatría",
        description: "Pediatra especializada en desarrollo infantil."
      }
    ]
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          Doctor Booking
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Inicio
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/specialties" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Especialidades
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] p-2">
            <div className="grid gap-2">
              {specialties.map((specialty) => (
                <DropdownMenuItem key={specialty.id} asChild>
                  <div className="w-full">
                    <SpecialtyCard
                      name={specialty.name}
                      description={specialty.description}
                      doctors={specialty.doctors}
                    />
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/doctors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/doctors" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Doctores
        </Link>
      </nav>
    </div>
  )
} 