import { useEffect } from 'react'
import './ourProjects.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slices = [
    {
        name: 'Picture Shop',
        desc: 'Company Website',
        img: '/assets/image/project-our/picture-shop.png'
    },
    {
        name: 'Traveloka',
        desc: 'Company Website',
        img: '/assets/image/project-our/travel.png'
    },
    {
        name: 'Furnishop',
        desc: 'Company Website',
        img: '/assets/image/project-our/furniture-shop.png'
    },
    {
        name: 'Bioderma',
        desc: 'Company Website',
        img: '/assets/image/project-our/bioderma.png'
    },
]

function OurProjects() {

    const handleActive = e => {
        const btns = document.querySelectorAll('.our-projects__btn')
        btns.forEach(btn => btn.classList.contains('active') && btn.classList.remove('active'))
        e.target.classList.add('active')
    }


    useEffect(() => {
        const btnPrev = document.querySelector('.slick-arrow.slick-prev')
        const b = document.querySelector('.slick-slider.slick-initialized')

        Object.assign(b.style, {
            position: 'static',
            padding: '0 52px',
            overflow: 'hidden'
        })

        btnPrev.innerHTML = `
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.70752 10.585L3.12253 6L7.70752 1.41502L6.29255 -6.18503e-08L0.292549 6L6.29255 12L7.70752 10.585Z" fill="#5F5F5F" />
            </svg>
        `
        Object.assign(btnPrev.style, {
            boxSizing: 'border-box',
            width: '50px',
            height: '50px',
            border: '1px solid #5F5F5F',
            borderRadius: '50%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
        })
    }, [])
    useEffect(() => {
        const btnNext = document.querySelector('.slick-arrow.slick-next')

        btnNext.innerHTML = `
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.29248 1.41502L4.87747 6L0.29248 10.585L1.70745 12L7.70745 6L1.70745 8.91824e-07L0.29248 1.41502Z" fill="#5F5F5F" />
            </svg>
        `
        Object.assign(btnNext.style, {
            boxSizing: 'border-box',
            width: '50px',
            height: '50px',
            border: '1px solid #5F5F5F',
            borderRadius: '50%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    }

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
                        <button
                            className="our-projects__btn btn active"
                            onClick={handleActive}
                        >
                            All
                        </button>
                        <button
                            className="our-projects__btn btn"
                            onClick={handleActive}
                        >
                            Websites
                        </button>
                        <button
                            className="our-projects__btn btn"
                            onClick={handleActive}
                        >
                            Social Media
                        </button>
                        <button
                            className="our-projects__btn btn"
                            onClick={handleActive}
                        >
                            UI/UX
                        </button>
                        <button
                            className="our-projects__btn btn"
                            onClick={handleActive}
                        >
                            Market
                        </button>
                    </div>
                </div>

                <div className="grid-row">
                    {/* <div
                        className="grid-col"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginBottom: 120
                        }}
                    >
                        <button
                            className="btn-prev btn slick-prev"
                        >
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.70752 10.585L3.12253 6L7.70752 1.41502L6.29255 -6.18503e-08L0.292549 6L6.29255 12L7.70752 10.585Z" fill="#5F5F5F" />
                            </svg>

                        </button>
                        <button
                            className="btn-next btn slick-next"
                        >
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.29248 1.41502L4.87747 6L0.29248 10.585L1.70745 12L7.70745 6L1.70745 8.91824e-07L0.29248 1.41502Z" fill="#5F5F5F" />
                            </svg>
                        </button>
                    </div> */}

                    <div className="grid-col">
                        {/* <div className="our-projects__body" style={styleBody}>
                            {slices.map((slice, index) => (
                                <>
                                    <div key={index} className="our-projects__content">
                                        <img src={slice.img} alt={slice.name} />
                                        <div className="content-body">
                                            <h3 className="content-body__name">{slice.name}</h3>
                                            <span className="content-body__desc">{slice.desc}</span>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div> */}

                        <div style={{ position: 'relative' }}>
                            <Slider {...settings}>
                                {slices.map((slice, index) => (
                                    <>
                                        <div key={index} className="our-projects__content">
                                            <img src={slice.img} alt={slice.name} />
                                            <div className="content-body">
                                                <h3 className="content-body__name">{slice.name}</h3>
                                                <span className="content-body__desc">{slice.desc}</span>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )

}

export default OurProjects
