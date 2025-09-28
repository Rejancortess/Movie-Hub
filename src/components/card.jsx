import img from '../assets/img.png';
import star from '../assets/star.svg';

function Card() {
  return (
    <div class="w-60 ">
      <img class="w-full" src={img} alt="" />
      <div class="text-white w-full bg-[#1A1A1A] p-5 rounded-b-2xl">
        <h4 class="text-sm font-bold">Blade Runner 2049</h4>
        <div class="flex justify-between text-[#8A8A8A] mt-2 ">
          <span>2017</span>
          <span class="flex items-center gap-2">
            <img src={star} alt="Star Rating" />
            8.0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
