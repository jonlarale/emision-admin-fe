"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  LabelList,
} from "recharts";
import { useCustomization } from "@/components/theme/CustomizationContext";

const data = [
  {
    name: "Ene",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Abr",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Ago",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Dic",
    total: Math.floor(Math.random() * 5) + 1,
  },
];

export function BarChartComponent() {
  const { primaryColor } = useCustomization();
  return (
    <ResponsiveContainer
      width="100%"
      height={380}
      className="border-2 rounded-md p-4"
    >
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        ></XAxis>
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        >
          <Label
            value="Número de merchants agregados"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
            offset={-20}
          />
        </YAxis>
        <Bar dataKey="total" fill={primaryColor} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
