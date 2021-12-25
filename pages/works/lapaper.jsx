import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="okxe-blog">
		<Container>
			<Title>
				Lapaper <Badge>2021</Badge>
			</Title>
			<P>
				Lapaper is a website which provides services about wedding card printing
				and other types of cards. With Lapaper, customers can find many
				beautiful cards, customers can also create their own designs with the
				consultation of the professional designers.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://lapaper.vn">
						https://lapaper.vn/ <ExternalLinkIcon mx="2px" />
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

			<WorkImage src="/images/works/lapaper-01.png" alt="lapaper" />
			<WorkImage src="/images/works/lapaper-02.png" alt="lapaper" />
		</Container>
	</Layout>
)

export default Work
