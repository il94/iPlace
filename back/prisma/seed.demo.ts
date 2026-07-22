/*
 * Script de creation du compte de demonstration (hors HTTP).
 *
 * Le compte est partage par tous les visiteurs, et annonce sur la carte de
 * connexion par le badge du front. Il permet d'entrer dans l'app et de poser
 * des pixels sans inscription.
 *
 * C'est un user normal : meme role, meme cooldown, memes prix. Il demarre
 * seulement avec un wallet garni, pour qu'un visiteur puisse essayer la bombe
 * sans avoir a poser quinze pixels d'abord.
 *
 * Le script est idempotent (upsert sur le username, puis remise a zero du
 * wallet, du role et de la date du dernier pixel) : le rejouer est sans risque,
 * et repare un compte abime (banni, wallet vide).
 *
 * Usage : `docker compose exec back npm run seed:demo`
 * (le host de DATABASE_URL ne se resout que dans le reseau Docker)
 */

import { PrismaClient, Role } from '@prisma/client'
import * as argon2 from 'argon2'

const prisma = new PrismaClient()

// Le script tourne avec ou sans variables d'environnement, d'ou les valeurs
// par defaut : les identifiants de demonstration sont publics
const DEMO_USERNAME = process.env.DEMO_USERNAME ?? 'demo'
const DEMO_PASSWORD = process.env.DEMO_PASSWORD ?? 'demo'

// De quoi essayer la bombe (15 pieces) des la premiere visite
const DEMO_WALLET = 30

async function seedDemo() {

	const hash = await argon2.hash(DEMO_PASSWORD)

	const demoUser = await prisma.user.upsert({
		where: {
			username: DEMO_USERNAME
		},
		update: {
			hash: hash,
			wallet: DEMO_WALLET,
			lastPut: new Date(),
			role: Role.USER
		},
		create: {
			username: DEMO_USERNAME,
			hash: hash,
			wallet: DEMO_WALLET,
			lastPut: new Date(),
			role: Role.USER
		}
	})

	console.log(`Demo user "${demoUser.username}" is ready (wallet: ${demoUser.wallet})`)
}

seedDemo()
	.catch((error) => {
		console.error(error.message)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
