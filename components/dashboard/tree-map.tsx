"use client";
import React, { PureComponent } from "react";
import { Treemap, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";

import { useCustomization } from "@/components/theme/CustomizationContext";

const data = [
  {
    name: "Comida",
    children: [
      { name: "Restaurantes", size: 1200 },
      { name: "Cafeterías", size: 500 },
      { name: "Supermercado", size: 800 },
      { name: "Comida Rápida", size: 450 },
      { name: "Bebidas", size: 300 },
    ],
  },
  {
    name: "Entretenimiento",
    children: [
      { name: "Cine", size: 300 },
      { name: "Eventos Deportivos", size: 250 },
      { name: "Conciertos", size: 400 },
      { name: "Streaming", size: 150 },
      { name: "Juegos", size: 200 },
    ],
  },
  {
    name: "Ropa",
    children: [
      { name: "Tiendas de Marca", size: 700 },
      { name: "Ropa Casual", size: 500 },
      { name: "Calzado", size: 300 },
      { name: "Accesorios", size: 200 },
    ],
  },
  {
    name: "Renta",
    children: [
      { name: "Alquiler de Vivienda", size: 2000 },
      { name: "Servicios Públicos", size: 300 },
      { name: "Internet y TV", size: 100 },
      { name: "Mantenimiento", size: 150 },
    ],
  },
  {
    name: "Coche",
    children: [
      { name: "Combustible", size: 400 },
      { name: "Mantenimiento", size: 200 },
      { name: "Seguro", size: 300 },
      { name: "Estacionamiento", size: 100 },
    ],
  },
  {
    name: "Viajes",
    children: [
      { name: "Boletos de Avión", size: 1500 },
      { name: "Alojamiento", size: 1000 },
      { name: "Alquiler de Vehículos", size: 400 },
      { name: "Actividades Turísticas", size: 300 },
    ],
  },
];

const CategoryTreeMap = () => {
  const { primaryColor } = useCustomization();

  const renderCustomTooltip = (props: TooltipProps<any, any>) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-lg">
          <p>
            {data.name}: ${data.size}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill={primaryColor}
      >
        <Tooltip content={renderCustomTooltip} />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default CategoryTreeMap;
