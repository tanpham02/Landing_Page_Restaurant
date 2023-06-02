import './header.scss'

function Header() {
    return (
        <div className='header'>
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
                                    left: '46.9%',
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
                                    left: '47.3%',
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

            <div className="header__feature">
                <div className='grid'>
                    <div className="grid-row">
                        <div className="grid-col-3 flex-center">
                            <div className='feature__icon'>
                                <div className='feature__icon-top'>
                                    <svg width="28.62" height="32.05" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.52985 32.0529H25.3467C26.2958 32.0529 27.209 31.6518 27.8518 30.9522C28.4951 30.252 28.8181 29.3075 28.7377 28.3603C28.4345 24.7802 26.8139 21.4615 24.1743 19.0155C23.3785 18.278 22.5107 17.6398 21.5885 17.1075C23.3694 15.291 24.4695 12.8015 24.4695 10.059C24.4695 4.51254 19.9696 0 14.4384 0C8.90717 0 4.40726 4.51254 4.40726 10.0592C4.40726 12.8016 5.5073 15.2913 7.2882 17.1076C6.366 17.64 5.49828 18.2782 4.70241 19.0157C2.06264 21.4617 0.442034 24.7803 0.139011 28.3605C0.0587845 29.3075 0.38166 30.2521 1.02495 30.9524C1.66775 31.6518 2.58075 32.0529 3.52985 32.0529ZM9.32913 10.0592C9.32913 7.22646 11.6211 4.92188 14.4384 4.92188C17.2557 4.92188 19.5476 7.22646 19.5476 10.0592C19.5476 12.892 17.2557 15.1965 14.4384 15.1965C11.6211 15.1965 9.32913 12.8919 9.32913 10.0592ZM8.04781 22.6259C9.79294 21.0089 12.0624 20.1183 14.4384 20.1183C16.8143 20.1183 19.0838 21.0089 20.8289 22.6259C22.1541 23.8535 23.0891 25.4148 23.547 27.131H5.32962C5.78752 25.4148 6.72251 23.8537 8.04781 22.6259Z" fill="#5B5B5B" />
                                    </svg>

                                    <svg width="28.62" height="32.05" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.52985 32.0529H25.3467C26.2958 32.0529 27.209 31.6518 27.8518 30.9522C28.4951 30.252 28.8181 29.3075 28.7377 28.3603C28.4345 24.7802 26.8139 21.4615 24.1743 19.0155C23.3785 18.278 22.5107 17.6398 21.5885 17.1075C23.3694 15.291 24.4695 12.8015 24.4695 10.059C24.4695 4.51254 19.9696 0 14.4384 0C8.90717 0 4.40726 4.51254 4.40726 10.0592C4.40726 12.8016 5.5073 15.2913 7.2882 17.1076C6.366 17.64 5.49828 18.2782 4.70241 19.0157C2.06264 21.4617 0.442034 24.7803 0.139011 28.3605C0.0587845 29.3075 0.38166 30.2521 1.02495 30.9524C1.66775 31.6518 2.58075 32.0529 3.52985 32.0529ZM9.32913 10.0592C9.32913 7.22646 11.6211 4.92188 14.4384 4.92188C17.2557 4.92188 19.5476 7.22646 19.5476 10.0592C19.5476 12.892 17.2557 15.1965 14.4384 15.1965C11.6211 15.1965 9.32913 12.8919 9.32913 10.0592ZM8.04781 22.6259C9.79294 21.0089 12.0624 20.1183 14.4384 20.1183C16.8143 20.1183 19.0838 21.0089 20.8289 22.6259C22.1541 23.8535 23.0891 25.4148 23.547 27.131H5.32962C5.78752 25.4148 6.72251 23.8537 8.04781 22.6259Z" fill="#5B5B5B" />
                                    </svg>
                                </div>

                                <div className='feature__icon-right'>
                                    <div style={{ position: 'relative' }}>
                                        <svg width="40" height="44" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.4378 0.992432C12.5154 0.992432 2.81584 10.693 2.81584 22.6165C2.81584 28.0929 4.86203 33.1005 8.23007 36.9146L1.34634 43.7991C0.385422 44.7602 0.385586 46.3185 1.3465 47.2796C1.82704 47.7598 2.45671 48 3.08655 48C3.71638 48 4.34638 47.7596 4.82676 47.2791L11.8887 40.2163C15.4295 42.7486 19.7627 44.2403 24.4378 44.2403C36.3602 44.2403 46.0598 34.5398 46.0598 22.6162C46.0598 10.6926 36.3602 0.992432 24.4378 0.992432ZM24.4378 39.3186C15.2293 39.3186 7.73772 31.826 7.73772 22.6164C7.73772 13.4067 15.2293 5.91414 24.4378 5.91414C33.6463 5.91414 41.1379 13.4067 41.1379 22.6164C41.1379 31.826 33.6463 39.3186 24.4378 39.3186Z" fill="#0056D6" />
                                        </svg>
                                        <svg style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '50%',
                                            transform: 'translate(55%, -65%)',
                                        }}
                                            width="21" height="15" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3019 0.95614L8.5024 10.7566L4.57228 6.82598C3.61121 5.86506 2.0531 5.86522 1.09186 6.82581C0.130947 7.78672 0.130783 9.34499 1.0917 10.3062L6.76219 15.9772C7.24289 16.4578 7.87273 16.6981 8.5024 16.6981C9.13207 16.6981 9.76207 16.4578 10.2424 15.9774L10.2426 15.9772L21.7823 4.43624C22.7432 3.47516 22.743 1.91689 21.7821 0.955814C20.8209 -0.00510039 19.2628 -0.004939 18.3019 0.95614Z" fill="#0056D6" />
                                        </svg>
                                    </div>

                                    <svg width="28.62" height="32.05" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.52985 32.0529H25.3467C26.2958 32.0529 27.209 31.6518 27.8518 30.9522C28.4951 30.252 28.8181 29.3075 28.7377 28.3603C28.4345 24.7802 26.8139 21.4615 24.1743 19.0155C23.3785 18.278 22.5107 17.6398 21.5885 17.1075C23.3694 15.291 24.4695 12.8015 24.4695 10.059C24.4695 4.51254 19.9696 0 14.4384 0C8.90717 0 4.40726 4.51254 4.40726 10.0592C4.40726 12.8016 5.5073 15.2913 7.2882 17.1076C6.366 17.64 5.49828 18.2782 4.70241 19.0157C2.06264 21.4617 0.442034 24.7803 0.139011 28.3605C0.0587845 29.3075 0.38166 30.2521 1.02495 30.9524C1.66775 31.6518 2.58075 32.0529 3.52985 32.0529ZM9.32913 10.0592C9.32913 7.22646 11.6211 4.92188 14.4384 4.92188C17.2557 4.92188 19.5476 7.22646 19.5476 10.0592C19.5476 12.892 17.2557 15.1965 14.4384 15.1965C11.6211 15.1965 9.32913 12.8919 9.32913 10.0592ZM8.04781 22.6259C9.79294 21.0089 12.0624 20.1183 14.4384 20.1183C16.8143 20.1183 19.0838 21.0089 20.8289 22.6259C22.1541 23.8535 23.0891 25.4148 23.547 27.131H5.32962C5.78752 25.4148 6.72251 23.8537 8.04781 22.6259Z" fill="#5B5B5B" />
                                    </svg>
                                </div>

                            </div>
                            <h3 className='feature__title'>Grow your audience</h3>
                            <span className='feature__description'>Find new customers and build your email list with lead generation ..</span>
                        </div>

                        <div className="grid-col-3 flex-center">
                            <div className='feature__icon'>
                                <svg width="82" height="20" viewBox="0 0 82 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M81.197 9.52617C81.2787 8.49715 80.679 7.23357 79.3056 6.91399L71.3503 4.98037C70.0285 4.65816 68.6974 5.46985 68.3764 6.79121C68.0551 8.11257 68.8658 9.4441 70.1872 9.76517L72.4373 10.3121L66.059 14.2481L41.8747 0.479709C41.1794 0.0836296 40.3344 0.0503085 39.6105 0.390579L15.5709 11.6742L4.07906 4.50222C2.92562 3.78179 1.40679 4.13372 0.686695 5.28732C-0.0332406 6.44076 0.318356 7.95958 1.47196 8.67968L14.1005 16.5611C14.8091 17.0034 15.6939 17.0563 16.4503 16.7012L40.5474 5.3904L64.8916 19.2499C65.525 19.5821 66.408 19.7543 67.4028 19.2054L75.1348 14.4339L74.6199 16.8455C74.0533 20.0534 78.5943 20.9644 79.4356 17.874L81.1423 9.88122C81.1617 9.76927 81.1689 9.78503 81.197 9.52617V9.52617Z" fill="#0056D6" />
                                </svg>
                                <svg width="84" height="51" viewBox="0 0 84 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M81.5337 45.9195H76.5692V13.0841C76.5692 11.7244 75.465 10.622 74.1029 10.622H60.4857C59.1237 10.622 58.0195 11.7244 58.0195 13.0841V45.9195H51.275V3.32922C51.275 1.96946 50.1708 0.867065 48.8087 0.867065H35.1915C33.8294 0.867065 32.7252 1.96946 32.7252 3.32922V45.9195H25.9807V10.4785C25.9807 9.11875 24.8765 8.01636 23.5144 8.01636H9.89706C8.53499 8.01636 7.4308 9.11875 7.4308 10.4785V45.9195H2.46626C1.1042 45.9195 0 47.0219 0 48.3816C0 49.7414 1.1042 50.8438 2.46626 50.8438H81.5337C82.8958 50.8438 84 49.7414 84 48.3816C84 47.0219 82.8958 45.9195 81.5337 45.9195V45.9195ZM12.3633 45.9195V12.9407H21.0482V45.9195H12.3633ZM37.6576 45.9195V5.79138H46.3424V45.9195H37.6576ZM62.952 45.9195V15.5463H71.6368V45.9195H62.952Z" fill="#5B5B5B" />
                                </svg>
                            </div>
                            <h3 className='feature__title'>Boost online sales</h3>
                            <span className='feature__description'>Market your ecommerce business and deliver experiences ..</span>
                        </div>

                        <div className="grid-col-3 flex-center mr-b-24">
                            <div className='feature__icon'>
                                <div className='feature__icon-top'>
                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9664 21.4277L15.4862 17.9475L12.3375 21.0961C12.8835 12.0855 20.3857 4.92188 29.5311 4.92188V0C17.6521 0 7.92879 9.40029 7.40609 21.1526L4.2008 17.9475L0.720703 21.4277L9.84356 30.5506L18.9664 21.4277Z" fill="#0056D6" />
                                    </svg>
                                    <svg width="64" height="36" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.617 18.9947V29.1761L15.3379 29.8969C15.5683 30.1271 21.1039 35.5394 31.8436 35.5394C42.5833 35.5394 48.1189 30.1271 48.3493 29.8968L49.0702 29.1759V18.9945L53.992 17.0258V30.6175H58.9139V15.057L63.0793 13.3909L31.8436 0.896606L0.60791 13.3909L14.617 18.9947ZM44.1483 27.0096C42.5817 28.1795 38.5159 30.6175 31.8436 30.6175C25.1713 30.6175 21.1055 28.1795 19.5389 27.0096V20.9633L31.8436 25.8851L44.1483 20.9633V27.0096ZM49.8267 13.3909L31.8436 20.5841L13.8605 13.3909L31.8436 6.19779L49.8267 13.3909Z" fill="#5B5B5B" />
                                    </svg>

                                </div>

                                <div className="feature__icon-right" style={{ margin: 0 }}>
                                    <svg width="64" height="36" viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.617 18.9947V29.1761L15.3379 29.8969C15.5683 30.1271 21.1039 35.5394 31.8436 35.5394C42.5833 35.5394 48.1189 30.1271 48.3493 29.8968L49.0702 29.1759V18.9945L53.992 17.0258V30.6175H58.9139V15.057L63.0793 13.3909L31.8436 0.896606L0.60791 13.3909L14.617 18.9947ZM44.1483 27.0096C42.5817 28.1795 38.5159 30.6175 31.8436 30.6175C25.1713 30.6175 21.1055 28.1795 19.5389 27.0096V20.9633L31.8436 25.8851L44.1483 20.9633V27.0096ZM49.8267 13.3909L31.8436 20.5841L13.8605 13.3909L31.8436 6.19779L49.8267 13.3909Z" fill="#5B5B5B" />
                                    </svg>
                                    <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.2791 9.65057L20.1562 0.52771L11.0334 9.65057L14.5136 13.1308L17.6953 9.94917V13.8517C17.6953 23.3505 9.96747 31.0783 0.46875 31.0783V36.0002C12.6814 36.0002 22.6172 26.0644 22.6172 13.8517V9.94917L25.799 13.131L29.2791 9.65057Z" fill="#0056D6" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='feature__title'>Sell your knowledge</h3>
                            <span className='feature__description'>Build a following, engage them with your content ..</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header