import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-l-md hover:bg-gray-300"
        >
          Sebelumnya
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 ${
              currentPage === page + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            } font-semibold hover:bg-blue-600 hover:text-white`}
          >
            {page + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-r-md hover:bg-gray-300"
        >
          Selanjutnya
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
