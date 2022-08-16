import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import MenuButton from './components/MenuButton'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import ClickAwayListener from '@mui/material/ClickAwayListener'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu'
import WorkIcon from '@mui/icons-material/Work'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'

import SeedLogoBlack from 'public/assets/logo/seed_logo_black.svg'
import { Button } from '@mui/material'
import axios, { AxiosError } from 'axios'

const host = 'http://localhost:8000'

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

const dropDownMenu = [
	{
		url: '/user/profile',
		icon: <PersonIcon sx={{ color: '#555', mr: 1 }} />,
		text: 'Профайл'
	},
	{
		url: '/user/profile/edit',
		icon: <SettingsIcon sx={{ color: '#555', mr: 1 }} />,
		text: 'Тохиргоо'
	},
	{
		url: '/campaign/create',
		icon: <AddIcon sx={{ color: '#555', mr: 1 }} />,
		text: 'Төсөл үүсгэх'
	},
	{
		url: '#',
		icon: <WorkIcon sx={{ color: '#555', mr: 1 }} />,
		text: 'Миний төслүүд'
	},
	{
		url: '#',
		icon: <LogoutIcon sx={{ color: '#555', mr: 1 }} />,
		text: 'Гарах'
	}
]

export default function NavigationMenu(): any {
	const [isLogged, setIsLogged] = React.useState<boolean>(false)
	const [profile, setProfile] = React.useState()
	const cookies = new Cookies()
	const router = useRouter()

	const token = cookies.get('access_token')

	const logOut = () => {
		cookies.remove('access_token', { path: '/' })
		setIsLogged(false)
		window.location.reload()
	}
	React.useEffect(() => {
		if (cookies.get('access_token') !== undefined) {
			setIsLogged(true)
		}
		const getUserData = async function () {
			try {
				await axios.get(host + '/user/profile/' + token).then((res) => {
					if (res.data.message !== 'jwt expired') {
						res.data.profile_pic !== null
							? setProfile(res.data.profile_pic)
							: ''
					} else {
						setIsLogged(false)
						cookies.remove('access_token')
						logOut()
					}
				})
			} catch (error) {
				axios.isAxiosError(error)
				const err = error as AxiosError
				const errStatus = err.response?.status
				console.log(err)
			}

			// if (err) {
			// } else {
			isLogged ? getUserData() : ''
			// }
		}
	})

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)
	const [open, setOpen] = React.useState<boolean>(false)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

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

	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			// anchorRef.current!.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<AppBar
			position="fixed"
			color="default"
			sx={{
				display: {
					background: '#fff',
					boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)'
				},
				zIndex: 10
			}}
		>
			<Container sx={{ display: { xs: 'none', md: 'block' }, zIndex: 10 }}>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={2} md={2} sx={{ textAlign: 'center' }}>
						<Link href={menus[0].url}>
							<a>
								<Image width="160" src={SeedLogoBlack} alt="Seed Logo Black" />
							</a>
						</Link>
					</Grid>

					<Grid item xs={8}>
						<Box textAlign="center">
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

					<Grid item xs={1} sx={{ textAlign: 'right' }}>
						<Box sx={{ flexGrow: 0 }}>
							{isLogged === true ? (
								<>
									<IconButton
										ref={anchorRef}
										id="composition-button"
										aria-controls={open ? 'composition-menu' : undefined}
										aria-expanded={open ? 'true' : undefined}
										aria-haspopup="true"
										onClick={handleToggle}
										sx={{
											'&:hover': {
												backgroundColor: 'inherit'
											}
										}}
									>
										<Avatar
											alt="Sample profile"
											src={profile}
											sx={{ width: '48px', height: '48px' }}
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
													transformOrigin: 'right top'
												}}
											>
												<Paper>
													<ClickAwayListener onClickAway={handleClose}>
														<MenuList
															autoFocusItem={open}
															id="composition-menu"
															aria-labelledby="composition-button"
															sx={{ px: 1, border: '1px solid #DEDEDE' }}
														>
															{dropDownMenu.map((item, index) => (
																<Link href={item.url} key={index}>
																	<a>
																		<MenuItem
																			onClick={(e) => {
																				handleClose(e)
																				{
																					item.text === 'Гарах' ? logOut() : ''
																				}
																			}}
																			sx={{ fontSize: '14px', width: '200px' }}
																		>
																			{item.icon}
																			<Typography variant="body2">
																				{item.text}
																			</Typography>
																		</MenuItem>
																	</a>
																</Link>
															))}
														</MenuList>
													</ClickAwayListener>
												</Paper>
											</Grow>
										)}
									</Popper>
								</>
							) : (
								<Button variant="outlined" color="primary" href="/auth/login">
									НЭВТРЭХ
								</Button>
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>

			{/* mobile */}
			<Container maxWidth="xl">
				<Box sx={{ display: { xs: 'block', md: 'none' } }}>
					<Toolbar disableGutters>
						<Box
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, py: 0 }}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon sx={{ color: '#000' }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left'
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
							>
								{menus.map((menus) => (
									<Link href={menus.url} key={menus.title}>
										<a>
											<MenuItem onClick={handleCloseNavMenu}>
												<Typography
													textAlign="center"
													sx={{
														fontSize: '14px',
														width: '150px',
														textAlign: 'left'
													}}
												>
													{menus.title}
												</Typography>
											</MenuItem>
										</a>
									</Link>
								))}
							</Menu>
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1 }}
						>
							<Link href={menus[0].url}>
								<a>
									<Image
										width="120"
										src={SeedLogoBlack}
										alt="Seed Logo Black"
									/>
								</a>
							</Link>
						</Typography>
						{isLogged === true ? (
							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Хувийн тохиргоо">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar alt="Sample User" src={profile} />
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: '45px' }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{dropDownMenu.map((setting) => {
										return (
											<Link href={setting.url} key={setting.text}>
												<a>
													<MenuItem
														onClick={handleCloseUserMenu}
														sx={{ fontSize: '14px', width: '200px' }}
													>
														{setting.icon}
														<Typography variant="body2">
															{setting.text}
														</Typography>
													</MenuItem>
												</a>
											</Link>
										)
									})}
								</Menu>
							</Box>
						) : (
							<Button variant="outlined" color="primary" href="/auth/login">
								НЭВТРЭХ
							</Button>
						)}
					</Toolbar>
				</Box>
			</Container>
		</AppBar>
	)
}
