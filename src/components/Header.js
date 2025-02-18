'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/Isotech-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [width, setWidth] = useState();
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setWidth(window.innerWidth);
        
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (width > 991) {
            setVisible(true);
        } else if (width <= 991) {
            setVisible(false);
        }
    }, [width, pathname]);

    const toggleMenu = (e) => {
        setVisible(!visible);
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <Image
                            priority
                            src={logo}
                            alt="Isotech a Stratum Reservoir brand"
                            width="225"
                            height="56"
                        />
                    </Link>
                </div>

                <div id="mainNav">
                    { width <= 991 &&
                        <button type="button" id="navToggle" aria-controls="navMenu" aria-expanded={visible ? "true" : "false"} aria-label="Toggle main navigation" onClick={toggleMenu}>
                            { visible ? 
                                <FontAwesomeIcon icon={faXmark} className="close-menu"/> :
                                <FontAwesomeIcon icon={faBars} className="open-menu"/>
                            }
                        </button>
                    }
                    <nav id="navMenu" className={visible ? "d-block" : "d-none"}>
                        <ul className="nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdownLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="#servicesDropdownLink">
                                    <li className="dropdown-item"><Link href="/services">Services</Link></li>
                                    <li className="dropdown-item"><Link href="/services/gas">Gas</Link></li>
                                    <li className="dropdown-item"><Link href="/services/water">Water</Link></li>
                                    <li className="dropdown-item"><Link href="#">Solids & Liquids</Link></li>
                                    <li className="dropdown-item"><Link href="/services/interpretive">Interpretive Services</Link></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}