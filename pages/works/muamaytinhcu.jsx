import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="Mua May Tinh Cu">
		<Container>
			<Title>
				muamaytinhcu<Badge>2021</Badge>
			</Title>
			<P>
				muamaytinhcu.net is a website which is created to sell and buy used
				technology devices. The website also sells new model technology devices.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://muamaytinhcu.net">
						https://muamaytinhcu.net/ <ExternalLinkIcon mx="2px" />
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

			<WorkImage src="/images/works/muamaytinhcu-01.png" alt="muamaytinhcu" />
		</Container>
	</Layout>
)

export default Work
