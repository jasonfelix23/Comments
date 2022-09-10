import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Comment = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} =people[index];

  const checkNumber = (newIndex) =>{
    if(newIndex> people.length -1){
      return 0;
    }else if(newIndex < 0){
      return people.length -1;
    }else{
      return newIndex;
    }
  }
  const prevPerson = () =>{
    setIndex((index) =>{
      let newIndex = index -1;
      return checkNumber(newIndex);
    });
  }
  const nextPerson = () =>{
    setIndex((index) =>{
      let newIndex = index +1;
      return checkNumber(newIndex);
    });
  }

  const randomPerson = () =>{
    setIndex(() =>{
      return (Math.floor((Math.random())*(people.length)));
    })
  }
  return (
    <article className='comment'>
      <div className='img-container'>
        <img className='person-img' src={image} alt= {name}/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h3 className='author'>{name}</h3>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <span>
        <a onClick={prevPerson}><FaChevronLeft className='prev-btn'/></a>
        <a onClick={nextPerson}><FaChevronRight className='next-btn'/></a>
      </span>
      <div>
      <button className='random-btn' onClick={randomPerson}>Surprise me</button>
      </div>
      
    </article>
  )
};

export default Comment;
