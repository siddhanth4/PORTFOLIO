import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas } from "./components";
const Works = React.lazy(() => import('./Component'));


const App = () => {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <div className='main relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        
        <React.Suspense fallback={<div>Loading...</div>}>
        <Works />
        </React.Suspense>
        
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
