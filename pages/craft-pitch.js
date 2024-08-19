import Navbar from '../components/Navbar';

export default function CraftPitchPage() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="w-full max-w-5xl">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Investors</h2>
            <p className="text-lg">Explore a list of investors who are looking for new opportunities.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Pitches from Other Startups</h2>
            <p className="text-lg">Check out the latest pitches and ideas from other startups.</p>
          </section>
          <section>
            <h2 className="text-3xl font-semibold mb-4">News</h2>
            <p className="text-lg">Stay updated with the latest news and trends in the startup world.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
