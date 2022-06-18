import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import Overview from 'components/page/thank-you/overview'
import RecommendedProjects from 'components/page/thank-you/recommended'

export default function ThankYou() {
	return (
		<PageLayout>
			<Head>
				<title>Баярлалаа</title>
			</Head>
			<Overview />
			<RecommendedProjects />
		</PageLayout>
	)
}
