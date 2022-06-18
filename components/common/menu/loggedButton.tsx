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
import WorkIcon from '@mui/icons-material/Work'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

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
		url: '/campaign/category',
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
								placement === 'bottom-start' ? 'left top' : 'left top'
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
													onClick={handleClose}
													sx={{ fontSize: '14px', width: '200px' }}
												>
													{item.icon}
													<Typography variant="body2">{item.text}</Typography>
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
	)
}
