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

const VehicleInformation = () => {
  return (
    <div className="border border-primary rounded overflow-hidden">
      <div className="bg-primary text-white rounded p-3">
        <h4 className="text-lg font-semibold">Vehicle Informations:</h4>
      </div>

      <div className="p-3">
        <div>
          <div className="flex flex-col">
            {dummyData?.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between gap-x-1 py-1">
                  <p className="font-semibold text-sm">{item.title}:</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
                {i !== dummyData.length - 1 && (
                  <div className="bg-primary w-full h-[1px] my-1 bg-opacity-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
