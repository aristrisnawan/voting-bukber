import React from "react";

export default function () {
  return (
    <div className=" mobile:hidden tablet:block laptop:block desktop:block h-screen w-full flex">
      <div className=" mx-auto my-auto text-center pt-48">
        <h1 className=" font-semibold text-2xl">
          Sorry, laptop and tablet displays are not available 😞
        </h1>
        <p className=" font-semibold text-2xl">Please use mobile screen!</p>
      </div>
    </div>
  );
}
