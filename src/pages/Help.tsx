import { Box, Flex, Text } from '@chakra-ui/react'
import { PageSection } from '@/components/ui/page-section'

export default function Help() {
    return (
        <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
            <Flex direction="column" gap="8px" w="full">
                <PageSection title="Frequently Asked Questions" subtitle="Quick answers to common questions">
                    <VStack align="stretch" gap={4}>
                        <Box>
                            <Text fontWeight="medium" color="fg.primary">How do I process a refund?</Text>
                            <Text fontSize="14px" color="fg.secondary">Go to the Orders page, select the order, and click "Refund".</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="medium" color="fg.primary">Can I change the menu prices?</Text>
                            <Text fontSize="14px" color="fg.secondary">Yes, you can edit prices directly in the Menu Management tab.</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="medium" color="fg.primary">How do I contact support?</Text>
                            <Text fontSize="14px" color="fg.secondary">Email us at support@pizzadashboard.com or call 1-800-PIZZA-HELP.</Text>
                        </Box>
                    </VStack>
                </PageSection>
            </Flex>
        </Box>
    )
}

function VStack({ children, ...props }: any) {
    return <Flex direction="column" {...props}>{children}</Flex>
}
