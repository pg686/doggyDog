import React from 'react'
const Memes = ({memesArr, isReversed}) => {

  return (
    <div>
        <div className='memeWrapper'>
          <div className="wrapper">
        <div className='marquee'>
          <div className={isReversed ? "marqueeGroupReverse" : "marqueeGroup"}>
            {memesArr.map(meme => <div className="imageGroup"><img src={`/images/${meme}.png`} className='sliderImg'/></div>)}
            </div>
            <div className={isReversed ? "marqueeGroupReverse" : "marqueeGroup"}>
            {memesArr.map(meme => <div className="imageGroup"><img src={`/images/${meme}.png`} className='sliderImg'/></div>)}
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Memes