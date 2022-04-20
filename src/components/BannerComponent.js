import React from "react";
import ketupat from "../images/ketupat.png";
import liwet from "../images/liwet.jpg";
import Typewriter from "typewriter-effect";

export default function BannerComponent() {
  return (
    <div className=" px-2 pt-2 tablet:hidden laptop:hidden desktop:hidden">
      <div className="">
        <div className="flex flex-row justify-between">
          <div>
            <img src={ketupat} alt="" className=" w-12" />
          </div>
          <div className=" font-extrabold text-3xl text-center my-auto">
            مرحباً يا رمضان
          </div>
          <div>
            <img src={ketupat} alt="" className=" w-12" />
          </div>
        </div>

        <div>
          <div
            className=" mt-3 bg-cover h-48 rounded-md"
            style={{ backgroundImage: `url(${liwet})` }}
          >
            <div className="flex flex-col justify-center h-full">
              <div className="mx-auto">
                <p className=" text-2xl font-extrabold text-center text-white">
                  LOBUBAR IS BACK
                </p>
                <div className="text-white text-xl text-center">
                  <Typewriter
                    options={{
                      strings: [
                        "Mari Mempererat Silaturahmi",
                        "Nostalgia",
                        "Carita Zaman Sakola",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
