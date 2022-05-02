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
		<Container>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				sx={{ py: 8 }}
			>
				<Grid item xs={6}>
					<Image src={AboutGallery2} alt="about-us" />
				</Grid>
				<Grid item xs={5}>
					<Typography variant="h4" gutterBottom>
						<b>Бидний тухай</b>
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
								<DoneIcon sx={{ fontSize: '14px' }} /> (Энэ дээр Мөнхтулга ахын
								quote нтр байвал зүгээр юм уу гэж бодсон. Kickstarter дээр бол
								founder нь нэг театр үзэх гэсэн чинь санхүүжилт аваагүйгээс
								болоод үзэж чадаагүй үүнийг шийдэхийг хүссэн гэсэн утгатай quote
								байсан.)
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
