"use client";

import { BarChartComponent } from "@/components/dashboard/bar-chart";
import MiniCard from "@/components/dashboard/mini-card";
import LastMerchants from "@/components/dashboard/last-merchants";

export default function Dashboard() {
  return (
    <div className="container py-4 md:py-8">
      <h1 className="text-4xl font-bold">Overview</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8 items-center md:justify-between">
        <MiniCard title="Por definir..." description="..."></MiniCard>
        <MiniCard title="Por definir..." description="..."></MiniCard>
        <MiniCard title="Por definir..." description="..."></MiniCard>
      </div>
      <div className="mt-4 md:mt-8 flex flex-col md:flex-row gap-4">
        <BarChartComponent />
        <LastMerchants />
      </div>
    </div>
  );
}
