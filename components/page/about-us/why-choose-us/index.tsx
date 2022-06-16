import Grid from '@mui/material/Grid'
import AddIcon from '@mui/icons-material/Add'
import PeopleIcon from '@mui/icons-material/People'
import HandshakeIcon from '@mui/icons-material/Handshake'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import {
	Stack,
	Box,
	Container,
	Card,
	CardContent,
	Typography
} from '@mui/material'

const text1 = [
	'Олны хүч оломгүй далай гэж үг байдаг. Олон нийтээс санхүүжилт татах нь хөрөнгө ихтэй цөөн тооны хөрөнгө оруулагчдаас санхүүжилт авснаас илүү их хөрөнгийг татан төвлөрүүлж чаддаг бөгөөд Seed.mn ашиглан олон нийтээс хөрөнгө оруулалт татсанаар 100 гаруй хуудастай санхүүжилтийн өргөдөл бичих, хөрөнгө оруулагчийн шаардлагаар уран бүтээлийнхээ санааг эцсийн мөчид яаруу сандруу гэх мэт зүйлстэй нүүр тулгарах шаардлагагүй болох юм'
]

const text2 = [
	'Төсөл дэмжигчдийн аюулгүй байдал болон дэмжсэн төслөөсөө хүтэх үр шим нь бидний хувьд маш чухал тул бид төслийг дэмжихэд шаардлагатай мэдээллүүдээ бшрэн авлаг байх боломжиийг бүрдүүлэн, төсөл дэмжигчдийн аюулгүй байдлыг тогтмол хангаснаар залилан гэх мэт зүйлсээс төсөл дэмжигчдийг хамгаалах болно'
]

export default function WhyChooseUs() {
	return (
		<Box sx={{ backgroundColor: '#edf9f3', py: 8 }}>
			<Container sx={{ textAlign: 'center' }}>
				<Typography
					variant="h6"
					color="#127F06"
					fontWeight="bold"
					fontSize="15px"
				>
					<AddIcon sx={{ fontSize: '15px', mr: 1 }} />
					БИДНИЙ ТУХАЙ
				</Typography>
				<Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
					Яагаад биднийг сонгох вэ
				</Typography>

				{/* Card Section */}
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					<Grid item xs={12} md={4}>
						<Card
							sx={{
								mt: 4,
								p: 2,
								boxShadow: '0px 0px 0px rgba(255,255,255,0)',
								textAlign: 'center'
							}}
						>
							<CardContent>
								<PeopleIcon sx={{ fontSize: '70px', color: '#127F06' }} />
								<Typography variant="h5" sx={{ my: 2, fontWeight: 'bold' }}>
									Олон нийтийн хүч
								</Typography>
								<Typography
									variant="caption"
									sx={{ mb: 4, display: 'block', textAlign: 'justify' }}
								>
									{text1}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={8} md={4}>
						<Card
							sx={{
								mt: 4,
								p: 2,
								boxShadow: '0px 0px 0px rgba(255,255,255,0)',
								textAlign: 'center'
							}}
						>
							<CardContent>
								<HandshakeIcon sx={{ fontSize: '70px', color: '#127F06' }} />
								<Typography variant="h5" sx={{ my: 2, fontWeight: 'bold' }}>
									Итгэлцэл
								</Typography>
								<Typography
									variant="caption"
									sx={{ mb: 4, display: 'block', textAlign: 'justify' }}
								>
									{text2}
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12} sm={8} md={4}>
						<Card
							sx={{
								mt: 4,
								p: 2,
								boxShadow: '0px 0px 0px rgba(255,255,255,0)',
								textAlign: 'center'
							}}
						>
							<CardContent>
								<MoreTimeIcon sx={{ fontSize: '70px', color: '#127F06' }} />
								<Typography variant="h5" sx={{ my: 2, fontWeight: 'bold' }}>
									Анхдагч & Хурд
								</Typography>
								<Typography
									variant="caption"
									sx={{ mb: 4, display: 'block', textAlign: 'justify' }}
								>
									Төсөл хэрэгжүүлэгчид санхүүжилтээ аль болох хурдан хүлээн авч
									төслөө хэрэгжүүлэх нөхцлийг бүрдүүлж өгнө.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
