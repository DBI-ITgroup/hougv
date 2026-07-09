
import { Link } from "react-router-dom";
import worldMap from "../assets/images/map.png"
import {
  GraduationCap,
  Cpu,
  Building2,
  Globe2,
  Users,

} from "lucide-react";


function Partners() {


  const categories = [

    {
      icon: GraduationCap,
      title: "Academic Partners",
      text:
      "Universities, research institutions and learning organisations advancing knowledge and human development."
    },


    {
      icon: Cpu,
      title: "Technology Partners",
      text:
      "Innovation partners supporting digital transformation, Artificial Intelligence and future-ready solutions."
    },


    {
      icon: Building2,
      title: "Institutional Partners",
      text:
      "Governments, foundations and organisations collaborating to create meaningful impact."
    },


    {
      icon: Users,
      title: "Community Partners",
      text:
      "Communities, leaders and organisations working together to build inclusive opportunities."
    },


    {
      icon: Globe2,
      title: "Global Networks",
      text:
      "International connections linking people, ideas and opportunities across borders."
    }

  ];




  return (

    <main>


      {/* Hero */}

      <section
      className="
      bg-[#0F2747]
      text-white
      py-32
      px-6
      "
      >

        <div
        className="
        max-w-6xl
        mx-auto
        text-center
        "
        >

          {/* <h1
          className="
          text-5xl
          md:text-6xl
          font-serif
          "
          >

            Our Partners

          </h1> */}

            <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm text-center">
              Our Partners
            </p>
          <p
          className="
          mt-6
          text-white/80
          text-lg
          max-w-3xl
          mx-auto
          "
          >

            Building meaningful partnerships that connect
            institutions, communities and global opportunities.

          </p>


        </div>


      </section>








      {/* Partnership Philosophy */}

      <section
      className="
      py-24
      px-6
      "
      >

        <div
        className="
        max-w-5xl
        mx-auto
        text-center
        ">

          <h2
          className="
          text-4xl
          font-serif
          text-[#0F2747]
          "
          >

            Collaboration Creates Transformation

          </h2>


          <p
          className="
          mt-6
          text-gray-600
          leading-relaxed
          "
          >

            House of Ubuntu Global Voices brings together
            governments, universities, businesses,
            philanthropic foundations, communities and
            international organisations to develop human
            potential and create lasting impact.

          </p>


        </div>


      </section>








      {/* Partner Categories */}

      <section
      className="
      bg-[#F7F8FA]
      py-24
      px-6
      "
      >


        <div
        className="
        max-w-7xl
        mx-auto
        "
        >


          <h2
          className="
          text-center
          text-4xl
          font-serif
          text-[#0F2747]
          mb-14
          "
          >

            Partnership Ecosystem

          </h2>





          <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
          >


          {
            categories.map((category)=>{


              const Icon = category.icon;


              return (

                <div
                key={category.title}
                className="
                bg-white
                rounded-2xl
                p-8
                shadow-md
                hover:-translate-y-2
                transition
                "
                >


                  <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#C89B3C]/20
                  flex
                  items-center
                  justify-center
                  "
                  >

                    <Icon
                    className="
                    text-[#C89B3C]
                    "
                    />

                  </div>




                  <h3
                  className="
                  mt-6
                  text-xl
                  font-semibold
                  text-[#0F2747]
                  "
                  >

                    {category.title}

                  </h3>



                  <p
                  className="
                  mt-4
                  text-gray-600
                  "
                  >

                    {category.text}

                  </p>



                </div>

              )

            })
          }


          </div>


        </div>


      </section>








      {/* Strategic Partners */}

      <section
      className="
      py-24
      px-6
      "
      >


        <div
        className="
        max-w-6xl
        mx-auto
        "
        >


          <h2
          className="
          text-4xl
          font-serif
          text-[#0F2747]
          text-center
          "
          >

            Strategic Collaboration

          </h2>



          <div
          className="
          mt-12
          grid
          md:grid-cols-3
          gap-6
          "
          >


            <div
            className="
            border
            rounded-xl
            p-8
            text-center
            "
            >

              <h3 className="
              text-xl
              font-semibold
              text-[#0F2747]
              ">
                Academic Partner
              </h3>


              <p className="mt-3 text-gray-600">
                Universities and learning institutions
              </p>


            </div>




            <div
            className="
            border
            rounded-xl
            p-8
            text-center
            "
            >

              <h3 className="
              text-xl
              font-semibold
              text-[#0F2747]
              ">
                Technology Partner
              </h3>


              <p className="mt-3 text-gray-600">
                Innovation and digital transformation
              </p>


            </div>





            <div
            className="
            border
            rounded-xl
            p-8
            text-center
            "
            >

              <h3 className="
              text-xl
              font-semibold
              text-[#0F2747]
              ">
                Community Partner
              </h3>


              <p className="mt-3 text-gray-600">
                Inclusive development networks
              </p>


            </div>



          </div>


        </div>


      </section>



          {/* Global Footprint */}

          <section className="py-24 px-6 bg-[#F7F8FA]">

            <div className="max-w-7xl mx-auto">

              <div className="text-center">

                <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm">
                  Global Footprint
                </p>

                <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
                  Building Partnerships Across Borders
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
                  House of Ubuntu Global Voices is establishing strategic partnerships
                  across Africa, Europe and North America, creating opportunities for
                  education, innovation, trade, cultural diplomacy and sustainable
                  development.
                </p>

              </div>

              <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

                {/* World Map */}

                <div className="rounded-3xl overflow-hidden shadow-lg">

                  <img
                    src={worldMap}
                    alt="Global partnership map"
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Countries */}

                <div>

                  <h3 className="text-2xl font-serif text-[#0F2747] mb-8">
                    Current & Future Partnership Regions
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {[
                      "South Africa",
                      "Portugal",
                      "United Kingdom",
                      "United States of America",
                      "Belgium",
                      "European Union",
                      "Africa"
                    ].map((country) => (

                      <div
                        key={country}
                        className="
                          flex
                          items-center
                          gap-4
                          bg-white
                          rounded-xl
                          p-5
                          shadow-sm
                          hover:shadow-md
                          transition
                        "
                      >

                        <Globe2
                          className="text-[#C89B3C]"
                          size={22}
                        />

                        <span className="text-[#0F2747] font-medium">
                          {country}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>




      {/* CTA */}

      <section
      className="
      bg-[#0F2747]
      py-20
      px-6
      text-center
      text-white
      "
      >

        <h2
        className="
        text-4xl
        font-serif
        "
        >

          Become Part of the Journey

        </h2>


        <p
        className="
        mt-5
        text-white/80
        "
        >

          Partner with us to build human capital,
          strengthen communities and create global impact.

        </p>

      <div className="mt-10">
          <Link
          to="/contact"
          className="
            mt-6
            bg-[#C89B3C]
            hover:bg-[#B87333]
            transition
            px-8
            py-4
            rounded-full
            text-white
            font-semibold
            shadow-lg
          "
        >
          Partner With Us
        </Link>
     </div>

      </section>


    </main>

  )

}


export default Partners;