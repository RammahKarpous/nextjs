import React from 'react'

const fetchApi = async () => {
    await fetch('https://api.postcodeapi.nu/v3/lookup/6515AG/238', {
        headers: {
            'X-Api-Key': 'TmMRVwyTDr5l1o4lDVIuJ6mQD5IuZIaX1nIrxTUL'
        },
        mode: 'no-cors'
    })
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch((error) => {
			console.log(error)
		})
}

export default function fetchFromApi() {
    return (
        <div>
            <input type="button" value="Fetch from api" style={{ padding: '5px' }} onClick={() => fetchApi()} />
        </div>
    )
}
