import React from "react";
import { services } from "../constants";
import { service } from "../assets";


const ServiceSection = () => {
  return (
    <section className="py-16 bg-[#0a0a23] text-white w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-[#915eff]">My Services</h2>
        <p className="text-lg text-[#38bdf8] mb-4">
          Empowering Businesses with Customized Software Solutions.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
        {/* Left 3 cards */}
        <div className="flex flex-col gap-6 flex-1">
          {services.slice(0, 3).map((service, idx) => (
            <div key={service.title} className="bg-[#181829] rounded-lg p-6 flex items-center gap-4 shadow-lg border border-[#232347] min-w-[260px]">
              <span className="text-4xl bg-[#232347] rounded-full p-3 mr-2">{service.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-1">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Center illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={service}
            alt="Service Illustration"
            className="w-[320px] h-[220px] object-contain rounded-xl shadow-lg bg-[#181829] border border-[#232347]"
          />
        </div>
        {/* Right 3 cards */}
        <div className="flex flex-col gap-6 flex-1">
          {services.slice(3).map((service, idx) => (
            <div key={service.title} className="bg-[#181829] rounded-lg p-6 flex items-center gap-4 shadow-lg border border-[#232347] min-w-[260px]">
              <span className="text-4xl bg-[#232347] rounded-full p-3 mr-2">{service.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#38bdf8] mb-1">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 