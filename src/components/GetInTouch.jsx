import { Mail, MapPinCheckInside, Phone } from 'lucide-react'
import React from 'react'

const GetInTouch = () => {
  return (
    <>
        <div className='bg-black py-16 px-5'>
                <div className='pb-16'>
                    <h1 className='text-3xl pb-3 font-bold text-center '>Get In <span className='text-purple-400'>Touch</span></h1>
                    <p className='text-center'>Have a project in mind or want to collaborate? Let's talk!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label className='block text-gray-300 mb-2' htmlFor="">Your Name</label>
                                <input id='name' className='w-full bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2' htmlFor="">Email Address</label>
                                <input id='name' className='w-full bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email" />
                            </div>
                            <div>
                                <label className='block text-gray-300 mb-2' htmlFor="">Your Message</label>
                                <textarea name="" rows={5} className='w-full bg-gray-800 border border-dark-400 rounded-lg px-4 py-3 outline-none' id="message"></textarea>
                            </div>
                            <div>
                                <button type='submit' className="w-full px-6 py-3 bg-purple-800 rounded-lg font-medium hover:bg-purple-700 transition-colors">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {/* Location */}
                        <div className='flex items-start pb-8'>
                            <div className='text-accent-purple text-2xl mr-4'>
                                <MapPinCheckInside />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Pune</p>
                            </div>
                        </div>
                        {/* Email */}
                        <div className='flex items-start pb-8'>
                            <div className='text-accent-purple text-2xl mr-4'>
                                <Mail />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>somanathkakade5@gmail.com</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className='flex items-start pb-8'>
                            <div className='text-accent-purple text-2xl mr-4'>
                                <Phone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>7620073686</p>
                            </div>
                        </div>
                        {/* Icons */}
                        {/* <div>
                                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                                <div className='flex space-x-4'>
                                    <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-accent-purple hover:bg-purple hover:text-white transition-colors'>

                                    </a>
                                </div>
                        </div> */}
                    </div>
                </div>
            </div >
    </>
  )
}

export default GetInTouch