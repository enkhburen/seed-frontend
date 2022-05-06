import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import BlogItem from './components/BlogItem'

import Blogs from 'api/blogs'

export default function BlogList() {
	return (
		<Box>
			<Grid container rowSpacing={4}>
				{Blogs.map((blogs: any) => {
					return (
						<Grid item xs={12}>
							<BlogItem
								href={blogs.url}
								image={blogs.thumbImg}
								title={blogs.title}
								author={blogs.author}
								createdDate={blogs.createdDate}
							/>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}
