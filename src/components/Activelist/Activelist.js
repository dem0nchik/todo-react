import React, {useState} from 'react'
import style from './Activelist.module.css'

const Activelist = (props) =>  {
  
  const [opacity, setOpacity] = useState(false)
  const [currentlist, setCurrentlist] = useState("Today")
  
  const onClickCategory = (e) => {
    setCurrentlist(e.currentTarget.innerText)
    setOpacity(!opacity)
    props.changeList(e.currentTarget.innerText)
  }

  return(
    <React.Fragment>
      <h2 className={style.title} onClick={() => setOpacity(!opacity)}>
        {currentlist} <span> ▼</span>
      </h2>
      
      {opacity &&
          <div className={style.category}>
            <p onClick={onClickCategory}>Today</p>
            <p onClick={onClickCategory}>Archive</p>
          </div>
      }
      </React.Fragment>
  )
}
export default Activelist
