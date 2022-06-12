import * as React from 'react'
import { useState } from 'react'

import Link from 'next/link'

import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import IconButton from '@mui/material/IconButton'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'

import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function LoggedButton() {
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
	return (
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
					src="/assets/author-thumbs/post-author.jpg"
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
							transformOrigin:
								placement === 'bottom-start' ? 'left top' : 'left bottom'
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
									sx={{ px: 2, border: '1px solid #DEDEDE' }}
								>
									<Link href="/user/profile">
										<a>
											<MenuItem
												onClick={handleClose}
												sx={{
													fontSize: '14px',
													width: '150px',
													'&:hover': {
														// backgroundColor: 'inherit'
													}
												}}
											>
												<PersonIcon sx={{ color: '#555', mr: 1 }} />
												<Typography variant="body2">Профайл</Typography>
											</MenuItem>
										</a>
									</Link>
									<Link href="/user/profile/edit">
										<a>
											<MenuItem
												onClick={handleClose}
												sx={{ fontSize: '14px', width: '150px' }}
											>
												<SettingsIcon sx={{ color: '#555', mr: 1 }} />
												<Typography variant="body2">Тохиргоо</Typography>
											</MenuItem>
										</a>
									</Link>
									<Link href="#">
										<a>
											<MenuItem
												onClick={handleClose}
												sx={{ fontSize: '14px', width: '150px' }}
											>
												<LogoutIcon sx={{ color: '#555', mr: 1 }} />
												<Typography variant="body2">Гарах</Typography>
											</MenuItem>
										</a>
									</Link>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	)
}
