import * as React from 'react'
import AccordionItem from './AccordionItem'

export default function ProjectDevelopers() {
	const [expanded, handleExpanded] = React.useState<any>('')

	function toggleExpanded(value: string) {
		expanded === value ? handleExpanded('') : handleExpanded(value)
	}

	return (
		<React.Fragment>
			<AccordionItem
				expanded={expanded === 'panel1'}
				onChange={() => toggleExpanded('panel1')}
				title='Төсөл хэрэгжүүлэгч төслөө хэрэгжүүлээгүй тохиолдолд Seed.mn юу хийх вэ?'
				ariaControls="panel1d-content"
				id='panel1d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
			<AccordionItem
				expanded={expanded === 'panel2'}
				onChange={() => toggleExpanded('panel2')}
				title='Төсөл хүссэн санхүүжилтээ авсан ч гэсэн хөрөнгө оруулах боломжтой юу?'
				ariaControls="panel2d-content"
				id='panel2d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
			<AccordionItem
				expanded={expanded === 'panel3'}
				onChange={() => toggleExpanded('panel3')}
				title='Санхүүжилтийн дээд доод хязгаар хэд вэ?'
				ariaControls="panel3d-content"
				id='panel3d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
			<AccordionItem
				expanded={expanded === 'panel4'}
				onChange={() => toggleExpanded('panel4')}
				title='Миний хувь хэзээ орж ирэх вэ?'
				ariaControls="panel4d-content"
				id='panel4d-header'
			>
				Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolore seyse mque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</AccordionItem>
		</React.Fragment>
	)
}