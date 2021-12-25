import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="okxe-blog">
		<Container>
			<Title>
				chuyenthanhly <Badge>2021</Badge>
			</Title>
			<P>
				chuyenthanhly.com is a website which is created for selling and buying
				used or second-hand furniture. Customers can find used furniture with
				good quality and a low price.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://chuyenthanhly.com">
						https://chuyenthanhly.com/ <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Website</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Wordpress, Woocommerce</span>
				</ListItem>
			</List>

			<WorkImage src="/images/works/chuyenthanhly-01.png" alt="chuyenthanhly" />
		</Container>
	</Layout>
)

export default Work
