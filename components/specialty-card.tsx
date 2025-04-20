"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doctor } from "@/types/doctor"

interface SpecialtyCardProps {
  name: string
  description: string
  doctors: Doctor[]
}

export function SpecialtyCard({ name, description, doctors }: SpecialtyCardProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    console.log("SpecialtyCard props:", { name, description, doctors })
  }, [name, description, doctors])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer h-full">
          <CardHeader>
            <CardTitle className="text-xl">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
            <p className="text-xs text-gray-500 mt-2">
              {doctors.length} {doctors.length === 1 ? 'doctor' : 'doctors'} available
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Doctors</h4>
            <div className="flex flex-col gap-2">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      {doctor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{doctor.name}</p>
                    <p className="text-xs text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 