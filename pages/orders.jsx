import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {data} from '../data/data'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
            <h2>Orders</h2>
            <h2>Hello, Laith</h2>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Order</span>
                    <span className='sm:text-left text-right'>Status</span>
                    <span className='hidden md:grid'>Last Order</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                    <FaShoppingBag className='text-purple-800' />
                                </div>
                                <div className='pl-4 text-gray-800'>
                                    <p className=' font-bold'>${order.total.toLocaleString()}</p>
                                    <p className='text-sm'>{order.name.first}</p>
                                </div>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>
                                <span className={`p-2 rounded-lg ${order.status == 'Processing' ? 'bg-green-200' : order.status == 'Completed' ? 'bg-blue-200' : 'bg-yellow-200'}`}>
                                {order.status}
                                </span>
                            </p>
                            <p className='md:flex hidden'>{order.date}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{order.method}</p>
                                <BsThreeDotsVertical />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
{/* <div>
        <div className='bg-gray-100 min-h-screen'>
            <div>
                <div className='flex justify-between  p-4'>
                    <p>Orders</p>
                    <p>Hello, Laith</p>
                </div>
                <div className='m-4'>
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='grid grid-cols-4 py-3'>
                             <p>Order</p>
                             <p>Status</p>
                             <p>Last Order</p>
                             <p>Method</p>
                        </div>
                
                        <div>
                            {data.map((order, id) => (
                             <div key={id} className='my-2 p-2 bg-gray-100 rounded-lg grid grid-cols-4 items-center'>
                                <div className='  flex items-center'>
                                    <div className='bg-blue-200 p-2 rounded-lg'>
                                <FaShoppingBag className='text-blue-500 text-center'/>

                                    </div>
                                <div className='pl-4'>
                                    <p className='font-bold'>{order.total}</p>
                                    <p className='text-gray-400 text-sm'>{order.name.first}</p>
                                </div>
                                </div>
                                <div className='flex'>
                                    <p className={`text-sm  px-2 py-1.5 rounded-lg ${order.status === 'Completed' ? 'bg-blue-300' : 'bg-yellow-100'} ${order.status === 'Processing' ? 'bg-green-300': ''}`}>{order.status}</p>
                                </div>
                                <div>
                                    <p>{order.date}</p>
                                </div>
                                <div>
                                    <p>{order.method}</p>                                   
                                </div>
                             </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
export default orders