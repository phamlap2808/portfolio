import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="AI Code Review Tool">
        <Container>
            <Title>
                AI Code Review Tool <Badge>2024</Badge>
            </Title>
            <P>
                A sophisticated TypeScript-based tool that leverages OpenAI&apos;s GPT models 
                to provide automated code reviews. The tool integrates with both GitLab 
                and GitHub platforms, offering detailed feedback on code quality, potential 
                bugs, and adherence to best practices through merge request comments.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/phamlap2808/review-code">
                        github.com/phamlap2808/review-code <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>CLI Tool, GitLab, GitHub</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>TypeScript, Node.js, OpenAI API, Git Platform APIs</span>
                </ListItem>
                <ListItem>
                    <Meta>Key Features</Meta>
                    <span>
                        AI-powered Code Analysis, Multi-platform Support (GitLab/GitHub), 
                        Automatic Comment Posting, Configurable Review Parameters
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Architecture</Meta>
                    <span>
                        Service-based Architecture, Type-safe Implementation, 
                        Modular Design, CLI Interface
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Implementation</Meta>
                    <span>
                        OpenAI Integration, Git Platform APIs, TypeScript Strict Mode,
                        Environment-based Configuration
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/code-review_01.png" alt="Code Review Interface" />
            <WorkImage src="/images/works/code-review_02.png" alt="Review Comments Example" />
        </Container>
    </Layout>
)

export default Work 