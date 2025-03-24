import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="aboutDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</button>

                            <ul className="dropdown-menu" aria-labelledby="#aboutDropdownBtn">
                                <li className="container">
                                    <Link className="fs-4 mb-3 bold-text" href="/about">About<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>
                                    
                                    <ul className="list-unstyled">
                                        <li><Link href="/about/staff">Staff</Link></li>
                                        <li><Link href="/about/news">News</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="servicesDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</button>

                            <ul className="dropdown-menu" aria-labelledby="#servicesDropdownBtn">
                                <li className="container">
                                    <Link className="fs-4 mb-3 bold-text" href="/services">Services<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>

                                    <ul className="list-unstyled">
                                        <li><Link href="/services/gas">Gas</Link></li>
                                        <li><Link href="/services/water">Water</Link></li>
                                        <li><Link href="/services/cotton">Cotton Origin</Link></li>
                                        <li><Link href="/services/solids-liquids">Solids & Liquids</Link></li>
                                        <li><Link href="/services/interpretive">Interpretive Services</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="productsDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</button>

                            <ul className="dropdown-menu" aria-labelledby="#productsDropdownBtn">
                                <li className="container">
                                    <Link className="fs-4 mb-3 bold-text" href="/products">Products<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>

                                    <ul className="list-unstyled col-list">
                                        <li><Link href="/products/isotube">IsoTube</Link></li>
                                        <li><Link href="/products/isojar">IsoJar</Link></li>
                                        <li><Link href="/products/isobag">IsoBag</Link></li>
                                        <li><Link href="/products/isoflask">IsoFlask</Link></li>
                                        <li><Link href="/products/cylinders">Cylinders</Link></li>
                                        <li><Link href="/products/isotrap">IsoTrap</Link></li>
                                        <li><Link href="/products/isoscrubber">IsoScrubber</Link></li>
                                        <li><Link href="/products/isopak">IsoPak</Link></li>
                                        <li><Link href="/products/dic-kit">DIC Kit</Link></li>
                                        <li><Link href="/products/water-chemistry-kit">Water Chemistry Kit</Link></li>
                                        <li><Link href="/products/warranty">Warranty Information</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/resources">Resources</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
}