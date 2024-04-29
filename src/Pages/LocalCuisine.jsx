const LocalCuisine = () => {
  return (
    <div>
        <div className="text-center mt-5">
            <h1 className="text-4xl
            font-bold text-lime-700">Coutries Favourite <br /><span className="text-4xl font-bold text-lime-800">Local Cuisine</span></h1>
        </div>
      <div className="grid mt-10 p-7 gap-4 lg:grid-cols-3 font-montserrat shadow-2xl">
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Bangladesh
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Biryani</li>
            <li className="text-xl font-semibold">2. Hilsha Curry</li>
            <li className="text-xl font-semibold">3. Panta Bath</li>
          </ul>
        </div>
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Combodia
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Amok</li>
            <li className="text-xl font-semibold">2. By sach Chrouk</li>
            <li className="text-xl font-semibold">3. Num Banh Chok</li>
          </ul>
        </div>
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Vietnam
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Pho</li>
            <li className="text-xl font-semibold">2.Banh Mi</li>
            <li className="text-xl font-semibold">3. Goi Cuon</li>
          </ul>
        </div>
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Indonesia
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Nasi Goreng</li>
            <li className="text-xl font-semibold">2.Satay</li>
            <li className="text-xl font-semibold">3. Nasi Padang</li>
          </ul>
        </div>
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Malaysia
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Nasi Lemak</li>
            <li className="text-xl font-semibold">2. Char Kway Teow</li>
            <li className="text-xl font-semibold">3. Roti Canai</li>
          </ul>
        </div>
        <div className="font-bold bg-rose-200 rounded-lg p-4 space-y-2 ">
          <h2 className="text-3xl text-lime-500 font-semibold text-center ">
            Country : Thailand
          </h2>
          <ul className="text-2xl font-bold">
            local Cuisine :<li className="text-xl font-semibold">1. Pad Thai</li>
            <li className="text-xl font-semibold">2. Tom Yum Goong</li>
            <li className="text-xl font-semibold">3. Green Curry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalCuisine;
