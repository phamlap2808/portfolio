import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox cursor="pointer">
			<Box 
				position="relative" 
				width="100%" 
				paddingBottom="56.25%"
				overflow="hidden"
			>
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeholder="blur"
					loading="lazy"
					fill
					style={{
						objectFit: 'cover',
						position: 'absolute',
						top: 0,
						left: 0
					}}
				/>
			</Box>
			<NextLink href={href} target="_blank" passHref legacyBehavior>
				<LinkOverlay>
					<Text mt={2}>{title}</Text>
				</LinkOverlay>
			</NextLink>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
	<Box w="100%" align="center">
		<NextLink href={`/works/${id}`} legacyBehavior passHref>
			<LinkBox cursor="pointer">
				<Box 
					position="relative" 
					width="100%" 
					paddingBottom="56.25%"
					overflow="hidden"
				>
					<Image
						src={thumbnail}
						alt={title}
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'center'
						}}
						className="grid-item-thumbnail"
						placeholder="blur"
					/>
				</Box>
				<LinkOverlay href={`/works/${id}`}>
					<Text mt={2} fontSize={20}>
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const GridItemStyle = () => (
	<Global
		styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }`}
	/>
)
