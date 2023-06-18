import 'normalize.css'
import './styles/main.scss'
import './_app.scss'
import { BrowserRouter as Router } from "react-router-dom"

import { SidebarNavigation } from "./cmps/layout/sidebar-navigation/sidebar-navigation"
import { Feed } from './views/feed/feed'


export function App() {
  return (
    <>
      <Router>
        <div className="app-layout__container">
          <SidebarNavigation />
          <Feed />
        </div>
      </Router>
    </>
  )
}
