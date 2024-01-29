'use client';

import Select from 'react-select';
import { useState } from 'react';
import { AiFillFileImage } from 'react-icons/ai';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

const StepFour = () => {
  const [dob, setDob] = useState('');
  const [id, setId] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [choosenFile, setChoosenFile] = useState(null);
  const [fileName, setFileName] = useState('No Selected File');

  const idTypeOptions = [
    { value: 'nid', label: 'NID' },
    { value: 'passport', label: 'Passport' },
    { value: 'idl', label: 'International Driving Licence' },
  ];

  const handleFourthStep = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleFourthStep}
      className="max-w-[555px] mx-auto bg-white bg-opacity-10 p-4 md:p-10 rounded-md backdrop-blur-md"
    >
      <h4 className="text-2xl font-bold mb-4 text-white text-center">
        Please Fill Up the below Fields!
      </h4>

      {/* dob */}
      <div>
        <label htmlFor="dob" className="text-white">
          Date Of Birth<span className="text-primary">*</span>
        </label>
        <input
          type="date"
          name="dob"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      {/* id type */}
      <div>
        <label htmlFor="idType" className="text-white !mb-3">
          ID Type<span className="text-primary">*</span>
        </label>
        <Select
          classNamePrefix="select"
          defaultValue={idTypeOptions[0]}
          name="color"
          options={idTypeOptions}
          classNames={{
            control: (state) =>
              state.isFocused ? 'border-red-600' : 'border-grey-300',
          }}
        />
      </div>

      {/* id */}
      <div className="!my-4">
        <label htmlFor="id" className="text-white">
          ID Number<span className="text-primary">*</span>
        </label>
        <input
          type="number"
          name="id"
          placeholder="4230937"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      {/* expiry date */}
      <div>
        <label htmlFor="expiryDate" className="text-white">
          Date Of Birth<span className="text-primary">*</span>
        </label>
        <input
          type="date"
          name="expiryDate"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>

      {/* file */}
      <div>
        <div
          className="w-full h-28 cursor-pointer border-2 border-dashed border-primary rounded-md overflow-hidden flex justify-center items-center mt-2"
          onClick={() => document.querySelector('.file_upload_input').click()}
        >
          <input
            type="file"
            accept="image/*"
            className="file_upload_input"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setChoosenFile(URL.createObjectURL(files[0]));
              }
            }}
          />

          {choosenFile ? (
            <img
              src={choosenFile}
              alt={fileName}
              className="max-w-[60%] w-auto h-24 object-cover"
            />
          ) : (
            <div className="flex flex-col justify-center items-center gap-y-2 text-white">
              <MdCloudUpload className="text-primary" size={60} />
              <p>Browse Files To Upload</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-2 text-white mt-2">
          <AiFillFileImage className="text-primary" />
          <span className="flex items-center gap-x-1">
            {fileName}{' '}
            <MdDelete
              className="cursor-pointer hover:text-primary"
              onClick={() => {
                setFileName('No Selected File');
                setChoosenFile(null);

                const fileInput = document.querySelector('.file_upload_input');
                if (fileInput) {
                  fileInput.value = ''; // Clear the input value
                }
              }}
            />
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default StepFour;
