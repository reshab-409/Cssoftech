import React, { useEffect, useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

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
          <Link aria-label="logo" to='/' rel="preload" className="brand">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* <!-- Section: Navbar Menu --> */}
          <div className="header-item-center">
            <div className="overlay"></div>
            <nav className="menu">
              <div className="menu-mobile-header">
                <button aria-label="menu-arrow" type="button" className="menu-mobile-arrow"><i className="bi bi-arrow-left"></i></button>
                <div className="menu-mobile-title">
                </div>
                <button aria-label="menu-close" type="button" className="menu-mobile-close"><i className="bi bi-x"></i></button>
              </div>
              <ul className="menu-section">
                <li onClick={menuClosedClick}> <Link to='/' rel="preload">Home </Link></li>
                <li className="menu-item-has-children">
                  <Link>Company <i className="arrowdown"></i></Link>
                  <div className="menu-subs">
                    <div className="menu-mega">
                      <div className="list-item">
                        <ul>
                          <li onClick={menuClosedClick}><Link to='/about' rel="preload">About Us</Link></li>
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
                        <Link onClick={menuClosedClick} to='/mobile-development' rel="preload"><h4 className="title">MOBILE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/native-development' rel="preload">React Native Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development' rel="preload">Flutter App Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development' rel="preload">Native Android Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/native-development' rel="preload">Native iOS App Development</Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/ecommerce-development' rel="preload"> <h4 className="title">E-COMMERCE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='magento-development' rel="preload">Magento Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='magento-development' rel="preload">WooCommerce Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='magento-development' rel="preload">Shopify Development</Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/softwear-development' rel="preload">  <h4 className="title">SOFTWARE DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/softwear-development-inner' rel="preload">Software Development</Link></li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/web-development' rel="preload">  <h4 className="title">WEB DEVELOPMENT</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">React Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Node.js Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Angular Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">WordPress Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Drupal Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">.Net Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">PHP Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Python Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Java Development</Link></li>
                          <li><Link onClick={menuClosedClick} to='/react-development' rel="preload">Laravel Development</Link></li>
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
                        <Link onClick={menuClosedClick} to='/it-staff-augmentation' rel="preload">  <h4 className="title">IT STAFF AUGMENTATION</h4></Link>
                        <ul>
                          <li><Link onClick={menuClosedClick} to='/it-staff-augmentation-services' rel="preload">IT Staff Augmentation Services</Link></li>
                        </ul>
                      </div>
                      <img className='lgo' src={logo} alt="" />
                      <Link onClick={menuClosedClick} to='/contactUs' rel="preload" className="lgo login">Contact Us</Link>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link>Industry <i className="arrowdown"></i></Link>
                  <div className="menu-subs">
                    <div className="menu-mega">
                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/healthcare' rel="preload"> <h4 className="title">Health Care</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/food-beverages' rel="preload"><h4 className="title">Food & Beverages</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/real-estate' rel="preload"><h4 className="title">Real estate</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <Link onClick={menuClosedClick} to='/education-e-learning' rel="preload"><h4 className="title">Education & E-learning</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/retail-ecommerce' rel="preload"><h4 className="title">Retail & E-commerce</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                        <Link onClick={menuClosedClick} to='/logistic-transportation' rel="preload"><h4 className="title">Logistic & transportation</h4></Link>
                        <ul>
                          <li><Link></Link></li>
                        </ul>
                      </div>
                      <img className='lgo' src={logo} alt="" />
                      <Link onClick={menuClosedClick} to='/contactUs' rel="preload" className="lgo login">Contact Us</Link>
                    </div>
                  </div>
                </li>
                <li><Link>Products </Link></li>
                <li><Link onClick={menuClosedClick} to='/case-study' rel="preload">Case Studies </Link></li>
                <li><Link>Blog </Link></li>

                <img className='lgo' src={logo} alt="" />
                <Link onClick={menuClosedClick} to='/contactUs' rel="preload" className="lgo login">Contact Us</Link>
              </ul>
            </nav>
          </div>

          <div className="header-item-right">
            <Link to='/contactUs' rel="preload" className="login">Contact Us</Link>
            <button aria-label="menu-trigger" type="button" className="menu-mobile-trigger">
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
