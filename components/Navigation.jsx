/* React Components */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

/* Styling elements */
import { Row, Col } from 'react-bootstrap'
import header from '../styles/Header.module.css'
import { Button } from '../components/Button'

/**
 * The modular react component.
 * 
 * @function Navigation
 * @returns menu for desktop and phone.
 */
export const Navigation = () => {

    // Action variables
    const [isActive, setActive] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    // Toggle menu for phone
    const menuToggle = () => {
        setActive(!isActive);
    };

    // Can change active class for menu
    useEffect(()=>{
        setActiveMenu(window.location.pathname)
      }, [activeMenu]);

    return (
        <>
        <div className={`${header.navigation} ${isActive ? "actNav" : null}`}>
            <Row className='align-items-center justify-content-between'>
                <Col className='col-auto'>
                    <div className={header.logo}>
                    <Link href={'/'} className={`${header.logo}`}>&nbsp;</Link>  
                    </div>
                </Col>
                <Col>
                    { /* Mobile Menu */ }
                    <div className={`d-lg-none ${header.mobile_menu_button} ${isActive ? "menuActiveBtn" : null}`} onClick={menuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`d-lg-none ${header.menu_container} ${isActive ? "navMenuActiveOutr" : null}`}>
                        <div className={`${header.mobile_menuCross_button} ${isActive ? "menuActiveBtn" : null}`} onClick={menuToggle}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`${header.mblMenuLinkList}`}>
                            <div className={`${header.mblMenuLink}`}>
                                <Link href="/">Pricing</Link>
                            </div>
                            <div className={`${header.mblMenuLink}`}>
                                <Link href="/">Rewards</Link>
                            </div>
                            <div className={`${header.mblMenuLink}`}>
                                <Link href="/">Download</Link>
                            </div>
                            <div className={`${header.mblMenuLink}`}>
                                <Link href="/">Login</Link>
                            </div>
                        </div>
                        <div className='mt-4 pt-4'>
                            <Button
                                title="Free sign up"
                                button_url="/sign-up"
                                button_theme="dark"
                            />
                        </div>
                    </div>

                    { /* Desktop Menu */ }
                    <div className='d-none d-lg-block'>
                        <div className={`${header.menu_container}`}>
                            <ul>
                                <li className={`${activeMenu == '/pricing' ? header.active : 'active'}`}>
                                    <Link href="/">Pricing</Link>
                                </li>
                                <li className={`${activeMenu == '/rewards' ? header.active : 'active'}`}>
                                    <Link href="/">Rewards</Link>
                                </li>
                                <li className={`${activeMenu == '/download' ? header.active : 'active'}`}>
                                    <Link href="/">Download</Link>
                                </li>
                                <li className={`${activeMenu == '/lgoin' ? header.active : 'active'}`}>
                                    <Link href="/">Login</Link>                            
                                </li>
                            </ul>
                            <Button
                                title="Free sign up"
                                button_url="/"
                            />  
                        </div>
                    </div>
                </Col>
            </Row>
        </div>      
        </>
    )
}