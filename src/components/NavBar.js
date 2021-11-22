import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';


function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton(); 
    },[] )

    window.addEventListener('resize',showButton);

    return (
      <>
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <img src="fitinsured-logo.png" alt />    
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul  className={click ?  'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/get-best-policy' className='nav-links' onClick={closeMobileMenu}>
                            Get Best Policy 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/check-discounts' className='nav-links' onClick={closeMobileMenu}>
                            Check Discounts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/access-fitness-app' className='nav-links' onClick={closeMobileMenu}>
                            Access Fitness App
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Question? (302) 985-6890
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Question? <br></br>(302) 985-6890</Button>}
            </div>
        </div>
      </>
    )
}

export default NavBar