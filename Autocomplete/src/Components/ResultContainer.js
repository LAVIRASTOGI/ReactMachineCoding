import React from 'react'
import { Each } from './util/Each'

function ResultContainer({results,selectHandler}) {
  return (
    <div className="result-block">
      <ul>
        <Each of={results} render={(item)=><li className="item" onClick={selectHandler}><a></a>{item?.productName}</li>}></Each>
      </ul>
    </div>
  )
}

export default ResultContainer