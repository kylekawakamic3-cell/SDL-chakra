import { Box, Flex, Text, VStack, Badge } from '@chakra-ui/react'
import { PageSection } from '@/components/ui/page-section'
import { pizzaTypes } from '@/data/pizzaData'
import { Button } from '@/components/ui/button'

export default function Menu() {
    return (
        <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
            <Flex direction="column" gap="8px" w="full">
                <PageSection
                    title="Menu Management"
                    subtitle="Configure your pizza offerings and pricing"
                    actions={<Button size="sm">Add New Pizza</Button>}
                >
                    <VStack align="stretch" gap={0}>
                        {pizzaTypes.map((pizza, index) => (
                            <Flex
                                key={pizza.name}
                                py={4}
                                px={2}
                                borderBottomWidth={index === pizzaTypes.length - 1 ? 0 : "1px"}
                                borderColor="border.weak"
                                align="center"
                                justify="space-between"
                            >
                                <Flex align="center" gap={4}>
                                    <Box>
                                        <Text fontWeight="medium" color="fg.primary">{pizza.name}</Text>
                                        <Text fontSize="12px" color="fg.secondary">Classic recipe with premium ingredients</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={6}>
                                    <Box textAlign="right">
                                        <Text fontWeight="bold" color="fg.primary">$14.99</Text>
                                        <Badge variant="subtle" colorPalette="green" size="sm">Available</Badge>
                                    </Box>
                                    <Button variant="outline" size="sm">Edit</Button>
                                </Flex>
                            </Flex>
                        ))}
                    </VStack>
                </PageSection>
            </Flex>
        </Box>
    )
}
