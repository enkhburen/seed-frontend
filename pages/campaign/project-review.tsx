import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import ProjectHeader from 'components/page/project-edit-basics/project-review'
import { Container } from '@mui/material'

export default function juststartedproject() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл засварлах - Seed.mn</title>
			</Head>
			<ProjectHeader />
		</PageLayout>
	)
}
