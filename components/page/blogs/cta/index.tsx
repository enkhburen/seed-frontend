import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import CTAImage from 'public/assets/cta/cta-widget.jpg'

export default function CTA() {
	return (
		<Box
			sx={{
				overflow: 'hidden',
				position: 'relative',
				width: '100%',
				height: '100%',
				backgroundColor: '#000',
				py: 6,
				px: 4,
				'&::before': {
					content: '""',
					backgroundImage: `url('` + CTAImage?.src + `')`,
					backgroundAttachment: 'relative',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					position: 'absolute',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
					opacity: 0.3
				}
			}}
		>
			<Typography
				variant="h4"
				color="white"
				sx={{ position: 'relative' }}
				gutterBottom
			>
				Өөрийн Гайхалтай Санаандаа Хөрөнгө Оруулалт Авах
			</Typography>
			<Typography
				variant="body1"
				color="white"
				sx={{ position: 'relative' }}
				gutterBottom
			>
				Төсөл хэрэгжүүлэх
			</Typography>
			<Typography
				variant="h6"
				color="white"
				sx={{ position: 'relative' }}
				gutterBottom
			>
				Quis autem vel eum iure repreh ende
			</Typography>
			<Button variant="contained" sx={{ mt: 2 }}>
				Холбогдох
			</Button>
		</Box>
	)
}
