import './team.scss'


function Team() {

    const handleLike = (e) => {
        e.target.parentElement.classList.add('like')

    }

    const handleUnLike = (e) => {
        e.target.parentElement.classList.remove('like')
    }

    return (
        <div className="team">
            <div className="grid">
                <div className="grid-row">
                    <div className="grid-col"
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <h3 className="team__title">Our Featured Agents</h3>
                        <span className='team__desc'>Meet our amazing team members</span>
                    </div>
                </div>

                <div className="grid-row">
                    <div className="grid-col-3 team__info"
                        style={{
                            marginTop: 39
                        }}
                    >
                        <img src="/assets/image/team/team-1.png" alt="" />
                        <div className="info-body">
                            <h3 className="info-body__name">Alison Kiara</h3>
                            <span className="info-body__address">Michigan, TX</span>
                            <h3 className="info-body__phone">989-653-2986</h3>
                            <span className="info-body__email">alisonkiara@hommy.com</span>
                            <i className="info-body__icon-star fa-regular fa-star" onClick={handleLike}></i>
                            <i className="info-body__icon-star active fa-solid fa-star" onClick={handleUnLike}></i>
                            <i className="info-body__icon-dot fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className="grid-col-3 team__info"
                        style={{
                            marginTop: 99
                        }}
                    >
                        <img src="/assets/image/team/team-2.png" alt="" />
                        <div className="info-body">
                            <h3 className="info-body__name">Dianne Sabin</h3>
                            <span className="info-body__address">New Jeresy, TX</span>
                            <h3 className="info-body__phone">989-653-2550</h3>
                            <span className="info-body__email">hidianne@hommy.com</span>
                            <i className="info-body__icon-star fa-regular fa-star" onClick={handleLike}></i>
                            <i className="info-body__icon-star active fa-solid fa-star" onClick={handleUnLike}></i>
                            <i className="info-body__icon-dot fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className="grid-col-3 team__info"
                        style={{
                            marginTop: 139
                        }}
                    >
                        <img src="/assets/image/team/team-3.png" alt="" />
                        <div className="info-body">
                            <h3 className="info-body__name">Shawn Ramirez</h3>
                            <span className="info-body__address">Illinois, NZ</span>
                            <h3 className="info-body__phone">989-653-2986</h3>
                            <span className="info-body__email">iamrami@hommy.com</span>
                            <i className="info-body__icon-star fa-regular fa-star" onClick={handleLike}></i>
                            <i className="info-body__icon-star active fa-solid fa-star" onClick={handleUnLike}></i>
                            <i className="info-body__icon-dot fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </div>


            </div>

            <div className="dot">
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className='dot-child'></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>
                <span className="dot-child"></span>

            </div>
        </div >

    )
}

export default Team