import styled from 'styled-components'

export const Button = styled.button`
	background: #565a69;
	color: #ffffff;
	padding: 6px 10px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.shadow};
`

export const Close = styled.button`
	margin-left: auto;
	color: ${({ theme }) => theme.text1};
`
