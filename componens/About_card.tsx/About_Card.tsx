import { IconType } from "react-icons";

const About_Card = ({ Icon, title, description}: {Icon: IconType, title: string, description: string}) => {
    return (
        <div className="flex flex-col gap-2 items-center p-8">
            <div className="text-[#dc962ef6] text-6xl">
                <Icon />
            </div>
            
            <h1 className="text-center font-bold text-xl md:text-2xl">
                {title}
            </h1>

            <p className="text-sm md:text-base text-center">
                {description}
            </p>
        </div>
    );
}

export default About_Card;