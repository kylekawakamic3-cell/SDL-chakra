import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { PageSection } from '@/components/ui/page-section'
import { RecentOrders } from '@/components/dashboard/RecentOrders'
import { TabPanel } from '@/components/ui/tab-panel'

export default function Orders() {
    const [activeTab, setActiveTab] = useState('All')

    return (
        <Flex direction="column" flex="1" minW="0">
            <TabPanel
                title="Order Management"
                subtitle="Track and manage customer pizza orders"
                description="Monitor order status in real-time, update fulfillment progress, and view historical order data for the current week."
                tabs={['All', 'Preparing', 'Delivered', 'Completed']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                flexShrink={0}
            />
            <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
                <Flex direction="column" gap="8px" w="full">
                    <PageSection title={`${activeTab} Orders`} subtitle={`Showing results for ${activeTab.toLowerCase()} status`}>
                        <RecentOrders />
                    </PageSection>
                </Flex>
            </Box>
        </Flex>
    )
}
