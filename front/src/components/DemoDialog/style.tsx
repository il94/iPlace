import styled from "styled-components";
import colors from "../../utils/colors";

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0px;
	left: 0px;

	width: 100%;
	height: 100%;

	z-index: 10;

	background-color: rgba(0, 0, 0, 0.6);
`

export const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 450px;
	max-width: 85%;

	padding: 30px;

	border-radius: 15px;

	background-color: ${colors.window};

	color: ${colors.text.alt};
`

export const Title = styled.p`
	margin-bottom: 20px;

	cursor: default;

	font-size: 32px;
	text-align: center;
`

export const Message = styled.p`
	margin-bottom: 15px;

	cursor: default;

	font-size: 17px;
	font-weight: lighter;
	text-align: center;
`

export const Highlight = styled.span`
	font-weight: bold;
`
