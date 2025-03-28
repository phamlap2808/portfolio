import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="OKXE">
		<Container>
			<Title>
				OKXE <Badge>2019-2022</Badge>
			</Title>
			<P>
				OKXE is Vietnam&apos;s leading online motorcycle marketplace, specializing in both new and used 
				motorcycle transactions. The platform leverages AI and Big Data technologies to optimize 
				and ensure safe transactions. OKXE provides a comprehensive ecosystem for motorcycle 
				enthusiasts, including a marketplace for buying and selling, price comparison tools, 
				vehicle inspection services, and OKXE GO - a specialized service platform.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://www.okxe.vn">
						https://www.okxe.vn <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Website, Mobile Web</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Vue.js, Node.js</span>
				</ListItem>
				<ListItem>
					<Meta>Features</Meta>
					<span>AI-Powered Price Prediction, Real-time Chat, Vehicle Inspection, Payment Integration</span>
				</ListItem>
				<ListItem>
					<Meta>Role</Meta>
					<span>Frontend Developer</span>
				</ListItem>
				<ListItem>
					<Meta>Responsibilities</Meta>
					<span>UI/UX Development, Performance Optimization, Feature Implementation</span>
				</ListItem>
			</List>

			<WorkImage src="/images/works/okxe-01.png" alt="OKXE Platform" />
			<WorkImage src="/images/works/okxe-02.png" alt="OKXE Features" />
		</Container>
	</Layout>
)

export default Work 