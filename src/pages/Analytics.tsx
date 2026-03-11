import { Box, Flex, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import { PageSection } from '@/components/ui/page-section'
import { TabPanel } from '@/components/ui/tab-panel'
import { DailySalesChart } from '@/components/dashboard/DailySalesChart'
import { PizzaTypeBreakdown } from '@/components/dashboard/PizzaTypeBreakdown'
import { StatCard } from '@/components/dashboard/StatCard'

export default function Analytics() {
    const [activeTab, setActiveTab] = useState('Sales Growth')

    return (
        <Flex direction="column" flex="1" minW="0">
            <TabPanel
                title="Analytics & Trends"
                subtitle="Deep dive into sales performance and customer preferences"
                tabs={['Sales Growth', 'Popularity', 'Averages']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                flexShrink={0}
            >
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <StatCard label="Growth" value="+12.5%" />
                    <StatCard label="Conversion" value="3.2%" />
                </Grid>
            </TabPanel>

            <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
                <Flex direction="column" gap="8px" w="full">
                    {activeTab === 'Sales Growth' && (
                        <PageSection title="Revenue & Sales Trends" subtitle="Performance over the last 7 days">
                            <DailySalesChart />
                        </PageSection>
                    )}
                    {activeTab === 'Popularity' && (
                        <PageSection title="Pizza Type Popularity" subtitle="Distribution of sales by type">
                            <PizzaTypeBreakdown />
                        </PageSection>
                    )}
                    {activeTab === 'Averages' && (
                        <PageSection title="Order Averages" subtitle="Key average metrics">
                            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                                <StatCard label="Avg Ticket" value="$24.50" />
                                <StatCard label="Avg Prep Time" value="18m" />
                                <StatCard label="Avg Rating" value="4.8/5" />
                            </Grid>
                        </PageSection>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}
