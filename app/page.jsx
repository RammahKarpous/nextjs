"use client";

import { useEffect, useState } from "react"

export default function Page() {

	const [ fields, setFields ] = useState([]);

	useEffect(() => {
		
	}, [fields])
	
	fields.map( field => {

	} )

	const addToArray = (e) => {
		if ( fields.includes(e.target.value) ) {
			setFields( fields => fields.filter(fields => fields !== e.target.value) );
			console.log(fields)
		} else {
			setFields( prevFields => [...prevFields, e.target.value] )
			console.log(fields)
		}
	}

	return (
		<>
			<div>
				<input type="checkbox" value="marketing" name="testValue" id="newValue" onChange={(e) => { addToArray(e) }} />
				<label htmlFor="newValue">Marketing</label>
			</div>

			<div>
				<input type="checkbox" value="communicatie" name="testValue" id="newestValue" onChange={(e) => { addToArray(e) }} />
				<label htmlFor="newestValue">Communicatie</label>
			</div>
		</>
	)
}
