import React, { useState } from "react";

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ReflectionAccordion() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">Reflection Questions</h1>
      <div className="w-full max-w-2xl bg-white rounded shadow">
        <AccordionItem title="Important Ideas">
          <p>What are the most important ideas or concepts you've learned in this class?</p>
        </AccordionItem>

        <AccordionItem title="Evolving Perspective">
          <p>
            In what ways has your thinking or perspective evolved over the course
            so far? Any assumptions to reconsider or new insights gained?
          </p>
        </AccordionItem>

        <AccordionItem title="Language & Culture">
          <p>
            How has researching your chosen language deepened your understanding
            of language, identity, and culture?
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}
