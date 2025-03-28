import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbOkxeBlog from '../public/images/works/okxe-blog.png'
import thumbLapaper from '../public/images/works/lapaper.png'
import thumbChuyenThanhLy from '../public/images/works/chuyenthanhly.png'
import thumbMuaMayTinhCu from '../public/images/works/muamaytinhcu.png'
import thumbReorc from '../public/images/works/reorc-01.png'
import thumbRemoteWorkCloud from '../public/images/works/rwc-01.png'
import thumbOkxe from '../public/images/works/okxe-01.png'
import thumbI18nExtension from '../public/images/works/i18n-google-sheet-tool-01.png'
import thumbNanahouse from '../public/images/works/nanahouse-01.png'
import thumbI18nSheetsSync from '../public/images/works/i18n-sheets-sync-01.png'
import thumbCodeReview from '../public/images/works/ai-code-review-01.png'

const Works = () => {
	return (
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem
						id="i18n-google-sheet-tool"
						title="i18n Google Sheet Tool"
						thumbnail={thumbI18nExtension}
					>
						A powerful CLI tool for synchronizing translations between Google Sheets and JSON files, 
						streamlining the i18n localization workflow with two-way sync and multi-language support.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="reorc"
						title="Reorc"
						thumbnail={thumbReorc}
					>
						An AI-powered analytics platform empowering businesses to manage their data process 
						and make data-driven decisions through intelligent analytics and insights.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="remoteworkcloud"
						title="Remote Work Cloud"
						thumbnail={thumbRemoteWorkCloud}
					>
						A comprehensive talent management platform optimized for remote work, 
						featuring team management tools, performance assessments, and operational monitoring.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="okxe"
						title="OKXE"
						thumbnail={thumbOkxe}
					>
						Vietnam&apos;s leading online motorcycle marketplace, leveraging AI and Big Data 
						technologies to provide a comprehensive ecosystem for motorcycle transactions 
						and services.
					</WorkGridItem>
				</Section>
				<Section delay={0.1}>
					<WorkGridItem
						id="okxe-blog"
						title="OKXE Blog"
						thumbnail={thumbOkxeBlog}
					>
						OKXE official blog platform providing comprehensive information about motorcycles,
						market trends, and expert advice for motorcycle enthusiasts.
					</WorkGridItem>
				</Section>
				<Section delay={0.1}>
					<WorkGridItem id="lapaper" title="Lapaper" thumbnail={thumbLapaper}>
						Lapaper is a website which provides services about wedding card
						printing and other types of cards. With Lapaper, customers can find
						many beautiful cards, customers can also create their own designs
						with the consultation of the professional designers.
					</WorkGridItem>
				</Section>
				<Section delay={0.2}>
					<WorkGridItem
						id="chuyenthanhly"
						title="Chuyên thanh lý"
						thumbnail={thumbChuyenThanhLy}
					>
						chuyenthanhly.com is a website which is created for selling and
						buying used or second-hand furniture. Customers can find used
						furniture with good quality and a low price.
					</WorkGridItem>
				</Section>
				<Section delay={0.2}>
					<WorkGridItem
						id="muamaytinhcu"
						title="Mua máy tính cũ"
						thumbnail={thumbMuaMayTinhCu}
					>
						muamaytinhcu.net is a website which is created to sell and buy used
						technology devices. The website also sells new model technology
						devices.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="i18n-google-sheet-extension"
						title="i18n Google Sheet Extension"
						thumbnail={thumbI18nSheetsSync}
					>
						A VS Code extension for synchronizing translations between Google Sheets and JSON files, 
						featuring two-way sync, OAuth2 authentication, and multi-language support.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="nanahouse"
						title="Nanahouse E-commerce"
						thumbnail={thumbNanahouse}
					>
						A full-stack e-commerce platform built with Nuxt.js and NestJS, featuring 
						product management, order processing, and role-based admin dashboard.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id="ai-code-review"
						title="AI Code Review Tool"
						thumbnail={thumbCodeReview}
					>
						An intelligent code review assistant powered by GPT models that automatically 
						analyzes merge requests and provides detailed feedback on code quality, potential 
						bugs, and best practices.
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Works
