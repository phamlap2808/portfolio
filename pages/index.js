import NextLink from 'next/link'
import {
	Container,
	Box,
	Heading,
	Image,
	Link,
	useColorModeValue,
	Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box
					borderRadius="lg"
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
					p={3}
					mb={6}
					textAlign="center"
				>
					Hello, I&apos;m a front-end developer
				</Box>
				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Phạm Gia Lập
						</Heading>
						<p>Frontend Developer</p>
					</Box>
					<Box
						flexShrink={0}
						mt={{ base: 4, md: 0 }}
						ml={{ md: 6 }}
						align="center"
					>
						<Image
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							maxWidth="100px"
							display="inline-block"
							borderRadius="full"
							src="/images/phamlap.jpeg"
							alt="Profile Image"
						/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>Lập is a Frontend developer in OKXE.vn</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>1997</BioYear>
						Born in Mỹ Tho city, Tiền Giang provice, Vietnam
					</BioSection>
					<BioSection>
						<BioYear>2019</BioYear>
						Worked at HCMC University of Education
					</BioSection>
					<BioSection>
						<BioYear>2020 to present</BioYear>
						Worked at OKXE VIETNAM Company Limited
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ♥
					</Heading>
					<Paragraph>Game, Music, Photography, Leica</Paragraph>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
