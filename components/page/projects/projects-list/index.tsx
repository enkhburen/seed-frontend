import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import ProjectItem from 'components/common/project-item'

import Projects from 'api/project'

export default function ProjectList() {
	const [totalProjects, changeTotalProjects] = React.useState<number>(9)

	return (
		<Container>
			<Grid container sx={{ py: 8 }} rowSpacing={4}>
				{Projects.map((Projects, index) => {
					if (index + 1 <= totalProjects) {
						return (
							<Grid item xs={4} key={index + 1}>
								<ProjectItem
									title={Projects.title}
									category={Projects.category}
									author={Projects.author}
									authorImg={Projects.authorImg}
									authorLink={'/users/' + Projects.userId}
									image={Projects.image}
									alt={Projects.title}
									href={'/projects/' + Projects._id}
									date={Projects.date}
									needed={Projects.needed}
									collected={Projects.collected}
								/>
							</Grid>
						)
					}
				})}

				{(() => {
					if (totalProjects < 18) {
						return (
							<Grid item xs={12} textAlign="center">
								<Button
									variant="contained"
									onClick={() => {
										changeTotalProjects(totalProjects + 3)
									}}
								>
									<ExpandCircleDownIcon sx={{ mr: 1 }} />
									Нэмж үзэх
								</Button>
							</Grid>
						)
					} else {
						return (
							<Grid item xs={12} textAlign="center">
								<Button
									variant="contained"
									onClick={() => {
										changeTotalProjects(totalProjects - 9)
									}}
								>
									<ExpandLessIcon sx={{ mr: 1 }} />
									Бага үзэх
								</Button>
							</Grid>
						)
					}
				})()}
			</Grid>
		</Container>
	)
}
