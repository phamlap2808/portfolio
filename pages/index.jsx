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
import { IoLogoFacebook, IoLogoGithub, IoCall, IoMail, IoLogoLinkedin } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumbOkxeBlog from '../public/images/works/okxe-blog.png'
import thumbLapaper from '../public/images/works/lapaper.png'
import thumbI18nExtension from '../public/images/works/i18n-sheets-sync-01.png'
import thumbCodeReview from '../public/images/works/ai-code-review-01.png'
import thumbI18nTool from '../public/images/works/i18n-google-sheet-tool-01.png'
import thumbNanahouse from '../public/images/works/nanahouse-01.png'

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
						Lập is a front-end developer with over 5 years of experience, currently working at Recurve.
						He&apos;s known for strong problem-solving skills, excellent communication, and ability to learn new technologies quickly.
						He has expertise in VueJS, Nuxt, ReactJS, Next, React Native, ExpressJS, and AWS cloud services.
						His technical stack includes JavaScript, TypeScript, and various modern frameworks for building responsive, 
						high-performance web applications.
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
						Born in My Tho City, Tien Giang Province, Vietnam
					</BioSection>
					<BioSection>
						<BioYear>2015-2019</BioYear>
						Graduated from Saigon Technology University
					</BioSection>
					<BioSection>
						<BioYear>2019-2022</BioYear>
						Worked at OKXE VIETNAM as Developer
					</BioSection>
					<BioSection>
						<BioYear>2022-2024</BioYear>
						Worked at GMO Z.Com Runsystem as Front-End Developer
					</BioSection>
					<BioSection>
						<BioYear>2024 to present</BioYear>
						Working at Recurve as Front-End Developer
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
									px={0}
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
									px={0}
								>
									Facebook
								</Button>
							</Link>
						</ListItem>
					</List>
					<List>
						<ListItem>
							<Link
								href="https://www.linkedin.com/in/l%E1%BA%ADp-ph%E1%BA%A1m-a72b18207/"
								target="_blank"
							>
								<Button
									variant="ghost"
									colorScheme="teal"
									leftIcon={<Icon as={IoLogoLinkedin} />}
									px={0}
								>
									Linkedin
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
									px={0}
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
									px={0}
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
						<GridItem
							href="https://github.com/phamlap2808/i18n-google-sheet-vscode-extention"
							title="i18n Google Sheet Extension"
							thumbnail={thumbI18nExtension}
						>
						</GridItem>
						<GridItem
							href="https://github.com/phamlap2808/review-code"
							title="AI Code Review Tool"
							thumbnail={thumbCodeReview}
						>
						</GridItem>
						<GridItem
							href="https://github.com/phamlap2808/i18n-google-sheet-tool"
							title="i18n Google Sheet CLI"
							thumbnail={thumbI18nTool}
						>
						</GridItem>
						<GridItem
							href="https://nanahouse-client.vercel.app"
							title="Nanahouse E-commerce"
							thumbnail={thumbNanahouse}
						>
						</GridItem>
					</SimpleGrid>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
