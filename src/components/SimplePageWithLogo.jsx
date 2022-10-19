import React from 'react'
import { Box, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles'
import clsx from 'clsx';

import Header from '@components/Layout/Header';
import LogoNetOne from '@assets/imgs/virustotal-logo-with-title.svg'

const useStyles = makeStyles(theme => ({
	root: {
		padding: '5vw',
		textAlign: 'center',
		'& img#logo-img': {
			color: theme.palette.info.main
		}
	}
}))

function SelectRolePage(props) {
	const { className, ...others } = props
	const classes = useStyles(props)

	return (
		<>
			<Header />
			<Box className={clsx(classes.root, 'w-full flex flex-col items-center')}>
				<img id='logo-img' className='md:w-96 w-60 mb-12' src={LogoNetOne} alt="logo" />
				<Paper
					elevation={24}
					className={clsx(
						`flex flex-col 
					items-center justify-center
					sm:rounded-3xl rounded-lg
					p-8`, props.className)
					}>
					{props.children}
				</Paper>
			</Box>
		</>
	)
}

export default SelectRolePage