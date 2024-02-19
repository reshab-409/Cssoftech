import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CasePage from './Components/Casestudy/CasePage';
import CasePage2 from './Components/CaseStudy2/CasePage2';
import Home from './Components/Home/Home';
import './Components/icon/style.css';
import SoftwearDevelopement from './Components/Softwear_developement/SoftwearDevelopement';
import ITStaffAugmentationServicesMain from './Components/IT Staff Augmentation Services/IT Staff_Augmentation_Services';
import WebDevelopment from './Components/Web_developement/Web_developement';
import EcommerceDevelopement from './Components/E-commerceDevelopement/EcommerceDevelopement';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import SoftwearDevelopementInner from './Components/InnerServicePage/Softwear_developement_Inner/SoftwearDevelopement_Inner';
import ITStaffAugmentationServicesInner from './Components/InnerServicePage/IT Staff Augmentation Services Inner/IT Staff_Augmentation_Services_Inner';
import ReactDevelopment from './Components/InnerServicePage/Web_developement_Inner/React_Development';
import NativeDevelopement from './Components/InnerServicePage/Mobile_App_Developement_Inner/Native_Development';
import MagentoDevelopment from './Components/InnerServicePage/E-commerceDevelopement/MagentoDevelopment';
import MobileAppDevelopement from './Components/Mobile_App_Developement/Mobile_App_Developement';
import TermsServices from './Components/T&C, P&P/Terms&Services';
import PrivacyPolicy from './Components/T&C, P&P/Privacy&Policy';
import EducationElearning from './Components/InnerIndustryPages/EDUCATION & E-LEARNING/EducationElearning';
import HealthCare from './Components/InnerIndustryPages/HealthCare/HealthCare';
import FoodBeverages from './Components/InnerIndustryPages/FOOD & BEVERAGES/FoodBeverages';
import LogisticTransportation from './Components/InnerIndustryPages/LOGISTIC & TRANSPORTATION/LogisticTransportation';
import RealEstate from './Components/InnerIndustryPages/REAL ESTATE/RealEstate';
import RetailEcommerce from './Components/InnerIndustryPages/RETAIL & E-COMMERCE/RetailEcommerce';
import { useRef } from 'react';


function App() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <Header onHeaderClick={scrollToTarget} />
      <Routes>
        <Route path='/' element={<Home targetRef={targetRef} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/terms-and-services' element={<TermsServices />} />
        <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
        {/* Case-study */}
        <Route path='/case-study' element={<CasePage />} />
        <Route path='/case-study-details-page' element={<CasePage2 />} />
        {/* It-staff */}
        <Route path='/it-staff-augmentation' element={<ITStaffAugmentationServicesMain />} />
        <Route path='/it-staff-augmentation-services' element={<ITStaffAugmentationServicesInner />} />
        {/* Mobile-dev */}
        <Route path='/mobile-development' element={<MobileAppDevelopement />} />
        <Route path='/native-development' element={<NativeDevelopement />} />
        {/* Web-dev */}
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/react-development' element={<ReactDevelopment />} />
        {/* E-commarce-dev */}
        <Route path='/ecommerce-development' element={<EcommerceDevelopement />} />
        <Route path='/magento-development' element={<MagentoDevelopment />} />
        {/* Softwear-dev */}
        <Route path='/softwear-development' element={<SoftwearDevelopement />} />
        <Route path='/softwear-development-inner' element={<SoftwearDevelopementInner />} />
        {/* Industry*/}
        <Route path='/healthcare' element={<HealthCare />} />
        <Route path='/food-beverages' element={<FoodBeverages />} />
        <Route path='/retail-ecommerce' element={<RetailEcommerce />} />
        <Route path='/real-estate' element={<RealEstate />} />
        <Route path='/logistic-transportation' element={<LogisticTransportation />} />
        <Route path='/education-e-learning' element={<EducationElearning />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer onHeaderClick={scrollToTarget}/>
    </Router>
  );
}

export default App;
