import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  Wine,
  Landmark
} from "lucide-react";


function Platforms() {


  const platforms = [

    {
      icon: Globe2,
      title: "Ubuntu Without Borders™",
      subtitle: "Flagship Human Capital Development Programme",
      description:
        "A five year Human Capital Development and Economic Resilience platform connecting education, training, innovation, entrepreneurship, technology, disability inclusion, agro processing, tourism, research, and international collaboration.",
      button:
        "Explore Programme",
      to: "/ubuntu-without-borders"  
    },


    {
      icon: Wine,
      title: "Ubuntu Wine Alliance™",
      subtitle: "Global Agro Processing & Investment Platform",
      description:
        "A global agro processing, trade, market access, education, investment, and enterprise development platform supporting producers, strengthening rural economies, and expanding international market opportunities.",
      button:
        "Discover Alliance",
      to: "/ubuntu-wine-alliance"
    },


    {
      icon: Landmark,
      title: "VIA Collective™",
      subtitle: "Portugal Flagship Platform",
      description:
        "A Portugal based flagship platform advancing cultural diplomacy, tourism, creativity, hospitality, storytelling, wine, and international dialogue through meaningful human connection.",
      button:
        "Explore VIA Collective",
     to: "/via-collective"   
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

            Our Strategic Platforms

          </h1> */}


        <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm text-center"> 
            Our Strategic Platforms
        </p>
          <p
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-white/80
          text-lg
          "
          >

            Connecting people, institutions, industries and
            global opportunities through Ubuntu.

          </p>


        </div>


      </section>







      {/* Platform Cards */}

      <section
      className="
      py-24
      px-6
      bg-[#F7F8FA]
      "
      >

        <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
        "
        >


          {
            platforms.map((platform)=>{


              const Icon = platform.icon;


              return (

                <div
                key={platform.title}
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
                  w-16
                  h-16
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
                    w-8
                    h-8
                    "
                    />

                  </div>





                  <h2
                  className="
                  mt-6
                  text-2xl
                  font-serif
                  text-[#0F2747]
                  "
                  >

                    {platform.title}

                  </h2>



                  <h3
                  className="
                  mt-2
                  text-sm
                  text-[#C89B3C]
                  font-medium
                  "
                  >

                    {platform.subtitle}

                  </h3>




                  <p
                  className="
                  mt-5
                  text-gray-600
                  leading-relaxed
                  "
                  >

                    {platform.description}

                  </p>





                  <Link
                    to={platform.to}
                    className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-[#0F2747]
                        font-semibold
                        hover:text-[#C89B3C]
                        transition
                    "
                    >
                    {platform.button}
                    <ArrowRight size={18} />
                 </Link>



                </div>

              )


            })
          }



        </div>


      </section>








      {/* Ecosystem Section */}

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
        "
        >


          <h2
          className="
          text-4xl
          font-serif
          text-[#0F2747]
          "
          >

            Building Connected Impact

          </h2>



          <p
          className="
          mt-5
          text-gray-600
          "
          >

            People strengthen institutions.
            Strong institutions create resilient communities.
            Resilient communities build prosperous nations.

          </p>




          <div
          className="
          mt-12
          grid
          md:grid-cols-5
          gap-5
          "
          >


          {
            [
              "Education",
              "Innovation",
              "Industry",
              "Communities",
              "Global Partnerships"
            ].map((item)=>(

              <div
              key={item}
              className="
              bg-[#0F2747]
              text-white
              p-5
              rounded-xl
              "
              >

                {item}

              </div>

            ))
          }


          </div>


        </div>


      </section>



    </main>

  )

}


export default Platforms;