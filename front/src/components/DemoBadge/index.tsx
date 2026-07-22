import { IlandolsDemoBadge } from "ilandols-demo-badge/react";
import { demoAccount, demoEnabled } from "../../utils/demo";

function DemoBadge() {

	if (!demoEnabled)
		return null

	return (
		<IlandolsDemoBadge
			heading="Try iPlace instantly"
			description="No sign up needed : log in with the account below and start putting your pixels right away. It's shared with the other visitors, so you may find the grid already busy, and someone else may be drawing next to you."
			credentials={[
				{ label: "Username", value: demoAccount.username },
				{ label: "Password", value: demoAccount.password }
			]}
		/>
	)
}

export default DemoBadge
