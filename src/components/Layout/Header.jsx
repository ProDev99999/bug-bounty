import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material';

import { makeStyles, styled } from '@mui/styles'
import clsx from 'clsx'

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
		// background: theme.palette.background.default,
		'& .MuiButton-root': {
			fontWeight: 600,
			fontSize: '1rem',
			fontFamily: 'revert',

			color: theme.palette.secondary.main,
			border: `${theme.palette.common.white} solid 1px`,
			borderRadius: '0.5rem',
			margin: '0 1rem',
		}
	},
}))

export default function Header(props) {
	const classes = useStyles(props)
	const navigate = useNavigate()

	const AuthBtn = props => <Button className="auth-btn px-4 py-2"
		component={Link} to={props.to}
	>
		{props.children}
	</Button>

	return (
		// <ThemeProvider theme={headerTheme}>
		<div className={clsx(classes.root, 'w-full flex justify-between')}>
			<div></div>
			<div>
				<AuthBtn to={'/login'}>Log In</AuthBtn>
				<AuthBtn to={'/signup'}>Sign Up</AuthBtn>
			</div>
		</div>
		// </ThemeProvider>
	)
}
