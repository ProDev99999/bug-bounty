import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, Button, Typography, OutlinedInput, Divider } from '@mui/material'
import { ShieldOutlined, BugReportOutlined, FactCheckOutlined } from '@mui/icons-material';

import { makeStyles, styled } from '@mui/styles'
import clsx from 'clsx'


import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';


const useStyles = makeStyles(theme => ({
	root: {},
	section_1: {
		'& .description-container': {
			// flex: '1 0',
			'& .MuiButton-root': {
				fontSize: '1.5rem'
			}
		},
		'& .preview-image-container': {
			// flex: '1 0',
		}
	},
	section_2: {
		// height: '400px',
		'& .sec2-form-control': {
			'& .sec2-input-base': {
				width: '100%',
				background: '#fff',
				'& input': {
					padding: '0.5rem',
				}
			}
		}
	},
	section_2_1: {
		borderColor: theme.palette.common.black,
		'& > .MuiButton-root': {
			// background: theme.palette.common.black,
		},
	},
	section_2_2: {
		background: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	section_2_2_1: {
	},
	section_2_2_2: {
		'& > *:not(:last-child)': {
			marginBottom: '1rem',
		},
	},
	section_3: {},
	section_4: {
		'& > *:not(:last-child)': {
			// [theme.breakpoints.down('md')]: {
				margin: '1rem 2rem'
			// }
		}
	},

}))

const SpaceTag = (props) => <div style={{ height: `${props.h ? props.h : 0}rem`, width: `${props.w ? props.w : 0}rem` }} />

const CardItem = props => {
	const { className, headIcon = null, title = '', text = '', ...others } = props
	return <Paper className={clsx('p-8', className)} elevation={20}>
		{headIcon && React.createElement(headIcon, {
			className: "sm:text-6xl text-4xl sm:mb-4 mb-2",
		})}

		<Typography className="sm:text-xl text-lg sm:mb-4 mb-2"
			variant="h4"
		>
			{title}</Typography>
		<Typography className="sm:text-base text-sm sm:mb-12 mb-8">
			{text}</Typography>
	</Paper>
}

function Dashboard(props) {
	const classes = useStyles(props)
	const userData = useSelector(state => state.user)
	console.log("data : ", userData)

	return (
		<>
			<Header />
			{/* <div>
				<h1>{userData.full_name}</h1>
				<h1>{userData.email_addr}</h1>

				<h1>Dashboard</h1>
			</div> */}
			

			<Footer />
		</>
	)
}

export default Dashboard