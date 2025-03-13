import React from "react";

export const Title = () => {
  return (
    <div className="w-full px-8 py-8 bg-white text-slate-800 shadow-lg">
        <div className="bg-blue-400 rounded-lg px-4 py-4">
        {/* Title Text */}
        <p className="text-lg leading-relaxed font-medium mb-6 ">
          This project is the final project for 
          <strong> St. John Fisher University's Cardinal Experience</strong> class, 
          taught by <strong>Professor Marina Bonilla-Conejo</strong>. As a sociolinguist, 
          Professor Bonilla-Conejo naturally focuses on raising awareness about rare 
          and endangered language groups. This final project highlights the <strong>Ainu</strong>, 
          an Indigenous group located near Hokkaido, Japan.
        </p>

        {/* Research Focus */}
        <p className="text-lg font-semibold mb-3">This project aims to research:</p>
        
        {/* List of Research Areas */}
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>Language Profile</strong></li>
          <li><strong>Cultural Identity and Significance</strong></li>
          <li><strong>Endangerment Factors</strong></li>
          <li><strong>Revitalization Efforts</strong></li>
        </ul>
        </div>
    </div>
  );
};
