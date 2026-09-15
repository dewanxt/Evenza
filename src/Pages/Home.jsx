import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import AboutUs from '../Components/AboutUs'
import CoreFeature from '../Components/CoreFeature'
import OurSpeakers from '../Components/OurSpeakers'
import EventSchedule from '../Components/EventSchedule'
import PricingPlan from '../Components/PricingPlan'
import PlayVideo from '../Components/PlayVideo'
import FAQs from '../Components/FAQs'
import Testimonials from '../Components/Testimonials'
import LatestBlog from '../Components/LatestBlog'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutUs />
      <CoreFeature />
      <OurSpeakers/>
      <EventSchedule/>
      <PricingPlan/>
      <PlayVideo/>
      <FAQs/>
      <Testimonials/>
      <LatestBlog/>
    </div>
  )
}

export default Home
