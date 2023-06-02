import './ourFeatures.scss'


function OurFeatures() {
    return (

        <div className="grid">
            <div className="our-features">
                <div className="grid-row pb-130">
                    <h2 className="our-features__title">Our Features</h2>
                    <span className="our-features__desc">Unleash your creativety with a visual collaboration plattorm that enables effective ideation</span>
                </div>

                <div className="grid-row">
                    <div className="grid-col-4 our-features__content">
                        <div className="content__icon icon-setting--bg">
                            <i className="fa-solid fa-gear icon-setting--color"></i>
                        </div>
                        <span className="content__title">Choosing a Service</span>
                        <span className="content__body">Choosing an accountant that matches your needs</span>
                    </div>
                    <div className="grid-col-4 our-features__content">
                        <div className="content__icon icon-user--bg">
                            <i className="fa-solid fa-user icon-user--color"></i>
                        </div>
                        <span className="content__title">Our Clients Say</span>
                        <span className="content__body">Read the reviews from some of our satisfied clients</span>
                    </div>
                    <div className="grid-col-4 our-features__content">
                        <div className="content__icon icon-mail--bg">
                            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4075 0C24.4189 0 26.3539 0.794968 27.7773 2.22141C29.2022 3.64484 29.9987 5.56476 29.9987 7.57467V19.4242C29.9987 23.609 26.5938 26.9988 22.4075 26.9988H7.58967C3.40335 26.9988 0 23.609 0 19.4242V7.57467C0 3.38985 3.38835 0 7.58967 0H22.4075ZM24.7932 9.80943L24.9132 9.68944C25.2717 9.25446 25.2717 8.62448 24.8967 8.1895C24.6882 7.96601 24.4017 7.82951 24.1032 7.79951C23.7882 7.78302 23.4882 7.88951 23.2617 8.0995L16.4985 13.4993C15.6286 14.2207 14.3821 14.2207 13.4987 13.4993L6.74896 8.0995C6.28248 7.75452 5.63751 7.79951 5.24903 8.2045C4.84404 8.60948 4.79905 9.25446 5.14253 9.70444L5.33902 9.89943L12.1637 15.2242C13.0037 15.8842 14.0221 16.2441 15.0886 16.2441C16.1521 16.2441 17.1885 15.8842 18.027 15.2242L24.7932 9.80943Z" fill="#FFCB46" />
                            </svg>
                        </div>

                        <span className="content__title">Initial Consultation</span>
                        <span className="content__body">Understanding your accountancy requirements</span>
                    </div>
                    <div className="grid-col-4 our-features__content">
                        <div className="content__icon icon-phone--bg">
                            <i className="fa-solid fa-phone icon-phone--color"></i>
                        </div>
                        <span className="content__title">Request a Callback</span>
                        <span className="content__body">Lets talk at a more convenient time for you</span>
                    </div>
                </div>

                <a href="/" className="learn-more">
                    Learn more
                    <i className="fa-regular fa-greater-than"></i>
                </a>

            </div>
        </div>
    )

}

export default OurFeatures
