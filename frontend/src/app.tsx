import 'normalize.css'
import './styles/main.scss'
import './_app.scss'
import { BrowserRouter as Router } from "react-router-dom"

import { NavigationBar } from "./cmps/layout/navigation-bar/nivigation-bar"
import { Feed } from './views/feed/feed'


export function App() {
  return (
    <>
      <Router>
        <div className="app-layout__container">
          <NavigationBar />
          <Feed />
        </div>
      </Router>
    </>
  )
}
