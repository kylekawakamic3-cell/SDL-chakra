import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <Container maxW="md" centerContent py={10}>
      <Box padding="4" bg="bg.subtle" maxW="3xl" borderRadius="md" boxShadow="sm">
        <VStack gap={4} align="stretch">
          <Heading size="xl">Chakra Custom Library Setup</Heading>
          <Text color="fg.muted">
            Hello world! This is a custom Chakra UI project configured with Vite, React, and TypeScript.
          </Text>
          <Button colorPalette="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>
    </Container>
  )
}

export default App
