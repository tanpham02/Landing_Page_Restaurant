import Stats from "../Stats"
import OurFeatures from "../OurFeatures"
import Services from "../Services"
import OurProjects from "../OurProjects"
import Testimonials from "../Testimonials"
import Team from "../Team"
import './body.scss'

function Body() {
    return (
        <div className="body">
            <Stats />
            <OurFeatures />
            <Services />
            <OurProjects />
            <Testimonials />
            <Team />
        </div>
    )
}

export default Body
