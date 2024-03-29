import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Projects from 'api/project'

import PageLayout from 'layout/page-layout'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import ProjectMainImage from 'components/page/project-details/main-image'
import FundingInfo from 'components/page/project-details/funding-Info'
import MainDetails from 'components/page/project-details/main-details'
import Rewards from 'components/page/project-details/rewards'

export default function ProjectID() {
	const router = useRouter()
	const [projectData, setProjectData] = React.useState<any>([])
	const { projectid } = router.query

	React.useEffect(() => {
		Projects.map((item: any) => {
			if (item._id === projectid) setProjectData(item)
		})
	}, [projectid])

	const [height, setHeight] = React.useState<string>('1191px')

	React.useEffect(() => {
		let element = document.getElementById('project-details')

		let elementHeight = element ? element.clientHeight : 0

		if (elementHeight <= 700) {
			elementHeight = 700
		} else {
			elementHeight = elementHeight
		}
		setHeight(elementHeight.toString() + 'px')
	}, [])

	return (
		<PageLayout>
			<Head>
				<title>{projectData.title} | Seed.mn</title>
			</Head>
			<Container sx={{ mt: 3, mb: 10 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6} sm={12}>
							<ProjectMainImage image={projectData.projectImg} />
						</Grid>
						<Grid item xs={12} md={6}>
							<FundingInfo
								category={projectData.category}
								title={projectData.title}
								authorImg={projectData.authorImg}
								author={projectData.author}
								endDate={projectData.endDate}
								collected={projectData.collected}
								totalBacker={projectData.totalBackers}
								needed={projectData.needed}
								buttonOne={projectData.buttonOne}
								buttonTwo={projectData.buttonTwo}
								buttonThree={projectData.buttonThree}
								buttonFour={projectData.buttonFour}
								buttonFive={projectData.buttonFive}
							/>
						</Grid>

						<Grid item xs={12} md={8}>
							<MainDetails content={projectData.content} />
						</Grid>
						<Grid item xs={12} md={4} sm={12}>
							<Box
								sx={{
									maxHeight: height,
									overflowY: 'scroll',
									overflowStyle: 'none'
								}}
							>
								<Rewards />
								<Rewards />
								<Rewards />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</PageLayout>
	)
}
