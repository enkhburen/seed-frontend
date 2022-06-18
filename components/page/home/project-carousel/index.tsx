import Slider from 'react-slick'
import Box from '@mui/material/Box'

import Projects from 'api/project'

import ProjectItem from 'components/common/project-item'

var sliderSettings = {
	arrows: true,
	dots: false,
	infinite: true,
	autoplay: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1700,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true
			}
		},
		{
			breakpoint: 1350,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}

export default function ProjectCarousel() {
	// Backend data fetch

	return (
		<Box sx={{ backgroundColor: '#001d23', py: 7, px: 5, marginTop: '-7px' }}>
			<Slider {...sliderSettings}>
				{Projects.map((Projects, index) => {
					if (index + 1 <= 10) {
						let dateTemp = new Date(
							Projects.endDate ? Projects.endDate : Date()
						)

						const dateFormatted =
							new Date(dateTemp ? dateTemp : '1999-9-1').getFullYear() +
							' оны ' +
							(new Date(dateTemp ? dateTemp : '1999-9-1').getMonth() + 1) +
							' сарын ' +
							new Date(dateTemp ? dateTemp : '1999-9-1').getDate()

						return (
							<ProjectItem
								key={index + 1}
								title={Projects.title}
								category={Projects.category}
								author={Projects.author}
								authorImg={Projects.authorImg}
								authorLink={'/users/' + Projects.userId}
								image={Projects.thumbImage}
								alt={Projects.title}
								href={'/projects/' + Projects._id}
								endDate={dateFormatted}
								needed={Projects.needed}
								collected={Projects.collected}
							/>
						)
					}
				})}
			</Slider>
		</Box>
	)
}
