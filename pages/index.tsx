import Head from 'next/head'

import PageLayout from 'layout/page-layout'

import LandingCarousel from 'components/page/home/landing-carousel'
import ProjectCarousel from 'components/page/home/project-carousel'
import AboutUs from 'components/page/home/about-us'

export default function Home() {
	return (
		<PageLayout>
			<Head>
				<title>Нүүр - Seed.mn | Crowdfunding platform</title>
			</Head>

			<LandingCarousel />
			<ProjectCarousel />
			<AboutUs />
		</PageLayout>
	)
}
