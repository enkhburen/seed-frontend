import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Card from '@mui/material/Card'
import ProjectDetailsSecond from 'public/assets/project/project-details-2.jpg'
import { ListItem } from '@mui/material'

export default function projectDetails() {
	return (
		<div id="project-details">
			<Box>
				<Typography variant="h4" sx={{ fontWeight: 'bold', pt: 4, mb: '20px' }}>
					2021 оны шилдэг адал явдалт УСК
				</Typography>
				<Typography
					variant="caption"
					color=" #696969"
					sx={{ fontSize: '14px', mb: 5 }}
				>
					Ари аялалаар явж байхдаа эртний ид шидийн бөгжтэй таарч, 13-р зууны
					Иран руу аваачжээ. Бөгж нь ирэхэд алга болж түүнийг гацаасан байна.
					Түүнийг Монгол жанжин Хадай жанжны охин Асури гүнжтэй андуурчээ.
				</Typography>

				<Image src={ProjectDetailsSecond} alt="ProjectDetails2" />

				<Typography
					sx={{ fontWeight: 'bold', fontSize: '24px', mb: '20px', mt: 5 }}
				>
					Яагаад манай төслийг дэмжих хэрэгтэй вэ?
				</Typography>

				<Typography
					variant="caption"
					sx={{ fontSize: '14px' }}
					color=" #696969"
				>
					“Ганц бие бүсгүйчүүд 4 2020 оны 8-р сарын 19. 01:23 Жүжигчин, продюсер
					Г.Ундармаагийн “Ю фильм” студийн бүтээл “Ганц бие бүсгүйчүүд 4: Эхлэл
					бас төгсгөл” киноны нээлт ирэх аравдугаар сард болох гэж байна. Уг нь
					өнгөрсөн хоёрдугаар сард нээх гэж байсан ч цар тахлын улмаас
					хойшлуулсан юм. Тэрбээр өмнө буюу 2013, 2015, 2018 онд дээрх киноныхоо
					цувралыг үзэгчдэд хүргэсэн билээ. Тус киноны агуулга нь 20, 30, 40
					насны босго давсан ганц бие гурван бүсгүйн үерхэл, харилцаа, нөхөрт
					гарах чин хүсэл болон нийгмийн хандлагыг хөгжилтэй, адал явдалтайгаар
					харуулжээ. Гэхдээ үйл явдал нь XIII зууны үеийг харуулна гэдгээрээ
					онцлог аж. Киноны зохиолыг яруу найрагч, сэтгүүлч Р.Эмүжин бичиж,
					Л.Бат-Амгалан найруулсан бол гол дүрүүдийг өмнөх гурван ангид тоглосон
					Г.Ундармаа, А.Туяа, О.Дөлгөөн нар бүтээжээ
				</Typography>

				<ListItem sx={{ display: 'list-item', pt: 3 }}>
					Дуртай уран бүтээлчтэйгээ хоолонд орох
				</ListItem>
				<ListItem sx={{ display: 'list-item' }}>
					Монголыг шилдэг найруулагчийн бүтээл
				</ListItem>
				<ListItem sx={{ display: 'list-item' }}>
					Оскарын наадамд өрсөлдөх боломжтой
				</ListItem>
				<ListItem sx={{ display: 'list-item' }}>Уян хатан нөхцөл</ListItem>

				<Typography
					variant="caption"
					sx={{ fontSize: '14px', pt: 2 }}
					color=" #696969"
				>
					Ажил амьдралдаа амжилттай ч ганц бие 40 нас хүрсэн Ари, ажлын шугамаар
					Иран улсын нэгэн хот руу явна. Тэндээс санамсаргүй эртний бөгж
					худалдан авснаар үл мэдэгдэх далдын хүч үйлчлэн 13-р зуунд Түмэлүн
					хатны Персийг дайлаар мордож байгаа цаг үед очиж адал явдал эхэлнэ.
					Гэтэл Ари бөгжөө алдан буцах аргагүй болно. Бөгжнийхөө хойноос явсаар
					урьд насныхаа бүтээгүй хайр сэтгэлтэй учирна.
				</Typography>
			</Box>
		</div>
	)
}
