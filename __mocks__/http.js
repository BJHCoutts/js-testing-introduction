const fetchData = () => {
	console.log('using mocked data')
	return Promise.resolve({ title: "delectus aut autem"})
}

exports.fetchData = fetchData