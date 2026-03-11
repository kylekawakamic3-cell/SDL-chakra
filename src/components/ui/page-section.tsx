import { Box, Flex, Text } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export interface PageSectionProps extends Omit<BoxProps, "title"> {
    title?: React.ReactNode
    subtitle?: React.ReactNode
    actions?: React.ReactNode
    children: React.ReactNode
}

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>(
    function PageSection(props, ref) {
        const { title, subtitle, actions, children, ...rest } = props

        const hasHeader = title || subtitle || actions

        return (
            <Box
                bg="bg.primary"
                borderRadius="xs"
                boxShadow="page.section"
                p={4}
                flex="1"
                minW="0"
                display="flex"
                flexDirection="column"
                gap={4}
                {...rest}
                ref={ref}
            >
                {hasHeader && (
                    <Flex w="full" minH="24px" align="flex-start" justify="space-between" flexShrink={0}>
                        <Flex direction="column" gap={1} flex="1" minW="0">
                            {title && (
                                <Flex align="center" gap={1} h="20px">
                                    {typeof title === 'string' ? (
                                        <Text fontSize="16px" fontWeight="medium" color="fg.primary" truncate>
                                            {title}
                                        </Text>
                                    ) : (
                                        title
                                    )}
                                </Flex>
                            )}
                            {subtitle && (
                                typeof subtitle === 'string' ? (
                                    <Text fontSize="14px" fontWeight="regular" color="fg.secondary" letterSpacing="0.2px" truncate maxH="30px">
                                        {subtitle}
                                    </Text>
                                ) : (
                                    subtitle
                                )
                            )}
                        </Flex>

                        {actions && (
                            <Flex align="center" minH="24px" pl={3} wrap="wrap" gap={3}>
                                {actions}
                            </Flex>
                        )}
                    </Flex>
                )}

                <Box alignSelf="stretch" w="full">
                    {children}
                </Box>
            </Box>
        )
    }
)
