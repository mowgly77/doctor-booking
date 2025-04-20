"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function NavLink({ className, children, ...props }: NavLinkProps) {
  return (
    <span
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
} 