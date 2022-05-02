import * as React from 'react'

import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import ProjectImplementer from './components/ProjectImplementer'
import ProjectSupporter from './components/ProjectSupporters'
import General from './components/General'

export default function FAQ() {
	const [value, setValue] = React.useState<string>('1')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<Container sx={{ my: 8 }}>
			<TabContext value={value}>
				<TabList onChange={handleChange} aria-label="lab API tabs example" centered>
					<Tab label="Төсөл хэрэгжүүлэгчид" value='1' />
					<Tab label="Төсөл дэмжигчид" value='2' />
					<Tab label="Ерөнхий" value='3' />
				</TabList>
				<TabPanel value='1'>
					<ProjectImplementer />
				</TabPanel>
				<TabPanel value='2'>
					<ProjectSupporter />
				</TabPanel>
				<TabPanel value='3'>
					<General />
				</TabPanel>
			</TabContext>
		</Container>
	)
}
