import React from 'react'
import Head from 'next/head'
import CategoryPage from 'components/page/upload-project/campaign/create'
import PageLayout from 'layout/page-layout'

export default function category() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл үүсгэх - Seed.mn</title>
			</Head>
			<CategoryPage />
		</PageLayout>
	)
}
