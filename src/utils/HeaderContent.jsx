import React from "react";
// import { ContentHeader } from "./ContentHeader"; // adjust path
import { ContentHeader } from "../components/ContentHeader";
// import ScrollAnimation from "../utils/ScrollAnimation.jsx";
import ScrollAnimation from "./ScrollAnimation";



export const HeaderContent = () => {
  return (
    <section className="mx-auto p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
      <div className="flex flex-col space-y-10">
        {features.map((feature) => (
          <ContentHeader
            key={feature.id}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

// export default FeaturesSection;
