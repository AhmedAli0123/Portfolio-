import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 text-center mt-10">
      <div className="container mx-auto">
        <div className="footer-content">
          <h2 className="text-2xl mb-4">
            
              <Link href="https://www.linkedin.com/in/ahmed-ali-160b2a313/" className="text-white no-underline hover:underline" target='blank'>Ahmed Ali</Link>
            
          </h2>
          

          <ul className="social-icons list-none mt-5 flex justify-center space-x-4">
            <li>
              <Link href="mailto:ahmedsiridab1@gmail.com" className="text-white no-underline hover:underline hover:text-pink-600">Gmail</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100080215097122" className="text-white no-underline hover:underline hover:text-pink-600" target='blank'>Facebook</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/ahmed-ali-160b2a313/" className="text-white no-underline hover:underline hover:text-pink-600" target='blank'>LinkedIn</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom mt-4 text-sm">
          
            &copy; {new Date().getFullYear()} All rights reserved | Made by{' '}
            
              <Link href="https://www.linkedin.com/in/ahmed-ali-160b2a313/" target="_blank" className="text-pink-600 underline hover:text-gray-400">Ahmed Ali</Link>
        
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
