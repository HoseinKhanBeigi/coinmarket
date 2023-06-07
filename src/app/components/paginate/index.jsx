import { useState } from 'react';
import Pagination from '../pagination';

export const Paginate = ({ status, dispatch, action }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (pageNumber) => {
    const start = pageNumber * 10 - 10 + 1;
    const query = {
      start,
    };

    action(dispatch, query);
  };
  return (
    <>
      {status === 'success' && (
        <Pagination
          dataPerPage={10}
          getData={5000}
          handleChange={handleChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
