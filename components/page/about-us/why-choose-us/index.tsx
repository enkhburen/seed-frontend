import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import PeopleIcon from '@mui/icons-material/People'
import HandshakeIcon from '@mui/icons-material/Handshake'
import MoreTimeIcon from '@mui/icons-material/MoreTime'

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

				<Card
					sx={{
						mt: 4,
						p: 2,
						boxShadow: '0px 0px 0px rgba(255,255,255,0)',
						textAlign: 'center',
						width: '31%',
						display: 'inline-block',
						minHeight: '520px'
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
							Олны хүч оломгүй далай гэж үг байдаг. Олон нийтээс санхүүжилт
							татах нь хөрөнгө ихтэй цөөн тооны хөрөнгө оруулагчдаас санхүүжилт
							авсанаас илүү их хөрөнгийг татан төвлөрүүлж чаддаг бөгөөд seed.mn
							ашиглан олон нийтээс хөрөнгө оруулалт татсанаар 100 гаран
							хуудастай санхүүжилтийн өргөдөл бичих, хөрөнгө оруулагчийн
							шаардлагаар уран бүтээлийнхээ мессежийг эцсийн мөчид яаруу сандруу
							өөрчлөх гэх мэт зүйлстэй нүүр тулгарах шаардлагагүй болох юм.
						</Typography>
					</CardContent>
				</Card>

				<Card
					sx={{
						mt: 4,
						p: 2,
						boxShadow: '0px 0px 0px rgba(255,255,255,0)',
						textAlign: 'center',
						width: '31%',
						display: 'inline-block',
						mx: 4,
						minHeight: '520px'
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
							Төсөл дэмжигчидийн аюулгүй байдал болон дэмжсэн төслөөсөө хүртэх
							үр шим нь бидний хувьд маш чухал тул бид төслийг дэмжихэд
							шаардлагатай мэдээллүүдээ бүрэн авдаг байх боломжийг бүрдүүлэн,
							төсөл дэмжигчидийн аюулгүй байдлыг тогтмол хангасанаар залилан гэх
							мэт зүйлсээс төсөл дэмжигчдийг хамгаалах болно.
						</Typography>
					</CardContent>
				</Card>

				<Card
					sx={{
						mt: 4,
						p: 2,
						boxShadow: '0px 0px 0px rgba(255,255,255,0)',
						textAlign: 'center',
						width: '31%',
						display: 'inline-block',
						minHeight: '520px'
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
			</Container>
		</Box>
	)
}
