import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export default function Pagination({
    pathname,
    items,
    itemCount,
    setShownCourses,
}) {
    const [pageCount, setPageCount] = useState(null);
    const { page } = useParams();

    useEffect(() => {
        let endIndex = itemCount * page;
        let startIndex = endIndex - itemCount;
        let paginatedItems = items.slice(startIndex, endIndex);
        setShownCourses(paginatedItems);

        let pageNumber = Math.ceil(items.length / itemCount);
        setPageCount(pageNumber);
    }, [page, items]);
    return (
        <div >
            <ul >
                {Number(page) !== 1 && (
                    <li >
                        <Link
                            to={`${pathname}/${Number(page) - 1}`}
                        >
                            {/* <i class='fas fa-long-arrow-alt-right courses__pagination-icon'></i> */}
                        </Link>
                    </li>
                )}

                {Array(pageCount)
                    .fill(0)
                    .map((item, index) => (
                        <li >
                            {index + 1 === Number(page) ? (
                                <Link
                                    to={`${pathname}/${index + 1}`}
                                >
                                    {index + 1}
                                </Link>
                            ) : (
                                <Link
                                    to={`${pathname}/${index + 1}`}
                                >
                                    {index + 1}
                                </Link>
                            )}
                        </li>
                    ))}

                {Number(page) !== pageCount && (
                    <li >
                        <Link
                            to={`${pathname}/${Number(page) + 1}`}
                        >
                            {/* <i class='fas fa-long-arrow-alt-left courses__pagination-icon'></i> */}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
