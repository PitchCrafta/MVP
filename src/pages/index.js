import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <h1>Welcome to PitchCraft</h1>
      </main>
    </div>
  );
}
