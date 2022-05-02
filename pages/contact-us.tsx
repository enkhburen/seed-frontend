import Head from 'next/head'

import Container from '@mui/material/Container'

import PageLayout from 'layout/page-layout'

import Form from 'components/page/contact-us/form'

export default function ContactUsPage() {
	return (
		<PageLayout>
			<Head>
				<title>Бидэнтэй холбогдох - Seed.mn</title>
			</Head>
			<Container>
				<Form />
			</Container>
		</PageLayout>
	)
}
