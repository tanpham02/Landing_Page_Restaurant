import './testimonials.scss'


function Testimonials() {
    return (
        <div className="testimonials pb-130">
            <div className="grid">
                <div className="grid-row ">
                    <div className="grid-col align-center" style={{
                        flexDirection: 'column'
                    }}>
                        <h2 className="testimonials__title">What our Customers say</h2>
                        <span className="testimonials__desc">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</span>
                    </div>
                    <div className="grid-col align-center">
                        <button className="btn-prev btn">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.70752 10.585L3.12253 6L7.70752 1.41502L6.29255 -6.18503e-08L0.292549 6L6.29255 12L7.70752 10.585Z" fill="#5F5F5F" />
                            </svg>

                        </button>
                        <div className="testimonials__body align-center">
                            <img width={106} height={106} src="/assets/image/header/copy-modified.png" alt="" />
                            <h3 className="testimonials__name">Stephan Louis</h3>
                            <h3 className="testimonials__introduced">Stephan Louis</h3>
                            <span className="testimonials__desc">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</span>
                        </div>

                        <button className="btn-next btn">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.29248 1.41502L4.87747 6L0.29248 10.585L1.70745 12L7.70745 6L1.70745 8.91824e-07L0.29248 1.41502Z" fill="#5F5F5F" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: -20,
                        right: '50%',
                        transform: 'translate(-50%, 0)',
                    }}
                >
                    <span
                        style={{
                            position: 'absolute',
                            top: '0',
                            right: 60,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: '#D3E5FF',
                        }}
                    ></span>
                    <span
                        style={{
                            position: 'absolute',
                            top: '0',
                            right: 20,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: 'var(--primary-color)',
                        }}
                    ></span>
                    <span
                        style={{
                            position: 'absolute',
                            top: '0',
                            right: -20,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: '#D3E5FF',
                        }}
                    ></span>
                    <span
                        style={{
                            position: 'absolute',
                            top: '0',
                            right: -60,
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: '#D3E5FF',
                        }}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials