import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="Remote Work Cloud">
		<Container>
			<Title>
				Remote Work Cloud <Badge>2022-2024</Badge>
			</Title>
			<P>
				Remote Work Cloud is a talent management platform optimized for remote work, designed to help 
				companies effectively manage their workforce and enhance operational efficiency. The platform 
				provides comprehensive tools for team management, including individual assessments, 
				engagement surveys, and real-time operational status monitoring.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://remotework-cloud.com">
						https://remotework-cloud.com <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Web Application</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Nuxt 3, TypeScript, Vuetify 3, AWS</span>
				</ListItem>
				<ListItem>
					<Meta>Role</Meta>
					<span>Lead Frontend Developer</span>
				</ListItem>
				<ListItem>
					<Meta>Responsibilities</Meta>
					<span>Project Architecture, Team Leadership, Code Review, DevOps</span>
				</ListItem>
				<ListItem>
					<Meta>Key Features</Meta>
					<span>Team Management, Performance Assessment, Engagement Surveys, Operational Monitoring</span>
				</ListItem>
			</List>

			<WorkImage src="/images/works/rwc-01.png" alt="Remote Work Cloud" />
			<WorkImage src="/images/works/rwc-02.png" alt="Remote Work Cloud Features" />
		</Container>
	</Layout>
)

export default Work 