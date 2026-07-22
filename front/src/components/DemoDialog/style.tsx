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

// Reprend le cadre de la grille, pour que la fenetre se pose comme une tuile
export const Style = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 560px;
	aspect-ratio: 1;

	border: solid 16px ${colors.borders.grid};
	border-radius: 4px;
	box-shadow: 0px 4px 15px black;

	background-color: ${colors.window};

	color: ${colors.text.alt};
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: calc(100% - 60px);
	height: calc(100% - 60px);
`

export const Title = styled.p`
	margin-bottom: 25px;

	cursor: default;

	font-size: 32px;
	text-align: center;
`

export const Message = styled.p`
	margin-bottom: 20px;

	cursor: default;

	font-size: 17px;
	font-weight: lighter;
	text-align: center;
`

export const Highlight = styled.span`
	font-weight: bold;
`
