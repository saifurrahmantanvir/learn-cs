import React from 'react'
import Coffee from '../Coffee.png'

const Courses = () => {
   return (
      <div className='grid grid-cols-12 gap-12'>
         <div className='col-span-4'>
            <ul className='flex flex-col gap-3'>
               <li className='cursor-pointer text-gray-500 p-3 hover:bg-gray-100 hover:text-primary'>Structured Programming Language</li>
               <li className='cursor-pointer text-gray-500 p-3 hover:bg-gray-100 hover:text-primary'>Digital Logic</li>
               <li className='cursor-pointer text-gray-500 p-3 hover:bg-gray-100 hover:text-primary'>Physics</li>
               <li className='cursor-pointer text-gray-500 p-3 hover:bg-gray-100 hover:text-primary'>Differential Calculas</li>
            </ul>
         </div>

         <div className='col-span-8 grid gap-8 mb-14'>
            <figure>
               <img src={Coffee} alt='course thumbnail' className='' />
            </figure>

            <div className='flex justify-between'>
               <span className='text-primary'>Saifur rahman</span>
               <span>20 - 10 - 2022</span>
            </div>

            <h2 className='bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text text-4xl font-bold'>How to make master class coffee at home</h2>

            <p className='leading-[1.8] font-normal text-gray-500'>Computer science is the study of computation, automation, and information.[1] Computer science spans theoretical disciplines (such as algorithms, theory of computation, information theory, and automation) to practical disciplines (including the design and implementation of hardware and software).[2][3][4] Computer science is generally considered an area of academic research and distinct from computer programming.[5]
               <br /><br />
               Algorithms and data structures are central to computer science.[6] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them. The fields of cryptography and computer security involve studying the means for secure communication and for preventing security vulnerabilities. Computer graphics and computational geometry address the generation of images. Programming language theory considers different ways to describe computational processes, and database theory concerns the management of repositories of data. Human–computer interaction investigates the interfaces through which humans and computers interact, and software engineering focuses on the design and principles behind developing software.
               <br /><br />
               Areas such as operating systems, networks and embedded systems investigate the principles and design behind complex systems. Computer architecture describes the construction of computer components and computer-operated equipment. Artificial intelligence and machine learning aim to synthesize goal-orientated processes such as problem-solving, decision-making, environmental adaptation, planning and learning found in humans and animals. Within artificial intelligence, computer vision aims to understand and process image and video data, while natural language processing aims to understand and process textual and linguistic data.
               <br /><br />
               The fundamental concern of computer science is determining what can and cannot be automated.[7][8][9][10][11] The Turing Award is generally recognized as the highest distinction in computer science.[12][13]</p>
         </div>
      </div>
   )
}

export default Courses