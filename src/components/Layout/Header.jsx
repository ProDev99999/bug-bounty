import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material';

import { makeStyles, styled, useTheme } from '@mui/styles'
import clsx from 'clsx'

import Logo from '../../assets/imgs/virustotal-icon.svg'

// const headerTheme = theme => createTheme({
// 	components: {
// 		MuiButton: {
// 			defaultProps: {
// 				// disableElevation: true,
// 				// disableFocusRipple: true,
// 			},
// 			styleOverrides: {
// 				root: {
// 					textTransform: 'none',
// 					color: theme.palette.primary.main,
// 					border: `${theme.palette.common.white} solid 1px`,
// 					borderRadius: '0',
// 				}
// 			}
// 		},
// 	},
// 	typography: {
// 		button: {
// 			fontWeight: 600,
// 			fontSize: '1.25rem',
// 			fontFamily: 'revert',
// 		},
// 	},
// })


const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.common.black,
		color: theme.palette.common.white,
		padding: '2%',
	},
	logoImg: {
		background: theme.palette.common.white,
		padding: '0.5rem',
		borderRadius: '1rem',
		width: '3rem',
	}
}))


const HeaderBtn = props => {
	const { className, style, children, to, ...others } = props
	return React.createElement(Button, {
		className: clsx("px-4 py-2", className),
		component: Link,
		to: to,
		variant: "outlined",
		color: "inherit",
		style: {
			fontFamily: 'revert',
			borderRadius: '0.25rem',
			...style
		},
		...others
	},
		children
	)
}

export default function Header(props) {
	const classes = useStyles(props)
	const navigate = useNavigate()

	// const theme = useTheme()

	return (
		// <ThemeProvider theme={headerTheme}>
		<div className={clsx(classes.root, 'w-full flex justify-between items-center')}>
			<div className='flex items-center'>
				<img className={classes.logoImg} src={Logo} alt="logo" />
				<Typography className="ml-4" variant="h5"> Assessment.com </Typography>
			</div>
			<div>
				<HeaderBtn to={'/contact_us'}
					sx={{ color: 'secondary.main' }}
				// variant="contained"
				// style={{ background: theme.palette.info.main, color: theme.palette.common.white }}
				>Contact Us</HeaderBtn>

				<HeaderBtn to={'/login'} className="ml-6">Log In</HeaderBtn>
				<HeaderBtn to={'/signup'} className="ml-6">Sign Up</HeaderBtn>
			</div>
		</div>
		// </ThemeProvider>
	)
}
