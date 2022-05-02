import Image, { StaticImageData } from 'next/image'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface BlogItemProps {
	title: string
	image: StaticImageData
	createdDate: string
}

export default function BlogItem(props: BlogItemProps) {
	const { title, image, createdDate } = props

	return (
		<Grid container alignItems="center" justifyContent="center">
			<Grid item xs={4}>
				<Image src={image} alt="Latest News ID" width="80%" height="80%" />
			</Grid>
			<Grid item xs={8}>
				<Typography variant="body2" gutterBottom>
					<b>{title}</b>
				</Typography>
				<Grid container alignItems="center">
					<Grid item>
						<CalendarMonthIcon
							color="primary"
							sx={{ fontSize: '14px', mr: 1 }}
						/>
					</Grid>
					<Grid item>
						<Typography variant="caption" color="text.secondary">
							{createdDate}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
