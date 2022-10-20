import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, IconButton, Collapse, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx'
import { validateIsEmpty, validateEmail } from '@utils'

import InputComponent from '@components/Inputs/InputComponent'


const useStyles = makeStyles(theme => ({
	inputBase: {
		'&.success': {
			'& :first-child': {
				borderColor: theme.palette.success.main,
				color: theme.palette.success.main,
			},
			'& svg': {
				color: theme.palette.success.main,
			},
		},
		'&.error': {
			'& :first-child': {
				backgroundColor: theme.palette.error.light,
				color: theme.palette.error.dark,
				borderColor: theme.palette.error.main,
			},
			'& svg': {
				color: theme.palette.error.dark,
			},
		},
	},
	errorText: {
		'&.error': { color: theme.palette.error.main }
	}
}))

function EmailInput(props) {
	const { className, placeholder, value, onChange, ...others } = props
	const classes = useStyles(props)
	const [emailValid, setEmailValid] = useState(false)

	const handleEmailChange = e => {
		setEmailValid(validateEmail(e.target.value));

		onChange(e);
	}

	return (
		<div className={clsx('w-full flex flex-col items-center justify-center', className)}>
			<div className={clsx(classes.inputBase, 'w-full',
				validateIsEmpty(value) ? '' : emailValid ? 'success' : 'error')
			}>
				<InputComponent placeholder={placeholder} value={value} onChange={handleEmailChange} />
			</div>
			<Collapse in={!validateIsEmpty(value) && !emailValid} component='ul' className={clsx(classes.errorText, 'error')}>
				<div className='sm:my-4 my-2'><Typography>Your input is not the email format</Typography></div>
			</Collapse>
		</div>
	)
}

EmailInput.defaultProps = {
	isValid: true
}

EmailInput.propTypes = {
	isValid: PropTypes.bool
}

export default EmailInput