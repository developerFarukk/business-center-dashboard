

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  name: string;
  clients: number;
  sms: number;
  devices: number;
}

interface StatsAreaChartProps {
  totalClients: number;
  totalBulkSms: number;
  totalDevice: number;
}

const DashboardChart: React.FC<StatsAreaChartProps> = ({
  totalClients,
  totalBulkSms,
  totalDevice,
}) => {
  // Generate sample data based on the totals
  const data: ChartData[] = [
    {
      name: "Jan",
      clients: Math.round(totalClients * 0.2),
      sms: Math.round(totalBulkSms * 0.15),
      devices: Math.round(totalDevice * 0.1),
    },
    {
      name: "Feb",
      clients: Math.round(totalClients * 0.4),
      sms: Math.round(totalBulkSms * 0.3),
      devices: Math.round(totalDevice * 0.25),
    },
    {
      name: "Mar",
      clients: Math.round(totalClients * 0.6),
      sms: Math.round(totalBulkSms * 0.5),
      devices: Math.round(totalDevice * 0.4),
    },
    {
      name: "Apr",
      clients: Math.round(totalClients * 0.8),
      sms: Math.round(totalBulkSms * 0.7),
      devices: Math.round(totalDevice * 0.6),
    },
    {
      name: "May",
      clients: totalClients,
      sms: totalBulkSms,
      devices: totalDevice,
    },
  ];

 
  const colors = {
    clients: "#6366f1", 
    sms: "#10b981", 
    devices: "#f59e0b", 
    grid: "hsl(var(--border))",
    text: "var(--foreground)", 
    tooltipBg: "hsl(var(--popover))",
    tooltipBorder: "hsl(var(--border))",
  };

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
          <XAxis
            dataKey="name"
            tick={{ fill: colors.text }}
            axisLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            axisLine={{ stroke: colors.text }}
            width={40}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.tooltipBg,
              borderColor: colors.tooltipBorder,
              borderRadius: "0.5rem",
              color: colors.text,
            }}
            itemStyle={{ 
              color: colors.text,
            }}
          />
          <Area
            type="monotone"
            dataKey="clients"
            stackId="1"
            stroke={colors.clients}
            fill={colors.clients}
            name="Total Clients"
          />
          <Area
            type="monotone"
            dataKey="sms"
            stackId="1"
            stroke={colors.sms}
            fill={colors.sms}
            name="Total Bulk SMS"
          />
          <Area
            type="monotone"
            dataKey="devices"
            stackId="1"
            stroke={colors.devices}
            fill={colors.devices}
            name="Total Devices"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;