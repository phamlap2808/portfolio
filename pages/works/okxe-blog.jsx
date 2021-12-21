import {
	Container,
	Badge,
	Link,
	List,
	ListItem,
	SimpleGrid,
	UnorderedList,
	Heading,
	Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="okxe-blog">
		<Container>
			<Title>
				OKXE Blog <Badge>2020</Badge>
			</Title>
		</Container>
	</Layout>
)
