import Image from 'next/image'
import Slider from 'react-slick'
import Box from '@mui/material/Box'

import Slider1 from '/public/assets/slider/slider1.jpg'
import Slider2 from '/public/assets/slider/slider2.jpg'
import Slider3 from '/public/assets/slider/slider3.jpg'

var sliderSettings = {
	arrow: true,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

export default function LandingCarousel() {
	return (
		<Box>
			<Slider {...sliderSettings}>
				<div>
					<Image
						src={Slider1.src}
						width="1900"
						height="580"
						alt="Slider 1"
					></Image>
				</div>
				<div>
					<Image
						src={Slider2.src}
						width="1900"
						height="580"
						alt="Slider 2"
					></Image>
				</div>
				<div>
					<Image
						src={Slider3.src}
						width="1900"
						height="580"
						alt="Slider 3"
					></Image>
				</div>
			</Slider>
		</Box>
	)
}
