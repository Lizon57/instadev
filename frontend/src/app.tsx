import { BrowserRouter as Router } from "react-router-dom"
import { SidebarNavigation } from "./cmps/layout/sidebar-nabigation"


export function App() {
  return (
    <>
      <Router>
        <SidebarNavigation />
      </Router>
    </>
  )
}
