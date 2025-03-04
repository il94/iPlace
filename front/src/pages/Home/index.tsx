import { useContext, useEffect } from "react"
import { Style, Title } from "./style"
import axios, { AxiosResponse } from "axios"
import Grid from "../../components/Grid"
import Loader from "../../components/Loader"
import { GridContext } from "../../contexts/GridContext"
import { Page } from "../../utils/enums"

function Home() {

	const { grid, setGrid, flipGrid, pageToDisplay } = useContext(GridContext)

	useEffect(() => {
		async function fetchGrid() {
			try {
				const gridResponse: AxiosResponse = await axios.get(`${import.meta.env.VITE_URL_BACK}/grid`)

				setGrid(gridResponse.data)
			}
			catch (error) {
				console.error(error)
			}
		}
		fetchGrid()
	}, [])

	function determineTilteRedirect() {
		if (pageToDisplay !== Page.SIGNIN && pageToDisplay !== Page.SIGNUP)
			flipGrid()
	}

	return (
		<Style>
			<Title onClick={determineTilteRedirect}>iPlace</Title>
			{
				grid ?
				<Grid />
				:
				<Loader />
			}			
		</Style>
	)
}

export default Home