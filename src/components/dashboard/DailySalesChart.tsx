import { Box, Text } from '@chakra-ui/react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts'
import { weeklySales } from '@/data/pizzaData'

// Using design system colors
const BLUE_60 = '#2266F0'  // blue.60 / fg.accent
const GRAY_40 = '#AAAEB5'  // gray.40
const GRAY_ALPHA_65 = 'rgba(17,17,18,0.65)' // fg.secondary
const BORDER_WEAK = '#C6C9CF' // border.weak

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
    if (active && payload && payload.length) {
        return (
            <Box
                bg="bg.primary"
                borderWidth="1px"
                borderColor={BORDER_WEAK}
                borderRadius="2px"
                p={2}
                boxShadow="page.section"
            >
                <Text fontWeight="semibold" fontSize="12px" color="fg.primary">
                    {label}
                </Text>
                <Text fontSize="12px" color="fg.secondary">
                    {payload[0].value} pizzas sold
                </Text>
            </Box>
        )
    }
    return null
}

export function DailySalesChart() {
    const maxSales = Math.max(...weeklySales.map(d => d.pizzasSold))

    return (
        <Box>
            <Box h="260px">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={weeklySales}
                        margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(17,17,18,0.06)" />
                        <XAxis
                            dataKey="shortDay"
                            tick={{ fontSize: 12, fill: GRAY_ALPHA_65 }}
                            axisLine={{ stroke: BORDER_WEAK }}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: GRAY_ALPHA_65 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(17,17,18,0.04)' }} />
                        <Bar
                            dataKey="pizzasSold"
                            radius={[2, 2, 0, 0]}
                            maxBarSize={40}
                        >
                            {weeklySales.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.pizzasSold === maxSales ? BLUE_60 : GRAY_40}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    )
}
