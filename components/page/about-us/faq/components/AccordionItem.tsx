import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'

interface AccordionItemProps {
	expanded: boolean,
	onChange: any,
	title: string,
	children: string,
	ariaControls: string,
	id: string
}

export default function AccordionItem(props: AccordionItemProps) {
	return (
		<Accordion
			expanded={props.expanded}
			onChange={props.onChange}
			disableGutters={true}
			sx={{
				boxShadow: '0px 0px 10px rgba(0,0,0,0.15)',
				margin: 2,
				'&:before': {
					backgroundColor: 'transparent'
				}
			}}
		>
			<AccordionSummary
				aria-controls={props.ariaControls}
				id={props.id}
			>
				<Grid container alignItems='center'>
					<Grid item>
						<ArrowForwardIosSharpIcon
							sx={{
								backgroundColor: 'primary.main',
								borderRadius: '100%',
								color: 'white',
								padding: 1,
								fontSize: 32
							}}
						/>
					</Grid>
					<Grid item>
						<Typography variant='h6' textAlign='left' ml={2}>
							<b>{props.title}</b>
						</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='body2' color='text.secondary' textAlign='left'>
					{props.children}
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}