import { Flex, Text, HStack } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import * as React from 'react'

export interface PageHeaderProps extends Omit<FlexProps, 'title'> {
    title: React.ReactNode
    tabs?: string[]
    activeTab?: string
    onTabChange?: (tab: string) => void
    actions?: React.ReactNode
}

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
    function PageHeader(props, ref) {
        const { title, tabs = [], activeTab, onTabChange, actions, ...rest } = props

        return (
            <Flex
                w="full"
                h="40px"
                bg="bg.primary"
                borderBottomWidth="1px"
                borderColor="border.weak"
                alignItems="center"
                {...rest}
                ref={ref}
            >
                {/* Title Area */}
                <Flex align="center" px={4} maxW="400px" h="full" flexShrink={0}>
                    {typeof title === 'string' ? (
                        <Text fontSize="14px" fontWeight="semibold" color="fg.primary" letterSpacing="0.2px">
                            {title}
                        </Text>
                    ) : (
                        title
                    )}
                </Flex>

                {/* Tab Bar Area */}
                <Flex flex="1" h="full" px={4} overflow="hidden">
                    {tabs.length > 0 && (
                        <HStack gap={4} h="full">
                            {tabs.map((tab) => {
                                const isActive = tab === activeTab
                                return (
                                    <Flex
                                        key={tab}
                                        h="full"
                                        align="center"
                                        borderBottomWidth={isActive ? "2px" : "0px"}
                                        borderColor="colorPalette.500"
                                        color={isActive ? "colorPalette.500" : "fg.subtle"}
                                        cursor="pointer"
                                        onClick={() => onTabChange?.(tab)}
                                        _hover={{ color: isActive ? "colorPalette.600" : "fg" }}
                                    >
                                        <Text fontSize="12px" fontWeight="medium" letterSpacing="0.2px">
                                            {tab}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </HStack>
                    )}
                </Flex>

                {/* Actions Area */}
                {actions && (
                    <Flex h="full" align="center" justify="flex-end" px={3} flexShrink={0}>
                        <HStack gap={3}>
                            {actions}
                        </HStack>
                    </Flex>
                )}
            </Flex>
        )
    }
)
