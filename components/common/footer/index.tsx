import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ContactWidgetCard from './components/ContactWidgetCard'

import SeedLogoWhite from 'public/assets/logo/seed_logo_white.svg'

export default function Footer() {
	return (
		<Box
			component="footer"
			color="default"
			sx={{ backgroundColor: '#001d23', py: 3, px: 2, mt: 'auto' }}
		>
			<Container maxWidth="lg">
				<Grid container alignItems="top">
					<Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
						<Image
							src={SeedLogoWhite}
							alt="Seed Logo Black"
							width="170px"
							height="30px"
						/>
						<br />
						<Typography variant="caption" color="white" fontSize={12}>
							© {new Date().getFullYear()}{' '}
							<Link href="#">
								<a style={{ color: '#127F06' }}>Seed.mn.</a>
							</Link>{' '}
							Бүх эрх хуулиар хамгаалагдсан
						</Typography>
					</Grid>

					<Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
						<Link href="/terms-of-service">
							<a>
								<Typography
									variant="caption"
									display="block"
									color="white"
									sx={{ mb: 2 }}
								>
									Үйлчилгээний нөхцөл
								</Typography>
							</a>
						</Link>
						<Link href="/contact-us">
							<a>
								<Typography variant="caption" display="block" color="white">
									Бидэнтэй холбогдох
								</Typography>
							</a>
						</Link>
					</Grid>

					<Grid item xs={12} md={6} sm={12}>
						<Grid container>
							<ContactWidgetCard title="Утасны дугаар" icon="phone">
								+976-8888-8888
							</ContactWidgetCard>
							<ContactWidgetCard title="И-мэйл хаяг" icon="email">
								support@seed.mn
							</ContactWidgetCard>
							<ContactWidgetCard title="Байршил" icon="location">
								Улаанбаатар, Хан-уул дүүрэг, 11-р хороо
							</ContactWidgetCard>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
