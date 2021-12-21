import NextLink from 'next/link'
import {
	Container,
	Box,
	Heading,
	Image,
	Link,
	useColorModeValue,
	Button,
	List,
	ListItem,
	Icon,
	SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoFacebook, IoLogoGithub, IoCall, IoMail } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumbOkxeBlog from '../public/images/works/okxe-blog.png'
import thumbLapaper from '../public/images/works/lapaper.png'

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
					<Paragraph>
						Lập is a freelance and frontend developer based in Ho Chi Minh city.
						His current job in planning, developing project for company. He's
						known as a detail-oriented and good communicator employee. He can
						take multiple tasks at once. His supervisor aslo appreciates his
						enthusiasm for the job.
						He has knownledge of Vuejs, Nuxtjs, Reactjs, Nextjs ...
					</Paragraph>
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
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						On website
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/phamlap2808" target="_blank">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoGithub} />}
								>
									@phamlap2808
								</Button>
							</Link>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<Link
								href="https://www.facebook.com/gialap.pham.1/"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoFacebook} />}
								>
									Facebook
								</Button>
							</Link>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<Link href="tel:+84834912919">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoCall} />}
								>
									0834.912.919
								</Button>
							</Link>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<Link href="mailto:phamlap.rikan@gmail.com">
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoMail} />}
								>
									phamlap.rikan@gmail.com
								</Button>
							</Link>
						</ListItem>
					</List>
					<SimpleGrid columns={[1, 2, 2]} gap={6}>
						<GridItem
							href="https://okxe.vn/blog"
							title="Okxe Blog"
							thumbnail={thumbOkxeBlog}
						/>
						<GridItem
							href="https://lapaper.vn"
							title="Lapaper"
							thumbnail={thumbLapaper}
						/>
					</SimpleGrid>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
