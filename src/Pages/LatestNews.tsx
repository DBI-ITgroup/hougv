import { ArrowRight } from "lucide-react";
import news from "../assets/images/news.jpg";


function LatestNews() {

  const articles = [
    {
      image: news,
      category: "Featured",
      title: "House of Ubuntu Global Voices launches new international partnerships",
      date: "August 2026"
    },
    {
      image: news,
      category: "Education",
      title: "Ubuntu Without Borders welcomes new university partners",
      date: "July 2026"
    },
    {
      image: news,
      category: "Wine Alliance",
      title: "Connecting African wine producers with global markets",
      date: "June 2026"
    },
    {
      image: news,
      category: "VIA Collective",
      title: "Creative diplomacy through culture and collaboration",
      date: "May 2026"
    }
  ];

  return (

    <section className="py-24 bg-[#F7F8FA]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#C89B3C]">
            News & Insights
          </p>

          <h2 className="text-5xl font-serif text-[#0F2747] mt-4">
            Latest News & Publications
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Stay informed about our programmes, partnerships,
            research, events and global collaborations.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg">

            <img
              src={articles[0].image}
              alt=""
              className="h-[420px] w-full object-cover"
            />

            <div className="p-8">

              <span className="text-[#C89B3C] uppercase text-sm tracking-widest">
                {articles[0].category}
              </span>

              <h3 className="mt-3 text-3xl font-serif text-[#0F2747]">
                {articles[0].title}
              </h3>

              <p className="mt-3 text-gray-500">
                {articles[0].date}
              </p>

              <button className="mt-8 flex items-center gap-2 text-[#0F2747] hover:text-[#C89B3C] font-semibold">
                Read Article
                <ArrowRight size={18}/>
              </button>

            </div>

          </div>

          <div className="space-y-6">

            {articles.slice(1).map((article) => (

              <div
                key={article.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <img
                  src={article.image}
                  className="h-48 w-full object-cover"
                  alt=""
                />

                <div className="p-6">

                  <p className="text-[#C89B3C] text-xs uppercase tracking-widest">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[#0F2747]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {article.date}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default LatestNews;