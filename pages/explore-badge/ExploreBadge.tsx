import Image, { StaticImageData } from "next/image";

const ExploreBadge = ({img, name, info}: {img: StaticImageData, name: string, info: string}) => {
    return (
        <div className="flex flex-row items-center w-full sm:w-60 md:w-75 h-max gap-2 p-2 rounded-lg bg-white">
            <div>
                <Image 
                    loading="lazy"
                    src={img}
                    alt={name}
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-20 md:h-20 object-cover object-center rounded-lg"/>
            </div>
            <div className="w-fit p-1">
                <h1 className="text-gray-500 tracking-wide text-sm md:text-lg font-medium">{name}</h1>
                <p className="text-gray-300 text-xs md:text-sm ">{info}</p>
            </div>
            
        </div>
    );
}

export default ExploreBadge;