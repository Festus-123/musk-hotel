import { IconType } from "react-icons";
import favent_room from "@/assets/favent-room.png";
import light_themed from "@/assets/light-themed.png";
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
        link: "/contact"
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
        link: "/contact"

    },
    {
        img: light_themed,
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
        link: "/contact"

    }
]