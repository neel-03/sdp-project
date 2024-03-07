import { QuizUsers } from "@/app/model/quiz_user";
import { User } from "@/app/model/user";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  params: {
    userId: string;
    quizId: string;
  };
  searchParams: any;
};
const QuizUserList = async ({ params }: Props) => {

  const usersid = await QuizUsers.find(
    { quizId: params.quizId },
    { userId: 1 }
  );

  const userIds = usersid.map((user) => user.userId);
  const userData = await User.find({ _id: { $in: userIds } });

  return (
    <>
      <section className="bg-gray-800 h-screen overflow-y-scroll">
        <div className="flex items-center justify-center px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
          <div className="bg-gray-900 w-full mx-28 rounded-3xl px-7 py-7">
            <div className="gap-x-4 flex justify-between items-center text-white">
              <div className="text-lg md:text-2xl lg:text-3xl font-extrabold">
              Quiz Participants
              </div>
              <Link
                href={"/dashboard"}
                className="bg-red-700 p-2 gap-x-2 flex items-center justify-center rounded-xl"
              >
                <FaHome className="h-4 md:h-4 lg:h-6  w-4 md:w-4 lg:w-6" />
                <div className="text-xs md:text-base lg:text-lg">Dashboard</div>
              </Link>
            </div>
            <div className="text-white flex-row">
<div className="bg-gray-700 p-3 rounded-md mt-3">
                <div className="justify-between flex p-1 my-2 font-bold">
                    <div>Name</div>
                    <div>For moredetails</div>
                </div>

              {userData.map((item,index) => (
                <div key={item._id} className="bg-gray-900 rounded-lg">
                <div  className="justify-between flex p-2 text-center rounded-md mt-3 hover:bg-gray-700">
                
                  <div className="pt-1 flex">
                    <div className="mr-3">{index+1} </div>
                    <div>
                    {item.name}
                    </div>
                    </div>
                  <div>
                        <Link
                            href="/statistics/[userId]/[quizId]"
                            as={`/statistics/${item.id}/${params.quizId}`}
                            className="flex gap-x-2 hover:bg-gray-900 p-2 rounded-md bg-gray-700"
                        >
                            <div className="">more</div>
                            <IoIosArrowForward />
                        </Link>
                        </div>
                </div>
                </div>
              ))}


</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizUserList;

// < section className = "py-5 text-white bg-gray-900 sm:py-10 lg:py-12" >
//     <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-xl font-bold leading-tight sm:text-4xl lg:text-5xl">Statistics</h2>
//         </div>

//         <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
//             <div className="grid grid-cols-1 gap-6 px-8 text-center">
//                 <div className="overflow-hidden bg-gray-700 rounded-xl">
//                     <div className="p-6">
//                         <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="1"
//                                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                             />
//                         </svg>
//                         <p className="mt-6 text-lg font-medium text-white">+1-316-555-0116</p>
//                         <p className="mt-1 text-lg font-medium text-white">+1-446-526-0117</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-6 overflow-hidden bg-gray-700 rounded-xl">
//                 <div className="px-6 py-12 sm:p-12">
//                     <h3 className="text-3xl font-semibold text-center text-white">Send us a message</h3>

//                     <form action="#" method="POST" className="mt-14">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
//                             <div>
//                                 <label className="text-base font-medium text-white"> Your name </label>
//                                 <div className="mt-2.5 relative">
//                                     <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-700 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-base font-medium text-white"> Email address </label>
//                                 <div className="mt-2.5 relative">
//                                     <input type="email" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-700 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-base font-medium text-white"> Phone number </label>
//                                 <div className="mt-2.5 relative">
//                                     <input type="tel" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-700 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-base font-medium text-white"> Company name </label>
//                                 <div className="mt-2.5 relative">
//                                     <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-700 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label className="text-base font-medium text-white"> Message </label>
//                                 <div className="mt-2.5 relative">
//                                     <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-700 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
//                                 </div>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
//                                     Send
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </section >