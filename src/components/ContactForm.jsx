import { useState } from "react";
import locationicon from "../assets/locationicon.png";
import phoneicon from "../assets/phoneicon.png";
import duration from "../assets/duration.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;
    const phoneNumber = "6285868293939";

    const whatsappMessage = `Hello, my name is ${firstName} ${lastName}.%0A%0A${message}%0A%0AYou can contact me at: ${email}.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            We’d love to hear from you! Whether you have a question, feedback,
            or need assistance, feel free to reach out to us.
          </p>

          <div className="flex items-center mt-5">
            <img src={locationicon} alt="locationicon" className="h-6 mr-2" />
            <span className="text-sm">
              Jl.Ringroad Selatan, Rejokusuman Rt.002. Tamanan, Bantul,
              Yogyakarta
            </span>
          </div>
          <div className="flex items-center mt-5">
            <img src={phoneicon} alt="phoneicon" className="h-6 mr-2" />
            <span className="text-sm">+93 749 99 65 50</span>
          </div>
          <div className="flex items-center mt-5">
            <img src={duration} alt="durationicon" className="h-6 mr-2" />
            <span className="text-sm">monday - friday | 9 am - 4 pm</span>
          </div>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight m-0 mt-6">
            Thanks for trusting us to make your trip{" "}
            <span className="text-indigo-600">unforgettable.</span>
          </h3>
        </div>

        <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="********@*****.**"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between w-full px-3">
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input
                  name="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <button
              type="submit"
              className="shadow bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-6 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
