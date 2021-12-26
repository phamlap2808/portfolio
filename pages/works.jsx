import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbOkxeBlog from '../public/images/works/okxe-blog.png'
import thumbLapaper from '../public/images/works/lapaper.png'
import thumbChuyenThanhLy from '../public/images/works/chuyenthanhly.png'
import thumbMuaMayTinhCu from '../public/images/works/muamaytinhcu.png'
const Works = () => {
	return (
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem
						id="okxe-blog"
						title="OKXE Blog"
						thumbnail={thumbOkxeBlog}
					>
						OKXE official blog page. Here, you can find for yourself
						vehicle-related information and promotions. Join OKXE today!
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="lapaper" title="Lapaper" thumbnail={thumbLapaper}>
						Lapaper is a website which provides services about wedding card
						printing and other types of cards. With Lapaper, customers can find
						many beautiful cards, customers can also create their own designs
						with the consultation of the professional designers.
					</WorkGridItem>
				</Section>
				<Section delay={0.1}>
					<WorkGridItem
						id="chuyenthanhly"
						title="Chuyên thanh lý"
						thumbnail={thumbChuyenThanhLy}
					>
						chuyenthanhly.com is a website which is created for selling and
						buying used or second-hand furniture. Customers can find used
						furniture with good quality and a low price.
					</WorkGridItem>
				</Section>
				<Section delay={0.1}>
					<WorkGridItem
						id="muamaytinhcu"
						title="Mua máy tính cũ"
						thumbnail={thumbMuaMayTinhCu}
					>
						muamaytinhcu.net is a website which is created to sell and buy used
						technology devices. The website also sells new model technology
						devices.
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Works
