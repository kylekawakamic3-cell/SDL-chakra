import { Box, Flex, Text } from '@chakra-ui/react'
import { recentOrders } from '@/data/pizzaData'

function StatusBadge({ status }: { status: 'completed' | 'preparing' | 'delivered' }) {
    // Correctly using design system tokens: palette.step
    const config = {
        completed: { bg: 'green.5', color: 'fg.success' },   // green.5 bg, green.60 text
        preparing: { bg: 'yellow.5', color: 'yellow.60' },    // yellow.5 bg, yellow.60 text
        delivered: { bg: 'blue.5', color: 'fg.accent' },    // blue.5 bg, blue.60 text
    }

    const { bg, color } = config[status]

    return (
        <Box
            bg={bg}
            color={color}
            px="8px"
            py="2px"
            borderRadius="xs"
            fontSize="11px"
            fontWeight="medium"
        >
            {status.toUpperCase()}
        </Box>
    )
}

export function RecentOrders() {
    return (
        <Box>
            <Flex direction="column" gap={0}>
                {/* Header */}
                <Flex
                    py={2}
                    px={3}
                    borderBottomWidth="1px"
                    borderColor="border.weak"
                >
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" w="70px" textTransform="uppercase" letterSpacing="0.05em">Order</Text>
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" w="80px" textTransform="uppercase" letterSpacing="0.05em">Time</Text>
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" flex={1} textTransform="uppercase" letterSpacing="0.05em">Item</Text>
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" w="40px" textAlign="center" textTransform="uppercase" letterSpacing="0.05em">Qty</Text>
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" w="70px" textAlign="right" textTransform="uppercase" letterSpacing="0.05em">Total</Text>
                    <Text fontSize="11px" color="fg.secondary" fontWeight="medium" w="90px" textAlign="right" textTransform="uppercase" letterSpacing="0.05em">Status</Text>
                </Flex>

                {/* Rows */}
                {recentOrders.map((order) => (
                    <Flex
                        key={order.id}
                        py="10px"
                        px={3}
                        align="center"
                        borderBottomWidth="1px"
                        borderColor="border.weak"
                        _hover={{ bg: 'bg.selected' }}
                    >
                        <Text fontSize="13px" fontWeight="medium" color="fg.primary" w="70px">
                            {order.id}
                        </Text>
                        <Text fontSize="13px" color="fg.secondary" w="80px">
                            {order.time}
                        </Text>
                        <Text fontSize="13px" color="fg.primary" flex={1}>
                            {order.pizzaType}
                        </Text>
                        <Text fontSize="13px" color="fg.primary" w="40px" textAlign="center">
                            ×{order.quantity}
                        </Text>
                        <Text fontSize="13px" fontWeight="medium" color="fg.primary" w="70px" textAlign="right">
                            ${order.total.toFixed(2)}
                        </Text>
                        <Flex w="90px" justify="flex-end">
                            <StatusBadge status={order.status} />
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Box>
    )
}
