import {React, useState} from 'react'
import Data from './data'
import {datasourse} from './Datasourse'

export default function Blog() {
    const [ data] = useState(datasourse);
  return (
    <>
        <div>
            {
                data.map((curData) =>{
                    return   <Data key={curData.id} {...curData}/>
                })
            }   
          
        </div>
    </> 
  )
}
