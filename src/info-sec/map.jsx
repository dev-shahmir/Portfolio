import React from 'react'
import Data from '../data/data'



export default function Map() {

    const card = Data
  return (

	<div className='flex flex-wrap'>
        {
			card.map(myCard=>{
				return <div className="card w-80 bg-purple-100 p-3 m-2 text-purple-950" key={myCard.id}>
				<figure><img  src={myCard.img} alt="img" /></figure>
				<div className="card-body ">
				  <h1 className="card-title text-2xl font-bold">{myCard.name}</h1>
				  <p className='text-l font-semibold'>{myCard.detail}</p>
				  <div className="card-actions mt-4 ">
					<button className="btn bg-purple-950 text-white w-60">View Detail</button>
				  </div>
				</div>
			  </div>
            })
        }
		
	</div>
		)
}
