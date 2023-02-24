import React from 'react'

function Complaint() {
  return (
    <div className='col-span-3 w-full mt-[100px] h-auto shadow-xl rounded-xl lg:p-4'>
    <div className='p-4'>
      <form
        action='https://getform.io/f/2652ea4c-11c4-405a-8d7d-a1f5c4ae5175'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>
              Phone Number
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='w-fit p-2 rounded bg-slate-600 text-gray-100 mt-4'>
          Send Message
        </button>
      </form>
    </div>
  </div>
  )
}

export default Complaint