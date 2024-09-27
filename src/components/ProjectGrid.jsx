import { FlutterProjects, ReactProjects } from "../data/Projects";

import PlayStoreIcon from "../assets/icons/playstore.png";
import AppStoreIcon from "../assets/icons/appstore.png";
import GithubIcon from "../assets/icons/github-icon.png";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";

export default function ProjectGrid() {
  const { domain } = useParams();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 }, // Start 50px to the left
    visible: { opacity: 1, x: 0 }, // End at the original position
  };

  console.log("DOMAIN", domain);
  return (
    <motion.div
      className="absolute z-10 md:p-7 p-4 top-0 w-screen h-full "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="masonry-grid">
        {domain == 0
          ? FlutterProjects.map((project) => (
              <motion.div
                variants={leftToRightVariants}
                key={project.id}
                className="masonry-item mb-7  p-5 bg-opacity-0 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: project.color,
                }}
              >
                <div className="flex flex-row gap-5 items-start">
                  <img
                    className="h-10 w-10 object-cover rounded-md shadow-lg"
                    src={project.icon}
                    alt={project.title}
                  />
                  <div className="flex-col items-start justify-start text-start text-[14px]">
                    <h3 className="font-ThunderBold pt-3 text-start sm:text-[32px] text-[24px] leading-7 tracking-wide">
                      {project.title}
                    </h3>
                    {project.company && <h2>{project.company}</h2>}
                  </div>
                </div>

                <div className="pt-4 flex flex-row gap-4">
                  {project.androidLink && (
                    <a
                      href={project.androidLink}
                      className="hover:scale-110 duration-300"
                    >
                      <img
                        src={PlayStoreIcon}
                        alt="Play Store"
                        className="h-8 w-8"
                      />
                    </a>
                  )}

                  {project.iosLink && (
                    <a
                      href={project.iosLink}
                      className="hover:scale-110 duration-300"
                    >
                      <img
                        src={AppStoreIcon}
                        alt="App Store"
                        className="h-8 w-8"
                      />
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
                    >
                      VIEW WEB SITE
                    </a>
                  )}
                </div>

                <p className="pt-4 sm:pt-5 font-GeneralSansRegular text-start text-[13px] sm:text-[15px] tracking-wide sm:leading-7 leading-6">
                  {project.description}
                </p>
              </motion.div>
            ))
          : ReactProjects.map((project) => (
              <motion.div
                variants={leftToRightVariants}
                key={project.id}
                className="masonry-item mb-7  p-5 bg-opacity-0 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: project.color,
                }}
              >
                <div className="flex flex-row gap-5 items-start">
                  <img
                    className="h-10 w-10 object-cover rounded-md shadow-lg"
                    src={project.icon}
                    alt={project.title}
                  />
                  <div className="flex-col items-start justify-start text-start text-[14px]">
                    <h3 className="font-ThunderBold pt-3 text-start sm:text-[32px] text-[24px] leading-7 tracking-wide">
                      {project.title}
                    </h3>
                    {project.company && <h2>{project.company}</h2>}
                  </div>
                </div>

                <div className="pt-4 flex flex-row gap-4">
                  {project.androidLink && (
                    <a
                      href={project.androidLink}
                      className="hover:scale-110 duration-300"
                    >
                      <img
                        src={PlayStoreIcon}
                        alt="Play Store"
                        className="h-8 w-8"
                      />
                    </a>
                  )}

                  {project.iosLink && (
                    <a
                      href={project.iosLink}
                      className="hover:scale-110 duration-300"
                    >
                      <img
                        src={AppStoreIcon}
                        alt="App Store"
                        className="h-8 w-8"
                      />
                    </a>
                  )}
                  <div className="flex flex-row gap-3 items-center">
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
                      >
                        VIEW WEB SITE
                      </a>
                    )}

                    {/* {project.github && (
                      <a
                        href={project.github}
                        className="mt-2  px-7 bg-black py-2 text-white font-GeneralSansRegular rounded-3xl text-[13px] hover:scale-[1.04] duration-150 ease-in "
                      >
                        VIEW REPOSITORY
                      </a>
                    )} */}
                  </div>
                </div>

                <p className="pt-4 sm:pt-5 font-GeneralSansRegular text-start text-[13px] sm:text-[15px] tracking-wide sm:leading-7 leading-6">
                  {project.description}
                </p>
              </motion.div>
            ))}
      </div>
    </motion.div>
  );
}
