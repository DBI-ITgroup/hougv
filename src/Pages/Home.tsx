import { Link } from "react-router-dom";
import emblem from "../assets/images/emblem.png";
import news from "../assets/images/news.jpg";
import {
  ArrowRight,
  ChevronDown,
  HeartHandshake, Globe2,
  CalendarDays,  GraduationCap,
  Cpu,
  Lightbulb,
  Microscope,
  TrendingUp
} from "lucide-react";

import heroImage from "../assets/images/hero.png";

function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative h-screen overflow-hidden">

        {/* Background Image */}

        <img
          src={heroImage}
          alt="House of Ubuntu Global Voices"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#081A31]/70"></div>

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2747]/90 via-[#0F2747]/70 to-transparent"></div>

        {/* Content */}

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

            <div className="max-w-4xl">

              {/* Institution */}

              <p className="uppercase tracking-[0.35em] text-[#C89B3C] font-semibold text-sm">
                House of Ubuntu Global Voices
              </p>

              {/* Main Heading */}

              <h1 className="mt-6 text-6xl md:text-7xl font-serif text-white leading-tight">
                Building Human Capital
              </h1>

              {/* Subtitle */}

              <h2 className="mt-6 text-2xl md:text-2xl font-light text-white leading-relaxed">
                Connecting People, Communities and Global Opportunities Through Ubuntu
              </h2>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/contact"
                  className="
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

                <Link
                  to="/platforms"
                  className="
                    border
                    border-white
                    hover:bg-white
                    hover:text-[#0F2747]
                    transition
                    px-8
                    py-4
                    rounded-full
                    text-white
                    font-semibold
                  "
                >
                  Explore Our Strategic Platforms
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    py-4
                    text-white
                    font-semibold
                    hover:text-[#C89B3C]
                    transition
                  "
                >
                  <HeartHandshake size={20} />
                  Support Our Mission
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll Down */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-bounce">

          <ChevronDown
            size={34}
            className="mx-auto text-white"
          />

          <p className="mt-2 text-white/80 text-sm uppercase tracking-widest">

            Discover More

          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-5xl mx-auto text-center">

          {/* <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm font-semibold">
            Building Human Capital for Economic Resilience and Inclusive Prosperity
          </p> */}

          <p className="uppercase tracking-[0.3em] text-[#C89B3C] text-sm font-semibold">
            Who we are
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F2747]">
            Building Human Capital for a Better Future
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">

           House of Ubuntu Global Voices is an international institution dedicated to Building Human Capital.
           We believe that every nation becomes stronger when its people are equipped with knowledge, practical 
           skills, creativity, innovation, leadership, and opportunity.


          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">

            Our work connects universities, schools, governments, businesses, philanthropic organisations, 
            development agencies,communities, and international partners to create measurable and lasting impact.

          </p>

        </div>

      </section>

      {/* ========================================= */}
    {/* WHY WE EXIST */}
    {/* ========================================= */}

    <section className="py-24 bg-[#F7F8FA] px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <div>

          <p className="uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">
            Why We Exist
          </p>

          <h2 className="mt-4 text-5xl font-serif text-[#0F2747] leading-tight">
            Building Human Capital for a More Resilient Future
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            House of Ubuntu Global Voices is an international institution dedicated to Building Human Capital.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            By connecting education, training, innovation,
            entrepreneurship, research, technology, tourism,
            agro processing, creative industries, disability
            inclusion and international collaboration,
            we create pathways to Economic Resilience
            and Inclusive Prosperity.
          </p>

        </div>

        {/* Right Cards */}

        <div className="grid sm:grid-cols-2 gap-6">

          {[
            {
              title: "Education & Training",
              icon: GraduationCap,
            },
            {
              title: "Innovation & Technology",
              icon: Cpu,
            },
            {
              title: "Entrepreneurship",
              icon: Lightbulb,
            },
            {
              title: "Research",
              icon: Microscope,
            },
            {
              title: "Global Partnerships",
              icon: Globe2,
            },
            {
              title: "Economic Resilience",
              icon: TrendingUp,
            },
          ].map((item) => {

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
                  hover:shadow-xl
                  transition
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#C89B3C]/15
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Icon
                    size={28}
                    className="text-[#C89B3C]"
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F2747]">
                  {item.title}
                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>

    {/* ========================================= */}
    {/* OUR FLAGSHIP PROGRAMME */}
    {/* ========================================= */}

    <section className="py-28 bg-[#0F2747] px-6 text-white">

      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">

          Our Flagship Programme

        </p>

        {/* Emblem */}

        <div className="mt-10 flex justify-center">

          <img
            src={emblem}
            alt="Ubuntu Without Borders Emblem"
            className="w-56 md:w-72 object-contain"
          />

        </div>

        <h2 className="mt-10 text-5xl font-serif">

          Ubuntu Without Borders™

        </h2>

        <h3 className="mt-5 text-2xl text-[#C89B3C]">

          Building Human Capital for Economic Resilience and Inclusive Prosperity

        </h3>

        <p className="mt-8 max-w-4xl mx-auto text-white/80 leading-9 text-lg">

          A five year Human Capital Development programme connecting
          education, innovation, entrepreneurship, technology,
          culture, tourism, agro processing, Artificial Intelligence
          and global partnerships.

        </p>

        {/* Highlights */}

        {/* <div className="mt-16 grid md:grid-cols-4 gap-6">

          {[
            "Education",
            "Innovation",
            "Technology",
            "Global Partnerships",
          ].map((item) => (

            <div
              key={item}
              className="
                bg-white/10
                backdrop-blur-sm
                border
                border-white/10
                rounded-2xl
                p-6
              "
            >

              <h4 className="text-xl font-semibold">

                {item}

              </h4>

            </div>

          ))}

        </div> */}

        {/* Button */}

        <Link
          to="/ubuntu-without-borders"
          className="
            inline-flex
            items-center
            gap-3
            mt-16
            bg-[#C89B3C]
            hover:bg-[#B87333]
            transition
            px-10
            py-4
            rounded-full
            font-semibold
          "
        >

          Explore Ubuntu Without Borders

         

        </Link>

      </div>

    </section>

    {/* ========================================= */}
    {/* OUR STRATEGIC PLATFORMS */}
    {/* ========================================= */}

    {/* <section className="py-28 bg-white px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">
            Our Strategic Platforms
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F2747]">
            Creating Lasting Impact Through Strategic Platforms
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-gray-600 leading-8">
            House of Ubuntu Global Voices delivers its mission through three
            interconnected strategic platforms that advance Human Capital
            Development, Economic Resilience and International Collaboration.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {[
            {
              icon: Globe2,
              title: "Ubuntu Without Borders™",
              subtitle: "Official Flagship Programme",
              description:
                "Connecting education, innovation, entrepreneurship, technology, Artificial Intelligence, tourism, agro processing and global partnerships.",
              link: "/ubuntu-without-borders",
            },
            {
              icon: Wine,
              title: "Ubuntu Wine Alliance™",
              subtitle: "Global Wine Platform",
              description:
                "Connecting producers, educators, tourism, market access and international collaboration across the global wine community.",
              link: "/ubuntu-wine-alliance",
            },
            {
              icon: Landmark,
              title: "VIA Collective™",
              subtitle: "Portugal Flagship Platform",
              description:
                "Bringing together culture, creativity, hospitality, education, entrepreneurship and international dialogue.",
              link: "/via-collective",
            },
          ].map((platform) => {

            const Icon = platform.icon;

            return (

              <div
                key={platform.title}
                className="
                  bg-[#F7F8FA]
                  rounded-3xl
                  p-10
                  shadow-md
                  hover:-translate-y-3
                  hover:shadow-xl
                  transition
                "
              >

                <div className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#C89B3C]/15
                  flex
                  items-center
                  justify-center
                ">

                  <Icon
                    className="text-[#C89B3C]"
                    size={30}
                  />

                </div>

                <h3 className="mt-8 text-3xl font-serif text-[#0F2747]">
                  {platform.title}
                </h3>

                <p className="mt-3 text-[#C89B3C] font-medium">
                  {platform.subtitle}
                </p>

                <p className="mt-6 text-gray-600 leading-8">
                  {platform.description}
                </p>

                <Link
                  to={platform.link}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    text-[#0F2747]
                    font-semibold
                    hover:text-[#C89B3C]
                    transition
                  "
                >
                  Learn More

                  <ArrowRight size={18} />

                </Link>

              </div>

            );

          })}

        </div>

      </div>

    </section> */}

  

    {/* // =========================================
    // NEWS & INSIGHTS
    // ========================================= */}

    <section className="py-28 bg-[#F7F8FA] px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">
              Latest News & Insights
            </p>

            <h2 className="mt-5 text-5xl font-serif text-[#0F2747]">
              Stories That Inspire Progress
            </h2>

            <p className="mt-6 max-w-3xl text-gray-600 leading-8">
              Stay informed with our latest programmes, partnerships,
              research, events and stories that showcase how House of
              Ubuntu Global Voices is creating lasting impact across
              communities and international networks.
            </p>

          </div>

          <Link
            to="/news"
            className="
              mt-8
              lg:mt-0
              inline-flex
              items-center
              gap-2
              text-[#0F2747]
              font-semibold
              hover:text-[#C89B3C]
              transition
            "
          >
            View All News

            <ArrowRight size={18} />
          </Link>

        </div>

        {/* News Cards */}

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {[
            {
              image: news,
              date: "08 July 2026",
              category: "Lorem ipsum",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              image: news,
              date: "28 June 2026",
              category: "Lorem ipsum",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              image: news,
              date: "14 June 2026",
              category: "Lorem ipsum",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ].map((article) => (

            <article
              key={article.title}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition
              "
            >

              {/* Image */}

              <div className="h-60 overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex items-center gap-3 text-sm text-gray-500">

                  <CalendarDays size={16} />

                  <span>{article.date}</span>

                  <span className="text-[#C89B3C]">
                    • {article.category}
                  </span>

                </div>

                <h3 className="mt-5 text-2xl font-serif text-[#0F2747] leading-snug">

                  {article.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-7">

                  {article.description}

                </p>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#0F2747]
                    hover:text-[#C89B3C]
                    transition
                  "
                >

                  Read More

                  <ArrowRight size={18} />

                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

    </main>
  );
}

export default Home;