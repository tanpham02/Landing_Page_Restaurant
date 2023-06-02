import HeaderFeature from '../HeaderFeature'
import './header.scss'

function Header() {
    return (
        <div className='header'>
            <div className="grid">
                <div className="grid-row">
                    <div className="grid-col">
                        <div className='header__bg-2'></div>
                        <div className='header__bg-1'></div>

                        <nav className='header__nav'>
                            <a href='/' className='header__logo'>FreeLancin.io</a>
                            <ul className='nav__lists'>
                                <li className='nav__item'>
                                    Service
                                    <svg width="8" height="6" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.3962 4.48532C3.19605 4.74532 2.80395 4.74532 2.6038 4.48532L0.155585 1.305C-0.0975138 0.976212 0.136868 0.5 0.551788 0.5L5.44821 0.5C5.86313 0.5 6.09751 0.976213 5.84441 1.305L3.3962 4.48532Z" fill="#6C768D" />
                                    </svg>
                                </li>
                                <li className='nav__item'>About us</li>
                                <li className='nav__item'>Blog</li>
                            </ul>
                            <div className='header__options'>
                                <div>
                                    <select className='header__lang'>
                                        <option value="English">EN</option>
                                        <option value="Vietnamese">VI</option>
                                    </select>
                                    <svg width="8" height="6" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.3962 4.48532C3.19605 4.74532 2.80395 4.74532 2.6038 4.48532L0.155585 1.305C-0.0975138 0.976212 0.136868 0.5 0.551788 0.5L5.44821 0.5C5.86313 0.5 6.09751 0.976213 5.84441 1.305L3.3962 4.48532Z" fill="#6C768D" />
                                    </svg>
                                </div>
                                <button className='btn header__btn'>Contact us</button>
                            </div>
                        </nav>

                        <div className='header__body'>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-4-5">
                                        <h2 className="header__title">Find & Hire Expert Freelancers</h2>
                                        <span className='header__content'>Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.</span>
                                        <div className='content__btn'>
                                            <button className='btn btn-contact'>Contact us</button>
                                            <button className='btn btn-learn-more'>Learn more</button>
                                        </div>
                                    </div>
                                    <div className="grid-col-5-5">
                                        <div className="your-earn">
                                            <span>Amanda M. is hired!</span>
                                            <div>
                                                <span className='earn'>Your Earned</span>
                                                <span>$3,000</span>
                                            </div>
                                            <div style={{
                                                display: 'inline-block',
                                                position: 'absolute',
                                                right: '-17px',
                                                top: '-20px',
                                                background: 'none',
                                            }}>
                                                <img width={47.19} height={47.19}
                                                    style={{
                                                        borderRadius: '50%',
                                                        border: '2px solid #F9F9F9'
                                                    }}
                                                    src='/assets/image/header/copy-modified.png' />
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '12px',
                                                height: '12px',
                                                left: '40.6%',
                                                top: '22%',
                                                borderRadius: '50%',
                                                border: '1px solid #3A4357',
                                                transform: 'rotate(-58.29deg)',
                                            }}
                                        ></span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '14px',
                                                height: '14px',
                                                left: '46.5%',
                                                top: '-30%',
                                                border: '1px solid #5A6273',
                                                transform: 'rotate(43.58deg)',
                                            }}
                                        >

                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '31.28px',
                                                height: '31.28px',
                                                left: '46.8%',
                                                top: '-17%',
                                                background: '#E9F4FE',
                                                transform: 'rotate(43.58deg)',
                                                zIndex: -1
                                            }}
                                        >

                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '26.68px',
                                                height: '23.2px',
                                                right: '34.3%',
                                                top: '25.2%',
                                                border: '1px solid rgb(61, 70, 89)',
                                                borderRadius: '100% 0% 0% 0%',
                                                transform: 'rotate(-74deg)',
                                            }}
                                        >
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '46px',
                                                height: '46px',
                                                right: '0%',
                                                top: '5%',
                                                borderRadius: '39% 52% 57% 178%',
                                                background: '#FFFFFF',
                                                border: '1px solid #50586A',
                                                transform: 'rotate(-28.66deg)',
                                            }}
                                        >
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '13px',
                                                height: '13px',
                                                right: '-8.5%',
                                                top: '39%',
                                                border: '1px solid #4A5265',
                                                borderRadius: '50%'
                                            }}
                                        >
                                        </span>

                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '38.69px',
                                                height: '38.69px',
                                                right: '-6%',
                                                top: '-32%',
                                                background: '#E9F4FE',
                                                transform: 'rotate(43.58deg)',
                                            }}
                                        >
                                        </span>
                                        <span
                                            style={{
                                                boxSizing: 'border-box',

                                                position: 'absolute',
                                                width: '41px',
                                                height: '41px',
                                                right: '-13%',
                                                top: '-22%',
                                                borderRadius: '50%',
                                                background: '#FFFFFF',
                                                border: '1px solid #E0ECF5',
                                            }}
                                        >
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                width: '14px',
                                                height: '14px',
                                                right: '-200px',
                                                top: '-30%',

                                                background: '#FFFFFF',
                                                border: '1px solid #000000',
                                                transform: 'rotate(43.58deg)',
                                            }}
                                        >
                                        </span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderFeature />
        </div >
    )
}

export default Header
