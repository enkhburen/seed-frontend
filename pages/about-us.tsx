import Head from 'next/head'

import PageLayout from 'layout/page-layout'

import Landing from 'components/page/about-us/landing'
import WhyChooseUs from 'components/page/about-us/why-choose-us'
import AboutUsFAQ from 'components/page/about-us/faq'

export default function AboutUsPage() {
	return (
		<PageLayout>
			<Head>
				<title>Бидний тухай - Seed.mn</title>
			</Head>
			<Landing />
			<WhyChooseUs />
			<AboutUsFAQ />
		</PageLayout>
	)
}
