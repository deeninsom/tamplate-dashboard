/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import logo from '../../../../src/assets/image/logo-white.png'
import { listMenuSidebar } from "../../../dumy-data/UlSidebar"

const Sidebar = () => {
    const [isMenuActive, setIsMenuActive] = useState('Dashboard')

    return (
        <>
            <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-6">
                    <div className="flex-none text-xl font-semibold dark:text-white flex items-center justify-items-center gap-2" aria-label="Brand">
                        <img src={logo} width={30} />
                        <span className='text-[18px]'>THEFAVORED-ONE</span>
                    </div>
                </div>

                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="space-y-1.5">
                        {
                            listMenuSidebar.map((value, index) => (
                                <div key={index}>
                                    <label className="text-white font-semibold text-[10px]">{value.section.name.toUpperCase()}</label>
                                    {value.section.listMenu.map((menuItem, menuItemIndex) => (
                                        <li key={menuItemIndex} className="mt-2">
                                            <button className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`} onClick={() => setIsMenuActive(menuItem.tittle)}>
                                                {
                                                    isMenuActive && menuItem.icon && <menuItem.icon className="flex-shrink-0 size-4" />
                                                }
                                                {menuItem.tittle}
                                                {
                                                    menuItem.subMenu && menuItem.subMenu.map(() => (
                                                        <>
                                                            {
                                                                isMenuActive === menuItem.tittle ? (
                                                                    <svg className="hs-accordion-active:block ms-auto size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                                                ) : (

                                                                    <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                                )
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </button>
                                            {
                                                isMenuActive === menuItem.tittle ?
                                                    menuItem.subMenu && menuItem.subMenu?.map((value: any, index: any) => (
                                                        <div key={index} id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ">
                                                            <ul className="hs-accordion-group ps-3 pt-2 m-1" data-hs-accordion-always-open>
                                                                <li className="hs-accordion" id="users-accordion-sub-1">
                                                                    <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600 ">
                                                                        {value.tittle}
                                                                        <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                                                        <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                                    </button>

                                                                    {/* <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                                                    <ul className="pt-2 ps-2">
                                                                        <li>
                                                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                                                                Link 1
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                                                                Link 2
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                                                                Link 3
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div> */}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )) : ""
                                            }

                                        </li>
                                    ))}
                                </div>
                            ))
                        }

                    </ul>
                </nav>
                {/* <li className="hs-accordion" id="users-accordion">
                <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    Users

                    <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                    <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                    <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                        <li className="hs-accordion" id="users-accordion-sub-1">
                            <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                                Sub Menu 1

                                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                <ul className="pt-2 ps-2">
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li> */}
            </div>
        </>

    )
}

export default Sidebar
