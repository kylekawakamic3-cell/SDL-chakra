import { Box, Flex, VStack, Text, Icon, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export interface NavLink {
    label: string;
    href: string;
    icon: React.ElementType;
}

export interface NavigationProps extends BoxProps {
    logo?: React.ReactNode;
    links?: NavLink[];
    footerLinks?: NavLink[];
}

export const Navigation = React.forwardRef<HTMLDivElement, NavigationProps>(
    function Navigation(props, ref) {
        const { logo, links = [], footerLinks = [], ...rest } = props

        // Simple way to check active state in this environment
        const currentPath = window.location.pathname;

        return (
            <Box
                as="nav"
                w="68px"
                h="100vh"
                borderRightWidth="1px"
                borderColor="border.weak"
                bg="bg.primary"
                pt="0px"
                pb="8px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                {...rest}
                ref={ref}
            >
                {/* Logo Area */}
                <Flex w="full" justify="center" p={3} mb={0} flexShrink={0}>
                    {logo || (
                        <RouterLink to="/">
                            <Image src="/c3-ai-logo.png" alt="Home" w="32px" h="auto" />
                        </RouterLink>
                    )}
                </Flex>

                {/* Main Nav Items */}
                <VStack gap="4px" flex="1" w="full" px="8px" align="center">
                    {links.map((link, index) => {
                        const isActive = currentPath === link.href;
                        return (
                            <RouterLink
                                to={link.href}
                                key={index}
                                style={{ width: '100%', textDecoration: 'none' }}
                            >
                                <Flex
                                    w="full"
                                    direction="column"
                                    align="center"
                                    justify="center"
                                    py="8px"
                                    px="2px"
                                    borderRadius="xs"
                                    bg={isActive ? "bg.selected" : "transparent"}
                                    color={isActive ? "fg.primary" : "fg.secondary"}
                                    _hover={{ bg: "grayAlpha.5", color: "fg.primary" }}
                                    cursor="pointer"
                                    transition="all 0.2s"
                                >
                                    <Icon as={link.icon} fontSize="20px" mb={1} />
                                    <Text fontSize="10px" fontWeight={isActive ? "medium" : "regular"} lineHeight="1" textAlign="center">
                                        {link.label}
                                    </Text>
                                </Flex>
                            </RouterLink>
                        )
                    })}
                </VStack>

                {/* Footer Nav Items */}
                {footerLinks.length > 0 && (
                    <VStack gap="8px" w="full" px="8px" pb="0px" flexShrink={0}>
                        <Box w="full" h="1px" bg="border.weak" my={0} />
                        <VStack gap="4px" w="full">
                            {footerLinks.map((link, index) => {
                                const isActive = currentPath === link.href;
                                return (
                                    <RouterLink
                                        to={link.href}
                                        key={index}
                                        style={{ width: '100%', textDecoration: 'none' }}
                                    >
                                        <Flex
                                            w="full"
                                            direction="column"
                                            align="center"
                                            justify="center"
                                            py="8px"
                                            px="2px"
                                            borderRadius="xs"
                                            bg={isActive ? "bg.selected" : "transparent"}
                                            color={isActive ? "fg.primary" : "fg.secondary"}
                                            _hover={{ bg: "grayAlpha.5", color: "fg.primary" }}
                                            cursor="pointer"
                                            transition="all 0.2s"
                                        >
                                            <Icon as={link.icon} fontSize="20px" mb={1} />
                                            <Text fontSize="10px" fontWeight={isActive ? "medium" : "regular"} lineHeight="1" textAlign="center">
                                                {link.label}
                                            </Text>
                                        </Flex>
                                    </RouterLink>
                                )
                            })}
                        </VStack>
                    </VStack>
                )}
            </Box>
        )
    }
)
