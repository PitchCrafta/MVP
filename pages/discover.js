import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import OverlayContainer from '../components/OverlayContainer';
import Card from '../components/Card';

export default function DiscoverPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <h1>Discover Page</h1>
        <OverlayContainer
          title="Investors & Pitches"
          description="Explore the latest investors and pitches from startups."
        >
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
              title="Pitch 1"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 1."
            />
            <Card
              title="Pitch 2"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 2."
            />
            {/* Add more Card components as needed */}
          </div>
        </OverlayContainer>
      </main>
    </div>
  );
}
