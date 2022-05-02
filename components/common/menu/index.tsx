import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import MenuButton from './components/MenuButton'

import SeedLogoBlack from 'public/assets/logo/seed_logo_black.svg'

const menus = [
	{
		title: 'Нүүр',
		url: '/'
	},
	{
		title: 'Төслүүд',
		url: '/projects'
	},
	{
		title: 'Блог',
		url: '/blogs'
	},
	{
		title: 'Бидний тухай',
		url: '/about-us'
	},
	{
		title: 'Холбогдох',
		url: '/contact-us'
	}
]

export default function Menu() {
	const router = useRouter()

	return (
		<AppBar
			position="fixed"
			color="default"
			sx={{
				display: {
					xs: 'none',
					md: 'block',
					background: '#fff',
					boxShadow: 'none'
				},
				zIndex: 1
			}}
		>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={3}>
						<Typography variant="h6" noWrap component="div">
							<Link href={menus[0].url}>
								<a>
									<Image
										width="160"
										src={SeedLogoBlack}
										alt="Seed Logo Black"
									/>
								</a>
							</Link>
						</Typography>
					</Grid>

					<Grid item>
						<Box>
							{menus.map((item, index) => (
								<Link key={index} href={item.url}>
									<a>
										<MenuButton
											className={router.pathname === item.url ? 'active' : ''}
										>
											{item.title}
										</MenuButton>
									</a>
								</Link>
							))}
						</Box>
					</Grid>

					<Grid item xs={3} sx={{ textAlign: 'right' }}>
						<Button
							sx={{ dislay: 'block' }}
							href="/auth/login"
							color="primary"
							variant="outlined"
						>
							Нэвтрэх
						</Button>
					</Grid>
				</Grid>
			</Container>
		</AppBar>

		// {/* MOBILE -- START */}

		// {/* <Typography
		//     variant='h6'
		//     noWrap
		//     component='div'
		//     sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
		//   >
		//     Mobile
		//   </Typography>

		//   <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
		//     <IconButton
		//       size='large'
		//       aria-label='account of current user'
		//       aria-controls='menu-appbar'
		//       aria-haspopup='true'
		//       onClick={handleOpenNavMenu}
		//       color='inherit'
		//     >
		//       <MenuIcon />
		//     </IconButton>
		//     <Menu
		//       id='menu-appbar'
		//       anchorEl={anchorElNav}
		//       anchorOrigin={{
		//         vertical: 'bottom',
		//         horizontal: 'left',
		//       }}
		//       keepMounted
		//       transformOrigin={{
		//         vertical: 'top',
		//         horizontal: 'left',
		//       }}
		//       open={Boolean(anchorElNav)}
		//       onClose={handleCloseNavMenu}
		//       sx={{
		//         display: { xs: 'block', md: 'none' },
		//       }}
		//     >
		//       {pages.map((page) => (
		//         <MenuItem key={page} onClick={handleCloseNavMenu}>
		//           <Typography textAlign='center'>{page}</Typography>
		//         </MenuItem>
		//       ))}
		//     </Menu>
		//   </Box> */}

		// 		{/* MOBILE -- END */}

		// 		{/* <Box sx={{ flexGrow: 0 }}>
		//     <Tooltip title='Open settings'>
		//       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
		//         <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
		//       </IconButton>
		//     </Tooltip>
		//     <Menu
		//       sx={{ mt: '45px' }}
		//       id='menu-appbar'
		//       anchorEl={anchorElUser}
		//       anchorOrigin={{
		//         vertical: 'top',
		//         horizontal: 'right',
		//       }}
		//       keepMounted
		//       transformOrigin={{
		//         vertical: 'top',
		//         horizontal: 'right',
		//       }}
		//       open={Boolean(anchorElUser)}
		//       onClose={handleCloseUserMenu}
		//     >
		//       {settings.map((setting) => (
		//         <MenuItem key={setting} onClick={handleCloseUserMenu}>
		//           <Typography textAlign='center'>{setting}</Typography>
		//         </MenuItem>
		//       ))}
		//     </Menu> */}
		// {/* </Box> */}
	)
}
