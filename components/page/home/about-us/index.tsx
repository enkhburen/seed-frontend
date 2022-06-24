import Image from 'next/image'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import CheckIcon from '@mui/icons-material/Check'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import AboutGallery2 from 'public/assets/about/home-about.jpg'

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
					<Image src={AboutGallery2} alt="about-us" />
				</Grid>
				<Grid item xs={12} md={6} sm={12}>
					<Typography variant="h4" gutterBottom>
						<b>Seed.mn гэж яадаг сайт вэ?</b>
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: '15px', textAlign: 'justify', mt: 2 }}
					>
						Монголд авьяаслаг, чадварлаг, уран бүтээлч сэтгэлгээтэй залуучууд их
						байдаг ч тэд өөрсдийн уран бүтээлийг санхүүгийн асуудлаас болж
						төсөөллийнхөө дагуу бүтээж чаддаггүй. Залуучуудад бие биенийхээ уран
						бүтээлийг дэмжих боломж олгож, Монгол контентонд хөрөнгө оруулалтын
						болон контент эрх эзэмшлийн шинэ зах зээлийг блокчейн технологи дээр
						суурилсан нээлттэй, шударга хэлбэрээр бүтээхийн тулд Seed.mn зорьж
						ажиллаж байна.
					</Typography>
					<Card
						sx={{
							mt: 3,
							p: 3,
							boxShadow: '0px 5px 15px rgba(0,0,0,0.4)',
							bgcolor: '#127F06',
							color: 'white'
						}}
					>
						<Typography
							variant="body2"
							sx={{ display: 'inline-block', fontSize: '15px' }}
						>
							{/* <ArrowForwardIosIcon sx={{ fontSize: '12px' }} /> Сайтын туршилтын */}
							Бета хувилбарт гишүүн болж бүртгүүлэх урилга авах хүсэлтэй бол{' '}
							<Link href="#">
								<a>
									<Typography
										variant="body2"
										sx={{
											display: 'inline-block',
											fontWeight: 'bold',
											fontSize: '15px',
											textDecoration: 'underline'
										}}
									>
										энд дарна уу.
									</Typography>
								</a>
							</Link>
						</Typography>
						<Typography sx={{ mt: 1, fontSize: '15px' }}>
							Бета хувилбарт бүртгүүлэхийн давуу тал:
						</Typography>
						<List>
							<ListItem sx={{ py: 0 }}>
								<ListItemText>
									<Typography sx={{ fontSize: '14px' }} variant="body2">
										<CheckIcon sx={{ fontSize: '12px', mr: 1 }} />
										Бета гишүүдэд л олгогдох NFT badge.
									</Typography>
								</ListItemText>
							</ListItem>

							<ListItem sx={{ py: 0 }}>
								<ListItemText>
									<Typography sx={{ fontSize: '14px' }} variant="body2">
										<CheckIcon sx={{ fontSize: '12px', mr: 1 }} />
										Сайтын хамгийн анхны 3 төсөлд хөрөнгө оруулалт хийх эрх.
									</Typography>
								</ListItemText>
							</ListItem>

							<ListItem sx={{ py: 0 }}>
								<ListItemText>
									<Typography sx={{ fontSize: '14px' }} variant="body2">
										<CheckIcon sx={{ fontSize: '12px', mr: 1 }} />
										Анхны хөрөнгө оруулагч нарт олгогдох “merch”.
									</Typography>
								</ListItemText>
							</ListItem>
						</List>

						{/* <Grid container alignItems="center">
								<Grid item>
									<Avatar alt="Munkhtulga CEO" src={MunkhtulgaImage.src} />
								</Grid>
								<Grid item sx={{ ml: 3 }}>
									<Typography variant="h6">О.Мөнхтулга</Typography>
									<Typography variant="body1">
										Гүйцэтгэх захирал & Үүсгэн байгуулагч
									</Typography>
								</Grid>
							</Grid> */}
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}
