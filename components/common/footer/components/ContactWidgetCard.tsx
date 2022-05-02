import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

interface IContactWidgetCard {
	title: string
	children: any
	icon: 'phone' | 'email' | 'location'
}

export default function ContactWidgetCard(props: IContactWidgetCard) {
	const { title, children, icon } = props

	function renderIcon() {
		switch (icon) {
			case 'phone':
				return (
					<LocalPhoneIcon
						sx={{
							backgroundColor: '#127f06',
							color: 'white',
							fontSize: 32,
							p: 1,
							borderRadius: 15
						}}
					/>
				)
			case 'email':
				return (
					<EmailIcon
						sx={{
							backgroundColor: '#127f06',
							color: 'white',
							fontSize: 32,
							p: 1,
							borderRadius: 15
						}}
					/>
				)
			case 'location':
				return (
					<LocationOnIcon
						sx={{
							backgroundColor: '#127f06',
							color: 'white',
							fontSize: 32,
							p: 1,
							borderRadius: 15
						}}
					/>
				)
			default:
				return ''
		}
	}

	return (
		<Grid item xs={4}>
			<Grid container alignItems="top">
				<Grid item xs={3}>
					{renderIcon()}
				</Grid>
				<Grid item xs={9}>
					<Typography
						variant="h6"
						sx={{ display: 'inline-block', color: '#999' }}
					>
						{title}
					</Typography>
					<Typography
						variant="caption"
						sx={{ display: 'inline-block', color: 'white' }}
					>
						{children}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}