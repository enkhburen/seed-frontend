import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

function mainDetailsInHtml(content: string) {
	return { __html: content }
}

interface IProps {
	title?: string
	image?: string
	content?: string
	author?: string
	createdDate?: string
	relatedTags?: string
}

export default function blogDetails(props: IProps) {
	const { title, image, content, author, createdDate, relatedTags } = props

	var tags = relatedTags
		? relatedTags.split(',')
		: ['Холбоотой таг байхгүй байна']

	return (
		<div id="blog-details">
			<Box>
				<Card sx={{ boxShadow: '0' }}>
					<CardMedia
						component="img"
						image={image ? image : ''}
						alt={title ? title : ''}
						sx={{ minHeight: '443px' }}
					/>
					<CardContent sx={{ p: 5 }}>
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
						<div
							dangerouslySetInnerHTML={mainDetailsInHtml(
								content ? content : '<p>Мэдээлэл олдсонгүй.</p>'
							)}
						/>

						<Typography variant="h6" sx={{ fontWeight: 'bold', mt: 5 }}>
							Холбоотой тагууд:
							{tags.map((tags: any) => {
								return (
									<Button
										variant="contained"
										size="small"
										sx={{
											mx: 1,
											backgroundColor: '#edefef',
											color: '#000',
											boxShadow: 0,
											'&:hover': {
												color: '#fff',
												backgroundColor: 'primary.main'
											}
										}}
									>
										{tags}
									</Button>
								)
							})}
						</Typography>

						<Typography variant="h6" sx={{ mt: 1 }}>
							Хуваалцах:
							<IconButton
								href="#"
								target="_blank"
								area-label="facebook"
								sx={{
									ml: 1,
									color: '#696969',
									'&:hover': {
										color: 'primary.main'
									}
								}}
							>
								<FacebookIcon />
							</IconButton>
							<IconButton
								href="#"
								target="_blank"
								area-label="twitter"
								sx={{
									color: '#696969',
									'&:hover': {
										color: 'primary.main'
									}
								}}
							>
								<TwitterIcon />
							</IconButton>
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</div>
	)
}
