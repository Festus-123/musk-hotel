import { IconType } from "react-icons";

const About_Card = ({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-5 sm:p-6 md:p-8 ">

      {/* Icon */}
      <div className="text-[#e7c27af6] text-3xl sm:text-4xl md:text-5xl">
        <Icon />
      </div>

      {/* Title */}
      <h1 className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-snug">
        {title}
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default About_Card;