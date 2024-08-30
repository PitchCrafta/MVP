import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import OverlayContainer from '../components/OverlayContainer';

export default function CraftPitchPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <OverlayContainer
          title="Craft Your Pitch"
          description="Utilize AI to level up your pitch and raise money for your own enterprise"
        ></OverlayContainer>
        </main>
    </div>
  );
}
