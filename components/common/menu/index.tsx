import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import IconButton from '@mui/material/IconButton'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

import MenuButton from './components/MenuButton'

import SeedLogoBlack from 'public/assets/logo/seed_logo_black.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

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
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef<HTMLButtonElement>(null)

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return
		}

		setOpen(false)
	}

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus()
		}

		prevOpen.current = open
	}, [open])

	const cookies = new Cookies()

	cookies.set(
		'token',
		'eyJraWQiOiJ5UEd5cUpoMVg5WklnNnpkY25PZWN5eFBhbFArQ0prb2RJaTBMYmkraGFFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiNDI4NmY4YS1lMzliLTRmMTgtODQ1Yy0yNzdlZGI4M2MzNzAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfQ1ZJMFlKa2piIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiMWszZGhlbTViaDBhNzNkbmZsbXRvcG1raTYiLCJldmVudF9pZCI6IjU5NTk3YTA3LTQwYmQtNDg1Yy1iNWQ1LWNiNmRlMmNmODZkZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2NTM2MzQ1NzEsImV4cCI6MTY1MzYzODE3MSwiaWF0IjoxNjUzNjM0NTcxLCJqdGkiOiI5ZTY1YzY2Ni01OTgwLTQ4ZDEtYWQ0NC1iYmJkNTI3YmYyZTUiLCJ1c2VybmFtZSI6ImI0Mjg2ZjhhLWUzOWItNGYxOC04NDVjLTI3N2VkYjgzYzM3MCJ9.JEoaFbIRtj3LHnO1OALKYrQi7y0RGldmv6DWwB5vCXytwmXHRT4_b9vQbeuXU79SPY1MeVnC8DUnNktg2TChP2-t7FHJRVP2H78cNoeKXx-nh3oXky58hkUwHgQju6NIrStZ_0_X6S7yTeADWWLNLlgEgybhvrEKKNAg0Q0S1_sZWqi4xUBXRBXGUsDNkrLYDaquUqraYMJRwI2-_sxanrsv4f5GCW9zGJIfIWdfoGi4L7QUGtGJGTZa_T_i2EDPV_g6BEQo-mZy0Pe4vmUdu41nfzXPXqOdcFDQ9SviyFYX6i47pT_mMgnLLHuzHhzceRXwFrr9xZwPIxgn-yrbVw',
		{ path: '/' }
	)

	const [isLogged, setIsLogged] = useState(
		cookies.get('token') !== '' ? true : false
	)

	const handleClick = (value: any) => {
		setIsLogged(value)
	}
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
				zIndex: 10
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
											className={
												router.pathname.includes(item.url) && index !== 0
													? 'active'
													: router.pathname === item.url
													? 'active'
													: ''
											}
										>
											{item.title}
										</MenuButton>
									</a>
								</Link>
							))}
						</Box>
					</Grid>

					<Grid item xs={3} sx={{ textAlign: 'right' }}>
						<Box sx={{ flexGrow: 0 }}>
							<IconButton
								ref={anchorRef}
								id="composition-button"
								aria-controls={open ? 'composition-menu' : undefined}
								aria-expanded={open ? 'true' : undefined}
								aria-haspopup="true"
								onClick={handleToggle}
							>
								<Avatar
									alt="Sample profile"
									src="/assets/author-thumbs/14.jpg"
								/>
								<ArrowDropDownIcon />
							</IconButton>
							<Popper
								open={open}
								anchorEl={anchorRef.current}
								role={undefined}
								placement="bottom-start"
								transition
								disablePortal
							>
								{({ TransitionProps, placement }) => (
									<Grow
										{...TransitionProps}
										style={{
											transformOrigin:
												placement === 'bottom-start'
													? 'left top'
													: 'left bottom'
										}}
									>
										<Paper>
											<ClickAwayListener onClickAway={handleClose}>
												<MenuList
													autoFocusItem={open}
													id="composition-menu"
													aria-labelledby="composition-button"
													onKeyDown={handleListKeyDown}
												>
													<MenuItem
														onClick={handleClose}
														sx={{ fontSize: '14px', width: '150px' }}
													>
														Профайл
													</MenuItem>
													<MenuItem
														onClick={handleClose}
														sx={{ fontSize: '14px', width: '150px' }}
													>
														Тохиргоо
													</MenuItem>
													<MenuItem
														onClick={handleClose}
														sx={{ fontSize: '14px', width: '150px' }}
													>
														Гарах
													</MenuItem>
												</MenuList>
											</ClickAwayListener>
										</Paper>
									</Grow>
								)}
							</Popper>
						</Box>
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
