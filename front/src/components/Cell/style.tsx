import styled from "styled-components";

export const Style = styled.div.attrs<{ $backgroundColor: string }>((props) => ({
    style: {
        backgroundColor: props.$backgroundColor,
    }
}))`

	position: relative;
	z-index: ${({ $backgroundColor }) => $backgroundColor === "white" ? 0 : 1 };

    width: 2.5%;
    height: 2.5%;

	transition: transform 0.1s linear;

	&:hover {
		z-index: 2;

		cursor: pointer;
	}

	&:focus {
		z-index: 3;
		
		outline-color: black;
	}

	&:hover,
	&:focus {
		transform: ${({ $backgroundColor }) => $backgroundColor !== "white" && "scale(1.5)" };
	}

`