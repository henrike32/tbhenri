import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import apt1 from '../public/apt1.png'
const Home = () => {
  return (
    <>
      <div class="homeimg">
        <div className='home-header'> Find your new home today</div>
        <img src={apt1} alt="apt 1"/>
        <br />
        <Link to="/index">
          <Button className="home-btn">
            Check out all of our available listings here
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home