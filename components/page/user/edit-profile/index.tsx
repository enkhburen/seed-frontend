import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import * as React from 'react'
import UserInfo from '../components/GeneralInfos'
import { Divider, Typography, Box } from '@mui/material'
import Securities from '../components/Securities'
import Notifications from '../components/Notifications'
import ShippingAddress from '../components/ShippingAddress'
import PaymentMethod from '../components/PaymentMethod'

export default function User() {
	const [value, setValue] = React.useState<string>('1')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
	return (
		<>
			<Container sx={{ my: 2 }}>
				<Typography sx={{ my: 5, fontWeight: 'medium' }} variant="h4">
					Хэрэглэгчийн Тохиргоо
				</Typography>
			</Container>
			<Container>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Ерөнхий" value="1" />
							<Tab label="Нууцлал" value="2" />
							<Tab label="Төлбөр" value="3" />
							<Tab label="Хаяг" value="4" />
							<Tab label="Мэдэгдлүүд" value="5" />
						</TabList>
					</Box>
					<TabPanel value="1">
						<UserInfo />
					</TabPanel>
					<TabPanel value="2">
						<Securities />
					</TabPanel>
					<TabPanel value="3">
						<PaymentMethod />
					</TabPanel>
					<TabPanel value="4">
						<ShippingAddress />
					</TabPanel>
					<TabPanel value="5">
						<Notifications />
					</TabPanel>
				</TabContext>
			</Container>
		</>
	)
}
