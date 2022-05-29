import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import { Container } from '@mui/material'
import Campaignlocation from 'components/page/upload-project/campaign/location'

export default function location() {
	return (
		<PageLayout>
			<Head>
				<title>Байршил сонгох - Seed.mn</title>
			</Head>
			<Container maxWidth={false} sx={{ my: 10 }}>
				<Campaignlocation />
			</Container>
		</PageLayout>
	)
}
