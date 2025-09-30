import img from '../assets/img.png';
import star from '../assets/star.svg';
import ribbon from '../assets/watchlist_icon.png';

function Card() {
  return (
    <div className="hover:scale-105 transition-transform duration-200" class="w-60 relative ">
      <img class="w-full" src={img} alt="" />
      <div class="text-white w-full bg-[#1A1A1A] p-5 rounded-b-2xl">
        <h4 class="text-sm font-semibold">Blade Runner 2049</h4>
        <div class="flex justify-between text-[#8A8A8A] mt-2 ">
          <span>2017</span>
          <span class="flex items-center gap-2">
            <img src={star} alt="Star Rating" />
            8.0
          </span>
        </div>
      </div>
      <img class="absolute right-0 top-0 w-8 cursor-pointer" src={ribbon} alt="" />
    </div>
  );
}

export default Card;
