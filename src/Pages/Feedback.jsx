

const Feedback = () => {
    return (
        <div className="bg-orange-200 p-5">
            <div className="text-center mt-6">
                <h1 className="text-5xl text-stone-700  font-bold">Tourist FeedBack <br /> Section</h1>
            </div>
            <div className="font-nunito-sans grid lg:grid-cols-3 gap-4 mt-10 space-y-4">
            <div className="text-center">
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}} role="progressbar">70%</div>
            <h1 className="text-2xl font-bold">Rangamati</h1>
            <p className="text-xl opacity-75 font-bold">Visitors praised Rangamati for its tranquil lakes and stunning natural beauty, making it a peaceful retreat.</p>
            </div>
            <div className="text-center space-y-3">
            <div className="radial-progress bg-pink-400 text-primary-content border-4 border-pink-400" style={{"--value":70}} role="progressbar">60%</div>
            <h1 className="text-2xl font-bold">Sajek Valley</h1>
            <p className="text-xl opacity-75 font-bold">Travelers marveled at Sajek Valley's panoramic views and tranquil ambiance, highlighting it as a hidden gem for those seeking serenity amidst nature's splendor.</p>
            </div>
            <div className="text-center space-y-3">
            <div className="radial-progress bg-red-500 text-primary-content border-4 border-red-500" style={{"--value":70}} role="progressbar">80%</div>
            <h1 className="text-2xl font-bold">Saint Martin Island</h1>
            <p className="text-xl opacity-75 font-bold">Tourists were captivated by Saint Martin's crystal-clear waters and idyllic island charm, describing it as a paradise getaway.</p>
            </div>
            <div className="text-center space-y-3">
            <div className="radial-progress bg-orange-800 text-primary-content border-4 border-orange-800" style={{"--value":70}} role="progressbar">90%</div>
            <h1 className="text-2xl font-bold">Cox'sbazar</h1>
            <p className="text-xl opacity-75 font-bold">Travelers raved about Cox's Bazar for its expansive sandy beaches and vibrant coastal atmosphere, offering a perfect blend of relaxation and adventure.</p>
            </div>
            <div className="text-center space-y-3">
            <div className="radial-progress bg-lime-700 text-primary-content border-4 border-lime-700" style={{"--value":70}} role="progressbar">85%</div>
            <h1 className="text-2xl font-bold">BandarBan</h1>
            <p className="text-xl opacity-75 font-bold">Explorers were awestruck by Bandarban's majestic green hills and rich indigenous culture, offering a unique and enriching experience.</p>
            </div>
            <div className="text-center space-y-3">
            <div className="radial-progress bg-emerald-500 text-primary-content border-4 border-emerald-500" style={{"--value":70}} role="progressbar">55%</div>
            <h1 className="text-2xl font-bold">Syhlet</h1>
            <p className="text-xl opacity-75 font-bold">Visitors were enchanted by Sylhet's enchanting landscapes and mystical tea gardens, describing it as a haven for nature lovers and photographers.</p>
            </div>
        </div>
        </div>
    );
};

export default Feedback;