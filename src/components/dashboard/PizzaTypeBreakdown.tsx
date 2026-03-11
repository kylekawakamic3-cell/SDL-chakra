import { Box, Flex, Text } from '@chakra-ui/react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { pizzaTypes } from '@/data/pizzaData'

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
    if (active && payload && payload.length) {
        return (
            <Box
                bg="bg.primary"
                borderWidth="1px"
                borderColor="border.weak"
                borderRadius="2px"
                p={2}
                boxShadow="page.section"
            >
                <Text fontWeight="semibold" fontSize="12px" color="fg.primary">
                    {payload[0].name}
                </Text>
                <Text fontSize="12px" color="fg.secondary">
                    {payload[0].value} sold
                </Text>
            </Box>
        )
    }
    return null
}

export function PizzaTypeBreakdown() {
    return (
        <Box>
            <Box h="180px" mb={3}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pizzaTypes}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={75}
                            paddingAngle={2}
                            dataKey="sold"
                            nameKey="name"
                            strokeWidth={0}
                        >
                            {pizzaTypes.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </Box>

            <Flex direction="column" gap={2}>
                {pizzaTypes.map((pizza) => (
                    <Flex key={pizza.name} align="center" justify="space-between">
                        <Flex align="center" gap={2}>
                            <Box w="8px" h="8px" borderRadius="1px" bg={pizza.color} flexShrink={0} />
                            <Text fontSize="13px" color="fg.primary">
                                {pizza.name}
                            </Text>
                        </Flex>
                        <Flex align="center" gap={3}>
                            <Text fontSize="13px" fontWeight="medium" color="fg.primary">
                                {pizza.sold}
                            </Text>
                            <Text fontSize="12px" color="fg.secondary" w="40px" textAlign="right">
                                {pizza.percentage}%
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}
