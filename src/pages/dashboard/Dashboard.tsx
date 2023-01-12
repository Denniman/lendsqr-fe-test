import React, { useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { useFetch } from "@app/hooks";
import { DataTable, MetricsCard, Skeleton } from "@app/components/molecules";
import { Select } from "@app/components/atoms";

const BASE_URL =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const Dashboard = () => {
  const [usersPerPage] = useState(10);
  const { data, isLoading, error } = useFetch(BASE_URL);
  const [currentPage, setCurrentPage] = useState(1);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUsersIndex = lastUserIndex - usersPerPage;
  const currentUsers = data?.slice(firstUsersIndex, lastUserIndex);
  const pageCount = firstUsersIndex + Number(currentUsers?.length);

  return (
    <div className="dashboard">
      <p className="page-title">Dashboard</p>
      <div className="metrics__wrapper">
        <MetricsCard type="users" title="Users" stat="2,453" />
        <MetricsCard type="activeUsers" title="Active Users" stat="2,453" />
        <MetricsCard type="loanUsers" title="Users with Loans" stat="12,453" />
        <MetricsCard
          stat="102,453"
          type="savingsUsers"
          title="Users with Savings"
        />
      </div>
      <div className="table__wrapper">
        <div className="table__header">
          <div className="table__header--item">
            <p className="table__title">Organization</p>
            <RiFilter3Line className="filter--icon" />
          </div>
          <div className="table__header--item">
            <p className="table__title">Username</p>
            <RiFilter3Line className="filter--icon" />
          </div>

          <div className="table__header--item ">
            <p className="table__title">Email</p>
            <RiFilter3Line className="filter--icon" />
          </div>
          <div className="table__header--item show">
            <p className="table__title">Phone number</p>
            <RiFilter3Line className="filter--icon" />
          </div>
          <div className="table__header--item show">
            <p className="table__title">Date joined</p>
            <RiFilter3Line className="filter--icon" />
          </div>
          <div className="table__header--item show">
            <p className="table__title">Status</p>
            <RiFilter3Line className="filter--icon" />
          </div>
        </div>

        {error && (
          <div className="error">
            <p>{`Error: ${error}`}</p>
          </div>
        )}

        {isLoading && <Skeleton length={6} />}
        {currentUsers?.map((users) => (
          <DataTable key={users.id} {...users} onViewDetails={() => {}} />
        ))}
      </div>
      <div className="table__footer">
        <div className="table__footer--left">
          <div className="table__footer--dropdownText">
            Showing
            <Select data={pageCount || 0} />
          </div>
          <p className="table__footer--outOf">out of {data?.length || 0}</p>
        </div>
        <div className="table__footer--pagination">
          <button
            className="pagination--btn"
            disabled={firstUsersIndex === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <MdKeyboardArrowLeft />
          </button>
          <div className="pageBtn " onClick={() => setCurrentPage(1)}>
            1
          </div>
          <div className="pageBtn " onClick={() => setCurrentPage(2)}>
            2
          </div>
          <div className="pageBtn " onClick={() => setCurrentPage(3)}>
            3
          </div>

          <BiDotsHorizontalRounded />

          <p>15</p>
          <p>16</p>
          <button
            className="pagination--btn"
            disabled={pageCount === data?.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
