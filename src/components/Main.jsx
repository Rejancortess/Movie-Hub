import icon from '../assets/svg.svg';
import arrow from '../assets/arrow.png';
import Card from './card';
import Browse from './Browse_Genre';

function Main() {
  return (
    <main class="bg-[#0A0A0A] w-screen h-screen flex flex-col">
      <section class=" w-400 h-60 bg-gradient-to-r from-[#00D4FF]/20 via-[#2BA5F9]/20 to-[#9333EA]/20 mt-7 rounded-3xl flex flex-col items-center justify-center gap-5">
        <h1 class="text-white font-extrabold text-5xl mt-10">Discover Amazing Movies</h1>
        <h2 class="text-[#a7a3a3] text-xl">Explore trending films, search your favorites, and build your personal watchlist</h2>
        <div class="flex flex-row">
          <button class="w-55 px-5 h-15 text-lg rounded-xl bg-[#00D4FF] font-bold ml-5 mr-5 hover:bg-[#00BFFF] cursor-pointer">
            <i class="fa-solid fa-play bg-red mr-5"></i>Start Browsing
          </button>
          <button class="w-50 px-5 py-5 h-15 items-center text-lg rounded-xl border-1 border-[#00D4FF] text-[#00D4FF] font-bold flex flex-row cursor-pointer hover:bg-[#00D4FF]/20">
            <img class="mr-5 w-7" src={icon} alt="info" />
            Learn More
          </button>
        </div>
        s
      </section>
      <div class="flex flex-row justify-between text-white mt-5 mb-2  w-400 mx-auto">
        <h3 class="font-bold text-3xl">Trending Now</h3>
        <a class="text-[#00D4FF] text-xl flex items-center gap-1" href="#">
          View All
          <img class="w-5" src={arrow} alt="" />
        </a>
      </div>
      <section class="w-400 mt-5 flex gap-10  pb-5 flex-row ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div class="w-400 mx-auto mt-10 ">
        <h3 class="font-bold text-3xl text-[#FFFFFF]">Browse by Genre</h3>
      </div>
      <section>
        <Browse />
      </section>
    </main>
  );
}

export default Main;
