import React, { useEffect, useState } from 'react';

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hi')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Parse response as text
      })
      .then((text) => setData(text))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <div className='bg-darkBackground'><p className='from-neutral-100'>{data ? data : 'Loading...'}</p></div>;
}

export default Data;
