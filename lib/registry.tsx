"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useEffect(() => {
    setMounted(true)
  }, [])

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window === "undefined") {
    return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  }

  return <>{children}</>
}
