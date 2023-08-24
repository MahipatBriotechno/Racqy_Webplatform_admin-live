import { createTheme, makeStyles } from "@material-ui/core"
import { Match } from "@reach/router"
import { Router } from "@reach/router"
import React from "react"
import { ThemeProvider } from "styled-components"
import Appbar from "../Component/Appbar"
import DrawerSide from "../Component/Drawer/DrawerSide"
import Welcome from "../Component/Drawer/Screen/Welcome"
import Footer from "../Component/Footer"
import Home from "../Component/Home"
import Login from "../Component/Login/Login"
import StapperMain from "../Component/Stapper/StapperMain"
import About from "./About/About";
import Cookies from "./Cookies/Cookies";
import DownloadApp from "./DownloadApp/DownloadApp";
import Help from "./Help/Help";
import Invest from "./Invest/Invest";
import PressKit from "./PressKit/PressKit";
import Privacy from "./Privacy/Privacy";
import Term from "./Term/Term";

const theme = createTheme({
  "@global": {
    body: { backgroundColor: 'white' }
  }
});



export default function HomePage() {
  const NotFound = () => <p>Sorry, nothing here.</p>;
  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: 'white' }}>
        <Appbar />
        <Router  >
          <Home path="Admin/Pages/*" />
          <Match path="/Admin/Component/Login/Login">
            <Login />
          </Match>
          <Match path="/Admin/Component/Drawer/Screen/Welcome/">
            <Welcome />
          </Match>
          <Match path="Admin/Pages/About/About">
            <About />
          </Match>
          <Match path="Admin/Pages/PressKit/PressKit">
            <PressKit />
          </Match>
          <Match path="Admin/Pages/Invest/Invest">
            <Invest />
          </Match>
          <Match path="Admin/Pages/Term/Term">
            <Term />
          </Match>
          <Match path="Admin/Pages/Privacy/Privacy">
            <Privacy />
          </Match>
          <Match path="Admin/Pages/Cookies/Cookies">
            <Cookies />
          </Match>
          <Match path="Admin/Pages/DownloadApp/DownloadApp">
            <DownloadApp />
          </Match>
          <Match path="Admin/Pages/Help/Help">
            <Help />
          </Match>
          <NotFound default />
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  )

}
