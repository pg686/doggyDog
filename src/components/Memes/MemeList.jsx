import React from 'react'
import Memes from './Memes.jsx'

const MemeList = () => {
  return (
    <div className='memes'>
      <h2 className="memeTitle">Memes</h2>
        <Memes memesArr={['slayDog', 'slayDog2', 'slayDog', 'slayDog2','slayDog', 'slayDog2','slayDog', 'slayDog2']}/>
        <Memes isReversed={true} memesArr={['slayDog', 'slayDog2', 'slayDog', 'slayDog2','slayDog', 'slayDog2','slayDog', 'slayDog2']} />
    </div>
  )
}

export default MemeList