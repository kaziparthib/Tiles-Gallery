import React from 'react';


const TilesDetailsPage =async ({params}) => {
  const {id}=await params
  console.log(id);
  return (
    <div>
      detail
    </div>
  );
};

export default TilesDetailsPage;