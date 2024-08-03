import * as db from "../db/index.js"

const checkAuth = async (req, res) => {
	const { id } = req
	const text = "SELECT * FROM users WHERE user_id = $1;"
	const values = [id]

	const { rows } = await db.query(text, values)

	const { password: hashedPassword, ...rest } = rows[0]
	res.status(200).json(rest)
}

export { checkAuth }
