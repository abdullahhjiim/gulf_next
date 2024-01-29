'use client';

import { Accordion } from 'flowbite-react';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import './CarSidebar.css';

const CarSidebar = () => {
  const [odometerFilter, setOdometerFilter] = useState([0, 250000]);
  const [yearFilter, setYearFilter] = useState([1999, 2023]);
  const [newlyAddedVehicle, setNewlyAddedVehicle] = useState('last 7 hours');
  const [checkboxFilters, setCheckboxFilters] = useState({});
  const [searchedText, setSearchedText] = useState('');
  const [toggler, setToggler] = useState(false);
  const [saleDate, setSaleDate] = useState([]);

  const yearOptions = [
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
  ];
  const searchFilters = [
    {
      title: 'Vehicle Type',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Fuel Type',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Drive Train',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
    {
      title: 'Cylinder',
      searchOptons: [
        {
          text: 'ATVs',
          count: 2,
          value: 'atvs',
        },
        {
          text: 'Automobiles',
          count: 2,
          value: 'automobiles',
        },
        {
          text: 'Boats',
          count: 2,
          value: 'boats',
        },
        {
          text: 'Dirt Bikes',
          count: 2,
          value: 'dirtbikes',
        },
        {
          text: 'Industrial Equipment',
          count: 2,
          value: 'industrialequipment',
        },
      ],
    },
  ];

  const newlyAddedVehicleFilters = ['last 7 hours', 'last 24 hours'];

  const handleCheckboxChange = (category, value) => {
    setCheckboxFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...(prevFilters[category] || {}),
        [value]: !prevFilters[category]?.[value],
      },
    }));
  };

  const searchFilter = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-light rounded-md p-2 md:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-bold text-xl">Search Filters</h2>
        <p className="text-primary font-bold cursor-pointer">Reset All</p>
      </div>
      <hr className="my-5" />
      {/* active filters */}
      <div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-x-1 border rounded-full p-1">
            <h4 className="text-sm">2023 to 2024 Year</h4>{' '}
            <FaTimes className="cursor-pointer hover:text-primary" />
          </div>
          <div className="flex items-center gap-x-1 border rounded-full p-1">
            <h4 className="text-sm">Ford</h4>{' '}
            <FaTimes className="cursor-pointer hover:text-primary" />
          </div>
          <div className="flex items-center gap-x-1 border rounded-full p-1">
            <h4 className="text-sm">3.0L 6</h4>{' '}
            <FaTimes className="cursor-pointer hover:text-primary" />
          </div>
          <div className="flex items-center gap-x-1 border rounded-full p-1">
            <h4 className="text-sm">Rear wheel Drive</h4>{' '}
            <FaTimes className="cursor-pointer hover:text-primary" />
          </div>
        </div>
        <hr className="my-5" />
      </div>

      <div>
        {/* newly added vehicle */}
        <div className="flex items-center gap-3 mb-4">
          <h4 className="text-sm font-bold">Newly Added Vehicle</h4>

          <div>
            <select
              required
              name="newlyAddedVehicle"
              id="newlyAddedVehicle"
              value={newlyAddedVehicle[0]}
              onChange={(e) =>
                setNewlyAddedVehicle((prev) => [e.target.value, prev[0]])
              }
              className="bg-white py-1.5 rounded-lg focus:border-0 focus:outline-none w-full max-h-[50px] overflow-y-auto shadow-light"
            >
              {newlyAddedVehicleFilters.map((option, i) => (
                <>
                  <option className="capitalize text-sm" value={option} key={i}>
                    {option}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div
            className={`border w-10 h-5 rounded-full relative ${
              toggler ? 'bg-primary bg-opacity-65' : 'bg-gray-300'
            }`}
            onClick={() => setToggler((prev) => !prev)}
          >
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full duration-500 ${
                toggler ? 'bg-white right-0.5' : 'bg-white left-0.5'
              }`}
            ></div>
          </div>
        </div>

        <Accordion alwaysOpen className="!border-0 gulf_accordion">
          {/* odometer */}
          <Accordion.Panel
            onFocus="bg-transparent"
            onFocusCapture="bg-transparent"
            className="focus:!bg-transparent"
          >
            <Accordion.Title className="text-lg font-bold">
              Odometer
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-end">
                <div className="border border-primary border-opacity-50 flex justify-center hover:bg-primary hover:text-white text-primary font-bold p-1 px-2 rounded-md cursor-pointer duration-300">
                  Reset
                </div>
              </div>
              <form action="">
                <div className="flex justify-between items-center gap-x-3 mt-2">
                  <input
                    type="number"
                    min={0}
                    className="input-with-shadow w-full"
                    placeholder="0"
                    value={odometerFilter[0]}
                    onChange={(e) =>
                      setOdometerFilter((prev) => [e.target.value, prev[0]])
                    }
                  />
                  <input
                    type="number"
                    min={0}
                    className="input-with-shadow w-full"
                    placeholder="250000"
                    value={odometerFilter[1]}
                    onChange={(e) =>
                      setOdometerFilter((prev) => [prev[1], e.target.value])
                    }
                  />
                </div>
                <div className="text-end">
                  <button className="bg-primary text-white font-bold hover:bg-opacity-90 py-2 px-4 rounded-md duration-300 mt-4">
                    Apply
                  </button>
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>

          <hr className="my-5" />
          {/* year */}
          <Accordion.Panel>
            <Accordion.Title className="text-lg font-bold">
              Year
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-end">
                <div className="ring border border-primary border-opacity-50 flex justify-center hover:bg-primary hover:text-white text-primary font-bold p-1 px-2 rounded-md cursor-pointer duration-300">
                  Reset
                </div>
              </div>
              <form action="">
                <div className="flex justify-between items-center gap-x-3 mt-2">
                  <select
                    required
                    name="year"
                    id="year"
                    value={yearFilter[0]}
                    onChange={(e) =>
                      setYearFilter((prev) => [e.target.value, prev[0]])
                    }
                    className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full max-h-[100px] overflow-y-auto input-with-shadow"
                  >
                    <option className="uppercase" defaultValue="1990" hidden>
                      {yearOptions[yearOptions.length - 1]}
                    </option>
                    {yearOptions.map((option, i) => (
                      <>
                        <option className="uppercase" value={option} key={i}>
                          {option}
                        </option>
                      </>
                    ))}
                  </select>
                  <select
                    required
                    name="year"
                    id="year"
                    value={yearFilter[1]}
                    onChange={(e) =>
                      setYearFilter((prev) => [prev[1], e.target.value])
                    }
                    className="bg-white p-3 rounded-lg focus:border-0 focus:outline-none w-full max-h-[100px] overflow-y-auto input-with-shadow"
                  >
                    <option className="uppercase" defaultValue="1990" hidden>
                      {yearOptions[0]}
                    </option>
                    {yearOptions.map((option, i) => (
                      <>
                        <option className="uppercase" value={option} key={i}>
                          {option}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold hover:bg-opacity-90 py-2 px-4 rounded-md duration-300 mt-4"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>

          <hr className="my-5" />
          {/* sale Date */}
          <Accordion.Panel>
            <Accordion.Title className="text-lg font-bold">
              Sale Date
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-end">
                <div className="border border-primary border-opacity-50 flex justify-center hover:bg-primary hover:text-white text-primary font-bold p-1 px-2 rounded-md cursor-pointer duration-300">
                  Reset
                </div>
              </div>

              <form action="">
                <div className="flex flex-col justify-between items-center gap-3 mt-2">
                  <div className="flex w-full justify-between gap-x-1">
                    <p className="text-sm">From:</p>
                    <input
                      type="date"
                      name="saleDateFrom"
                      id="saleDateFrom"
                      className="border rounded-md p-1"
                      value={saleDate[0] || ''}
                      onChange={(e) =>
                        setSaleDate([e.target.value, saleDate[1] || ''])
                      }
                    />
                  </div>
                  <div className="flex w-full justify-between gap-x-1">
                    <p className="text-sm">To:</p>
                    <input
                      type="date"
                      name="saleDateTo"
                      id="saleDateTo"
                      className="border rounded-md p-1"
                      value={saleDate[1] || ''}
                      onChange={(e) =>
                        setSaleDate([saleDate[0] || '', e.target.value])
                      }
                    />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold hover:bg-opacity-90 py-2 px-4 rounded-md duration-300 mt-4"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>

          {searchFilters.map((item, i) => {
            return (
              <Accordion.Panel key={i}>
                <hr className="my-5" />
                <Accordion.Title className="text-lg font-bold">
                  {item.title}
                </Accordion.Title>
                <Accordion.Content>
                  <div className="flex justify-end">
                    <div className="border border-primary border-opacity-50 flex justify-center hover:bg-primary hover:text-white text-primary font-bold p-1 px-2 rounded-md cursor-pointer duration-300">
                      Reset
                    </div>
                  </div>
                  <form action="">
                    <input
                      type="text"
                      min={0}
                      className="input-with-shadow w-full my-2"
                      placeholder="Search..."
                      value={searchedText}
                      onChange={(e) => setSearchedText(e.target.value)}
                    />
                    <div className="flex flex-col gap-y-2 max-h-[200px] overflow-y-auto ml-2 mt-2">
                      {item.searchOptons.map((option, j) => {
                        const { text, value, count } = option;
                        return (
                          <label key={j}>
                            <input
                              type="checkbox"
                              className="mr-2 w-4 h-4"
                              checked={checkboxFilters[item.title]?.[value]}
                              onChange={() =>
                                handleCheckboxChange(item.title, value)
                              }
                            />
                            {text}({count})
                          </label>
                        );
                      })}
                    </div>
                  </form>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default CarSidebar;
