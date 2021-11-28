import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a developer JS
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexFrow={1}>
                    <Heading as="h2" variant="page-title">
                        JS
                    </Heading>
                    <p>Skill (Developer / DevOps / Design)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/poster.png" alt="myImage" />
                    </Box>
            </Box>
        </Container>
    )
}

export default Page