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
						Trang blog chính thức của OKXE. Tại đây, bạn có thể tìm được cho
						mình các thông tin liên quan đến xe và khuyến mãi. Tham gia cùng
						OKXE ngay hôm nay!
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="lapaper" title="Lapaper" thumbnail={thumbLapaper}>
						Trang blog chính thức của OKXE. Tại đây, bạn có thể tìm được cho
						mình các thông tin liên quan đến xe và khuyến mãi. Tham gia cùng
						OKXE ngay hôm nay!
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="chuyenthanhly" title="Chuyên thanh lý" thumbnail={thumbChuyenThanhLy}>
						Trang blog chính thức của OKXE. Tại đây, bạn có thể tìm được cho
						mình các thông tin liên quan đến xe và khuyến mãi. Tham gia cùng
						OKXE ngay hôm nay!
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="muamaytinhcu" title="Mua máy tính cũ" thumbnail={thumbMuaMayTinhCu}>
						Trang blog chính thức của OKXE. Tại đây, bạn có thể tìm được cho
						mình các thông tin liên quan đến xe và khuyến mãi. Tham gia cùng
						OKXE ngay hôm nay!
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Works
