import './App.css';
import Header from './marketing-page/components/Header';
import AppTheme from './shared-theme/AppTheme';
import Hero from './marketing-page/components/Hero';
import LogoCollection from './marketing-page/components/LogoCollection';
import Features from './marketing-page/components/Features';
import { Divider } from '@mui/material';
import Testimonials from './marketing-page/components/Testimonials';
import Pricing from './marketing-page/components/Pricing';
import Highlights from './marketing-page/components/Highlights';  
import Footer from './marketing-page/components/Footer';
import FAQ from './marketing-page/components/FAQ';

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
