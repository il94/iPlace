import { useState } from "react";
import { Overlay, Style, Content, Title, Message, Highlight } from "./style";
import { Button } from "../Grid/Recto/style";

export const DEMO_DIALOG_STORAGE_KEY = "iplace-demo-welcome-seen"

function DemoDialog() {

	// Une seule fois par session, pour ne pas rejouer le message a chaque
	// rechargement de la page
	const [display, setDisplay] = useState(() => !sessionStorage.getItem(DEMO_DIALOG_STORAGE_KEY))

	function close() {
		sessionStorage.setItem(DEMO_DIALOG_STORAGE_KEY, "true")
		setDisplay(false)
	}

	if (!display)
		return null

	return (
		<Overlay onClick={close}>
			<Style onClick={(event) => event.stopPropagation()}>
				<Content>
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
					<Button onClick={close}>Let's draw !</Button>
				</Content>
			</Style>
		</Overlay>
	)
}

export default DemoDialog
