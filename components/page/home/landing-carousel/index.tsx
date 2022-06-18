import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Grid, Box } from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress'
import Slider1 from 'public/assets/slider/slider1.jpg'
import Slider2 from 'public/assets/slider/slider2.jpg'
import Slider3 from 'public/assets/slider/slider3.jpg'

var sliderSettings = {
	arrow: true,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

export default function LandingCarousel() {
	// const [data, setData] = React.useState(null);

	// if (data == null)
	// 	return <CircularProgress />
	// else

	// setTimeout(() => {  console.log("World!"); }, 5000);

	return (
		<Box
			sx={{ display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' } }}
		>
			<Slider {...sliderSettings}>
				<Box>
					<Image src={Slider1} width="1900" height="580" alt="Slider 1"></Image>
				</Box>
				<Box>
					<Image src={Slider2} width="1900" height="580" alt="Slider 2"></Image>
				</Box>
				<Box>
					<Image src={Slider3} width="1900" height="580" alt="Slider 3"></Image>
				</Box>
			</Slider>
		</Box>
	)
}
