import { Flex, Text } from '@chakra-ui/react'

interface StatCardProps {
    label: string;
    value: string | number;
    subtext?: string;
}

export function StatCard({ label, value, subtext }: StatCardProps) {
    return (
        <Flex direction="column" gap={1}>
            <Flex align="center" gap={2}>
                <Text fontSize="12px" color="fg.secondary" fontWeight="medium" textTransform="uppercase" letterSpacing="0.05em">
                    {label}
                </Text>
            </Flex>
            <Flex align="center" gap={3}>
                <Text fontSize="24px" fontWeight="bold" color="fg.primary" lineHeight="1.1">
                    {value}
                </Text>
            </Flex>
            {subtext && (
                <Text fontSize="12px" color="fg.secondary">
                    {subtext}
                </Text>
            )}
        </Flex>
    )
}
