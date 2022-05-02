import { StaticImageData } from 'next/image'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface BlogItemProps {
	title: string
	image?: StaticImageData
	author: string
	createdDate: string
}

export default function BlogItem(props: BlogItemProps) {
	const { title, image, author, createdDate } = props

	return (
		<Link href="/blog-details">
			<a>
				<Card sx={{ boxShadow: 0 }}>
					<CardMedia
						sx={{
							overflow: 'hidden',
							height: '350px',
							backgroundImage: `url('` + image?.src + `')`,
							backgroundAttachment: 'relative',
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					/>
					<CardContent sx={{ mx: 3, mt: 3 }}>
						<Button
							variant="text"
							size="small"
							startIcon={<AccountCircleOutlinedIcon />}
							sx={{ pl: 0, mb: 2 }}
						>
							<Typography variant="caption" color="text.secondary">
								<b>{author}</b>
							</Typography>
						</Button>
						<Button
							variant="text"
							size="small"
							startIcon={<CalendarMonthIcon />}
							sx={{ ml: 2, mb: 2 }}
						>
							<Typography variant="caption" color="text.secondary">
								<b>{createdDate}</b>
							</Typography>
						</Button>
						<Typography gutterBottom variant="h6">
							<b>{title}</b>
						</Typography>
					</CardContent>
					<CardActions sx={{ m: 3, mt: 0 }}>
						<Button
							variant="contained"
							color="secondary"
							endIcon={<ArrowForwardIcon />}
							sx={{ boxShadow: 0 }}
						>
							Цааш унших
						</Button>
					</CardActions>
				</Card>
			</a>
		</Link>
	)
}
