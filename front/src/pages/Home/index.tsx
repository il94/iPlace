import { useContext, useEffect } from "react"
import { Style, Title } from "./style"
import axios, { AxiosResponse } from "axios"
import Grid from "../../components/Grid"
import Loader from "../../components/Loader"
import { GridContext } from "../../contexts/GridContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Page } from "../../utils/enums"
import { isDemoUser } from "../../utils/demo"
import DemoBadge from "../../components/DemoBadge"
import DemoDialog from "../../components/DemoDialog"

function Home() {

	const { grid, setGrid, flipGrid, pageToDisplay } = useContext(GridContext)
	const { userDatas } = useContext(AuthContext)

	useEffect(() => {
		async function fetchGrid() {
			try {
				const gridResponse: AxiosResponse = await axios.get(`${"https://api.iplace.ilandols.com"}/grid`)

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
			{
				(pageToDisplay === Page.SIGNIN || pageToDisplay === Page.SIGNUP) &&
				<DemoBadge />
			}
			{
				pageToDisplay === Page.HOME && isDemoUser(userDatas.username) &&
				<DemoDialog />
			}
		</Style>
	)
}

export default Home