import Link from 'next/link';

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
                            <Link className="nav-link" href="/about">About</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">Services</Link>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link" href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/resources">Resources</Link>
                        </li>  

                        {/* <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="servicesDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</button>

                            <ul className="dropdown-menu" aria-labelledby="#servicesDropdownBtn">
                                <li>
                                    <div className='container'>
                                        <Link className="fs-5 d-inline-block mb-2" href="/services">Services</Link>
                                        <ul className="list-unstyled">
                                            <li><Link href="/services/gas">Gas</Link></li>
                                            <li><Link href="/services/water">Water</Link></li>
                                            <li><Link href="#">Cotton Origin</Link></li>
                                            <li><Link href="#">Solids & Liquids</Link></li>
                                            <li><Link href="/services/interpretive">Interpretive Services</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}