import React, { useEffect, useState } from 'react';
import logo from '../img/logo.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onHeaderClick }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const menuSectionClick = (e) => {
    if (!isMenuActive) {
      return;
    }
    const hasChildren = e.target.closest('.menu-item-has-children');
    if (hasChildren) {
      showSubMenu(hasChildren);
    }
  };

  const menuArrowClick = () => {
    hideSubMenu();
  };

  const menuTriggerClick = () => {
    toggleMenu();
  };

  const menuClosedClick = () => {
    toggleMenu();
  };

  const menuOverlayClick = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
    const updatedMenu = document.querySelector('.menu');
    const updatedMenuOverlay = document.querySelector('.overlay');

    if (updatedMenu && updatedMenuOverlay) {
      updatedMenu.classList.toggle('active');
      updatedMenuOverlay.classList.toggle('active');
    }
  };


  const showSubMenu = (hasChildren) => {
    const submenu = hasChildren.querySelector('.menu-subs');
    setSubMenu(submenu);
    submenu.classList.add('active');
    submenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    document.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    document.querySelector('.menu-mobile-header').classList.add('active');
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setSubMenu(null);
        subMenu.classList.remove('active');
      }, 300);

      document.querySelector('.menu-mobile-title').innerHTML = '';
      document.querySelector('.menu-mobile-header').classList.remove('active');
    }
  };

  const windowResize = () => {
    if (window.innerWidth > 991 && isMenuActive) {
      toggleMenu();
    }
  };

  useEffect(() => {
    document.querySelector('.menu-section').addEventListener('click', menuSectionClick);
    document.querySelector('.menu-mobile-arrow').addEventListener('click', menuArrowClick);
    document.querySelector('.menu-mobile-trigger').addEventListener('click', menuTriggerClick);
    document.querySelector('.menu-mobile-close').addEventListener('click', menuClosedClick);
    document.querySelector('.overlay').addEventListener('click', menuOverlayClick);
    window.addEventListener('resize', windowResize);

    return () => {
      document.querySelector('.menu-section').removeEventListener('click', menuSectionClick);
      document.querySelector('.menu-mobile-arrow').removeEventListener('click', menuArrowClick);
      document.querySelector('.menu-mobile-trigger').removeEventListener('click', menuTriggerClick);
      document.querySelector('.menu-mobile-close').removeEventListener('click', menuClosedClick);
      document.querySelector('.overlay').removeEventListener('click', menuOverlayClick);
      window.removeEventListener('resize', windowResize);
    };
  }, [isMenuActive, subMenu]);



  // Why choose us page scroll
  const handleLinkClick = () => {
    // You can add a delay to ensure navigation happens before scrolling
    setTimeout(() => {
      onHeaderClick()
    }, 100); // Adjust the delay as needed
  };
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header-item-left">
            <h1><Link to='/' className="brand">
              <img src={logo} alt="" />
            </Link></h1>
          </div>
          {/* <!-- Section: Navbar Menu --> */}
          <div className="header-item-center">
            <div className="overlay"></div>
            <nav className="menu">
              <div className="menu-mobile-header">
                <button type="button" className="menu-mobile-arrow"><i className="bi bi-arrow-left"></i></button>
                <div className="menu-mobile-title">
                </div>
                <button type="button" className="menu-mobile-close"><i className="bi bi-x"></i></button>
              </div>
              <ul className="menu-section">
                <li onClick={menuClosedClick}> <Link to='/'>Home </Link></li>
                <li className="menu-item-has-children">
                  <Link>Company <i className="arrowdown"></i></Link>
                  <div className="menu-subs">
                    <div className="menu-mega">
                      <div className="list-item">
                        <ul>
                          <li onClick={menuClosedClick}><Link to='/about'>About Us</Link></li>
                          <li><Link to='/' onClick={() => { menuClosedClick(); handleLinkClick(); }}>Why choose us?</Link></li>
                          <li><Link>Certifications</Link></li>
                        </ul>
                      </div>

                      <img className='lgo' src={logo} alt="" />
                      <Link to='/contactUs' className="lgo login">Contact Us</Link>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link>Service <i className="arrowdown"></i></Link>
                  <div className="menu-subs">
                    <div className="menu-mega">
                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/mobile-development'><h4 className="title">MOBILE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/native-development'>React Native Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development'>Flutter App Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development'>Native Android Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development'>Native iOS App Development</Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/ecommerce-development'> <h4 className="title">E-COMMERCE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='magento-development'>Magento Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='magento-development'>WooCommerce Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='magento-development'>Shopify Development</Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/softwear-development'>  <h4 className="title">SOFTWARE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/softwear-development-inner'>Software Development</Link></li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/web-development'>  <h4 className="title">WEB DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/react-development'>React Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Node.js Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Angular Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>WordPress Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Drupal Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>.Net Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>PHP Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Python Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Java Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development'>Laravel Development</Link></li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <h4 className="title">DIGITAL MARKETING</h4>
                        <ul>
                          <li><Link>SEO Services</Link></li>
                          <li><Link>SMM Services</Link></li>
                          <li><Link>PPC Services</Link></li>
                          <li><Link>App Marketing Services</Link></li>
                          <li><Link>Content Marketing Services</Link></li>
                        </ul>
                        <h4 className="title">FULL STACK DEVELOPMENT</h4>
                        <ul>
                          <li><Link>Full Stack Development</Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/it-staff-augmentation'>  <h4 className="title">IT STAFF AUGMENTATION</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/it-staff-augmentation-services'>IT Staff Augmentation Services</Link></li>
                        </ul>
                      </div>
                      <img className='lgo' src={logo} alt="" />
                      <Link onClick={menuClosedClick} to='/contactUs' className="lgo login">Contact Us</Link>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link>Industry <i className="arrowdown"></i></Link>
                  <div className="menu-subs">
                    <div className="menu-mega">
                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/healthcare'> <h4 className="title">Health Care</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/food-beverages'><h4 className="title">Food & Beverages</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/real-estate'><h4 className="title">Real estate</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/education-e-learning'><h4 className="title">Education & E-learning</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/retail-ecommerce'><h4 className="title">Retail & E-commerce</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/logistic-transportation'><h4 className="title">Logistic & transportation</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                      </div>
                      <img className='lgo' src={logo} alt="" />
                      <Link onClick={menuClosedClick} to='/contactUs' className="lgo login">Contact Us</Link>
                    </div>
                  </div>
                </li>
                <li><Link>Products </Link></li>
                <li><Link onClick={menuClosedClick} to='/case-study'>Case Studies </Link></li>
                <li><Link>Blog </Link></li>

                <img className='lgo' src={logo} alt="" />
                <Link onClick={menuClosedClick} to='/contactUs' className="lgo login">Contact Us</Link>
              </ul>
            </nav>
          </div>

          <div className="header-item-right">
            <Link to='/contactUs' className="login">Contact Us</Link>
            <button type="button" className="menu-mobile-trigger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
