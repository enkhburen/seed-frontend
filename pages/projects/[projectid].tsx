import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Projects from 'api/project'

import PageLayout from 'layout/page-layout'
import { Typography } from '@mui/material'
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

	const [height, setHeight] = React.useState<string>('1191px')

	React.useEffect(() => {
		let element = document.getElementById('project-details')
		setHeight(element ? element.clientHeight.toString() + 'px' : '1193px')
	}, [])

	React.useEffect(() => {
		Projects.map((item: any) => {
			if (item._id === projectid) setProjectData(item)
		})
	}, [projectid])

	return (
		<PageLayout>
			<Head>
				<title>{projectData.title} | Seed.mn</title>
			</Head>
			<Container sx={{ mt: 3, mb: 10 }}>
				<Grid
					container
					spacing={10}
					sx={{ display: 'flex' }}
					alignItems="center"
				>
					<Grid item xs={6}>
						<ProjectMainImage image={projectData.projectImg} />
					</Grid>
					<Grid item xs={6}>
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
				</Grid>
				<Grid container spacing={5}>
					<Grid item xs={8}>
						<MainDetails />
					</Grid>
					<Grid
						item
						xs={4}
						sx={{ maxHeight: height, overflowY: 'scroll', mt: 5 }}
					>
						<Rewards />
						<Rewards />
						<Rewards />
					</Grid>
				</Grid>
			</Container>
		</PageLayout>
	)
}
