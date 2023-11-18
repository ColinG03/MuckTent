import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(false);

    //causes the buttons to disappear if window is resized to be too small
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        MuckTent <i className="fa-solid fa-tents"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/recipes' className='nav-links' onClick={closeMobileMenue}>
                                Recipes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/weekly-planner' className='nav-links' onClick={closeMobileMenue}>
                                Weekly Planner
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>WEEKLY PLANNER</Button>}
                </div>
            </nav>

        </>
    )

}

export default Navbar