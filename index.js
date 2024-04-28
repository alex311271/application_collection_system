const express = require('express')
const chalk = require('chalk')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const Appeal = require('./models/appeal')
const { addAppeal, getTable } = require('./table.controller')

const port = 3003
const dbUri =
	'mongodb+srv://alex311271:Ntcnjdfz,fpf@learndb.nv30pz3.mongodb.net/appeal?retryWrites=true&w=majority&appName=LearnDB'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Appointment form',
		created: false,
		error: false,
	})
})

app.post('/', async (req, res) => {
	try {
		await addAppeal(
			req.body.data,
			req.body.name,
			req.body.phone,
			req.body.problem
		)
		res.render('index', {
			title: 'Appointment form',
			created: true,
			error: false,
		})
	} catch (e) {
		console.error('Creation error', e)
		res.render('index', {
			title: 'Appointment form',
			created: false,
			error: true,
		})
	}
})

app.get('/table', async (req, res) => {
	res.render('table', {
		title: 'Appointment form',
		table: await getTable(),
		error: undefined,
	})
})

app.get('/login', async (req, res) => {
	res.render('login', {
		title: 'Appointment form',
		error: undefined,
	})
})

app.post('/login', async (req, res) => {
	try {
		// const token = await loginUser(req.body.email, req.body.password)
		// res.cookie('token', token, { httpOnly: true })
		res.redirect('/table')
	} catch (e) {
		res.render('login', {
			title: 'Appointment form',
			error: e.message,
		})
	}
})

mongoose.connect(dbUri).then(() => {
	app.listen(port, () => {
		console.log(chalk.green(`Server started on port ${port}`))
	})
})
