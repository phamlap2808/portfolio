import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="OKXE Blog">
		<Container>
			<Title>
				OKXE Blog <Badge>2020-2021</Badge>
			</Title>
			<P>
				OKXE Blog is the official content platform of OKXE - Vietnam&apos;s leading motorcycle marketplace. 
				The blog provides comprehensive information about motorcycles, including new vehicle updates, 
				market trends, pricing guides for both new and used vehicles, buying advice, technical knowledge, 
				and maintenance tips. It features specialized sections for motorcycle reviews, comparisons, 
				road safety, travel guides, and promotional campaigns. The platform also includes dedicated 
				sections for electric vehicles and OKXE GO service updates, making it a one-stop resource 
				for motorcycle enthusiasts and potential buyers.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://www.okxe.vn/blog">
						https://www.okxe.vn/blog/ <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Website</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Nuxtjs</span>
				</ListItem>
				<ListItem>
					<Meta>Features</Meta>
					<span>Responsive Design, SEO Optimization, Content Management System</span>
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

			<WorkImage src="/images/works/okxe-blog_01.png" alt="okxe-blog" />
			<WorkImage src="/images/works/okxe-blog_02.png" alt="okxe-blog" />
		</Container>
	</Layout>
)

export default Work
