import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import OverlayContainer from '../components/OverlayContainer';
import Card from '../components/Card';
import '../styles/discover.css'
import { IoMegaphoneOutline } from "react-icons/io5";
import { RiBuilding4Line, RiNewsLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";

export default function DiscoverPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <OverlayContainer
          title="Discover"
          description="The potential to bridge startups and investors"
        >
        <div className='sub-header'>
        <RiBuilding4Line />
            <h2>Investors</h2>
            <MdArrowForwardIos />
            </div>
          <div className="card-grid">
            <Card
              title="Investor 1"
              image="https://via.placeholder.com/150"
              description="Description for Investor 1."
            />
            <Card
              title="Investor 2"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            <Card
              title="Investor 3"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            <Card
              title="Investor 4"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            <Card
              title="Investor 5"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            </div>
            <div className='sub-header'>
            <IoMegaphoneOutline />
            <h2>Pitches from Other Startups</h2>
            <MdArrowForwardIos />
            </div>
            <div className="card-grid">
            
            
            <Card
              title="Pitch 1"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 1."
            />
            <Card
              title="Pitch 2"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 2."
            />
            <Card
              title="Pitch 2"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 2."
            />
            <Card
              title="Pitch 2"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 2."
            />
            <Card
              title="Pitch 2"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 2."
            />
          </div>
          <div className='sub-header'>
        <RiNewsLine />
            <h2>News</h2>
            <MdArrowForwardIos />
            </div>
            <div className="section-content">
            <div className="section-item">
              <h3>News 1</h3>
              <p>Description for News 1.</p>
              <a href="#" className="link">Read more</a>
            </div>
            </div>
        </OverlayContainer>
      </main>
    </div>
  );
}
