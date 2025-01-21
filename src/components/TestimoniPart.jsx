import "aos/dist/aos.css";
import AOS from "aos";

export default function TestimoniPart() {
  AOS.init();
  const testimonials = [
    {
      name: "Sheryl Berge",

      quote:
        "Booking my vacation through this travel agency was the best decision ever! The team was incredibly helpful and organized everything perfectly. I didnt have to worry about a single detail, and my trip turned out to be unforgettable. Highly recommended!",
    },
    {
      name: "Leland Kiehn",
      quote:
        "I've always dreamed of visiting exotic places, and this travel agency made it happen. From booking flights to arranging accommodations and tours, everything was seamless. Their staff is professional and truly cares about their clients' satisfaction..",
    },
    {
      name: "Peter Renolds",
      quote:
        "This travel agency exceeded my expectations! They went above and beyond to customize an itinerary that fit my preferences and budget. Every aspect of the trip was well-planned, and I couldn't be happier with the service. Can't wait to plan my next trip with them!",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="3000"
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32 container"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 items-stretch"
        >
          {testimonials.map((testimonial, index) => (
            <li key={index} className="flex">
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 h-full">
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      {testimonial.name}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
