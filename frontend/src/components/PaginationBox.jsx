import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

export const PaginationBox = ({
  wrapperClassName = "",
  onPageChange,
  pageCount,
  currentPage,
}) => {
  const handlePageChange = (page) => {
    onPageChange(page.selected + 1);
  };
  return (
    <div className={wrapperClassName}>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        className="flex items-center"
        activeClassName="bg-blue-600"
        activeLinkClassName="!text-white"
        breakClassName="flex items-center justify-center w-10 h-10 m-0 p-0"
        breakLinkClassName="text-black"
        nextLabel={
          <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center transition duration-200 hover:bg-gray-300 ml-4">
          <ChevronRight
            className="flex items-center justify-center  leading-none text-black"
          />
          </div>
        }
        previousLabel={
          <div className="rounded-full w-10 h-10 bg-gray-200 mr-4 flex items-center justify-center transition duration-200 hover:bg-gray-300">
          <ChevronLeft
            className="flex items-center justify-center  leading-none text-black"
            size={16}
          />
          </div>
        }
        pageClassName="flex items-center justify-center w-10 h-10 rounded-full p-0 mx-1"
        pageLinkClassName="flex items-center justify-center w-10 h-10 p-0 m-0 text-black text-base !font-normal"
      />
    </div>
  );
};
