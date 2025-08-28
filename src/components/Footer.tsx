import Link from "next/link";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="main-footer py-5">
                <div className="container">
                    <h2 className="wordmark">
                        <span className="isotech">ISOTECH</span>
                        <span className="stratum">a <span className="fw-semibold">Stratum Reservoir</span> brand</span>
                    </h2>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <p className="mb-0 mt-4">
                                1308 Parkland Court<br/>
                                Champaign, Illinois 61821<br/>
                                Phone: 217-398-3490
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <p className="mb-0 mt-4">
                                <strong>Order Products:</strong><br/>
                                <Link href="mailto:onlineorders@stratumreservoir.com">onlineorders@stratumreservoir.com</Link>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <p className="mb-0 mt-4">
                                <strong>Certifications:</strong><br/>
                                <Link href="/files/ISO17025certificate.pdf" target="_blank">ISO / IEC 17025:2017</Link><br/>
                                <Link href="/files/ISO9001certificate.pdf" target="_blank">ISO 9001:2015</Link>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="copyright py-2">
                <div className="container">
                    <p className="mb-0">Copyright &copy; {year} Stratum Reservoir (Isotech) LLC</p>
                </div>
            </div>
        </footer>
    )
}