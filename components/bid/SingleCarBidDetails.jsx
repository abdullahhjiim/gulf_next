import React from 'react';

const dummyData = [
  {
    title: 'Doc Type',
    value: '',
  },
  {
    title: 'VIN',
    value: '123456789101112',
  },
  {
    title: 'Drive Train',
    value: '',
  },
  {
    title: 'Odometer',
    value: '4556',
  },
  {
    title: 'Body Style',
    value: '3dr Ext',
  },
  {
    title: 'Fuel Type',
    value: '',
  },
  {
    title: 'Retail Value',
    value: '4356',
  },
  {
    title: 'Color',
    value: 'Grey',
  },
  {
    title: 'Primary Damage',
    value: 'BURN-INTERIOR',
  },
  {
    title: 'Engine Type',
    value: '2.1L 4',
  },
  {
    title: 'Secondary Damage',
    value: 'UNDERCARRIAGE',
  },
  {
    title: 'Cylinder',
    value: 'R',
  },
];

const SingleCarBidDetails = () => {
  return (
    <div className="mt-3">
      <h4 className="text-xl lg:text-2xl font-bold text-primary">
        Dodge NX 2019
      </h4>
      <div className="flex items-center gap-2">
        <p>
          Lot: <span className="font-semibold text-primary">73454923</span>
        </p>
        <p>Item: 2</p>
      </div>

      <hr className="my-4" />
      <div className="overflow-x-auto">
        <div className="flex flex-wrap items-start">
          {dummyData?.map((item, i) => (
            <p className="font-semibold w-full sm:w-1/2 md:w-1/3 p-1" key={i}>
              {item.title}: {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCarBidDetails;
