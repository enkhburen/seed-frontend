import React from 'react'
import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import RewardsEdit from 'components/page/project-edit-basics/project-rewards'

export default function rewards() {
	return (
		<PageLayout>
			<Head>
				<title>Урамшуулал - Seed.mn</title>
			</Head>
			<RewardsEdit />
		</PageLayout>
	)
}
