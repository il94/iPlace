// Le front est construit sans variables d'environnement en deploiement, d'ou
// les valeurs par defaut : les identifiants de demonstration sont publics
export const demoAccount = {
	username: import.meta.env.VITE_DEMO_USERNAME || "demo",
	password: import.meta.env.VITE_DEMO_PASSWORD || "demo"
}

export const demoEnabled = import.meta.env.VITE_DEMO_ENABLED !== "false"

// Verifie si le username fourni est celui du compte de demonstration
export function isDemoUser(username: string) {
	return (demoEnabled && username === demoAccount.username)
}
