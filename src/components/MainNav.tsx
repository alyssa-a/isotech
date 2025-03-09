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
                            <button className="nav-link dropdown-toggle" id="servicesDropdownLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</button>

                            <ul className="dropdown-menu" aria-labelledby="#servicesDropdownLink">
                                <li className="dropdown-item"><Link href="/services">Services</Link></li>
                                <li className="dropdown-item"><Link href="/services/gas">Gas</Link></li>
                                <li className="dropdown-item"><Link href="/services/water">Water</Link></li>
                                <li className="dropdown-item"><Link href="#">Solids & Liquids</Link></li>
                                <li className="dropdown-item"><Link href="/services/interpretive">Interpretive Services</Link></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}