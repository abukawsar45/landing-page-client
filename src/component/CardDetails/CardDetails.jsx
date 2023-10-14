import React from 'react';
import {useParams} from 'react-router-dom'

const CardDetails = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
      de
    </div>
  );
};

export default CardDetails;