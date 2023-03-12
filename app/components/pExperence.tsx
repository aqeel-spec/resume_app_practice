import React from "react";

import { ProfessionalData } from "../types/personalData";
type Data = {
  data: ProfessionalData;
};
function ProfessionalExperence({ data }: Data) {
  const { title, experiences } = data;
  return (
    <section>
      <h2 className="font-bold mb-6">{title}</h2>
      <div className="flex flex-col ">
        {experiences.map((item) => (
          <div className="flex flex-col rounded-lg gap-6" key={item.role}>
            <span
              className={`h-2 ${
                item.current ? "bg-greeny-500" : "bg-gray-500"
              }`}
            />
            <div className="bg-gray-100 p-6 drop-shadow-md">
              <h3 className="font-bold">{item.role}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalExperence;
