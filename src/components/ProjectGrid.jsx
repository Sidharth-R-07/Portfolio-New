import { FlutterProjects } from "../data/Projects";

import PlayStoreIcon from "../assets/icons/playstore.png";
import AppStoreIcon from "../assets/icons/appstore.png";

export default function ProjectGrid() {
  return (
    <div className="absolute z-10 md:p-7 p-4 top-0 w-screen h-full ">
      <div className="masonry-grid">
        {FlutterProjects.map((project) => (
          <div
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
              <h3 className="font-ThunderBold pt-3 text-start text-[32px] leading-7 tracking-wide">
                {project.title}
              </h3>
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
                  <img src={AppStoreIcon} alt="App Store" className="h-8 w-8" />
                </a>
              )}
            </div>

            <p className="pt-5 font-GeneralSansRegular text-start text-[15px] tracking-wide leading-7">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
