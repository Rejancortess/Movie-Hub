import logo from '../assets/logo.svg';
import icon from '../assets/i.png';
import search from '../assets/search.svg';

function Header() {
  return (
    <header class="w-full h-20 bg-[#1A1A1A] flex  justify-around font-['Inter'] items-center border-b-3 border-[#1F2937] pb-2 sticky top-0 z-50">
      <div class="w-1/3">
        <nav>
          <ul class="flex flex-row text-[#8A8A8A] gap-7 text-sm items-center hover:cursor-pointer font-semibold ">
            <li>
              <img class="w-40" src={logo} alt="" />
            </li>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Genres</li>
          </ul>
        </nav>
      </div>
      <div class="flex w-150 justify-around items-center relative">
        <div class="flex items-center relative">
          <img class="absolute left-5 w-6" src={search} alt="" />
          <input class="bg-[#1F2937] outline-none text-[#ADAEBC] w-110 h-10 py-6 pr-10 pl-15 rounded-xl text-xl mr-5" type="text" name="search" placeholder="Search movies" id="" />
        </div>
        <button class="h-10 flex items-center gap-3 bg-[#00D4FF] p-5 rounded-xl text-lg mr-10 hover:bg-[#00BFFF] cursor-pointer">
          <span>
            <img class="w-4" src={icon} />
          </span>
          Watchlist
        </button>
        <span class="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center absolute right-0 top-0 font-bold">2</span>
      </div>
    </header>
  );
}

export default Header;
