import './App.css';
import Header from './components/Header';
import AppTheme from './shared-theme/AppTheme';
import Hero from './components/Hero';
import { Divider } from '@mui/material';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Highlights from './components/Highlights';  
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App(props) {
  return (
    <AppTheme {...props}>    
      <Header />
      <Hero />
      <div>
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />

        {/* <Features /> */}
      </div>
    </AppTheme>
  );
}

export default App;
