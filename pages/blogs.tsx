import Head from 'next/head'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import PageLayout from 'layout/page-layout'

import BlogList from 'components/page/blogs/blog-list'
import NewsLatest from 'components/page/blogs/news-latest'
import PopularTags from 'components/page/blogs/popular-tags'
import CTA from 'components/page/blogs/cta'

export default function Blogs() {
	return (
		<PageLayout>
			<Head>
				<title>Блог - Seed.mn</title>
			</Head>
			<Box sx={{ backgroundColor: '#edf9f3', py: 8 }}>
				<Container>
					<Grid container spacing={4}>
						<Grid item xs={8}>
							<BlogList />
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
