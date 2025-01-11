export default function HeroSection() {
  return (
    <>
    <div
  className="hero min-h-screen container"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60 flex items-center justify-center h-screen">
     <div className="hero-content text-neutral-content"></div>
     <div className="max-w-md text-white text-center">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn">Button</button>

    </div>
  </div>
    </div>

    </>
  )
}
