import './stats.scss'

function Stats() {
    return (
        <div className="grid">
            <div className="grid-row stats">
                <h3 className="stats__title">Journey of our Success</h3>
                <div className="grid-col-3 align-item">
                    <div>
                        <span className="stats__percent">85</span>
                        <span className="percent">%</span>
                    </div>
                    <span className="stats__desc">manage communication more efficiently</span>
                </div>
                <div className="grid-col-3 align-item">
                    <div>
                        <span className="stats__percent">95</span>
                        <span className="percent">%</span>
                    </div>
                    <span className="stats__desc">improve communication with customers and clients</span>
                </div>
                <div className="grid-col-3 align-item">
                    <div>
                        <span className="stats__percent">75</span>
                        <span className="percent">%</span>
                    </div>
                    <span className="stats__desc">average improvement in team efficiency</span>
                </div>
            </div>
        </div>
    )

}

export default Stats
