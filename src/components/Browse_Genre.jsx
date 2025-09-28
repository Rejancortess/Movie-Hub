export default function Browse_Genre() {
  return (
    <section className="w-400 mx-auto mt-10 mb-10 grid grid-cols-6 gap-10 text-white text-center text-lg font-semibold genre">
      <div className="bg-gradient-to-b from-red-500 to-red-700 h-30 flex items-center justify-center text-2xl cursor-pointer flex-col rounded-2xl">
        <div>
          <i className="fa-solid fa-explosion text-4xl"></i>
        </div>
        <h3>Action</h3>
      </div>
      <div className="bg-gradient-to-b from-pink-500 to-pink-700 h-30 flex items-center justify-center text-2xl cursor-pointer flex-col rounded-2xl">
        <div>
          <i className="fa-solid fa-heart text-4xl"></i>
        </div>
        <h3>Romance</h3>
      </div>
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 h-30 flex items-center justify-center text-2xl cursor-pointer rounded-2xl flex-col">
        <div>
          <i className="fa-solid fa-rocket text-4xl"></i>
        </div>
        <h3>Sci-Fi</h3>
      </div>
      <div className="bg-gradient-to-b from-yellow-500 to-yellow-700 h-30 flex items-center justify-center text-2xl cursor-pointer rounded-2xl flex-col">
        <div>
          <i className="fa-solid fa-laugh text-4xl"></i>
        </div>
        <h3>Comedy</h3>
      </div>
      <div className="bg-gradient-to-b from-green-500 to-green-700 h-30 flex items-center justify-center text-2xl cursor-pointer rounded-2xl flex-col">
        <div>
          <i className="fa-solid fa-ghost text-4xl"></i>
        </div>
        <h3>Horror</h3>
      </div>
      <div className="bg-gradient-to-b from-purple-500 to-purple-700 h-30 flex items-center justify-center text-2xl cursor-pointer rounded-2xl flex-col">
        <div>
          <i className="fa-solid fa-theater-masks text-4xl"></i>
        </div>
        <h3>Drama</h3>
      </div>
    </section>
  );
}
