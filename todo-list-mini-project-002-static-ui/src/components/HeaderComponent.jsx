import React from "react";

const HeaderComponent = ({ userData }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
        <div className="text-2xl ">
          <span className="text-gray-500 ">Workspace &gt;</span>{" "}
          <span className="text-blue-500 font-medium cursor-pointer">
            HRD Design
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="relative flex h-8 w-8">🔔</span>
          <div className="flex items-center gap-2">
            <img
              //   src="https://i.pinimg.com/736x/dc/2c/bd/dc2cbda7eb488ceb0caf4c0e27d57403.jpg" // Replace with actual image path
              src={userData.payload.profile} // Replace with actual image path
              alt="User Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">Monster</p>
              <p className="text-gray-500 text-xs">{userData.payload.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-red-300 mt-1"></div>
    </>
  );
};

export default HeaderComponent;
