import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

export default function ProfileInfo() {
	const name = 'Билгүүтэй'
	const imgSrc = '/assets/author-thumbs/image1.jpg'
	const text1 = '12 төсөл дэмжсэн'
	const text2 = 'Sample text'

	return (
		<Box sx={{ textAlign: 'center' }}>
			{/* Show user datas */}
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				columnSpacing={2}
			>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Avatar
						alt="userName"
						src={imgSrc}
						sx={{ height: '128px', width: '128px', margin: '0 auto' }}
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', my: 3 }}>
						{name}
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography variant="body2">
						{text1} · {text2}
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ width: '300px', margin: '0 auto', my: 2 }}>
				<Skeleton animation="wave" />
				<Skeleton animation="wave" />
				<Skeleton animation="wave" />
			</Box>
		</Box>
	)
}
