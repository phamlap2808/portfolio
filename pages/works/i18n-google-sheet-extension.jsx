import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="i18n Google Sheet Extension">
        <Container>
            <Title>
                i18n Google Sheet Extension <Badge>2024</Badge>
            </Title>
            <P>
                A Visual Studio Code extension that streamlines the translation management process 
                by providing seamless synchronization between Google Sheets and JSON files. This tool 
                helps developers and content managers maintain multi-language support in their applications 
                with a user-friendly interface and secure authentication.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/phamlap2808/i18n-google-sheet-vscode-extention">
                        github.com/phamlap2808/i18n-google-sheet-vscode-extention <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>VS Code Extension</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>TypeScript, VS Code API, Google Sheets API, OAuth2</span>
                </ListItem>
                <ListItem>
                    <Meta>Key Features</Meta>
                    <span>
                        Two-way Sync, Multi-language Support, OAuth2 Authentication, Progress Tracking, 
                        Error Handling
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Implementation</Meta>
                    <span>
                        VS Code Extension API, Google Cloud Integration, JSON File Management, 
                        Secure Authentication Flow
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/i18n-sheets-sync-01.png" alt="Extension Interface" />
        </Container>
    </Layout>
)

export default Work 