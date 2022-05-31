import React, { useState } from 'react'
import { Container } from '@mui/material'
import Head from 'next/head'
import CategoryPage from 'components/page/upload-project/campaign/category'
import PageLayout from 'layout/page-layout'

export default function category() {
	const [loggedIn, setLoggedin] = useState(true)
	return (
		<PageLayout>
			<Head>
				<title>Төсөл бүтээх - Seed.mn</title>
			</Head>
			<Container>
				{loggedIn == false ? 'no page found' : <CategoryPage />}
			</Container>
		</PageLayout>
	)
}
