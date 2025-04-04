import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-witdh, initial-scale=1" />
				<title>Phạm Gia Lập - Homepage</title>
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				<NoSsr>
					<VoxelDog />
				</NoSsr>
				{children}
			</Container>
		</Box>
	)
}

export default Main
