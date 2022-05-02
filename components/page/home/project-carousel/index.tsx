import Slider from 'react-slick'
import Box from '@mui/material/Box'

import Projects from 'api/project'

import ProjectGrid1 from 'public/assets/project/project-grid-01.jpg'
import ProjectGrid2 from 'public/assets/project/project-grid-02.jpg'
import ProjectGrid3 from 'public/assets/project/project-grid-03.jpg'
import ProjectGrid4 from 'public/assets/project/project-grid-04.jpg'
import ProjectGrid5 from 'public/assets/project/project-grid-05.jpg'
import ProjectGrid6 from 'public/assets/project/project-grid-06.jpg'

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
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 600,
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
						return (
							<ProjectItem
								key={index + 1}
								title={Projects.title}
								category={Projects.category}
								author={Projects.author}
								authorImg={Projects.authorImg}
								authorLink={'/users/' + Projects.userId}
								image={Projects.image}
								alt={Projects.title}
								href={'/projects/' + Projects._id}
								date={Projects.date}
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
