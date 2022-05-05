import Box from '@mui/material/Box'

function mainDetailsInHtml(content: string) {
	return { __html: content }
}

interface IProps {
	content?: string
}

export default function projectDetails(props: IProps) {
	const { content } = props

	return (
		<div id="project-details">
			<Box>
				<div
					dangerouslySetInnerHTML={mainDetailsInHtml(
						content ? content : '<p>Мэдээлэл олдсонгүй.</p>'
					)}
				/>
			</Box>
		</div>
	)
}
