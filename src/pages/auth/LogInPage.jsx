import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Divider, Checkbox, FormControlLabel, InputAdornment, IconButton, OutlinedInput } from '@mui/material';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import SimplePage from '@components/SimplePageWithLogo'
import InputComponent from '@components/InputComponent'
import PwdInput from '@components/PwdInput'

import { setInfo } from '@store/actions'

const useStyles = makeStyles(theme => ({
	root: {
	},
	divider: {
		fontSize: '1.25rem'
	},
	loginLink: {
		color: theme.palette.warning.main
	}
}))

function LogInPage(props) {
	const dispatch = useDispatch()
	const classes = useStyles(props)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [pwd, setPwd] = useState('')

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleLogIn = (e) => {
		if (!validateEmail(email)) {
			console.log(`Your E-mail ${email} is not valid!`)
			return
		}

		console.log(`${email}  and ${pwd}    valid!`)
		// alert(`${email}  and ${pwd}    valid!`)

		dispatch(setInfo({ email_addr: email }))
		navigate('/dashboard')
	}

	return (
		<SimplePage className={"w-2/5"}>
			<Typography className='my-10 font-extrabold sm:text-4xl text-2xl'>Welcome</Typography>
			<InputComponent className='mb-5' placeholder="Email"
				value={email} onChange={e => setEmail(e.target.value)}
			/>
			<PwdInput className='mb-3' placeholder="Password"
				value={pwd} onChange={e => setPwd(e.target.value)}
			/>
			<Typography component={Link} to={{ pathname: "/verify_email" }}
				className="mb-6 text-gray-400 hover:text-black">forgot password?</Typography>


			<Button className={clsx('h-12 rounded-full text-xl px-10 py-2 mb-7')}
				variant='contained' color="primary"
				onClick={handleLogIn}
			>Log In</Button>

			<Divider className="w-3/4" />
			<Typography className='my-5 font-bold'>
				Don't have an account?
				<Link className={clsx(classes.loginLink)} to="/signup">   Sign Up   </Link>
			</Typography>
		</SimplePage>
	)
}

export default LogInPage