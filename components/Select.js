import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
// Select
export default function SmartSelect({gender,setSelected,selected}) {

  
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {/* <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label> */}
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900  ring-1 ring-inset h-[40px] ring-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ">
                <span className="flex items-center">
                  {/* <img src={selected.avatar} alt="" className="flex-shrink-0 w-5 h-5 rounded-full" /> */}
                  <span className="block pl-[8px] truncate">{selected.name}</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  {/* <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {gender.map((gender) => (
                    <Listbox.Option
                      key={gender.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-Robin-orange text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={gender}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center cursor-pointer">
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {gender.name}
                            </span>
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
  }