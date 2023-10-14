import React from 'react'

const Massage = () => {
  return (
    <div>
      <div className="max-w-xl mt-20 mx-auto">
  <div className="w-full px-3">
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="grid-password"
    >
      Your Message
    </label>
    <textarea
      rows={10}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      defaultValue={""}
    />
  </div>
  <div className="flex justify-between w-full px-3">
    <div className="md:flex md:items-center">
      <label className="block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">Send me your newsletter!</span>
      </label>
    </div>
    <button
      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
      type="submit"
    >
      Send Message
    </button>
    &nbsp;&nbsp;&nbsp;
  </div>
</div>

    </div>
  )
}

export default Massage
