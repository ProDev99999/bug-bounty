import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, IconButton, Collapse, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx'
import { validateIsEmpty } from '../../utils'

import InputComponent from '@components/InputComponent'


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
	// const { className, placeholder, value, onChange, isValid, ...others } = props
	// const classes = useStyles(props)

	// return (
	// 	<div className={clsx('w-full flex flex-col items-center justify-center', className)}>
	// 		<div className={clsx(classes.inputBase, 'w-full',
	// 			validateIsEmpty(value) ? '' : isValid ? 'success' : 'error')
	// 		}>
	// 			<InputComponent placeholder={placeholder} value={value} onChange={onChange} />
	// 		</div>
	// 		<Collapse in={!isValid} component='ul' className={clsx(classes.errorText, 'error')}>
	// 			{props.errorText !== '' &&
	// 				<div className='sm:my-4 my-2'><Typography>{props.errorText}</Typography></div>
	// 			}
	// 		</Collapse>
	// 	</div>
	// )
}

EmailInput.defaultProps = {
	isValid: true
}

EmailInput.propTypes = {
	isValid: PropTypes.bool
}

export default EmailInput