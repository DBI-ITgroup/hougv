import { Globe, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="bg-[#0F2747] text-white">


      {/* Main Footer */}
      <div className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        py-16
        grid
        md:grid-cols-4
        gap-10
      ">


        {/* Brand */}
        <div className="md:col-span-2">


          <h2 className="
            text-3xl
            font-semibold
            font-serif
          ">
            House of Ubuntu
          </h2>


          <h3 className="
            text-[#C89B3C]
            text-xl
            mt-1
          ">
            Global Voices
          </h3>



          <p className="
            text-white/70
            mt-5
            max-w-md
            leading-relaxed
          ">

            Building Human Capital for Economic Resilience
            and Inclusive Prosperity.

            Connecting people, communities, and global
            opportunities through Ubuntu.

          </p>



          <div className="
            flex
            gap-4
            mt-6
            ">

            <a href="#">
              <FaLinkedin
                size={22}
                className="hover:text-[#C89B3C] transition"
              />
            </a>


            <a href="#">
              <FaFacebook
                size={22}
                className="hover:text-[#C89B3C] transition"
              />
            </a>


            <a href="#">
              <FaInstagram
                size={22}
                className="hover:text-[#C89B3C] transition"
              />
            </a>

          </div>


        </div>





        {/* Navigation */}

        <div>

          <h3
            className="
              text-lg
              font-semibold
              mb-5
            "
          >
            Explore
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/our-philosophy"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Our Philosophy
              </Link>
            </li>

            <li>
              <Link
                to="/platforms"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Strategic Platforms
              </Link>
            </li>

            <li>
              <Link
                to="/partners"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Partners
              </Link>
            </li>

            <li>
              <Link
                to="/impact"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Impact
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                News
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white/70 hover:text-[#C89B3C] transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>






        {/* Contact */}
        <div>


          <h3 className="
          text-lg
          font-semibold
          mb-5
          ">
            Connect
          </h3>



          <div className="
          space-y-4
          text-white/70
          ">


            <p className="
            flex
            gap-3
            items-center
            ">

              <Globe size={18}/>
              Global Partnerships

            </p>



            <p className="
            flex
            gap-3
            items-center
            ">

              <Mail size={18}/>

              Contact Us

            </p>



            <p className="
            flex
            gap-3
            items-center
            ">

              <MapPin size={18}/>

              South Africa

            </p>



          </div>


        </div>



      </div>






      {/* Bottom Bar */}

      <div className="
      border-t
      border-white/10
      py-6
      text-center
      text-white/60
      text-sm
      ">


        © {new Date().getFullYear()} House of Ubuntu Global Voices.
        All Rights Reserved.


      </div>



    </footer>

  )

}


export default Footer;