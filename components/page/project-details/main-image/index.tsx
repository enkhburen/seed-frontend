import Image from 'next/image'

interface IProps {
	image?: string
}

export default function ProjectMainImage(props: IProps) {
	const { image } = props
	return (
		<Image
			src={image ? image : '/assets/project/project-list-01.jpg'}
			alt=""
			width="720"
			height="720"
		/>
	)
}
