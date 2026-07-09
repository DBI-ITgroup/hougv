import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ArrowRight
} from "lucide-react";


function Contact() {

  return (

    <main>


      {/* HERO */}

      <section className="bg-[#0F2747] text-white py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm">
            Contact Us
          </p>

          <h1 className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
            Connect with House of Ubuntu Global Voices for partnerships,
            collaborations, programmes and institutional engagement.
          </h1>

        </div>

      </section>





      {/* CONTACT SECTION */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">




          {/* LEFT INFO */}

          <div>

            <h2 className="text-4xl font-serif text-[#0F2747]">
              Get in Touch
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              We welcome collaboration with governments, universities,
              private sector partners, foundations and communities
              committed to human capital development and inclusive growth.
            </p>





            <div className="mt-10 space-y-6 text-gray-700">

              <div className="flex items-center gap-4">
                <Globe2 className="text-[#C89B3C]" />
                Global Partnerships Office
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#C89B3C]" />
                email@hougv.co.za
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#C89B3C]" />
                +351 968 670 592 / +27 78 293 3649
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#C89B3C]" />
                South Africa
              </div>

            </div>

          </div>





          {/* FORM */}

          <div className="bg-white p-10 rounded-2xl shadow-md">

            <h3 className="text-2xl font-serif text-[#0F2747]">
              Partnership Enquiry
            </h3>

            <p className="mt-3 text-gray-600 text-sm">
              Tell us about your organisation and how you'd like to collaborate.
            </p>





            <form className="mt-8 space-y-5">



              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <input
                type="text"
                placeholder="Organisation"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <select
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              >

                <option>Partnership Type</option>
                <option>Academic Partner</option>
                <option>Technology Partner</option>
                <option>Institutional Partner</option>
                <option>Community Partner</option>

              </select>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />



              <button
                type="submit"
                className="
                  w-full
                  bg-[#C89B3C]
                  text-white
                  py-4
                  rounded-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-[#B87333]
                  transition
                "
              >

                Send Message
                <ArrowRight size={18} />

              </button>

            </form>

          </div>

        </div>

      </section>





      {/* CTA */}

      <section className="bg-[#0F2747] text-white py-24 px-6 text-center">

        <h2 className="text-4xl font-serif">
          Let’s Build Something Meaningful
        </h2>

        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          Every partnership begins with a conversation.
          We look forward to connecting with you.
        </p>

      </section>



    </main>

  );

}


export default Contact;