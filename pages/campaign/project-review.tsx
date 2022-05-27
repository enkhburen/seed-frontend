import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import ProjectOverview from 'components/page/upload-project/project-review'
import { Container } from '@mui/material'

export default function juststartedproject() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл засварлах - Seed.mn</title>
			</Head>
			<Container>
				<ProjectOverview />
			</Container>
		</PageLayout>
	)
}
