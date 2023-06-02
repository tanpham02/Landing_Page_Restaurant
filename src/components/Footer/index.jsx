import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="grid">
                <div className="grid-row">
                    <div className="grid-col footer__heading">
                        <h2 className="footer__title">
                            People who are ready took these courses!
                        </h2>
                        <button className="footer__btn-appointment btn">Schedule Appointment</button>
                    </div>
                </div>

                <div className="grid-row">
                    <div className="grid-col-4-6"
                        style={{
                            paddingLeft: 100
                        }}
                    >
                        <a href='/' className="footer__logo">FreeLancin.io</a>
                        <span className="footer__desc">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
                    </div>

                    <div className="grid-col-6-4 footer__main">
                        <div className="footer__links">
                            <h3 className="links-text">Links</h3>

                            <div className="links-text__body">
                                <span className="link-content">Overons</span>
                                <span className="link-content">Social Media</span>
                                <span className="link-content">Counters</span>
                                <span className="link-content">Contact</span>
                            </div>
                        </div>

                        <div className="footer__links">
                            <h3 className="links-text">Company</h3>

                            <div className="links-text__body">
                                <span className="link-content">Terms & Conditions</span>
                                <span className="link-content">Privacy Policy</span>
                                <span className="link-content">Contact</span>
                            </div>
                        </div>

                        <div className="footer__links">
                            <h3 className="links-text">Get in touch</h3>

                            <div className="links-text__body">
                                <span className="link-content">Crechterwoord K12 182 DK Alknjkcb</span>
                                <span className="link-content">085-132567</span>
                                <span className="link-content">info@lobar.net</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="copy-right">© 2021 ar-shakir. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer