import axios from 'axios'

async function submitData(data: any) {
	const newData = {
		first_name: data.first_name,
		last_name: data.last_name,
		email: data.email,
		phoneNumber: data.phoneNumber,
		password: data.password
	}

	try {
		const resp = await axios
			.post('http://192.168.1.161:8000/auth/signup', newData)
			.then((response) => {
				console.log(response.data)
				console.log(response.status)
				// creationStatus = response.status

				// if (creationStatus === 201) {
				// 	// Router.push('/')
				// }
			})
	} catch (err) {
		alert(err)
	}
}
