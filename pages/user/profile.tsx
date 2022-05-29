import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ProfileInfo from 'components/page/profile/user-infos'
import ProfileDatas from 'components/page/profile/profile-datas'
import PageLayout from 'layout/page-layout'

export default function Profile() {
	return (
		<PageLayout>
			<Container sx={{ py: 7 }}>
				<Box sx={{ height: '100vh' }}>
					<ProfileInfo />
					<ProfileDatas />
				</Box>
			</Container>
		</PageLayout>
	)
}
