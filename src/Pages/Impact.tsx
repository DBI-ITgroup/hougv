import { Link } from "react-router-dom";

import {
  TrendingUp,
  Users,
  Globe2,
  GraduationCap,
  Briefcase,
  HeartHandshake
} from "lucide-react";


function Impact() {

  const stats = [

    {
      icon: Users,
      value: "10,000+",
      label: "Content will go here....."
    },

    {
      icon: GraduationCap,
      value: "200+",
      label: "Content will go here....."
    },

    {
      icon: Globe2,
      value: "15+",
      label: "Content will go here....."
    },

    {
      icon: Briefcase,
      value: "50+",
      label: "Content will go here....."
    }

  ];


  const pillars = [

    {
      icon: TrendingUp,
      title: "Lorem ipsum",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
      icon: GraduationCap,
      title: "Lorem ipsum",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
      icon: HeartHandshake,
      title: "Lorem ipsum",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
      icon: Globe2,
      title: "Lorem ipsum",
      text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    }

  ];


  return (

    <main>


      {/* HERO */}

      <section className="bg-[#0F2747] text-white py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm text-center">
            Our Impact
          </p>

          <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto">
            Measuring transformation through human capital development,
            partnerships, and global collaboration.
          </p>

        </div>

      </section>





      {/* STATS */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((stat) => {

              const Icon = stat.icon;

              return (

                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-8 text-center shadow-md"
                >

                  <div className="flex justify-center mb-4">

                    <Icon className="text-[#C89B3C]" size={32} />

                  </div>

                  <h2 className="text-3xl font-serif text-[#0F2747]">
                    {stat.value}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {stat.label}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>





      {/* IMPACT STATEMENT */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-serif text-[#0F2747]">
            .................................Heading.........................................
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
             deserunt mollit anim id est laborum.
          </p>

        </div>

      </section>





      {/* IMPACT PILLARS */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-serif text-[#0F2747] text-center mb-14">
            Core Impact Areas
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {pillars.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 transition"
                >

                  <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">

                    <Icon className="text-[#C89B3C]" />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#0F2747]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>





      {/* ROADMAP */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-serif text-[#0F2747]">
            Impact Roadmap
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-4">

            {[
              "Content will go here.......",
              "Content will go here.......",
              "Content will go here.......",
              "Content will go here......."
            ].map((step) => (

              <div
                key={step}
                className="bg-[#0F2747] text-white p-6 rounded-xl"
              >
                {step}
              </div>

            ))}

          </div>

        </div>

      </section>





      {/* CTA */}

      <section className="bg-[#0F2747] text-white py-24 px-6 text-center">

        <h2 className="text-4xl font-serif">
          Be Part of the Impact
        </h2>

        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          Join us in building human capital, strengthening institutions,
          and creating inclusive prosperity across the globe.
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

  );

}


export default Impact;