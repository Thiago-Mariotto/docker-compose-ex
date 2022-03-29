const cors = require('cors');
const express = require('express')
const connection = require('./connection');

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors());
app.get('/', async (_req, res) => {
	try {
		const [instructors] = await connection.execute(
			`SELECT * FROM turma17.instructors`
		);

		return res.status(200).json(instructors);
	} catch (e) {
		console.log(e.message)
		return res.status(500).send(e);
	}
})

app.listen(PORT, () => console.log(`HELLLOOOO ${PORT}!`))