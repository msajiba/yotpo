'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    return params.toString()
  }

  const handlePageChange = (page: number) => {
    router.push(`?${createQueryString(page)}`)
  }

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage <= 1
            ? 'bg-gray-200 text-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Previous
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage >= totalPages
            ? 'bg-gray-200 text-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Next
      </button>
    </div>
  )
}
