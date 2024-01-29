'use client';

import { useState } from 'react';
import carAbstract from '../../public/car-abstract.png';

import Image from 'next/image';

const selectOptions = [
  {
    title: 'Select Make:',
    options: ['nissan', 'dodge', 'subaru'],
  },
  {
    title: 'Select Model:',
    options: ['grand caravan', 'nx', 'subaru'],
  },
  {
    title: 'Select Year:',
    options: [
      '2023',
      '2022',
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
    ],
  },
];

const VehicleSearch = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (make && model && year) {
      console.log(make, model, year);
    } else {
      alert('Please select all the field');
    }
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-0">
        <div className="relative hidden lg:flex justify-center items-center lg:col-span-2 px-4">
          <div
            className="absolute top-0 bottom-0 -right-0.5 h-full w-full bg-primary px-8"
            style={{
              clipPath: `polygon(80% 0, 100% 0%, 100% 100%, 80% 100%, 97% 50%)`,
            }}
          />
          <Image
            src={carAbstract}
            alt="car abstract"
            className="max-w-full h-auto text-center mx-auto"
          />
        </div>
        <div className="bg-primary col-span-12 lg:col-span-10 h-full flex items-center px-4 py-12 lg:p-12">
          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-end w-full"
            onSubmit={handleSubmit}
          >
            {selectOptions.map((item, i) => {
              const { title, options } = item;
              const stateSetter =
                title === 'Select Make:'
                  ? setMake
                  : title === 'Select Model:'
                  ? setModel
                  : setYear;

              return (
                <div className="flex flex-col w-full" key={i}>
                  <label
                    htmlFor={title}
                    className="text-white font-semibold font-secondary mb-2"
                  >
                    {title}
                  </label>
                  <div className="relative">
                    <select
                      required
                      name={title}
                      id={title}
                      value={
                        title === 'Select Make:'
                          ? make
                          : title === 'Select Model:'
                          ? model
                          : year
                      }
                      onChange={(e) => stateSetter(e.target.value)}
                      className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full max-h-[100px] overflow-y-auto"
                    >
                      <option className="uppercase" defaultValue={title} hidden>
                        {title}
                      </option>
                      {options.map((option, j) => (
                        <>
                          <option className="uppercase" value={option} key={j}>
                            {option}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}

            <div>
              <button
                type="submit"
                className="border border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-primary inline-flex whitespace-nowrap duration-500"
              >
                Search the vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleSearch;
