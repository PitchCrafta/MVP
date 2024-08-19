import Image from 'next/image';
import bannerImage from '../images/banner-img.jpg'; // Adjust the path to your image
import '../styles/Banner.css';

export default function Banner() {
  return (
    <div className='bannerContainer'>
      <Image
        src={bannerImage}
        alt="Banner Image"
        layout="fill"
        className='bannerImage'
      />
      <div className='overlay' />
    </div>
  );
}
