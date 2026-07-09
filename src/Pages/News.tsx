import { ArrowRight } from "lucide-react";
import news from "../assets/images/news.jpg";

function News() {
  const articles = [
    {
      image: news,
      category: "Featured",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      date: "August 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: news,
      category: "Ubuntu Without Borders",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      date: "July 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: news,
      category: "Ubuntu Wine Alliance",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      date: "June 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: news,
      category: "VIA Collective",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      date: "May 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0F2747] text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#C89B3C]">
            News & Insights
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-serif">
            Latest News & Publications
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80">
            Stay informed about our programmes, partnerships, research,
            publications, events and international collaborations.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="rounded-3xl h-[500px] w-full object-cover shadow-lg"
          />

          <div>
            <p className="uppercase text-[#C89B3C] tracking-widest">
              {articles[0].category}
            </p>

            <h2 className="mt-4 text-4xl font-serif text-[#0F2747]">
              {articles[0].title}
            </h2>

            <p className="mt-3 text-gray-500">
              {articles[0].date}
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              {articles[0].description}
            </p>

            <button className="mt-8 flex items-center gap-2 text-[#0F2747] hover:text-[#C89B3C] font-semibold">
              Read More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-[#0F2747] text-center">
            Latest Updates
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {articles.slice(1).map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <p className="uppercase text-xs tracking-widest text-[#C89B3C]">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-serif text-[#0F2747]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {article.date}
                  </p>

                  <p className="mt-4 text-gray-600">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-[#0F2747] text-center">
            Upcoming Events
          </h2>

          <div className="mt-14 space-y-6">
            {[
              "Ubuntu Without Borders™ Launch",
              "International Partnership Forum",
              "Human Capital Leadership Dialogue",
              "Ubuntu Wine Alliance Roundtable",
              "VIA Collective Cultural Exchange",
              "Education & Innovation Summit",
            ].map((event) => (
              <div
                key={event}
                className="border rounded-2xl p-6 hover:border-[#C89B3C] transition"
              >
                <h3 className="text-xl font-semibold text-[#0F2747]">
                  {event}
                </h3>

                <p className="text-gray-500 mt-2">
                  Date to be announced.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0F2747] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif">
            Follow Our Journey
          </h2>

          <p className="mt-6 text-white/80 leading-8">
            As House of Ubuntu Global Voices continues to grow, this page
            will showcase new partnerships, programme launches,
            publications, research, events and stories that demonstrate
            our impact across South Africa and internationally.
          </p>
        </div>
      </section>
    </main>
  );
}

export default News;