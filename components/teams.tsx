import teamsData from "@/data/teams.json";
import Image from "next/image";
import Link from "next/link";

export default function Teams() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
            TeamImage
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Siapa kami ?</h2>
            <p className="text-xl text-gray-600">
              Sekumpulan pakar IT yang ingin membuat amal jariah dengan
              menggunakan ilmu pengetahuan kami.
            </p>
          </div>

          {/* Team List */}
          <div className="mt-8 flex items-stretch justify-center flex-wrap gap-x-8 sm:gap-y-16 gap-y-14">
            {teamsData.map((i, k) => {
              return (
                <div
                  key={k}
                  className={`flex-shrink-0 flex-grow-0 ${
                    i.highlight
                      ? "basis-full "
                      : "basis-[calc((100%-(32px*0))/1)]  sm:basis-[calc((100%-(32px*1))/2)] lg:basis-[calc((100%-(32px*2))/3)]"
                  } ${k}`}
                >
                  <div
                    className="h-full box-container mx-auto"
                    data-aos="zoom-y-out"
                  >
                    <div className="h-full relative flex justify-center items-center border-2 border-gray-200 rounded bg-white">
                      <div className="h-full text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                        <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2 w-24 h-24">
                          <Image
                            className="relative rounded-full w-full h-full object-cover"
                            src={i.image}
                            width={96}
                            height={96}
                            alt="Izan"
                          />
                        </div>
                        <blockquote className="text-xl font-medium mb-4">
                          {i.name}
                        </blockquote>
                        <cite className="block font-bold text-lg not-italic mb-1">
                          {i.role}
                        </cite>
                        <div className="text-gray-600">
                          <span>{i.company}</span>
                        </div>
                        <div>
                          <Link
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            href={i.linkedin}
                          >
                            Profil LinkedIn
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
