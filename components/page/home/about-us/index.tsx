import Image from 'next/image'

import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import DoneIcon from '@mui/icons-material/Done'

import AboutGallery2 from 'public/assets/about/about-gallery-2.jpg'
import MunkhtulgaImage from 'public/assets/author-thumbs/01.jpg'

export default function AboutUs() {
	return (
		<Container component="main">
			<Grid
				container
				spacing={7}
				justifyContent="space-between"
				alignItems="center"
				sx={{ py: 10 }}
				item
			>
				<Grid item xs={12} md={6} sm={12}>
					<Image
						src={AboutGallery2}
						alt="about-us"
						className="rounded-corner"
					/>
				</Grid>
				<Grid item xs={12} md={6} sm={12}>
					<Typography variant="h4" gutterBottom>
						<b>Бид хэн бэ?</b>
					</Typography>
					<Typography variant="body1">
						Хүмүүсийн оюун санааг тэтгэж урам зориг бэлэглэх уран бүтээлийн
						санаануудыг бодит зүйл болгохын тулд технологи ашиглан олон нийтэд
						хүртээмжтэйгээр шийдэх нь бидний шийдэл юм.
					</Typography>
					<Card
						sx={{
							mt: 5,
							p: 3,
							boxShadow: '0px 5px 15px rgba(0,0,0,0.4)',
							bgcolor: '#127F06',
							color: 'white'
						}}
					>
						<CardContent>
							<Typography variant="body1" sx={{ mb: 4 }}>
								<DoneIcon sx={{ fontSize: '14px' }} /> "Авьяас бол төрөлхийн ур
								чадвар. Хэн ч авьяастай төрдөггүй ч зарим нь үүнийгээ хөгжүүлэх
								чин хүсэл эрмэлзэлтэй байдаг. Харин тэднийг зөв хүмүүжүүлэх л
								хэрэгтэй"
							</Typography>
							<Grid container alignItems="center">
								<Grid item>
									<Avatar alt="Munkhtulga CEO" src={MunkhtulgaImage.src} />
								</Grid>
								<Grid item sx={{ ml: 3 }}>
									<Typography variant="h6">О.Мөнхтулга</Typography>
									<Typography variant="body1">
										Гүйцэтгэх захирал & Үүсгэн байгуулагч
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}
