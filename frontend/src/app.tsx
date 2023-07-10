import 'normalize.css'
import './styles/main.scss'
import './_app.scss'
import { BrowserRouter as Router } from "react-router-dom"

import { SmallScreenTopBar } from './cmps/layout/small-screen-top-bar/small-screen-top-bar'
import { NavigationBar } from "./cmps/layout/navigation-bar/nivigation-bar"
import { Feed } from './views/feed/feed'
import { RenderByDeviceWidth } from './cmps/layout/render-by-device-width/render-by-device-width'


export function App() {
  return (
    <>
      <Router>
        <div className="app-layout__container">
          <RenderByDeviceWidth maxDeviceWide="small">
            <SmallScreenTopBar />
          </RenderByDeviceWidth>
          <NavigationBar />
          <Feed />
        </div>
      </Router>
    </>
  )
}
