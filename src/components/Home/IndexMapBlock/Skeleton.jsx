import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Skeleton = () => {
  return (
    <>
      <div className="bg-white p-4">
          <ul className="space-y-2">
              <li className="animate-pulse bg-gray-200 rounded-md h-10"></li>
              <li className="animate-pulse bg-gray-200 rounded-md h-10"></li>
              <li className="animate-pulse bg-gray-200 rounded-md h-10"></li>
              <li className="animate-pulse bg-gray-200 rounded-md h-10"></li>
              <li className="animate-pulse bg-gray-200 rounded-md h-10"></li>
          </ul>
      </div>
    </>
  );
};

export default Skeleton;