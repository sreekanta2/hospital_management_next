import { Circle, Search } from "lucide-react";
import Image from "next/image";
import avatar from "../_components/assets/images/avatar-5.jpg";
export default function ChatBodyHeader() {
  return (
    <div className="p-4 border-b border-gray-100 lg:p-6 dark:border-zinc-600 w-full">
      <div className="grid items-center grid-cols-12">
        <div className="col-span-8 sm:col-span-4">
          <div className="flex items-center">
            <div className="block ltr:mr-2 rtl:ml-2 lg:hidden">
              <a
                href="javascript: void(0);"
                className="p-2 text-gray-500 user-chat-remove text-16"
              >
                <i className="ri-arrow-left-s-line"></i>
              </a>
            </div>
            <div className="rtl:ml-3 ltr:mr-3">
              <Image
                src={avatar}
                className="rounded-full h-9 w-9"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h5 className="mb-0 truncate text-16 ltr:block rtl:hidden">
                <a href="#" className="text-gray-800 dark:text-gray-50">
                  Doris Brown
                </a>
                <Circle className="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10" />
              </h5>
              <h5 className="mb-0 truncate text-16 rtl:block ltr:hidden">
                <i className="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10"></i>
                <a href="#" className="text-gray-800 dark:text-gray-50">
                  Doris Brown
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-8">
          <ul className="flex items-center justify-end lg:gap-4">
            <li className="px-3">
              <div className="relative dropstart">
                <button
                  className="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300"
                  type="button"
                  data-bs-toggle="dropdown"
                  id="dropdownMenuButton10"
                  data-tw-auto-close="outside"
                >
                  <Search />
                </button>
                <ul
                  className="absolute z-50 hidden mt-2 text-left list-none bg-white border rounded-lg shadow-lg w-fit border-gray-50 dropdown-menu top-8 dark:bg-zinc-700 bg-clip-padding dark:border-gray-700"
                  aria-labelledby="dropdownMenuButton10"
                >
                  <li className="p-2">
                    <input
                      type="text"
                      className="text-gray-500 border-0 rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-600 dark:text-gray-300 placeholder:dark:text-gray-300 focus:ring-0"
                      placeholder="Search.."
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                type="button"
                className="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block"
                data-tw-toggle="modal"
                data-tw-target="#audiCallModal"
              >
                <i className="ri-phone-line"></i>
              </button>
            </li>

            {/* <!-- Modal start --> */}
            <li className="relative z-50 hidden modal" id="audiCallModal">
              <div className="fixed inset-0 z-50 overflow-hidden">
                <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                  <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                    <div className="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                      <div className="p-4">
                        <div className="p-6">
                          <div className="p-4 text-center">
                            <div className="mb-6">
                              <Image
                                src={avatar}
                                className="rounded-full h-9 w-9"
                                alt=""
                                width={40}
                                height={40}
                              />
                            </div>

                            <h5 className="mb-1 text-gray-800 truncate dark:text-gray-50">
                              Doris Brown
                            </h5>
                            <p className="text-gray-500 dark:text-gray-300">
                              Start Audio Call
                            </p>

                            <div className="mt-10">
                              <ul className="flex justify-center mb-1">
                                <li className="px-2 ml-0 mr-2">
                                  <button
                                    type="button"
                                    className="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600"
                                    data-tw-dismiss="modal"
                                  >
                                    <span className="text-xl bg-transparent">
                                      <i className="ri-close-fill"></i>
                                    </span>
                                  </button>
                                </li>
                                <li className="px-2">
                                  <button
                                    type="button"
                                    className="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600"
                                  >
                                    <span className="text-xl bg-transparent">
                                      <i className="ri-phone-fill"></i>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- Modal end --> */}

            <li>
              <button
                type="button"
                className="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block"
                data-tw-toggle="modal"
                data-tw-target="#videoCallModal"
              >
                <i className="ri-vidicon-line"></i>
              </button>
            </li>

            {/* <!-- Modal start --> */}
            <li
              className="relative z-50 hidden modal dark:text-gray-300"
              id="videoCallModal"
            >
              <div className="fixed inset-0 z-50 overflow-hidden">
                <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                  <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                    <div className="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                      <div className="p-4">
                        <div className="p-6">
                          <div className="p-4 text-center">
                            <div className="mb-6">
                              <Image
                                src={avatar}
                                className="rounded-full h-9 w-9"
                                alt=""
                                width={40}
                                height={40}
                              />
                            </div>

                            <h5 className="mb-1 truncate dark:text-gray-50">
                              Doris Brown
                            </h5>
                            <p className="text-gray-500 dark:text-gray-300">
                              Start Video Call
                            </p>

                            <div className="mt-10">
                              <ul className="flex justify-center mb-1">
                                <li className="px-2 ml-0 mr-2">
                                  <button
                                    type="button"
                                    className="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600"
                                    data-tw-dismiss="modal"
                                  >
                                    <span className="text-xl bg-transparent">
                                      <i className="ri-close-fill"></i>
                                    </span>
                                  </button>
                                </li>
                                <li className="px-2">
                                  <button
                                    type="button"
                                    className="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600"
                                  >
                                    <span className="text-xl bg-transparent">
                                      <i className="ri-vidicon-fill"></i>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- Modal end --> */}

            <li className="px-3">
              <a
                href="#"
                className="hidden text-gray-500 dark:text-gray-300 lg:block profileTab"
              >
                <i className="text-xl ri-group-line"></i>
              </a>
            </li>

            <li className="px-3">
              <div className="relative dropdown">
                <button
                  className="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300"
                  type="button"
                  data-bs-toggle="dropdown"
                  id="dropdownMenuButton11"
                >
                  <i className="ri-more-fill"></i>
                </button>
                <ul
                  className="absolute z-50 hidden w-40 py-2 mx-4 mt-2 text-left list-none bg-white border rounded shadow-lg ltr:-right-4 border-gray-50 dropdown-menu top-8 dark:bg-zinc-600 bg-clip-padding dark:border-gray-600/50 rtl:-left-5"
                  aria-labelledby="dropdownMenuButton11"
                >
                  <li className="block lg:hidden">
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent profileTab dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                    >
                      View profile
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-user-2-line text-16"></i>
                    </a>
                  </li>
                  <li className="block lg:hidden">
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                      data-tw-toggle="modal"
                      data-tw-target="#audiCallModal"
                    >
                      Audio
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-phone-line text-16"></i>
                    </a>
                  </li>
                  <li className="block lg:hidden">
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                      data-tw-toggle="modal"
                      data-tw-target="#videoCallModal"
                    >
                      Video
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-vidicon-line text-16"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                    >
                      Archive
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-archive-line text-16"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                    >
                      Muted
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-volume-mute-line text-16"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right"
                      href="#"
                    >
                      Delete
                      <i className="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-delete-bin-line text-16"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
