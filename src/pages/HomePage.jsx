import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, Button, Typography, OutlinedInput, Divider } from '@mui/material'
import { ShieldOutlined, BugReportOutlined, FactCheckOutlined } from '@mui/icons-material';

import { makeStyles, styled } from '@mui/styles'
import clsx from 'clsx'


import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import PreviewImg from '../assets/imgs/preview-sample.png'



import GoogleLogo from '@assets/imgs/social/google.png'
import LinkedInLogo from '@assets/imgs/social/linkedin.png'
import FacebookLogo from '@assets/imgs/social/facebook.png'


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
		<Typography className="sm:text-xl text-lg sm:mb-4 mb-2" variant="h4">{title}</Typography>
		<Typography className="sm:text-base text-sm sm:mb-12 mb-8">{text}</Typography>
	</Paper>
}

function Dashboard(props) {
	const classes = useStyles(props)
	// const userData = useSelector(state => state.user)
	// console.log("data : ", userData)

	return (
		<>
			<Header />
			<SpaceTag h={8} />
			<div className={clsx(classes.section_1, "w-full flex sm:flex-row flex-col sm:text-left text-center sm:px-16 px-10")}>
				<div className="description-container flex-1 
				flex flex-col justify-center items-center">
					<Typography variant="h6" style={{ textTransform: 'uppercase' }}
						className="sm:text-2xl text-xl sm:mb-16 mb-8"
					>Hackerone Bounty</Typography>
					<Typography variant="h1"
						className="sm:text-6xl text-3xl sm:mb-16 mb-8"
					>Bug bounty programs for businesses</Typography>
					<Typography variant="body1"
						className="sm:text-xl text-lg sm:mb-20 mb-10"
					>Tap into the skills of the global hacker community to uncover high vulnerabilities faster.</Typography>
					<Button variant="contained" color="secondary"
						className="w-4/5">Generate Sample</Button>
				</div>
				<div className="preview-image-container flex-1 sm:pl-12 pl-0
				flex items-center">
					<img src={PreviewImg} alt='preview sample' />
				</div>
			</div>
			<SpaceTag h={6} />
			<div className={clsx(classes.section_2, "w-full flex sm:flex-row flex-col justify-evenly sm:px-16 px-10")}>
				<Paper elevation={24} className={clsx(classes.section_2_1, 'sm:w-3/12 w-full flex flex-col shrink-0 border-4 border-dashed')}>
					<div style={{ flexGrow: 1 }} />
					<Button variant="contained" color="inherit"
						className="sm:text-3xl text-2xl"
					>PURCHASE</Button>
				</Paper>
				<Paper elevation={24} className={clsx(classes.section_2_2, 'sm:w-7/12 w-full flex sm:flex-row flex-col sm:p-12 p-6')}>
					<div className={clsx(classes.section_2_2_1, 'sm:w-5/12 w-full')}>
						<Typography variant="h4"
							className="sm:text-3xl text-2xl sm:mb-12 mb-6"
						>Want to know how a bounty program can reduce risk?</Typography>
						<Typography varaint="overline">Tell us about your security testing initiative and one of our expert will contact you.</Typography>
					</div>
					<div className={clsx(classes.section_2_2_2, 'sm:w-7/12 w-full flex flex-col justify-around sm:pl-12 pl-0')}>
						<Typography variant="h5">Request a live demo</Typography>
						<div className='h-4 bg-stone-500'>
							<div className='w-1/3 h-full bg-rose-600'></div>
						</div>
						<div className="sec2-form-control">
							<Typography variant="overline">Why are you looking for a bug bounty program?</Typography>
							<OutlinedInput className="sec2-input-base" />
						</div>
						<div className="sec2-form-control">
							<Typography variant="overline">Are you short on security expertise in your organization?</Typography>
							<OutlinedInput className="sec2-input-base" />
						</div>
						<div className="sec2-form-control">
							<Typography variant="overline">Waht's your business email address?</Typography>
							<OutlinedInput className="sec2-input-base" />
						</div>
						<Button variant="outlined" color="secondary">Next</Button>
					</div>
				</Paper>
			</div>
			<SpaceTag h={6} />
			<div className={clsx(classes.section_3, "flex flex-col items-center sm:p-16 p-12")}>
				<div className="flex flex-col items-center">
					<Typography variant="h2"
						className="sm:text-3xl text-xl sm:mb-4 mb-2"
					>
						It takes a hacker to know a hacker
					</Typography>
					<Typography
						className="sm:text-base text-sm sm:mb-16 mb-12"
					>
						Bug bounty programs allow hackers to help you find application defects that elude conventional security tools and teams
					</Typography>
				</div>
				<div className="flex sm:flex-row flex-col">
					<CardItem classname="p-8" headIcon={ShieldOutlined}
						title="Trained to see what what others miss"
						text="Gain a fresh perspective so you don't miss flaws that malicious actors can expliot." />
					<CardItem classname="p-8" headIcon={BugReportOutlined}
						title="Trained to see what what others miss"
						text="Gain a fresh perspective so you don't miss flaws that malicious actors can expliot." />
					<CardItem classname="p-8" headIcon={FactCheckOutlined}
						title="Trained to see what what others miss"
						text="Gain a fresh perspective so you don't miss flaws that malicious actors can expliot." />
				</div>
			</div>
			<SpaceTag h={2} />
			<Divider className="w-10/12 h-1" />
			<Divider className="w-11/12 h-1" />
			<Divider className='w-full h-1' />
			<div className={clsx(classes.section_4, `w-full flex justify-evenly items-center flex-wrap md:p-8 p-4`)}
			>
				<img className='h-20' src={FacebookLogo} alt='FacebookLogo' />
				<img className='h-20' src={LinkedInLogo} alt='LinkedInLogo' />
				<img className='h-20' src={GoogleLogo} alt='GoogleLogo' />
				<img className='h-20' src={FacebookLogo} alt='FacebookLogo' />
				<img className='h-20' src={LinkedInLogo} alt='LinkedInLogo' />
				<img className='h-20' src={GoogleLogo} alt='GoogleLogo' />
			</div>
			<SpaceTag h={2} />

			<Footer />
		</>
	)
}

export default Dashboard