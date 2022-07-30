import { Box, Button, Typography } from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const commonStyles = {
	p: 3,
	textAlign: 'left',
	mt: 0,
	mb: 2,
	border: 1
}

export default function projectDetails() {
	return (
		<Box
			sx={{
				...commonStyles,
				borderColor: '#127f06'
			}}
		>
			<Box sx={{ my: 1, fontSize: '16px' }}>
				<Typography
					variant="h5"
					sx={{
						color: '#127F06',
						display: 'inline-block',
						fontWeight: 'medium'
					}}
				>
					80,000₮
				</Typography>{' '}
				ба түүнээс дээш бол
			</Box>
			<Typography
				variant="h4"
				sx={{ fontWeight: 'bold', fontSize: '20px', pb: 2, pr: 5 }}
			>
				Биет цомог
			</Typography>
			<Typography>CD</Typography>
			<Typography sx={{ fontWeight: 'bold', fontSize: '16px', mt: 2 }}>
				2022 оны 5 сарын 2
			</Typography>
			<Typography
				variant="caption"
				sx={{ display: 'block', mb: 2, fontSize: '14px', color: '#888' }}
			>
				Танд хүргэгдэх хугацаа
			</Typography>

			<Typography>
				<AccountCircleIcon
					sx={{
						color: '#127F06',
						fontSize: '14px',
						mr: 1
					}}
				/>
				10 дэмжигчид
			</Typography>

			<Typography>
				<EmojiEventsIcon
					sx={{
						color: '#127F06',
						fontSize: '14px',
						mr: 1
					}}
				/>
				8/15 үлдсэн
			</Typography>
			<Button
				sx={{
					backgroundColor: '#2e7d32',
					my: 3,
					fontSize: '12px',
					textTransform: 'none'
				}}
				variant="contained"
			>
				Энэ урамшууллыг сонгох
				<ArrowRightAltIcon
					sx={{
						fontSize: '22px'
					}}
				/>
			</Button>
		</Box>
	)
}
