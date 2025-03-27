import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import Examples from './components/Examples'
import Steps from './components/Steps'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      {<NavBar />}
      <Banner />
      <Benefits />
      <Examples />
      <Steps />
      <Contact />
    </>
  )
}
