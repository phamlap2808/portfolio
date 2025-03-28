import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
	<Layout title="i18n Google Sheet Tool">
		<Container>
			<Title>
				i18n Google Sheet Tool <Badge>2024</Badge>
			</Title>
			<P>
				A powerful tool for synchronizing translations between Google Sheets and JSON files 
				for i18n localization. This open-source project streamlines the translation workflow 
				by providing two-way synchronization, multi-language support, and seamless integration 
				with existing development processes.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>GitHub</Meta>
					<Link href="https://github.com/phamlap2808/i18n-google-sheet-tool">
						https://github.com/phamlap2808/i18n-google-sheet-tool <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Node.js CLI Tool</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>TypeScript, Node.js, Google Sheets API</span>
				</ListItem>
				<ListItem>
					<Meta>Features</Meta>
					<span>Two-way Sync, Multi-language Support, OAuth2 Authentication, Configurable Port</span>
				</ListItem>
				<ListItem>
					<Meta>Key Features</Meta>
					<span>Google Sheets Integration, JSON File Management, Automatic Sheet Creation, OAuth2 Security</span>
				</ListItem>
				<ListItem>
					<Meta>Project Structure</Meta>
					<span>Hierarchical JSON Organization, Sheet-based Translation Groups, Configurable Output Directory</span>
				</ListItem>
			</List>

			<WorkImage src="/images/works/i18n-tool_01.png" alt="i18n Google Sheet Tool Structure" />
			<WorkImage src="/images/works/i18n-tool_02.png" alt="i18n Google Sheet Tool Usage" />
		</Container>
	</Layout>
)

export default Work 