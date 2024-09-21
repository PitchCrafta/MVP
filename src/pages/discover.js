import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import OverlayContainer from '../components/OverlayContainer';
import Card from '../components/Card';
import styles from '../styles/discover.module.css'; // Import the CSS Module
import { IoMegaphoneOutline } from "react-icons/io5";
import { RiBuilding4Line, RiNewsLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';

export default function DiscoverPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className={`flex min-h-screen flex-col items-center justify-between p-8 ${styles.main}`}>
        <OverlayContainer
          title="Discover"
          description="The potential to bridge startups and investors"
        >
          <div className={styles.subHeader}>
            <RiBuilding4Line />
            <h2>Investors</h2>
            <MdArrowForwardIos />
          </div>
          <div className={styles.cardGrid}>
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
              description="Description for Investor 3."
            />
            <Card
              title="Investor 4"
              image="https://via.placeholder.com/150"
              description="Description for Investor 4."
            />
            <Card
              title="Investor 5"
              image="https://via.placeholder.com/150"
              description="Description for Investor 5."
            />
          </div>
          <div className={styles.subHeader}>
            <IoMegaphoneOutline />
            <h2>Pitches from Other Startups</h2>
            <MdArrowForwardIos />
          </div>
          <div className={styles.cardGrid}>
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
              title="Pitch 3"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 3."
            />
            <Card
              title="Pitch 4"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 4."
            />
            <Card
              title="Pitch 5"
              image="https://via.placeholder.com/150"
              description="Description for Pitch 5."
            />
          </div>
          <div className={styles.subHeader}>
            <RiNewsLine />
            <h2>News</h2>
            <MdArrowForwardIos />
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.sectionItem}>
              <h3>News 1</h3>
              <p>Description for News 1.</p>
              <Link href="#" className={styles.link}>Read more</Link>
            </div>
          </div>
        </OverlayContainer>
      </main>
    </div>
  );
}
