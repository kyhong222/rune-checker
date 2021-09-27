import React from 'react';
import RuneSelector from '../components/RuneSelector';

const Rune = ({match}) => {
  const {rune} = match.params;
  
  return (
    <div>
        <p>{rune}의 룬페이지입니당</p>
        <div>
          <RuneSelector 
            rune={rune}
          />
        </div>
      </div>
  );
};

export default Rune;