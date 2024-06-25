import React from 'react'
import Memes from './Memes.jsx'

const MemeList = () => {
  return (
    <div className='memes'>
      <h2 className="memeTitle">Memes</h2>
        <Memes />
        <Memes />
    </div>
  )
}

export default MemeList