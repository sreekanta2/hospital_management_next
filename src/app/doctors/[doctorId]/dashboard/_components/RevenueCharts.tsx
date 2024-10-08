"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TabsContent } from "@radix-ui/react-tabs";

export const description = "A bar chart showing daily revenue";

// Weekly 7-day revenue data
const chartData = [
  { day: "Monday", desktop: 186 },
  { day: "Tuesday", desktop: 305 },
  { day: "Wednesday", desktop: 237 },
  { day: "Thursday", desktop: 73 },
  { day: "Friday", desktop: 209 },
  { day: "Saturday", desktop: 214 },
  { day: "Sunday", desktop: 150 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RevenueCharts() {
  return (
    <TabsContent value="revenue">
      <div className="my-4">
        <h1>Daily Revenue</h1>
        <h1>Revenue for the last 7 days</h1>
      </div>
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // First 3 letters of the day
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#3498db" radius={10}>
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </TabsContent>
  );
}
