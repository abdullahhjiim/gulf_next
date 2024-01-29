import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const Selector = ({ placeholder }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full font-medium !mt-2 ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 py-4 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + '...'
            : selected
          : `Select ${placeholder}`}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul
        className={`absolute z-[111111] w-full top-[90%] bg-white mt-2 overflow-y-auto ${
          open ? 'max-h-60' : 'max-h-0'
        } `}
      >
        <div className="flex gap-2 items-center sticky top-0 px-2 bg-white mb-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={`Enter ${placeholder} name`}
            className="input-with-shadow w-full !py-4"
          />{' '}
          <AiOutlineSearch size={22} className="text-gray-700" />
        </div>

        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-3 text-sm hover:bg-primary hover:text-white cursor-pointer
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              'bg-primary text-white'
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
