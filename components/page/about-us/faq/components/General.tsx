import * as React from 'react'
import AccordionItem from './AccordionItem'

export default function General() {
	const [expanded, handleExpanded] = React.useState<any>('')

	function toggleExpanded(value: string) {
		expanded === value ? handleExpanded('') : handleExpanded(value)
	}

	return (
		<React.Fragment>
			<AccordionItem
				expanded={expanded === 'panel1'}
				onChange={() => toggleExpanded('panel1')}
				title='Seed.mn ямар шимтгэлтэй вэ?'
				ariaControls="panel1d-content"
				id='panel1d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
			<AccordionItem
				expanded={expanded === 'panel2'}
				onChange={() => toggleExpanded('panel2')}
				title='Ямар төслүүдэд санхүүжилт авах боломжтой вэ?'
				ariaControls="panel2d-content"
				id='panel2d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
		</React.Fragment>
	)
}