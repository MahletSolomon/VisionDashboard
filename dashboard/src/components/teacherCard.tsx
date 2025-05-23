import React from "react";
import right from "../assets/rightArrow.svg";
import english from "../assets/english.svg";
import math from "../assets/math.svg";
import science from "../assets/science.svg";
import amharic from "../assets/amharic.svg";
import ict from "../assets/ict.svg";
import music from "../assets/music.svg";
import sport from "../assets/sport.svg";
import social from "../assets/social.svg";
import spoken from "../assets/spoken.svg";
import image from "../assets/image.png";

// Define the props for the component
interface TeacherCardProps {
  subject?: string; // Optional subject, defaults to "no subject"
  name?: string; // Optional name
  email?: string; // Optional email
  profilePicture?: string; // Optional profile picture, defaults to `image`
  isHomeroom?: boolean; // Optional flag for homeroom teacher, defaults to false
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  subject = "no subject",
  name = "no name",
  email = "no email provided",
  profilePicture = image,
  isHomeroom = false,
}) => {
  return (
    <div className="h-fit px-4 py-3 border-[0.5px] border-border bg-white rounded-lg flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit flex items-center gap-2">
            {!isHomeroom && (
              subject === "English" ? (
                <img src={english} alt="english" />
              ) : subject === "Math" ? (
                <img src={math} alt="math" />
              ) : subject === "Science" ? (
                <img src={science} alt="science" />
              ) : subject === "Amharic" ? (
                <img src={amharic} alt="amharic" />
              ) : subject === "ICT" ? (
                <img src={ict} alt="ict" />
              ) : subject === "Music" ? (
                <img src={music} alt="music" />
              ) : subject === "Sport" ? (
                <img src={sport} alt="sport" />
              ) : subject === "Social" ? (
                <img src={social} alt="social" />
              ) : subject === "Spoken" ? (
                <img src={spoken} alt="spoken" />
              ) : null
            )}
            <p className="text-text text-sm font-medium">
              {isHomeroom ? "Homeroom Teacher" : subject}
            </p>
          </div>
          <div className="flex items-end gap-2 hover:cursor-pointer hover:scale-105 rounded-lg group">
            <p className="text-text text-sm font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4">
              Change
            </p>
            <img src={right} alt="right" className="w-full h-full" />
          </div>
        </div>

        <div className="w-full h-fit flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4F5]">
            <img src={profilePicture} alt="profile" />
          </div>
          <div className="h-full flex flex-col items-start">
            <p className="text-text text-md font-semibold">{name}</p>
            <p className="text-[#71717A] text-sm font-normal">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;