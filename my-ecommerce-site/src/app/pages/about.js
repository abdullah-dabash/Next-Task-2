import Image from 'next/image';
import Navbar from '../components/NavBar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl">About Us</h1>
      <Image src="/path-to-your-image.jpg" alt="About Us" width={500} height={300} className="mt-4" />
      <p className="mt-2">We are a leading e-commerce platform...</p>
    </div>
    </>
  );
};

export default About;
