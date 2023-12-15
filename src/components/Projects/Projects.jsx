import React from "react";
import web1 from "../../assets/website/book-store.jpg";
import web2 from "../../assets/website/restaurant.jpg";
import web3 from "../../assets/website/cozweb.jpg";
import web4 from "../../assets/website/portfolio.jpg";

const ProjectsData = [
  {
    id: 1,
    name: "Online Book Store",
    image: web3,
    link: "#",
  },
  {
    id: 2,
    name: "Restaurant Web Page",
    image: web2,
    link: "#",
  },
  {
    id: 3,
    name: "Web Development company",
    image: web4,
    link: "#",
  },
  {
    id: 4,
    name: "Portfolio",
    image: web1,
    link: "#",
  },
];

const Projects = () => {
  return (
    <>
      <span id="project"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="uppercase text-3xl font-bold">
                Featured Projects
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <button className="bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
                View All
              </button>
            </div>
          </header>
          {/* card section */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* card */}
              {ProjectsData.map(({ id, name, image, link }) => {
                return (
                  <div>
                    <div className="h-[340px] sm:h-[420px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6">
                      <img src={image} alt="" className="" />
                    </div>
                    <div className="pt-4 space-y-3">
                      <h1 className="text-3xl font-bold">{name}</h1>
                      <div>
                        <a href={link} className="text-primary uppercase">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
