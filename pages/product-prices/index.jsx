import React, { useState } from "react";

export default function Index() {

    const [selectedFlow, setSelectedFlow] = useState('standard');
    const [selectedOption, setSelectedOption] = useState('');

    const flows = ['standard', 'internship', 'reseller', '3-pack', 'annual-subscription'];
    const edvantageousOptions = [ '3-pack', 'unlimited' ]

    const [priceCollections, setPriceCollections] = useState([
        {
            flow: 'standard',
            prices: { standard: 349, spotlight: 524 }
        },
        {
            flow: 'internship',
            prices: { standard: 349, spotlight: 524 }
        },
        {
            flow: 'reseller',
            prices: { standard: 349, spotlight: 524, internship: 0 }
        },
    ])

    const flexStyling = 'flex flex-col items-start justify-start mb-10'

    return (
        <div className="max-w-5xl mt-11 border border-gray-200 m-auto p-10 rounded-md">
            
            <form className={flexStyling}>
                <div className={flexStyling}>
                    <h2 className="text-xl font-bold">Flow</h2>
                    {flows.map(( flow, index ) => (
                        <div key={index} className="flex items-center justify-center gap-3">
                            <input 
                                type="radio" 
                                name="flow" 
                                id={flow} 
                                checked={flow === selectedFlow ? "checked" : ""}
                                onChange={() => setSelectedFlow(flow)} />
                            <label htmlFor={flow}>{flow}</label>
                        </div>
                    ))}
                </div>
                
                <div className={flexStyling}>
                    <h2 className="text-xl font-bold">Advantageous options</h2>
                    {edvantageousOptions.map(( option, index ) => (
                        <div key={index} className="flex items-center justify-center gap-3">
                            <input 
                                type="radio" 
                                name="flow" 
                                id={option}
                                checked={option === selectedOption ? "checked" : ""}
                                onChange={() => setSelectedFlow(option)} />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
            </form>

            <h2 className="text-xl font-bold">Prices for the following flow: {selectedFlow}</h2>
            {priceCollections.map(( collection, index ) => (
                <div key={index}>
                    {collection.flow === selectedFlow ? (
                        <div>
                            {collection.prices.map(( price ) => {
                                console.log(price);
                            })}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}
