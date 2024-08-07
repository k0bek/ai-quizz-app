import React from "react";

const StatusIndicator = () => {
  return (
    <aside className="mx-auto ">
      <div className="flex items-center">
        {/* First point */}
        <div className="size-8 rounded-full flex items-center justify-center border bg-content2">
          <div className="">
            <span>1</span>
          </div>
        </div>
        {/* Line */}
        <div className="w-[80px]">
          <hr />
        </div>
        {/* Second point */}
        <div className="size-8 bg-content2 rounded-full flex items-center justify-center">
          <div>
            <span className=" text-foreground-300">2</span>
          </div>
        </div>
        <div className="w-[80px]">
          <hr />
        </div>
        {/* Third point */}
        <div className="size-8 bg-content2 text-foreground-300 rounded-full flex items-center justify-center">
          <div>
            <span>3</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StatusIndicator;
