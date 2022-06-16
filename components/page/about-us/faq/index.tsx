import * as React from 'react'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'

import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { Box, Grid, Container } from '@mui/material'

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
				<TabList
					onChange={handleChange}
					aria-label="lab API tabs example"
					centered
				>
					<Tab className="tab1" label="Төсөл хэрэгжүүлэгчид" value="1" />
					<Tab className="tab2" label="Төсөл дэмжигчид" value="2" />
					<Tab className="tab3" label="Ерөнхий" value="3" />
				</TabList>
				<Box sx={{ borderTop: 1, borderColor: 'divider' }}>
					<TabPanel value="1">
						<ProjectImplementer />
					</TabPanel>
					<TabPanel value="2">
						<ProjectSupporter />
					</TabPanel>
					<TabPanel value="3">
						<General />
					</TabPanel>
				</Box>
			</TabContext>
		</Container>
	)
}
