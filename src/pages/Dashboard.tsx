import { Flex, Grid, Text, Box } from '@chakra-ui/react'
import { PageSection } from '@/components/ui/page-section'
import { StatCard } from '@/components/dashboard/StatCard'
import { DailySalesChart } from '@/components/dashboard/DailySalesChart'
import { PizzaTypeBreakdown } from '@/components/dashboard/PizzaTypeBreakdown'
import { RecentOrders } from '@/components/dashboard/RecentOrders'
import {
    totalPizzasSold,
    totalRevenue,
    averagePerDay,
    bestDay,
    bestPizza,
} from '@/data/pizzaData'

export default function Dashboard() {
    return (
        <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
            <Flex direction="column" gap="8px" w="full">

                {/* Stats Row — 4 stats in one PageSection */}
                <PageSection title="Weekly Overview" subtitle="March 3 – 9, 2026">
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        gap={6}
                    >
                        <StatCard
                            label="Total Pizzas Sold"
                            value={totalPizzasSold}
                            subtext="This week"
                        />
                        <StatCard
                            label="Total Revenue"
                            value={`$${totalRevenue.toLocaleString()}`}
                            subtext={`Avg $${Math.round(totalRevenue / 7)}/day`}
                        />
                        <StatCard
                            label="Average Per Day"
                            value={averagePerDay}
                            subtext="pizzas/day"
                        />
                        <StatCard
                            label="Best Day"
                            value={bestDay.day}
                            subtext={`${bestDay.pizzasSold} pizzas · $${bestDay.revenue}`}
                        />
                    </Grid>
                </PageSection>

                {/* Charts Row — two PageSections side by side */}
                <Flex direction="row" gap="8px" w="full">
                    <PageSection title="Daily Pizza Sales" subtitle="Week of March 3 – 9, 2026">
                        <DailySalesChart />
                    </PageSection>
                    <PageSection title="Pizza Types" subtitle="Breakdown by popularity">
                        <PizzaTypeBreakdown />
                    </PageSection>
                </Flex>

                {/* Top Seller — PageSection */}
                <PageSection title="Top Seller This Week">
                    <Flex align="center" gap={4}>
                        <Box>
                            <Text fontSize="16px" fontWeight="bold" color="fg.primary">
                                {bestPizza.name}
                            </Text>
                            <Text fontSize="13px" color="fg.secondary">
                                {bestPizza.sold} pizzas sold · {bestPizza.percentage}% of total
                            </Text>
                        </Box>
                    </Flex>
                </PageSection>

                {/* Recent Orders — PageSection */}
                <PageSection title="Recent Orders" subtitle="Today's latest orders">
                    <RecentOrders />
                </PageSection>

            </Flex>
        </Box>
    )
}
