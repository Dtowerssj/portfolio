import {BrowserRouter} from 'react-router-dom';
import { About, Contact, Experience, Speaking, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from "@vercel/analytics/react"

const App = () => {

  return (
    <BrowserRouter>
    <Analytics />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience /> 
        <Speaking />
        <Tech />
        <Works />
        {/* Testimonials hidden for now (the data lives in constants.js). To show them again, uncomment: */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
