import React from 'react'

function Flex({
	justifyContent = "center",
	alignItems = "center",
	justifyItems,
	flex,
	column,
	row,
	style,
	...props
}) {
	return (
		<div {...props} style={{
			display: 'flex',
			flexDirection: column ? 'column' : (row ? 'row' : 'column'),
			justifyContent,
			alignItems,
			justifyItems,
			flex,
			...style
		}} />
	)
}
export default Flex;
