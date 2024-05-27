import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { user } from "../../data/user.js";


// const user = {
//   name: 'Tom Cooko',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Laporin', href: '/report', current: false },
  { name: 'Kelola Laporan', href: '/kelola', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  // const authToken = localStorage.getItem('authToken');
  // const [name, setName] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   if (authToken) {
  //     setIsLoading(true);
  //     fetchUserData(authToken)
  //       .then((userData) => {
  //         if (userData) {
  //           const { name } = userData;
  //           setName(name);
  //           localStorage.setItem('nama_pengguna', name);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Kesalahan Permintaan API:', error.response.data.message);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [authToken]);

  const confirmLogout = () => {
    Swal.fire({
      title: 'Anda yakin ingin keluar?',
      text: 'Anda akan keluar dari akun Anda.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Keluar',
      cancelButtonText: 'Tidak',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      backdrop: 'rgba(200, 200, 200, 0.4)',
    }).then((result) => {
      if (result.isConfirmed) {
        // Panggil fungsi logoutUser di sini jika pengguna menekan "Ya, Keluar"
        // logoutUser();
        // Kemudian, arahkan pengguna ke halaman login atau tindakan logout lainnya
        // Misalnya:
        window.location.href = '/login';
      }
    });
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex">
                    <img
                      className="h-8 w-8"
                      src="../../../src/assets/brebes.png"
                      alt="Your Company"
                    />
                    <h1 className="text-3xl font-bold tracking-tight text-white ml-2">Silades</h1>
                    <h1 className="text-3xl font-bold tracking-tight text-blue-500 ml-1">.</h1>
                  </div>
                  <div className="flex items-center">

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className=" flex flex-col absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item className='text-center '>

                                <Link to="/profile" className="hover:text-white hover:bg-blue-500 mx-2 rounded-sm">Profile {user.name}</Link>

                              </Menu.Item>
                              <Menu.Item className='text-center '>

                                <button className="item hover:text-white hover:bg-blue-500 mx-2 rounded-sm" onClick={confirmLogout}>Keluar</button>

                              </Menu.Item>

                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>

                  </div>
                  <div className="mt-3 px-2">

                    <Disclosure.Button
                      key={user.name}

                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <Link to="/profile">Profile {user.name}</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <span onClick={confirmLogout}>Logout</span>
                    </Disclosure.Button>

                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

