import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

export default function ProfileInfo() {
	const name = 'Билгүүтэй'
	const imgSrc = '/assets/author-thumbs/image1.jpg'
	const text1 = 'Projects Backed'
	const text2 = '12 төсөл дэмжсэн'

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
				<Grid item xs={2}>
					<Paper
						elevation={0}
						square
						sx={{ backgroundColor: '#127F01', py: 1, color: '#fff' }}
					>
						<Typography variant="body2">{text1}</Typography>
					</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper
						elevation={0}
						square
						sx={{ backgroundColor: '#127F01', py: 1, color: '#fff' }}
					>
						<Typography variant="body2">{text2}</Typography>
					</Paper>
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
