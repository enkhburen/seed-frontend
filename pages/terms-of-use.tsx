import Terms from 'components/terms'
import PageLayout from 'layout/page-layout'
import Head from 'next/head'

export default function termsComponent() {
	return (
		<PageLayout>
			<Head>
				<title>Үйлчилгээний нөхцөл - Seed.mn</title>
			</Head>
			<Terms />
		</PageLayout>
	)
}
