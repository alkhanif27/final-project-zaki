export default function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-screen relative container"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="hero-content text-neutral-content relative flex items-center justify-center h-screen">
          <div className="text-white text-center">
            <h1 className="mb-5 w-auto text-5xl font-bold">Welcome to Yogyakarta</h1>
            <p className="mb-5">Welcome to Yogyakarta, a small city with the beauty of paradise. Here, traditions blend harmoniously with modern life, creating a unique charm you wont find anywhere else. From majestic temples to lush landscapes, every corner tells a story of culture and natural wonder. Let Yogyakarta warmth and serenity leave an everlasting impression on your heart.
            </p>
            <p>~Neza Transport~</p>
          </div>
        </div>
      </div>
    </>
  );
}
