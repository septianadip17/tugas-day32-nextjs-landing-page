import React from 'react'

const Albums = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Our Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Album Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Album Name</h2>
          <p className="text-gray-700 mb-4">Description of the album goes here.</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">View Album</button>
        </div>

        {/* Album Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Album Name</h2>
          <p className="text-gray-700 mb-4">Description of the album goes here.</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">View Album</button>
        </div>

        {/* Album Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Album Name</h2>
          <p className="text-gray-700 mb-4">Description of the album goes here.</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">View Album</button>
        </div>

      </div>
    </div>
  )
}

export default Albums
