import React from "react";
import right from "../assets/rightArrow.svg";

// Define the props for the component
interface OverviewCardProps {
  title?: string; // Optional title, defaults to "no title"
  data?: string | number; // Optional data, can be a string or number, defaults to "no data"
  view?: boolean; // Optional view flag, defaults to false
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title = "no title",
  data = "no data",
  view = false,
}) => {
  return (
    <div className="h-fit w-full px-4 py-3 border-[0.5px] border-border bg-white rounded-lg flex flex-col gap-2">
      <div className="flex flex-col gap-3">
        <div className="w-full flex justify-between items-center gap-4">
          <p className="text-text text-sm font-medium">{title}</p>
          {view && (
            <div className="flex items-end gap-2 hover:cursor-pointer hover:scale-105 rounded-lg group">
              <p className="text-text text-sm font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4">
                View
              </p>
              <img src={right} alt="right" className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="w-fit">
          <p className="text-text text-5xl font-semibold">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;