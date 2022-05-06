import React from 'react'
import Head from 'next/head'
import PageLayout from 'layout/page-layout'
import { Box, Container, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import BlogDetails from 'components/page/blog-details'
import NewsLatest from 'components/page/blogs/news-latest'
import PopularTags from 'components/page/blogs/popular-tags'
import CTA from 'components/page/blogs/cta'

import Blogs from 'api/blogs'

export default function blogDetails() {
	const router = useRouter()
	const [blogData, setBlogData] = React.useState<any>([])
	const { blogid } = router.query

	React.useEffect(() => {
		Blogs.map((item: any) => {
			if (item._id === blogid) setBlogData(item)
		})
	}, [blogid])

	return (
		<PageLayout>
			<Head>
				<title> {blogData.title} - Seed.mn</title>
			</Head>
			<Box sx={{ backgroundColor: '#edf9f3', py: 8 }}>
				<Container>
					<Grid container spacing={4}>
						<Grid item xs={8}>
							<BlogDetails
								title={blogData.title}
								image={blogData.img}
								content={blogData.content}
								author={blogData.author}
								createdDate={blogData.createdDate}
								relatedTags={blogData.relatedTags}
							/>
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
