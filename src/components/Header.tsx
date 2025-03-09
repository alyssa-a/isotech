import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/Isotech-logo.png';
import MainNav from './MainNav';

export default function Header() {
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

                <MainNav/>

                {/* <div id="mainNav">
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

                </div> */}
            </div>
        </header>
    )
}