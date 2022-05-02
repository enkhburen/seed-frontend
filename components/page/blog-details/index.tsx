import CardMedia from '@mui/material/CardMedia'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { avatar } from './avatar'

export default function blogInfos() {
	return (
		<div>
			{avatar.map((avatar: { _id: number; image: string; title: string }) => {
				return (
					<div key={avatar._id}>
						<p>{avatar.title}</p>
						<CardMedia
							sx={{
								overflow: 'hidden',
								height: '350px',
								backgroundImage: `url('` + avatar.image + `')`,
								backgroundAttachment: 'relative',
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						/>
					</div>
				)
			})}
		</div>
	)
}
