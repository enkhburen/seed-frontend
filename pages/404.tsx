import Link from 'next/link'
import PageLayout from 'layout/page-layout'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Custom404() {
	return (
		<PageLayout>
			<Box
				sx={{
					minHeight: '80vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Link href="/">
					<a>
						<Typography
							variant="h5"
							sx={{
								textAlign: 'center',
								display: 'block',
								width: '100%',
								textDecoration: ' underline'
							}}
						>
							Хуудас олдсонгүй - Нүүр хуудас луу буцах
						</Typography>
					</a>
				</Link>
			</Box>
		</PageLayout>
	)
}
