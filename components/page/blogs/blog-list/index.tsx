import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import BlogItem from './components/BlogItem'

import BlogImage1 from 'public/assets/blog/01.jpg'
import BlogImage2 from 'public/assets/blog/02.jpg'
import BlogImage3 from 'public/assets/blog/03.jpg'
import BlogImage4 from 'public/assets/blog/04.jpg'

export default function BlogList() {
	return (
		<Box>
			<Grid container rowSpacing={4}>
				<Grid item xs={12}>
					<BlogItem
						image={BlogImage1}
						title="Харвардын Их сургуульд Монгол хэл, соёлын хичээлийг зааж эхэлжээ"
						author="Шижир"
						createdDate="2022 оны 4 сарын 18"
					/>
				</Grid>
				<Grid item xs={12}>
					<BlogItem
						image={BlogImage2}
						title='Төрийн соёрхолт, "B Production"-ийн үүсгэн байгуулагч, дуучин, хөгжмийн зохиолч, продюсер Д.Болд'
						author="Билгүүтэй"
						createdDate="2022 оны 2 сарын 12"
					/>
				</Grid>
				<Grid item xs={12}>
					<BlogItem
						image={BlogImage3}
						title="“Гэгээн муза-16” наадмын шагнал гардуулах ёслол зургаадугаар сарын 11-нд болно"
						author="Билгүүтэй"
						createdDate="2022 оны 4 сарын 5"
					/>
				</Grid>
				<Grid item xs={12}>
					<BlogItem
						image={BlogImage4}
						title="“Алтан бийр-16” үзэсгэлэн нээлтээ хийж байна"
						author="Шижир"
						createdDate="2022 оны 3 сарын 10"
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
