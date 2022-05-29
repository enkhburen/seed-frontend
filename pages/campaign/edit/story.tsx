import CampaignStory from 'components/page/project-edit-basics/project-edit-story'
import PageLayout from 'layout/page-layout'
import Head from 'next/head'

export default function Story() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл засварлах - Seed.mn</title>
			</Head>
			<CampaignStory />
		</PageLayout>
	)
}
