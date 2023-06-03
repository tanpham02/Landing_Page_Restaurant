import { useLayoutEffect, useState } from 'react'
import './testimonials.scss'
const testimonials = [
    {
        img: '/assets/image/testimonials/image-1.png',
        name: 'William',
        career: 'Developer'
    },
    {
        img: '/assets/image/testimonials/image-2.png',
        name: 'Benjamin',
        career: 'Designer'
    },
    {
        img: '/assets/image/testimonials/image-3.png',
        name: 'Sebastian',
        career: 'Marketing'
    },
]

function Testimonials() {

    const [show, setShow] = useState(0)

    const handlePrev = () => {
        setShow(show - 1)
    }

    useLayoutEffect(() => {
        if (show < 0) {
            setShow(testimonials.length - 1)
        } else if (show > testimonials.length - 1) {
            setShow(0)
        }
    }, [show])

    const handleNext = () => {
        setShow(show + 1)
    }

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
                        <button className="btn-prev btn"
                            onClick={handlePrev}

                        >
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.70752 10.585L3.12253 6L7.70752 1.41502L6.29255 -6.18503e-08L0.292549 6L6.29255 12L7.70752 10.585Z" fill="#5F5F5F" />
                            </svg>

                        </button>
                        {testimonials.map((testi, index) => (show === index &&
                            <>
                                <div key={index} className="testimonials__body align-center">
                                    <img width={106} height={106} style={{ objectFit: 'cover', borderRadius: '50%' }} src={testi.img} alt=""

                                    />
                                    <h3 className="testimonials__name">{testi.name}</h3>
                                    <h3 className="testimonials__introduced">{testi.career}</h3>
                                    <span className="testimonials__desc">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</span>
                                </div>
                            </>
                        ))}

                        <button className="btn-next btn"
                            onClick={handleNext}
                        >
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.29248 1.41502L4.87747 6L0.29248 10.585L1.70745 12L7.70745 6L1.70745 8.91824e-07L0.29248 1.41502Z" fill="#5F5F5F" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: -25,
                        right: '0',
                        width: '100%',
                        height: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: -22
                    }}
                >

                    {testimonials.map((dot, index) => (
                        <>
                            <span key={index}
                                style={{
                                    background: `${show === index ? 'var(--primary-color)' : '#D3E5FF'} `,
                                    width: 10,
                                    display: 'inline-block',
                                    height: 10,
                                    borderRadius: '50%',
                                    marginRight: 30
                                }}
                            ></span>
                        </>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials