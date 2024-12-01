import React from "react";
import TextArrow from "../smallComponents/TextArrow";

const ProjectCard = ({ imgUrl, title, cardButtonTitle, path }) => {
  return (
    <div className="project-card-wrapper flex flex-col justify-center xl:gap-[44px] pb-[50px]">
      <div className="relative rounded-t-xl flex overflow-hidden h-full w-full">
        <div
          className="xl:h-[420px] xl:w-[620px] xl:h-68 h-auto w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
            paddingBottom: '60.25%'
          }}
        ></div>
      </div>
      <div className="rounded-b-xl mt-3 px-6 flex flex-col items-center gap-[5px]">
        <h2 className="flex gap-[5px] max-w-5xl md:text-[65px] text-4xl leading-normal mb-[-10px]" style={{letterSpacing: '-2px'}}>{title}</h2>
        <TextArrow
          buttonText={cardButtonTitle}
          iconName={''}
          path={path}
          center={true}
        />
      </div>

    </div>
  );
};

export default ProjectCard;
