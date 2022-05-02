import PageLayout from 'layout/page-layout'
import { Box, Container, Grid } from '@mui/material'

import BlogDetails from 'components/page/blog-details'
import NewsLatest from 'components/page/blogs/news-latest'
import PopularTags from 'components/page/blogs/popular-tags'
import CTA from 'components/page/blogs/cta'

export default function blogDetails() {
	return (
		<PageLayout>
			<Box sx={{ backGroundColor: '#edf9f3', py: 8 }}>
				<Container>
					<Grid container spacing={4}>
						<Grid item xs={8}>
							<BlogDetails />
						</Grid>
						<Grid item xs={4}>
							<Grid container rowSpacing={4}>
								<Grid item xs={12}>
									<NewsLatest />
								</Grid>
								<Grid item xs={12}>
									<PopularTags />
								</Grid>
								<Grid item xs={12}>
									<CTA />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</PageLayout>
	)
}
