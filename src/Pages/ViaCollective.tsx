import { Link } from "react-router-dom";
import { Target, Eye, Compass } from "lucide-react";
import viaCollective from "../assets/images/viacollective.png";
import viaCollective2 from "../assets/images/viacollective2.png";

// Optional Hero Image
// import heroImage from "../assets/images/via-hero.jpg";

function ViaCollective() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative bg-[#0F2747] text-white pt-40 pb-32 px-6 overflow-hidden">

        {/* Uncomment when you have a hero image */}

        {/*
        <img
          src={heroImage}
          alt="VIA Collective"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0F2747]/75"></div>
        */}

        <div className="relative max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#C89B3C] text-sm">
            A Flagship Programme of House of Ubuntu Global Voices
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
            VIA COLLECTIVE™
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-white/85 leading-9">
            A Global Platform Where Culture, Creativity and Human
            Connection Inspire Collaboration and Opportunity.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="bg-[#C89B3C] hover:bg-[#B87333] transition px-8 py-4 rounded-full font-medium"
            >
              Join the Collective
            </Link>

            <Link
              to="/partners"
              className="border border-white hover:bg-white hover:text-[#0F2747] transition px-8 py-4 rounded-full font-medium"
            >
              Become a Partner
            </Link>

          </div>

        </div>

      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Placeholder */}

         {/* Featured Image */}

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">

            <img
                src={viaCollective2}
                alt="VIA Collective"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/85 via-[#0F2747]/30 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-10">

                <p className="uppercase tracking-[0.25em] text-[#C89B3C] text-sm font-medium">
                VIA Collective
                </p>

                <h3 className="mt-3 text-4xl font-serif text-white">
                Culture • Creativity • Connection
                </h3>

                <p className="mt-4 max-w-md text-white/90 leading-8">
                Curating exceptional experiences where arts, culture,
                fashion, hospitality, education and international
                collaboration inspire lasting partnerships.
                </p>

            </div>

            </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-widest text-[#C89B3C] font-medium">
              About VIA Collective
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747] leading-tight">
              Where Relationships Become Opportunities
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              VIA COLLECTIVE™ is an international platform that brings
              together people, ideas, creativity and opportunity through
              meaningful human connection.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              As the flagship programme of House of Ubuntu Global Voices,
              VIA COLLECTIVE creates curated experiences where arts,
              culture, fashion, wine, gastronomy, hospitality, tourism,
              education, innovation, entrepreneurship and international
              collaboration converge.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We believe that the most valuable opportunities begin with
              authentic relationships.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Every gathering is intentionally designed to inspire
              dialogue, strengthen partnerships, celebrate creativity
              and unlock new possibilities across Africa, Europe and
              the Global African Diaspora.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PURPOSE • VISION • MISSION ================= */}

      <section className="py-24 bg-[#F7F8FA] px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Our Foundation
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
                To connect people, institutions and communities through
                curated experiences that foster collaboration,
                creativity, cultural exchange and long-term
                partnerships.
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
                To become a globally recognised platform where meaningful
                relationships inspire innovation, strengthen cultural
                diplomacy and create opportunities that transcend
                borders.
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
                To curate exceptional experiences that unite diverse
                voices, sectors and perspectives, creating environments
                where collaboration flourishes and lasting partnerships
                are formed.
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
              Six Pillars That Connect People and Opportunity
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              VIA COLLECTIVE creates environments where creativity,
              collaboration and human connection inspire meaningful
              partnerships across Africa, Europe and the Global African
              Diaspora.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Arts & Culture */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🎨
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Arts & Culture
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Celebrating artistic excellence and cultural heritage as
                powerful catalysts for dialogue, understanding and
                international collaboration.
              </p>

            </div>

            {/* Fashion */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                👗
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Fashion & Design
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Showcasing creativity, craftsmanship and contemporary
                design as expressions of identity, innovation and
                cultural enterprise.
              </p>

            </div>

            {/* Wine */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🍷
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Wine, Gastronomy & Hospitality
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Using wine, food and hospitality as universal languages
                that encourage conversation, cultural appreciation and
                meaningful relationship building.
              </p>

            </div>

            {/* Youth */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🎓
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Youth & Education
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Creating opportunities for students, academics,
                researchers and emerging leaders to engage, learn and
                collaborate across borders.
              </p>

            </div>

            {/* Innovation */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                💡
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                Innovation & Entrepreneurship
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Connecting entrepreneurs, innovators, investors and
                institutions to encourage knowledge exchange,
                enterprise development and sustainable growth.
              </p>

            </div>

            {/* International */}
            <div className="bg-[#F7F8FA] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 flex items-center justify-center text-3xl">
                🌍
              </div>

              <h3 className="mt-6 text-2xl font-serif text-[#0F2747]">
                International Collaboration
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Building trusted relationships between Africa, Europe
                and the Global African Diaspora through partnerships
                that create lasting value.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= THE VIA EXPERIENCE ================= */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}

            <div>

              <p className="uppercase tracking-widest text-[#C89B3C]">
                The VIA Collective Experience
              </p>

              <h2 className="mt-5 text-4xl font-serif text-[#0F2747]">
                Every Gathering is Intentionally Curated
              </h2>

              <p className="mt-8 text-gray-600 leading-8">
                Every VIA COLLECTIVE experience is carefully designed to
                bring together diplomats, artists, entrepreneurs,
                academics, investors, chefs, winemakers, designers,
                hospitality professionals, students, philanthropists
                and community leaders.
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                These inspiring environments encourage authentic
                dialogue, celebrate creativity and create the conditions
                where meaningful relationships naturally develop into
                lasting collaborations.
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                Although every gathering is unique, each reflects the
                values that define VIA COLLECTIVE:
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  "Authenticity",
                  "Excellence",
                  "Inclusion",
                  "Curiosity",
                  "Respect",
                  "Collaboration"
                ].map((value) => (

                  <div
                    key={value}
                    className="bg-white rounded-xl p-4 text-center shadow-sm font-medium text-[#0F2747]"
                  >
                    {value}
                  </div>

                ))}

              </div>

            </div>

            {/* Image Placeholder */}

            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">

                <img
                    src={viaCollective}
                    alt="VIA Collective Experience"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0F2747]/40"></div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 p-10 text-white">

                    <p className="uppercase tracking-[0.25em] text-[#C89B3C] text-sm">
                    VIA Collective
                    </p>

                    <h3 className="mt-3 text-4xl font-serif">
                    Curated Experiences
                    </h3>

                    <p className="mt-4 max-w-lg text-white/90 leading-8">
                    Bringing together culture, creativity, hospitality and international
                    collaboration through authentic human connection.
                    </p>

                </div>

                </div>

          </div>

        </div>

      </section>

            {/* ================= OUR APPROACH ================= */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-widest text-[#C89B3C]">
            Our Approach
          </p>

          <h2 className="mt-4 text-5xl font-serif text-[#0F2747]">
            Meaningful Conversations Create Meaningful Change
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9 max-w-4xl mx-auto">
            VIA COLLECTIVE believes that lasting partnerships begin with
            authentic dialogue. Our approach is centred on quality rather
            than scale, bringing together carefully selected participants
            whose expertise, perspectives and experiences contribute to
            genuine collaboration.
          </p>

          <p className="mt-8 text-lg text-gray-600 leading-9 max-w-4xl mx-auto">
            Rather than simply hosting gatherings, VIA COLLECTIVE
            cultivates a trusted international community where
            relationships flourish, ideas are exchanged and meaningful
            opportunities emerge.
          </p>

        </div>

      </section>

      {/* ================= PARTNERSHIPS ================= */}

      <section className="py-24 px-6 bg-[#F7F8FA]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-widest text-[#C89B3C]">
              Partnerships
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              Collaboration Across Sectors
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
              We work with organisations that share our commitment to
              strengthening international relationships and creating
              lasting social, educational, cultural and economic value.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

            {[
              "Governments",
              "Universities",
              "Cultural Organisations",
              "Businesses",
              "Investors",
              "Philanthropic Foundations",
              "Tourism Partners",
              "Civil Society Organisations",
              "International Networks"
            ].map((partner) => (

              <div
                key={partner}
                className="bg-white rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-full bg-[#0F2747] text-white flex items-center justify-center text-2xl">
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

      {/* ================= LONG TERM SUSTAINABILITY ================= */}

      <section className="py-24 px-6 bg-[#0F2747] text-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-widest text-[#C89B3C]">
            Long-Term Sustainability
          </p>

          <h2 className="mt-4 text-5xl font-serif">
            Creating Lasting Global Impact
          </h2>

          <p className="mt-10 max-w-4xl mx-auto text-white/85 leading-9">
            VIA COLLECTIVE is designed as a sustainable international
            platform that creates value through strategic partnerships,
            curated experiences, international delegations,
            educational initiatives, advisory services,
            membership opportunities and collaborative programmes.
          </p>

          <p className="mt-8 max-w-4xl mx-auto text-white/80 leading-9">
            Our ambition is to build an enduring ecosystem that
            strengthens cultural diplomacy, creativity,
            entrepreneurship, education and international
            collaboration while generating lasting social,
            cultural and economic impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              "Strategic Partnerships",
              "Creative Industries",
              "Education",
              "Global Collaboration"
            ].map((item) => (

              <div
                key={item}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10"
              >

                <div className="text-5xl mb-5">
                  ★
                </div>

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= JOIN THE COLLECTIVE ================= */}

      <section className="py-28 px-6 bg-[#F7F8FA]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-widest text-[#C89B3C]">
            Join the Collective
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F2747] leading-tight">
            Build Bridges Across Borders
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Whether you are a government institution, university,
            investor, entrepreneur, artist, designer,
            educator, student, diplomat, philanthropist,
            cultural leader or community organisation,
            VIA COLLECTIVE welcomes you into a growing
            international network committed to creativity,
            collaboration and shared success.
          </p>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Together we celebrate creativity,
            cultivate partnerships,
            inspire innovation,
            and create opportunities that leave
            a lasting legacy.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#C89B3C] hover:bg-[#B87333] transition text-white px-8 py-4 rounded-full font-semibold"
            >
              Join the Collective
            </Link>

            <Link
              to="/partners"
              className="border-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white transition px-8 py-4 rounded-full font-semibold"
            >
              Become a Partner
            </Link>

          </div>

          <div className="mt-20 border-t border-gray-300 pt-12">

            <h3 className="text-3xl font-serif text-[#0F2747] leading-relaxed">
              Connecting People.<br />
              Inspiring Dialogue.<br />
              Creating Opportunity.
            </h3>

            <p className="mt-6 text-xl italic text-gray-600">
              Where relationships become opportunities.
            </p>

            <p className="mt-8 text-[#C89B3C] font-semibold tracking-widest">
              House of Ubuntu Global Voices
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ViaCollective;