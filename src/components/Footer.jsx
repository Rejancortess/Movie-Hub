import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer class="w-screen h-100 bg-[#1A1A1A]">
      <section className="w-290 h-70 mx-auto text-white flex justify-between pt-20 ">
        <div className="w-1/6 flex flex-col gap-5 text-[#8A8A8A]">
          <img className="w-40" src={logo} alt="Logo" />
          <p>Your ultimate destination for discovering and tracking amazing movies.</p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-3">Quick Links </p>
          <ul className="text-[#8A8A8A] flex gap-2 flex-col">
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Genres</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-3">Support</p>
          <ul className="text-[#8A8A8A] flex gap-2 flex-col">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold">Follow Us</p>
          <ul className="flex flex-row gap-3 mt-2 text-2xl text-[#8A8A8A]">
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </section>
      <div className="text-[#8A8A8A] mx-auto pt-10 w-290 text-center border-t-1 border-[#1F2937]">
        <p>© 2025 MovieHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
