"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 10 },
  { name: "Feb", sales: 5 },
  { name: "Mar", sales: 14 },
  { name: "Apr", sales: 8 },
  { name: "May", sales: 18 },
  { name: "Jun", sales: 12 },
];

export function SalesChart() {
  return (
    <div className="relative h-[300px]">
      <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-charcoal"></div>
      <div className="relative rounded-3xl bg-white/70 p-4 h-full">
        <div className="flex items-center justify-between text-sm text-charcoal/70 mb-2">
          <span>Mauzo</span>
          <button className="rounded-full bg-charcoal text-mint-100 text-xs h-7 px-3">Wiki hii</button>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
            <CartesianGrid stroke="#00000022" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#2a211f" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;

