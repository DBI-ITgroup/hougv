import {
  Heart,
  Leaf,
  Landmark,
  GraduationCap,
  Lightbulb,
  Cpu,
  Microscope,
  Briefcase,
  TrendingUp,
  Users,
  Globe2,
} from "lucide-react";

function OurPhilosophy() {
  const model = [
    { title: "People", icon: Users },
    { title: "Education", icon: GraduationCap },
    { title: "Training & Development", icon: GraduationCap },
    { title: "Innovation", icon: Lightbulb },
    { title: "Technology", icon: Cpu },
    { title: "Research", icon: Microscope },
    { title: "Entrepreneurship", icon: Briefcase },
    { title: "Employment", icon: Users },
    { title: "Economic Resilience", icon: TrendingUp },
    { title: "Community Development", icon: Heart },
    { title: "Trade & Investment", icon: Globe2 },
    { title: "Inclusive Economic Growth", icon: TrendingUp },
    { title: "Global Partnerships", icon: Globe2 },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0F2747] text-white pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm">
            Our Philosophy
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-serif">
            Ubuntu
          </h1>

          <p className="mt-6 text-2xl italic text-white/90">
            "I Am Because We Are."
          </p>
        </div>
      </section>

      {/* Ubuntu & Ecocivilization */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <div className="rounded-2xl bg-[#F7F8FA] p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">
              <Heart className="text-[#C89B3C]" />
            </div>

            <h2 className="mt-6 text-3xl font-serif text-[#0F2747]">
              Ubuntu
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Ubuntu reminds us that dignity, compassion, respect,
              inclusion and shared responsibility are the foundation
              of sustainable development.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F7F8FA] p-10 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <Leaf className="text-green-700" />
            </div>

            <h2 className="mt-6 text-3xl font-serif text-[#0F2747]">
              Ecocivilization
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Ecocivilization inspires regenerative development,
              resilience, sustainability, transparency, inclusion,
              systems thinking and responsible stewardship of natural
              resources.
            </p>
          </div>

        </div>

        <div className="max-w-5xl mx-auto mt-16 text-center">
          <p className="text-lg leading-8 text-gray-700">
            Together, <span className="font-semibold text-[#0F2747]">Ubuntu</span> and{" "}
            <span className="font-semibold text-[#0F2747]">Ecocivilization</span>{" "}
            shape every partnership, strategic platform and initiative
            undertaken by House of Ubuntu Global Voices.
          </p>
        </div>
      </section>

              {/* Foundational Belief */}
      <section className="py-24 bg-[#F7F8FA] px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <Landmark className="mx-auto text-[#C89B3C]" size={42} />

            <p className="mt-5 uppercase tracking-[0.3em] text-[#C89B3C] text-sm">
              Our Foundation
            </p>

            <h2 className="mt-4 text-5xl font-serif text-[#0F2747]">
              Our Foundational Belief
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              We honour the values that shape who we are while building
              a future driven by education, innovation and shared
              prosperity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-20">

            {[
              {
                title: "We honour our heritage.",
                description: "Our heritage provides identity.",
                icon: Landmark,
              },
              {
                title: "We celebrate our culture.",
                description: "Our culture inspires creativity.",
                icon: Heart,
              },
              {
                title: "We respect our traditions.",
                description: "Our traditions preserve wisdom.",
                icon: Leaf,
              },
              {
                title: "We build the future.",
                description:
                  "We transform our shared values into opportunities for future generations.",
                icon: Lightbulb,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-full bg-[#0F2747] flex items-center justify-center shrink-0">
                      <Icon className="text-[#C89B3C]" size={26} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-[#0F2747]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-gray-600 leading-7">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          <div className="max-w-5xl mx-auto mt-20 text-center">
            <p className="text-lg text-gray-700 leading-8">
              Our heritage provides identity. Our culture inspires
              creativity. Our traditions preserve wisdom. Together,
              these foundations empower us to advance education,
              training, innovation, entrepreneurship, leadership,
              research, technology and global partnerships that create
              sustainable opportunities for present and future
              generations.
            </p>
          </div>

        </div>
      </section>

     {/* Human Capital Model */}

    <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-[#C89B3C]">
            Human Capital Model
        </p>

        <h2 className="mt-4 text-5xl font-serif text-[#0F2747]">
            Our Human Capital Journey
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            We believe sustainable prosperity begins with people.
            Through education, innovation and collaboration,
            human potential becomes lasting economic and social impact.
        </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-16 gap-x-10 mt-20">

        {model.map((item) => {

            const Icon = item.icon;

            return (

            <div
                key={item.title}
                className="flex flex-col items-center text-center group"
            >

                <div
                className="
                w-24
                h-24
                rounded-full
                bg-[#0F2747]
                border-8
                border-[#C89B3C]
                flex
                items-center
                justify-center
                shadow-lg
                transition
                duration-300
                group-hover:scale-110
                group-hover:bg-[#163A63]
                "
                >

                <Icon
                    className="w-10 h-10 text-white"
                />

                </div>

                <h3
                className="
                mt-5
                text-sm
                uppercase
                tracking-wide
                font-semibold
                text-[#0F2747]
                "
                >
                {item.title}
                </h3>

            </div>

            );

        })}

        </div>

    </div>

    </section>
    </main>
  );
}

export default OurPhilosophy;