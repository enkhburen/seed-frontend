import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import BlogItem from './components/BlogItem'

import LatestNewsImage1 from 'public/assets/latest-news/widget-01.jpg'
import LatestNewsImage2 from 'public/assets/latest-news/widget-02.jpg'
import LatestNewsImage3 from 'public/assets/latest-news/widget-03.jpg'

export default function BlogLatest() {
	return (
		<Box sx={{ backgroundColor: 'white', p: 2 }}>
			<Typography variant="h6">Сүүлийн үеийн мэдээ</Typography>
			<Divider sx={{ my: 3 }} />
			<Grid container rowSpacing={2}>
				<Grid item xs={12}>
					<BlogItem
						title="“Football for school” хөтөлбөрийг 170 сургуульд хэрэгжүүлнэ"
						image={LatestNewsImage1}
						createdDate="2022 оны 3 сарын 14"
					/>
				</Grid>
				<Grid item xs={12}>
					<BlogItem
						title="Lana Del Rey-ийн дуунд хайртай хүн бүрт зориулав"
						image={LatestNewsImage2}
						createdDate="2022 оны 3 сарын 18"
					/>
				</Grid>
				<Grid item xs={12}>
					<BlogItem
						title="Өмнөд Солонгосын ээлжит цуврал Netflix-ийг тэргүүллээ"
						image={LatestNewsImage3}
						createdDate="2022 оны 3 сарын 13"
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
