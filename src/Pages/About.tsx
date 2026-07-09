import {
  Users,
  GraduationCap,
  Handshake,
  TrendingUp
} from "lucide-react";


function About() {

  const values = [
    {
      icon: Users,
      title: "Humanity",
      text:
      "People are at the centre of everything we do. We believe dignity, inclusion and human potential are the foundation of sustainable progress."
    },

    {
      icon: GraduationCap,
      title: "Knowledge",
      text:
      "Education, research, innovation and lifelong learning create opportunity and empower people to shape the future."
    },

    {
      icon: Handshake,
      title: "Partnership",
      text:
      "Transformation is achieved through collaboration across institutions, sectors, communities and borders."
    },

    {
      icon: TrendingUp,
      title: "Prosperity",
      text:
      "Human capital development creates economic resilience, inclusive growth and thriving communities."
    }
  ];


  return (

    <main>


      {/* Hero */}

      <section
      className="
      bg-[#0F2747]
      py-32
      px-6
      text-white
      "
      >

        <div
        className="
        max-w-7xl
        mx-auto
        "
        >

         
           <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm text-center">
            About Us
          </p>

          <p
          className="mt-6 text-white/80 text-lg max-w-3xl mx-auto"
          >

            A South African founded international Human Capital
            Development and Institutional Partnership Platform
            connecting people, communities and global opportunities
            through Ubuntu.

          </p>


        </div>

      </section>






      {/* Positioning */}

      <section
      className="
      py-24
      px-6
      bg-[#F7F8FA]
      "
      >

        <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
        >


          <div>

            <h2
            className="
            text-4xl
            font-serif
            text-[#0F2747]
            "
            >

              Building Human Capital

            </h2>


            <p
            className="
            mt-6
            text-gray-600
            leading-relaxed
            "
            >

              House of Ubuntu Global Voices connects education,
              training, innovation, entrepreneurship, technology,
              agro-processing, tourism, creative industries and
              global partnerships to build economic resilience
              and inclusive prosperity.

            </p>


          </div>




          <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-10
          border
          border-gray-100
          "
          >


            <h3
            className="
            text-2xl
            font-serif
            text-[#C89B3C]
            "
            >

              Our Philosophy

            </h3>


            <p
            className="
            mt-4
            text-gray-600
            "
            >

              We honour our heritage.
              We celebrate our culture.
              We respect our traditions.
              We build the future.

            </p>


          </div>


        </div>

      </section>








      {/* Brand Essence */}

      <section
      className="
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


          <div className="text-center mb-14">


            <h2
            className="
            text-4xl
            font-serif
            text-[#0F2747]
            "
            >

              Our Foundation

            </h2>


            <p className="
            mt-4
            text-gray-600
            "
            >

              The values that guide our global mission.

            </p>


          </div>





          <div
          className="
          grid
          md:grid-cols-4
          gap-6
          "
          >


            {
              values.map((item)=>{


                const Icon = item.icon;


                return (

                  <div
                  key={item.title}
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
                      className="text-[#C89B3C]"
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

                      {item.title}

                    </h3>



                    <p
                    className="
                    mt-3
                    text-gray-600
                    text-sm
                    leading-relaxed
                    "
                    >

                      {item.text}

                    </p>


                  </div>

                )

              })
            }


          </div>


        </div>


      </section>



    </main>

  )

}


export default About;