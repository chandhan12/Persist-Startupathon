export default function FellowshipCard() {
    return (
      <div className="relative w-full max-w-4xl mx-auto h-[350px] flex flex-col items-center justify-center rounded-3xl p-6 bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-5 grid-rows-4 opacity-30">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={`w-full h-full ${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
              }`}
              style={{
                transform: `rotateX(${index % 2 === 0 ? "5deg" : "-5deg"}) scale(1.1)`,
              }}
            ></div>
          ))}
        </div>
  
        {/* Floating Crystal */}
        <img
          src="/path-to-crystal.png"
          alt="Crystal"
          className="w-24 h-24 absolute top-[-30px] mx-auto z-10"
        />
  
        {/* Content */}
        <div className="relative z-20 text-center text-white">
          <h2 className="text-2xl font-bold">Got an Idea of Your Own? Let's Make It Happen!</h2>
          <p className="text-sm mt-2 max-w-lg mx-auto opacity-80">
            We are always on the lookout for visionary founders with groundbreaking startup ideas.
            If you’re ready to turn your vision into reality, apply below for our Fellowship Program.
          </p>
  
          <button className="mt-4 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition">
            Apply for Fellowship 🚀
          </button>
        </div>
      </div>
    );
  }
  