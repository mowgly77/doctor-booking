import StyledComponentsRegistry from "@/lib/registry"
import { HomePage } from "./components/HomePage"

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <HomePage />
    </StyledComponentsRegistry>
  )
}
