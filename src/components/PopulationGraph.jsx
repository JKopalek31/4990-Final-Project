import React, { useRef }from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";
import { motion, useInView } from "framer-motion";

const data = [
  { year: "1700", population: 80000 },
  { year: "1868", population: 20000 },
  { year: "1966", population: 300 },
  { year: "2008", population: 100 },
  { year: "2000", population: 25000 },
  { year: "2011", population: 210 },
  { year: "2017", population: 12300 },
  { year: "2025", population: 9 }, // Final added point
];

const AinuPopulationGraph = () => {
  const graphRef = useRef(null);
  const graphInView = useInView(graphRef, { 
    once: false, 
    threshold: 0
  })

  return (
    <motion.div
      ref={graphRef}
      className="bg-slate-300 rounded-lg shadow-md p-6 w-full max-w-full mx-auto"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: graphInView ? 1 : 0, x: graphInView ? 0 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="population"
            stroke="#630000"
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: "#630000" }}
          >
            {/* Label the first data point */}
            <LabelList
              dataKey="population"
              content={({ x, y, value, index }) =>
                index === 0 ? (
                  <text
                    x={x}
                    y={y - 10}
                    fill="#630000"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {value.toLocaleString()}
                  </text>
                ) : null
              }
            />
          </Line>
          <XAxis dataKey="year" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              fontSize: "0.875rem",
            }}
            formatter={(value) => [`${value.toLocaleString()} people`, "Population"]}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>

  )
};

export default AinuPopulationGraph;
