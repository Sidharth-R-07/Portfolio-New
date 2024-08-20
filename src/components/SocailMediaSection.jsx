import React from "react";
import LinkdinIcon from "../assets/icons/linkedin.png";
import GitHubIcon from "../assets/icons/github.png";
import TelegramIcon from "../assets/icons/telegram.png";

export default function SocailMediaSection() {
  return (
    <section className=" flex flex-col gap-1 items-start">
      <h5 className="text-white text-opacity-50 text-sm font-AnekDevanagariExtraLight tracking-wider">
        Let's Connect
      </h5>
      <div className="flex flex-row gap-4">
        <a href="https://www.linkedin.com/in/sidharth-ramanathan-720a6926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img
            src={LinkdinIcon}
            alt="SIDHARTH RAMANATHAN LINKDIN"
            className="h-7 w-7"
          />
        </a>
        <a href="https://github.com/Sidharth-R-07">
          <img
            src={GitHubIcon}
            alt="SIDHARTH RAMANATHAN LINKDIN"
            className="h-7 w-7"
          />
        </a>
        <a href="https://telegram.me/Shadow0710">
          <img
            src={TelegramIcon}
            alt="SIDHARTH RAMANATHAN LINKDIN"
            className="h-7 w-7"
          />
        </a>
      </div>
    </section>
  );
}
