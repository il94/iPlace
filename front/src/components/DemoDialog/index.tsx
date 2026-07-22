import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { Overlay, Style, Title, Message, Highlight } from "./style";
import { Button } from "../Grid/Recto/style";
import { ActiveText } from "../Grid/Recto/GridConnect/style";
import { GridContext } from "../../contexts/GridContext";
import { Page } from "../../utils/enums";

export const DEMO_DIALOG_STORAGE_KEY = "iplace-demo-welcome-seen"

function DemoDialog() {

	const { setPageToDisplay } = useContext(GridContext)

	// Une seule fois par session, pour ne pas rejouer le message a chaque
	// rechargement de la page
	const [display, setDisplay] = useState(() => !sessionStorage.getItem(DEMO_DIALOG_STORAGE_KEY))

	function close() {
		sessionStorage.setItem(DEMO_DIALOG_STORAGE_KEY, "true")
		setDisplay(false)
	}

	function leaveDemo() {
		close()
		Cookies.remove("access_token")
		setPageToDisplay(Page.SIGNUP)
	}

	if (!display)
		return null

	return (
		<Overlay onClick={close}>
			<Style onClick={(event) => event.stopPropagation()}>
				<Title>Welcome to the demo</Title>
				<Message>
					You're drawing with the shared demo account, so you can put your pixels without signing up.
				</Message>
				<Message>
					Everything is playable : the <Highlight>pen</Highlight> is free and earns you a coin,
					and the account starts with enough coins to drop a <Highlight>bomb</Highlight>.
				</Message>
				<Message>
					The account is shared, so the wallet and the 3 seconds cooldown between two pixels are
					shared too : someone else may be drawing at the same time as you.
				</Message>
				<Message>
					Want your own coins ?&nbsp;
					<ActiveText onClick={leaveDemo}>Create an account</ActiveText>
				</Message>
				<Button onClick={close}>Let's draw !</Button>
			</Style>
		</Overlay>
	)
}

export default DemoDialog
