import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="Reorc">
		<Container>
			<Title>
				Reorc <Badge>2024-Present</Badge>
			</Title>
			<P>
				Reorc (formerly Recurve) is an AI-powered analytics platform that empowers businesses 
				to confidently manage their entire data process and make data-driven decisions like 
				tech giants. The platform leverages advanced AI technologies to provide intelligent 
				analytics solutions, helping companies transform their data into actionable insights.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://reorc.cloud">
						https://reorc.cloud <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Web Application</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Vue 3, Nuxt 3, Element Plus, AWS</span>
				</ListItem>
				<ListItem>
					<Meta>Role</Meta>
					<span>Frontend Developer</span>
				</ListItem>
				<ListItem>
					<Meta>Phase</Meta>
					<span>Scale-up Phase 5</span>
				</ListItem>
				<ListItem>
					<Meta>Process</Meta>
					<span>Kanban, Agile Development</span>
				</ListItem>
				<ListItem>
					<Meta>Key Features</Meta>
					<span>AI Analytics, Data Processing, Business Intelligence, Performance Optimization</span>
				</ListItem>
				<ListItem>
					<Meta>Responsibilities</Meta>
					<span>UI/UX Optimization, Figma Implementation, Feature Development, Performance Enhancement</span>
				</ListItem>
			</List>

			<WorkImage src="/images/works/reorc-01.png" alt="Reorc Platform" />
			<WorkImage src="/images/works/reorc-02.png" alt="Reorc Analytics" />
		</Container>
	</Layout>
)

export default Work 