import { Box, Flex, Text, HStack } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export interface TabPanelParagraph {
    label: string
    value: string
}

export interface TabPanelProps extends Omit<BoxProps, 'title'> {
    title: React.ReactNode
    subtitle?: string
    description?: string
    paragraphs?: TabPanelParagraph[]
    actions?: React.ReactNode
    headerExtra?: React.ReactNode
    tabs?: string[]
    activeTab?: string
    onTabChange?: (tab: string) => void
    children?: React.ReactNode
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
    function TabPanel(props, ref) {
        const {
            title,
            subtitle,
            description,
            paragraphs,
            actions,
            headerExtra,
            tabs = [],
            activeTab,
            onTabChange,
            children,
            ...rest
        } = props

        return (
            <Box
                bg="bg.primary"
                borderRadius="0"
                boxShadow="page.section"
                borderBottomWidth="1px"
                borderColor="border.weak"
                w="full"
                display="flex"
                flexDirection="column"
                flexShrink={0}
                {...rest}
                ref={ref}
            >
                {/* Top section: Title area + Content area */}
                <Flex w="full" minH="200px">
                    {/* Left: Title area */}
                    <Flex
                        direction="column"
                        justifyContent="space-between"
                        minW="320px"
                        maxW="400px"
                        w="320px"
                        p={4}
                        flexShrink={0}
                        overflow="hidden"
                    >
                        {/* Title content */}
                        <Flex direction="column" gap="12px" overflow="hidden">
                            {/* Title & subtitle */}
                            <Flex direction="column" gap={1} overflow="hidden">
                                <Flex align="flex-start" gap="12px">
                                    <Flex flex="1" minW="0" overflow="hidden">
                                        {typeof title === 'string' ? (
                                            <Text
                                                fontSize="20px"
                                                fontWeight="medium"
                                                color="fg.primary"
                                                lineHeight="1.25"
                                                truncate
                                            >
                                                {title}
                                            </Text>
                                        ) : (
                                            title
                                        )}
                                    </Flex>
                                    {headerExtra && (
                                        <Flex gap={2} flexShrink={0} align="center">
                                            {headerExtra}
                                        </Flex>
                                    )}
                                </Flex>
                                {subtitle && (
                                    <Text
                                        fontSize="14px"
                                        fontWeight="normal"
                                        color="fg.secondary"
                                        lineHeight="1.25"
                                        letterSpacing="0.2px"
                                        truncate
                                    >
                                        {subtitle}
                                    </Text>
                                )}
                            </Flex>

                            {/* Description */}
                            {description && (
                                <Text
                                    fontSize="12px"
                                    fontWeight="normal"
                                    color="fg.primary"
                                    lineHeight="1.5"
                                    letterSpacing="0.2px"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    css={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {description}
                                </Text>
                            )}

                            {/* Paragraph fields */}
                            {paragraphs && paragraphs.length > 0 && (
                                <Flex direction="column" gap="12px">
                                    {paragraphs.map((p, i) => (
                                        <Flex key={i} direction="column" gap={1} overflow="hidden">
                                            <Text
                                                fontSize="12px"
                                                fontWeight="medium"
                                                color="fg.secondary"
                                                letterSpacing="0.6px"
                                                textTransform="uppercase"
                                                lineHeight="1.25"
                                                truncate
                                            >
                                                {p.label}
                                            </Text>
                                            <Text
                                                fontSize="14px"
                                                fontWeight="normal"
                                                color="fg.primary"
                                                letterSpacing="0.2px"
                                                lineHeight="1.25"
                                                truncate
                                            >
                                                {p.value}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            )}
                        </Flex>

                        {/* Action buttons */}
                        {actions && (
                            <Flex gap={2} pt={4} overflow="hidden" flexWrap="wrap">
                                {actions}
                            </Flex>
                        )}
                    </Flex>

                    {/* Right: Content area (KPI tiles, charts, etc.) */}
                    {children && (
                        <Flex flex="1" minW="0" p={4} overflow="hidden">
                            {children}
                        </Flex>
                    )}
                </Flex>

                {/* Tab bar */}
                {tabs.length > 0 && (
                    <Flex h="40px" w="full" overflow="hidden" flexShrink={0}>
                        <Flex px={4} overflow="hidden">
                            <HStack gap={4} h="full">
                                {tabs.map((tab) => {
                                    const isActive = tab === activeTab
                                    return (
                                        <Flex
                                            key={tab}
                                            h="full"
                                            align="center"
                                            borderBottomWidth={isActive ? '2px' : '0px'}
                                            borderColor="fg.accent"
                                            cursor="pointer"
                                            onClick={() => onTabChange?.(tab)}
                                            _hover={{
                                                color: isActive ? 'fg.accent' : 'fg.primary',
                                            }}
                                        >
                                            <Text
                                                fontSize="12px"
                                                fontWeight="medium"
                                                letterSpacing="0.2px"
                                                color={isActive ? 'fg.accent' : 'fg.secondary'}
                                                lineHeight="1.25"
                                                whiteSpace="nowrap"
                                            >
                                                {tab}
                                            </Text>
                                        </Flex>
                                    )
                                })}
                            </HStack>
                        </Flex>
                    </Flex>
                )}
            </Box>
        )
    }
)
