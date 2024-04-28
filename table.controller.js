const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')
const Appeal = require('./models/appeal')

const dbPath = path.join(__dirname, 'db.json')

async function addAppeal(data, name, phone, problem) {
	await Appeal.create({ data, name, phone, problem })
	console.log(chalk.bgGreen('Your message has been added'))
}

async function getTable() {
	const table = await Appeal.find() 
	return table 
}

module.exports = {
	addAppeal,
	getTable,
}
