import emblem from "../assets/images/emblem.png";
import {
  GraduationCap,
  Cpu,
  Lightbulb,
  Globe2,
  Leaf,
  Users
} from "lucide-react";


function UbuntuWithoutBorders() {


  const pillars = [

    {
      icon: GraduationCap,
      title: "Education & Skills",
      text:
      "Building knowledge systems through learning, training, research and lifelong development."
    },


    {
      icon: Cpu,
      title: "Technology & Innovation",
      text:
      "Using digital transformation, artificial intelligence and innovation to create opportunities."
    },


    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      text:
      "Supporting creators, innovators and entrepreneurs to build sustainable economic pathways."
    },


    {
      icon: Leaf,
      title: "Sustainability",
      text:
      "Advancing agro-processing, tourism, environmental resilience and inclusive growth."
    },


    {
      icon: Globe2,
      title: "Global Partnerships",
      text:
      "Connecting institutions, communities and international networks."
    },


    {
      icon: Users,
      title: "Inclusive Development",
      text:
      "Creating opportunities for youth, women, rural communities and people with disabilities."
    }

  ];



  return (

    <main>


      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative bg-[#0F2747] text-white overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2747] via-[#12345C] to-[#081A31]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">

          <div className="text-center">

            {/* Programme Label */}

            <p className="uppercase tracking-[0.35em] text-[#C89B3C] text-sm font-semibold">

              Official Flagship Programme

            </p>

            {/* Emblem */}

            <div className="mt-10 flex justify-center">

              <img
                src={emblem}
                alt="Ubuntu Without Borders Emblem"
                className="w-64 md:w-80 object-contain drop-shadow-2xl"
              />

            </div>

            {/* Title */}

            <h1 className="mt-12 text-5xl md:text-7xl font-serif">

              Ubuntu Without Borders™

            </h1>

            {/* Subtitle */}

            <p className="mt-5 text-xl md:text-2xl text-[#C89B3C] font-medium">

              Building Human Capital for Economic Resilience
              <br />
              and Inclusive Prosperity

            </p>

            {/* Description */}

            <p className="mt-10 max-w-4xl mx-auto text-lg leading-9 text-white/80">

              Ubuntu Without Borders™ is the flagship Human Capital
              Development programme of House of Ubuntu Global Voices.
              Guided by Ubuntu and strengthened by the principles of
              Ecocivilization, the programme connects education,
              training, innovation, entrepreneurship, technology,
              Artificial Intelligence, agro-processing, tourism,
              disability inclusion, research and international
              collaboration to create sustainable social and
              economic impact.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                className="
                  bg-[#C89B3C]
                  hover:bg-[#B87333]
                  transition
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                "
              >
                Become a Partner
              </button>

              <button
                className="
                  border
                  border-white
                  hover:bg-white
                  hover:text-[#0F2747]
                  transition
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                "
              >
                Download Programme Overview
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* STICKY PROGRAMME BAR */}
      {/* ===================================================== */}

      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={emblem}
              alt="Ubuntu Without Borders"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h3 className="font-semibold text-[#0F2747]">
                Ubuntu Without Borders™
              </h3>

              <p className="text-sm text-gray-500">
                Official Flagship Programme
              </p>

            </div>

          </div>

          <button
            className="
              bg-[#C89B3C]
              text-white
              px-6
              py-3
              rounded-full
              hover:bg-[#B87333]
              transition
            "
          >
            Partner With Us
          </button>

        </div>

      </div>



      {/* Vision */}

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
        grid
        md:grid-cols-2
        gap-12
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

              Our Vision

            </h2>



            <p
            className="
            mt-5
            text-gray-600
            leading-relaxed
            "
            >

            A world where Ubuntu values shape innovation,
            education, sports, and enterprise, creating a 
            compassionate, inclusive, and resilient generation

            </p>


          </div>

         </div>

      </section>


          {/* ===================================================== */}
  {/* PROGRAMME OVERVIEW */}
  {/* ===================================================== */}

  <section className="py-28 px-6 bg-white">

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}

      <div>

        <p className="uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">

          Our Flagship Programme

        </p>

        <h2 className="mt-5 text-5xl font-serif text-[#0F2747]">

          Ubuntu Without Borders™

        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">

          Ubuntu Without Borders™ is the flagship Human Capital
          Development and Economic Resilience programme of
          House of Ubuntu Global Voices.

        </p>

        <p className="mt-6 text-lg leading-9 text-gray-600">

          Guided by the African philosophy of Ubuntu and strengthened
          by the principles of Ecocivilization, the programme develops
          people, strengthens institutions and builds resilient
          communities through education, training, innovation,
          entrepreneurship, technology, Artificial Intelligence,
          agro-processing, tourism, disability inclusion,
          research and international collaboration.

        </p>

        <p className="mt-6 text-lg leading-9 text-gray-600">

          Ubuntu Without Borders transforms human potential into
          sustainable social and economic impact by connecting
          local communities with global opportunities.

        </p>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <div className="bg-[#F7F8FA] rounded-3xl p-12 shadow-xl">

          <img
            src={emblem}
            alt="Ubuntu Without Borders Emblem"
            className="w-80 mx-auto object-contain"
          />

          <div className="mt-10 border-t pt-8">

            <h3 className="text-2xl font-serif text-[#0F2747] text-center">

              Five-Year Programme

            </h3>

            <p className="mt-4 text-center text-gray-600 leading-8">

              Connecting education, innovation,
              entrepreneurship, technology,
              Artificial Intelligence,
              sustainability and global
              partnerships to build Human Capital
              for Economic Resilience and
              Inclusive Prosperity.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>



       









      {/* Strategic Pillars */}


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

            Strategic Pillars

          </h2>





          <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
          >


          {
            pillars.map((pillar)=>{


              const Icon = pillar.icon;


              return (

              <div
              key={pillar.title}
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

                  {pillar.title}

                </h3>



                <p
                className="
                mt-3
                text-gray-600
                "
                >

                  {pillar.text}

                </p>



              </div>

              )

            })
          }


          </div>


        </div>


      </section>








      {/* Human Capital Journey */}

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
        "
        >


          <h2
          className="
          text-center
          text-4xl
          font-serif
          text-[#0F2747]
          "
          >

          Human Capital Journey

          </h2>



          <div
          className="
          mt-12
          grid
          md:grid-cols-6
          gap-5
          text-center
          "
          >


          {
            [
              "Education",
              "Skills",
              "Innovation",
              "Entrepreneurship",
              "Resilience",
              "Prosperity"
            ].map((step)=>(


              <div
              key={step}
              className="
              bg-[#0F2747]
              text-white
              p-5
              rounded-xl
              "
              >

                {step}

              </div>


            ))
          }


          </div>


        </div>


      </section>





    </main>

  )

}


export default UbuntuWithoutBorders;