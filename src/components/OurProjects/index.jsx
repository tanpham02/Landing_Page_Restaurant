import './ourProjects.scss'

function OurProjects() {
    return (
        <div className="our-projects pb-130">
            <div className="grid">
                <div className="grid-row">
                    <div className="grid-col"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h2 className="our-projects__title">Our Projects</h2>
                        <span className="our-projects__desc">We have been providing great flooring solutions service.</span>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-col align-center pb-130">
                        <button className="our-projects__btn btn active">All</button>
                        <button className="our-projects__btn btn">Websites</button>
                        <button className="our-projects__btn btn">Social Media</button>
                        <button className="our-projects__btn btn">UI/UX</button>
                        <button className="our-projects__btn btn">Market</button>
                    </div>
                </div>

                <div className="grid-row">
                    <div
                        className="grid-col"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingBottom: 40
                        }}
                    >
                        <button className="btn-prev btn">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.70752 10.585L3.12253 6L7.70752 1.41502L6.29255 -6.18503e-08L0.292549 6L6.29255 12L7.70752 10.585Z" fill="#5F5F5F" />
                            </svg>

                        </button>
                        <button className="btn-next btn">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.29248 1.41502L4.87747 6L0.29248 10.585L1.70745 12L7.70745 6L1.70745 8.91824e-07L0.29248 1.41502Z" fill="#5F5F5F" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="our-projects__body">
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/picture-shop.png" alt="Picture Shop" />
                    <div className="content-body">
                        <h3 className="content-body__name">Picture Shop</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/travel.png" alt="Traveloka" />
                    <div className="content-body">
                        <h3 className="content-body__name">Traveloka</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/furniture-shop.png" alt="MOHO" />
                    <div className="content-body">
                        <h3 className="content-body__name">Furnishop</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/bioderma.png" alt="Bioderma" />
                    <div className="content-body">
                        <h3 className="content-body__name">Bioderma</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/picture-shop.png" alt="Picture Shop" />
                    <div className="content-body">
                        <h3 className="content-body__name">Picture Shop</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/travel.png" alt="Traveloka" />
                    <div className="content-body">
                        <h3 className="content-body__name">Traveloka</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/furniture-shop.png" alt="MOHO" />
                    <div className="content-body">
                        <h3 className="content-body__name">Furnishop</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
                <div className="our-projects__content">
                    <img src="/assets/image/project-our/bioderma.png" alt="Bioderma" />
                    <div className="content-body">
                        <h3 className="content-body__name">Bioderma</h3>
                        <span className="content-body__desc">Company Website</span>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default OurProjects
