import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import OverlayContainer from '../components/OverlayContainer';
import Card from '../components/Card';
import '../styles/discover.css'

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
            <h2>Investors</h2>
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
              title="Investor 2"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            <Card
              title="Investor 2"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            <Card
              title="Investor 2"
              image="https://via.placeholder.com/150"
              description="Description for Investor 2."
            />
            </div>
            <div className='sub-header'>
            <h2>Pitches from Other Startups</h2>
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
        </OverlayContainer>
      </main>
    </div>
  );
}
