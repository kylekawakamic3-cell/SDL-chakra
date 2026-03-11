import { Box, Flex, Text, VStack, Input, Field } from '@chakra-ui/react'
import { PageSection } from '@/components/ui/page-section'
import { Button } from '@/components/ui/button'

export default function Settings() {
    return (
        <Box flex="1" overflowY="auto" bg="bg.page" p="16px">
            <Flex direction="column" gap="8px" w="full">
                <PageSection title="Account Settings" subtitle="Manage your profile and preferences">
                    <VStack align="stretch" gap={4} maxW="400px">
                        <Field.Root>
                            <Field.Label>Restaurant Name</Field.Label>
                            <Input defaultValue="Luigi's Pizza & Co." />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Owner Email</Field.Label>
                            <Input defaultValue="owner@luigispizza.com" />
                        </Field.Root>
                        <Box pt={2}>
                            <Button>Save Changes</Button>
                        </Box>
                    </VStack>
                </PageSection>

                <PageSection title="Notifications" subtitle="Configure how you receive alerts">
                    <Text fontSize="14px" color="fg.secondary">
                        Notification settings are coming soon.
                    </Text>
                </PageSection>
            </Flex>
        </Box>
    )
}
