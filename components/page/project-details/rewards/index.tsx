import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'

import ProjectRewards from 'public/assets/project/project-rewards.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function projectDetails() {
	return (
		<Grid
			item
			xs={12}
			sx={{ p: 3, backgroundColor: '#edf9f3', textAlign: 'left', mt: 2 }}
		>
			<Typography
				variant="h4"
				sx={{ fontWeight: 'bold', fontSize: '24px', pb: 2, pr: 5 }}
			>
				Шагнал, урамшуулал
			</Typography>
			<Image src={ProjectRewards} alt="RewardsZurag" />
			<Box sx={{ fontWeight: 'bold', my: 1, fontSize: '18px' }}>
				<Typography
					variant="h5"
					sx={{ color: '#127F06', display: 'inline-block', fontWeight: 'bold' }}
				>
					200k₮
				</Typography>{' '}
				ба түүнээс дээш
			</Box>
			<Typography variant="caption">
				Хэрэв та энэ төслийг дэмжсэн тохиолдолд танд урамшуулал бэлэглэх болно
			</Typography>
			<Typography sx={{ fontWeight: 'bold', fontSize: '18px', mt: 2 }}>
				2022 оны 5 сарын 2
			</Typography>
			<Typography
				variant="caption"
				sx={{ display: 'block', mb: 2, fontSize: '15px', color: '#888' }}
			>
				Хүргэгдэх хугацаа
			</Typography>

			<Typography sx={{ display: 'inline-block' }}>
				<AccountCircleIcon
					sx={{
						display: 'inline-block',
						color: '#127F06',
						fontSize: '16px',
						mr: 1
					}}
				/>
				10 дэмжигчид
			</Typography>

			<Typography sx={{ display: 'inline-block' }}>
				<EmojiEventsIcon
					sx={{
						display: 'inline-block',
						color: '#127F06',
						fontSize: '16px',
						mr: 1
					}}
				/>
				42 урамшуулал үлдсэн
			</Typography>
			<Button
				sx={{
					backgroundColor: '#127f06',
					px: 2,
					my: 3,
					fontSize: '12px',
					fontWeight: 'bold',
					textTransform: 'none'
				}}
				variant="contained"
			>
				Урамшууллаа сонгох
				<ArrowRightAltIcon
					sx={{
						fontSize: '22px'
					}}
				/>
			</Button>
		</Grid>
	)
}
