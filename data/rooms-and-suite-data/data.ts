import { IconType } from "react-icons";
import favent_room from "@/assets/favent-room.png";
import light_themed from "@/assets/light-themed.png";
import room1 from "@/assets/room-1.png";
import room2 from "@/assets/room-2.png";
import room3 from "@/assets/room-3.png";
import room4 from "@/assets/room-4.png";
import suite1 from "@/assets/suite-1.png";
import suite2 from "@/assets/suite-2.png";
import suite3 from "@/assets/suite-3.png";
import { FaSmokingBan, FaStreetView } from "react-icons/fa";
import { FaBed, FaBowlFood, FaPeopleGroup } from "react-icons/fa6";
import { StaticImageData } from "next/image";

export type DETAILS = {
    icon: IconType;
    text: string;
}

export type ROOMS = {
    img:StaticImageData;
    price: number;
    roomType: string;
    description: string;
    details: DETAILS[];
    slug: string;
    link: string;
}

export const suite: ROOMS[] = [
    {
        img: favent_room,
        price: 210,
        roomType: "Standard room",
        description: "Cozy and modern this room offers essential ammenities for a comfortable stay. perfect for solo travelers or couples seeking relaxation.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 28 m2"
            },
            {
                icon: FaStreetView,
                text: "Street view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            }, 
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "standard-room",
        link: "#contact"
    },
    {
        img: light_themed,
        price: 500,
        roomType: "Deluxe room",
        description: "Experience the epitome of luxury in our deluxe room, featuring elegant decor, spacious layout, and premium amenities for an unforgettable stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 35 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "deluxe-room",
        link: "#contact"

    },
    {
        img: suite1,
        price: 750,
        roomType: "Suite",
        description: "Indulge in the ultimate luxury experience with our spacious suite, offering panoramic views and premium amenities for an unforgettable stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 50 m2"
            },
            {
                icon: FaStreetView,
                text: "Panoramic view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "suite",
        link: "#contact"

    },
    {
        img: suite2,
        price: 900,
        roomType: "Executive Suite",
        description: "Experience unparalleled luxury in our executive suite, featuring a separate living area, work desk, and premium amenities for a sophisticated stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 60 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "executive-suite",
        link: "#contact"
    },
    {
        img: suite3,
        price: 1200,
        roomType: "Presidential Suite",
        description: "Indulge in the ultimate luxury experience with our presidential suite, offering exclusive amenities and breathtaking views for an unforgettable stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 80 m2"
            },
            {
                icon: FaStreetView,
                text: "Panoramic view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "presidential-suite",
        link: "#contact"
    },
    {
        img: room1,
        price: 210,
        roomType: "Standard room",
        description: "Enjoy a comfortable stay in our standard room, featuring all the essentials for a pleasant experience.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 35 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "standard-room",
        link: "#contact"
    },
    {
        img: room2,
        price: 500,
        roomType: "Deluxe room",
        description: "Indulge in the comfort and luxury of our deluxe room, perfect for a relaxing stay with all the amenities you need.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 45 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "deluxe-room",
        link: "#contact"
    
    },
    {
        img: room3,
        price: 750,
        roomType: "Family room",
        description: "Perfect for families, our family room offers spacious comfort and all the amenities needed for a delightful stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 50 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 2 Children"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "family-room",
        link: "#contact"
    },
    {
        img: room4,
        price: 900,
        roomType: "Executive room",
        description: "Experience the perfect blend of comfort and sophistication in our executive room, designed for a premium stay.",
        details: [
            {
                icon: FaBed,
                text: "Rooms size 55 m2"
            },
            {
                icon: FaStreetView,
                text: "City view"
            },
            {
                icon: FaBed,
                text: "1 king bed"
            },
            {
                icon: FaSmokingBan,
                text: "Smoking - No"
            },
            {
                icon: FaPeopleGroup,
                text: "2 Adults - 1 Child"
            },
            {
                icon: FaBowlFood,
                text: "Breakfast - Yes"
            }
        ],
        slug: "executive-room",
        link: "#contact"
    }
]