import { Link } from "react-router-dom";
import { Target, Eye, Compass } from "lucide-react";
import vineyard from "../assets/images/vineyard.jpg"

// Optional hero image
// import heroImage from "../assets/images/wine-hero.jpg";

function UbuntuWineAlliance() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative bg-[#0F2747] text-white pt-40 pb-32 px-6 overflow-hidden">

        {/* Uncomment when you have a hero image */}
        {/*
        <img
          src={heroImage}
          alt="Ubuntu Wine Alliance"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0F2747]/75"></div>
        */}

        <div className="relative max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#C89B3C] text-sm">
            A Flagship Programme of House of Ubuntu Global Voices
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
            Ubuntu Wine Alliance™
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-white/85 leading-9">
            Connecting the Global Wine Community Through
            Collaboration, Education and Opportunity.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="bg-[#C89B3C] hover:bg-[#B87333] transition px-8 py-4 rounded-full font-medium"
            >
              Join the Alliance
            </Link>

            <Link
              to="/partners"
              className="border border-white hover:bg-white hover:text-[#0F2747] transition px-8 py-4 rounded-full font-medium"
            >
              Partner With Us
            </Link>

          </div>

        </div>

      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Placeholder */}

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">

           

              <img
                src={vineyard}
                alt="VIA Collective"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

           <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/60 via-transparent to-transparent"></div>

  

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-widest text-[#C89B3C] font-medium">
              About the Alliance
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747] leading-tight">
              Building Meaningful Connections Across the Global Wine Community
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Ubuntu Wine Alliance™ is the flagship wine programme of
              House of Ubuntu Global Voices, dedicated to strengthening
              collaboration, education, market access, wine tourism,
              innovation and cultural exchange across the international
              wine sector.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Inspired by the African philosophy of Ubuntu,
              <span className="italic">
                {" "}
                "I am because we are,"
              </span>{" "}
              the Alliance believes that the future of wine is built
              through partnership, shared knowledge, mutual respect and
              meaningful human connection.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Ubuntu Wine Alliance brings together winemakers, wine
              producers, wine associations, educators, sommeliers,
              hospitality professionals, tourism organisations,
              importers, distributors, retailers, investors,
              researchers, governments and academic institutions to
              create opportunities that strengthen the global wine
              ecosystem.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PURPOSE • VISION • MISSION ================= */}

      <section className="py-24 bg-[#F7F8FA] px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Our Direction
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              Purpose, Vision & Mission
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {/* Purpose */}

            <div className="bg-white rounded-2xl shadow-md p-10 hover:-translate-y-2 transition">

              <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">

                <Target className="text-[#C89B3C]" />

              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Our Purpose
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                To create meaningful opportunities for collaboration,
                education, market access, innovation and sustainable
                growth within the international wine community.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Ubuntu Wine Alliance serves as a bridge between
                established and emerging wine regions, connecting
                people, institutions, businesses and ideas through
                shared purpose and mutual respect.
              </p>

            </div>

            {/* Vision */}

            <div className="bg-white rounded-2xl shadow-md p-10 hover:-translate-y-2 transition">

              <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">

                <Eye className="text-[#C89B3C]" />

              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Our Vision
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                To become a globally respected platform that advances
                international collaboration, wine education,
                responsible tourism, innovation and sustainable
                development across the wine industry.
              </p>

            </div>

            {/* Mission */}

            <div className="bg-white rounded-2xl shadow-md p-10 hover:-translate-y-2 transition">

              <div className="w-14 h-14 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">

                <Compass className="text-[#C89B3C]" />

              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Our Mission
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                To connect the global wine community through strategic
                partnerships, knowledge exchange, professional
                development, market access initiatives and cultural
                diplomacy that create long-term value for producers,
                businesses, institutions and communities.
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= OUR PILLARS ================= */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Our Pillars
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              Six Strategic Areas of Impact
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              Ubuntu Wine Alliance strengthens the global wine community
              through six interconnected pillars that promote collaboration,
              innovation and sustainable growth.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Wine Education */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🍷
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Wine Education
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Promoting professional development through masterclasses,
                workshops, leadership programmes, research and international
                knowledge exchange.
              </p>

            </div>

            {/* Market Access */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🌍
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Market Access
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Supporting producers and wine businesses in accessing new
                domestic and international markets through strategic
                partnerships and commercial collaboration.
              </p>

            </div>

            {/* Wine Tourism */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                ✈️
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Wine Tourism
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Promoting wine destinations and immersive visitor experiences
                that celebrate regional heritage, hospitality, sustainability
                and local communities.
              </p>

            </div>

            {/* International Collaboration */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🤝
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                International Collaboration
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Strengthening partnerships between wine regions,
                universities, governments, trade organisations and
                industry leaders across continents.
              </p>

            </div>

            {/* Innovation */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🌱
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Innovation & Sustainability
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Encouraging innovation, responsible production,
                environmental stewardship and long-term resilience
                throughout the wine value chain.
              </p>

            </div>

            {/* Diversity */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🌎
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Diversity & Inclusion
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Championing broader participation and recognising the
                contribution of diverse voices, cultures and professionals
                across the global wine industry.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= OUR PROGRAMMES ================= */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Our Programmes
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              Creating Meaningful Impact Across the Wine Sector
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              Ubuntu Wine Alliance develops initiatives that strengthen
              collaboration, expand opportunities and create measurable
              impact throughout the international wine ecosystem.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "International Wine Forums",
              "Wine Tourism Initiatives",
              "Trade & Market Access",
              "Educational Partnerships",
              "Professional Exchanges",
              "Leadership Development",
              "Research & Knowledge Sharing",
              "Industry Networking",
              "Cross-border Collaboration",
            ].map((programme) => (

              <div
                key={programme}
                className="bg-white rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >

                <div className="w-12 h-12 rounded-full bg-[#C89B3C] text-white flex items-center justify-center font-bold">
                  ✓
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F2747]">
                  {programme}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Strengthening collaboration, professional development
                  and international opportunities across the global
                  wine industry.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* ================= WHO WE WORK WITH ================= */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Who We Work With
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              Building Partnerships Across the Global Wine Ecosystem
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              Ubuntu Wine Alliance welcomes collaboration with organisations,
              institutions and professionals who share our commitment to
              education, innovation, sustainability and international
              cooperation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

            {[
              "Wine Producers & Wineries",
              "Wine Associations & Industry Bodies",
              "Universities & Research Institutions",
              "Hospitality & Tourism Organisations",
              "Importers, Distributors & Retailers",
              "Sommeliers & Wine Educators",
              "Investors & Commercial Partners",
              "Governments & Trade Promotion Agencies",
              "Cultural Organisations & International Networks"
            ].map((partner) => (

              <div
                key={partner}
                className="border border-gray-200 rounded-2xl p-8 hover:border-[#C89B3C] hover:shadow-lg transition"
              >

                <div className="w-14 h-14 rounded-full bg-[#0F2747] text-white flex items-center justify-center text-xl">
                  🤝
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F2747]">
                  {partner}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SUSTAINABILITY ================= */}

      <section className="py-24 px-6 bg-[#0F2747] text-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Long-Term Sustainability
            </p>

            <h2 className="mt-4 text-5xl font-serif">
              Building a Sustainable Global Wine Community
            </h2>

          </div>

          <p className="mt-10 text-center text-white/85 leading-9 max-w-4xl mx-auto">
            Ubuntu Wine Alliance is designed as a sustainable international
            platform that creates value through strategic partnerships,
            educational programmes, wine tourism initiatives, advisory
            services, market access facilitation, international delegations,
            professional exchanges and collaborative industry projects.
          </p>

          <p className="mt-8 text-center text-white/80 leading-9 max-w-4xl mx-auto">
            Our ambition is to contribute to a more connected, innovative,
            inclusive and resilient global wine community while generating
            lasting economic, educational, cultural and social impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              "Strategic Partnerships",
              "Education & Leadership",
              "Market Access",
              "International Collaboration"
            ].map((item) => (

              <div
                key={item}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/10"
              >

                <div className="text-5xl mb-5">★</div>

                <h3 className="font-semibold text-xl">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= JOIN THE ALLIANCE ================= */}

      <section className="py-28 px-6 bg-[#F7F8FA]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-widest text-[#C89B3C]">
            Join Ubuntu Wine Alliance
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F2747] leading-tight">
            Connecting the Global Wine Community
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Whether you are a wine producer, educator, sommelier,
            importer, distributor, hospitality professional,
            tourism operator, researcher, policymaker,
            investor or wine enthusiast,
            Ubuntu Wine Alliance welcomes you into
            a growing international community committed
            to collaboration, excellence and shared success.
          </p>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Together we strengthen relationships,
            expand opportunities,
            celebrate wine cultures,
            and shape the future of the global wine industry.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#C89B3C] hover:bg-[#B87333] transition text-white px-8 py-4 rounded-full font-semibold"
            >
              Join the Alliance
            </Link>

            <Link
              to="/partners"
              className="border-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white transition px-8 py-4 rounded-full font-semibold"
            >
              Become a Partner
            </Link>

          </div>

          <div className="mt-20 border-t border-gray-300 pt-12">

            <h3 className="text-3xl font-serif text-[#0F2747]">
              Building Partnerships.
              Expanding Markets.
              Creating Lasting Impact.
            </h3>

            <p className="mt-6 text-[#C89B3C] font-medium tracking-wide">
              House of Ubuntu Global Voices
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default UbuntuWineAlliance;