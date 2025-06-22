import React, { Suspense } from 'react';

const Value = React.lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => <div>Sagar</div>
      });
    }, 10000);
  })
);

function LazyComp() {
  return (
    <div>
      <Suspense fallback={<div>Loading.....</div>}>
        <Value />
      </Suspense>
    </div>
  );
}

export default LazyComp;
