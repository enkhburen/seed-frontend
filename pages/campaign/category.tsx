import React, { useState } from 'react'
import { Container } from '@mui/material'
import Head from 'next/head'
import CategoryPage from 'components/page/upload-project/campaign/category'
import PageLayout from 'layout/page-layout'

export default function category() {
	const [loggedIn, setLoggedin] = useState(true)
	const [page, setPage] = useState(0)
	const [category, setCategory] = useState('')

	const [formStep, setFormStep] = useState(0)

	if (page === 0) {
		return (
			<PageLayout>
				<Head>
					<title>Төсөл хэрэгжүүлэх - Seed.mn</title>
				</Head>
				<CategoryPage currentPage={page} cate={category} />
			</PageLayout>
		)
	}
}
