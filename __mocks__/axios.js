const get = url => {
	console.log('using mocked axios')
	return Promise.resolve({ data: { title: 'delectus aut autem' } })
}

exports.get = get