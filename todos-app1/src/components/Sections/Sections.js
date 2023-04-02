import React from 'react'
import './Sections.css'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Sections = () => {
  return (
    <div className='sections-bg'>
        <div className='mt-3'>
            <input className='search-input' type="text" placeholder="Search..."/>
            <AiOutlineSearch className="search-icon"/>
        </div>
        <div>
            <h2 className='mt-3'> <Link  className='filters' to="/todaytasks">Today</Link></h2>
            <h2 className='mt-3'> <Link  className='filters' to="/">All Tasks</Link></h2>
        </div>

        <hr/>

        <div>
            <h2 className='mt-3'><Link className='filters' to="/hightasks">High</Link></h2>
            <h2 className='mt-3'> <Link className='filters' to="/mediumtasks">Medium</Link></h2>
            <h2 className='mt-3'> <Link className='filters' to="/lowtasks">Low</Link></h2>
        </div>

        <hr/>

        <div>
            <h2 className='mt-3'> <Link className='filters' to="/personaltasks">Personal</Link></h2>
            <h2 className='mt-3'> <Link className='filters' to="/proffessionaltasks">Proffessional</Link></h2>
        </div>


    </div>
  )
}

export default Sections