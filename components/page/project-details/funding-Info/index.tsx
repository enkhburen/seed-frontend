import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

interface IProps {
	category?: string
	title?: string
	authorImg?: string
	author?: string
	endDate?: string
	collected?: number
	totalBacker?: number
	needed?: number
	buttonOne?: string
	buttonTwo?: string
	buttonThree?: string
	buttonFour?: string
	buttonFive?: string
}

var SI_SYMBOL = ['', ' мянга', ' сая', ' тэрбум', ' их наяд']

function abbreviateNumber(number: number) {
	var tier = (Math.log10(Math.abs(number)) / 3) | 0

	if (tier == 0) return number

	var suffix = SI_SYMBOL[tier]
	var scale = Math.pow(10, tier * 3)

	var scaled = number / scale

	return scaled.toFixed(1) + suffix
}

export default function projectDetails(props: IProps) {
	const {
		category,
		title,
		authorImg,
		author,
		endDate,
		collected,
		totalBacker,
		needed,
		buttonOne,
		buttonTwo,
		buttonThree,
		buttonFour,
		buttonFive
	} = props

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0
	})

	let percent = Math.round(
		((collected ? collected : 0) / (needed ? needed : 100)) * 100
	)
	if (percent > 100) percent = 100

	var today = new Date()
	var estimated = new Date(`${endDate ? endDate : '2022-6-1'}`)

	let timeInMilisec: number = estimated.getTime() - today.getTime()
	let dayLeft: number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24))

	const todayFormatted =
		new Date(endDate ? endDate : '2022-6-1').getFullYear() +
		' оны ' +
		(new Date(endDate ? endDate : '2022-6-1').getMonth() + 1) +
		' сарын ' +
		new Date(endDate ? endDate : '2022-6-1').getDate()

	return (
		<Grid item xs={12}>
			<Typography
				className="text"
				variant="h4"
				sx={{
					my: 3,
					fontWeight: 'bold',
					display: 'block',
					lineHeight: '2.6rem'
				}}
			>
				<Chip
					label={category ? category : 'Бусад'}
					color="primary"
					sx={{
						fontSize: '0.8rem',
						mr: 2
					}}
				/>
				{title}
			</Typography>
			<Box justifyItems="center" alignItems="center" sx={{ display: 'flex' }}>
				<Image
					alt={author ? author : 'Зочин'}
					src={authorImg ? '/' + authorImg : '/assets/author-thumbs/01.jpg'}
					width="48"
					height="48"
				/>

				<Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
					{author ? author : 'Зочин'}
				</Typography>
				<Typography variant="h6" sx={{ color: '#333', ml: 3 }}>
					<CalendarMonthIcon
						sx={{ fontSize: '16px', mr: 1, color: '#127F06' }}
					/>
					{todayFormatted ? todayFormatted : 'N/A'}
				</Typography>
			</Box>

			<Grid container sx={{ mt: 2 }} spacing={2}>
				<Grid item xs={4}>
					<Card
						sx={{
							mt: 0,
							mx: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold', fontSize: '22px' }}
							>
								{abbreviateNumber(collected ? collected : 0)} ₮
							</Typography>
							<Typography variant="body2">Дэмжлэг авсан</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card
						sx={{
							mt: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold', fontSize: '22px' }}
							>
								{totalBacker ? totalBacker : 'N/A'}
							</Typography>
							<Typography variant="body2">Дэмжигчид</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={4}>
					<Card
						sx={{
							mx: 0,
							p: 0,
							textAlign: 'center',
							backgroundColor: 'rgba(0,255,128,0.1)',
							boxShadow: 'none'
						}}
					>
						<CardContent>
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold', fontSize: '22px' }}
							>
								{dayLeft ? dayLeft : 'N/A'}
							</Typography>
							<Typography variant="body2">Өдөр үлдсэн</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Typography
				variant="h4"
				sx={{ fontWeight: 'bold', fontSize: '18px', pt: 5 }}
			>
				{formatter.format(needed ? needed : 0)} ₮ дэмжлэг авахаас
			</Typography>
			<Grid textAlign={'right'}>
				<Typography>{percent}%</Typography>
			</Grid>
			<LinearProgress variant="determinate" value={60} sx={{ mb: 5 }} />

			<Grid container sx={{ my: 5 }} justifyContent="space-between">
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					{buttonOne}
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					{buttonTwo}
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					{buttonThree}
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					{buttonFour}
				</Button>
				<Button
					variant="outlined"
					sx={{ fontWeight: 'bold', borderRadius: 0, width: '17%' }}
				>
					{buttonFive}
				</Button>
			</Grid>
			<Button
				href="#"
				variant="contained"
				sx={{
					fontWeight: 'bold',
					borderRadius: '0px',
					width: '35%'
				}}
			>
				Төсөл дэмжих
				<ArrowRightAltIcon
					sx={{
						fontSize: '22px'
					}}
				/>
			</Button>
		</Grid>
	)
}
