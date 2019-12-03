import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxs }) => {
  const items = []
 for (let index = 0; index < boxs.length; index++) {
   const box = boxs[index];
   items.push(<div className='bounding-box' key={box.topRow} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)
 }
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {items}
      </div>
    </div>
  );
}

export default FaceRecognition;