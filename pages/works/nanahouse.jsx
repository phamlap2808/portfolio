import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Nanahouse E-commerce">
        <Container>
            <Title>
                Nanahouse E-commerce <Badge>2024</Badge>
            </Title>
            <P>
                A comprehensive e-commerce solution with separate customer-facing and 
                admin interfaces. The platform enables customers to browse products, 
                place orders, and track deliveries, while providing administrators 
                with tools for product management, order processing, and staff role management.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://nanahouse-client.vercel.app">
                        https://nanahouse-client.vercel.app <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack - Frontend</Meta>
                    <span>Nuxt 3, Vue 3, TypeScript, SCSS</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack - Backend</Meta>
                    <span>NestJS, TypeScript, PostgreSQL</span>
                </ListItem>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <span>
                        <Link href="https://github.com/phamlap2808/nanahouse-client">
                            Frontend Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                        {' | '}
                        <Link href="https://github.com/phamlap2808/nanahouse-api">
                            Backend Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Customer Features</Meta>
                    <span>
                        Product Browsing, Shopping Cart, Order Management, Delivery Tracking
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Admin Features</Meta>
                    <span>
                        Product Management, Category Management, Order Processing, 
                        Staff Role Management, Order Status Updates
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Architecture</Meta>
                    <span>
                        Full-stack Application, RESTful API, Role-based Access Control,
                        Responsive Design
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/nanahouse_01.png" alt="Customer Interface" />
            <WorkImage src="/images/works/nanahouse_02.png" alt="Admin Dashboard" />
        </Container>
    </Layout>
)

export default Work 