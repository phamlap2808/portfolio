import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="okxe-blog">
		<Container>
			<Title>
				OKXE Blog <Badge>2020-2021</Badge>
			</Title>
			<P>
				OKXE official blog page. Here, you can find for yourself vehicle-related
				information and promotions. Join OKXE today!
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
			</List>

			<WorkImage src="/images/works/okxe-blog_01.png" alt="okxe-blog" />
			<WorkImage src="/images/works/okxe-blog_02.png" alt="okxe-blog" />
		</Container>
	</Layout>
)

export default Work
