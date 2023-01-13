import React, { Fragment, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "@app/models";
import { UsersContext } from "@app/context";
import { Icon } from "@app/components/atoms";

const BASE_URL =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState(null);
  const { userId } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userStorage = localStorage.getItem(userId);
    if (userStorage) {
      setIsLoading(false);
      setUser(JSON.parse(userStorage));
      return;
    }

    const getUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/${userId}`);
        const data = await res.json();
        setUser(data);
        localStorage.setItem(userId, JSON.stringify(data));
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setError(err?.message);
      }
    };
    getUser();
  }, [userId]);

  return (
    <div className="userDetails__wrapper">
      {error && (
        <div className="loading__wrapper">
          <p className="error-message ">An error occured. Please try again</p>
        </div>
      )}

      {isLoading ? (
        <div className="loading__wrapper">
          <p>Loading...</p>
        </div>
      ) : (
        <Fragment>
          <div
            className="return"
            onClick={() => navigate("/users", { replace: true })}
          >
            <Icon name="arrowLeft" />
            <p>Back to Users</p>
          </div>
          <div className="userDetails__header">
            <p className="page-title">User Details</p>
            <div className="userDetails__header--left">
              <button className="btn--red  mr-2">Blacklist User</button>
              <button className="btn--turquoise">Activate User</button>
            </div>
          </div>

          <div className="main--header">
            <div className="user">
              <div className="image_wrapper">
                <img
                  style={{ width: "10rem", height: "10rem" }}
                  src={user?.profile?.avatar}
                  alt="user"
                  className="userimg"
                />
                <div className="names_wrapper">
                  <p className="user--name">{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
                  <p className="user--id">GLSQFf587g90</p>
                </div>
              </div>
              <div className="user--divider" />
              <div className="names_wrapper">
                <p className="user--timer">User’s Tier</p>
                <div className="start--wrapper">
                  <Icon name="fullStart" />
                  <Icon name="halfStart" />
                  <Icon name="halfStart" />
                </div>
              </div>
              <div className="user--divider" />
              <div className="names_wrapper">
                <p className="user--amount">{`₦${user?.accountBalance}`}</p>
                <p className="user--timer">{`${user?.accountNumber}/Providus Bank`}</p>
              </div>
            </div>
            <div className="pagetabs">
              <p className="pagetabs--heading active">General Details</p>
              <p className="pagetabs--heading inactive">Documents</p>
              <p className="pagetabs--heading inactive">Bank Details</p>
              <p className="pagetabs--heading inactive">Loans</p>
              <p className="pagetabs--heading inactive">Savings</p>
              <p className="pagetabs--heading inactive">App and System</p>
            </div>
          </div>

          <div className="personaldetails">
            <article className="personaldetails--section">
              <p className="personaldetails__heading">Personal Information</p>
              <div className="information grid-col-5">
                <p className="heading--tertiary">Full Name</p>
                <p className="heading--tertiary">Phone Number</p>
                <p className="heading--tertiary">Email Address</p>
                <p className="heading--tertiary hide-items">Bvn</p>
                <p className="heading--tertiary hide-items">Gender</p>
                <p className="heading--secondary mt-2">{`${user?.profile?.firstName} ${user?.profile?.firstName}`}</p>
                <p className="heading--secondary mt-2">{user?.phoneNumber}</p>
                <p className="heading--secondary mt-2">{user?.email}</p>
                <p className="heading--secondary mt-2 hide-items">
                  {user?.profile?.bvn}
                </p>
                <p className="heading--secondary mt-2 hide-items">
                  {user?.profile?.gender}
                </p>
              </div>
              <div className="grid-col-3">
                <p className="heading--tertiary mt-2">Marital status</p>
                <p className="heading--tertiary mt-2">Children</p>
                <p className="heading--tertiary mt-2">Type of residence</p>
                <p className="heading--secondary mt-2">Single</p>
                <p className="heading--secondary mt-2">None</p>
                <p className="heading--secondary mt-2">Parent’s Apartment</p>
              </div>
            </article>
            <article className="personaldetails--section">
              <p className="personaldetails__heading">
                Education and Employment
              </p>
              <div className="information grid-col-4">
                <p className="heading--tertiary ">Level of education</p>
                <p className="heading--tertiary ">employment status</p>
                <p className="heading--tertiary ">sector of employment</p>
                <p className="heading--tertiary hide-items">
                  Duration of employment
                </p>
                <p className="heading--secondary mt-2">
                  {user?.education?.level}
                </p>
                <p className="heading--secondary mt-2">
                  {user?.education?.employmentStatus}
                </p>
                <p className="heading--secondary mt-2">
                  {user?.education?.sector}
                </p>
                <p className="heading--secondary mt-2 hide-items">
                  {user?.education?.duration}
                </p>
              </div>
              <div className="information grid-income">
                <p className="heading--tertiary ">Office email</p>
                <p className="heading--tertiary ">Monthly income</p>
                <p className="heading--tertiary ">Loan repayment</p>
                <p className="heading--secondary mt-2">
                  {user?.education?.officeEmail}
                </p>
                <p className="heading--secondary mt-2">
                  {`₦${user?.education?.monthlyIncome}`}
                </p>
                <p className="heading--secondary mt-2">
                  {user?.education?.loanRepayment}
                </p>
              </div>
            </article>

            <article className="personaldetails--section">
              <p className="personaldetails__heading">Socials</p>
              <div className="information grid-col-3">
                <p className="heading--tertiary ">Twitter</p>
                <p className="heading--tertiary ">Facebook</p>
                <p className="heading--tertiary ">Instagram</p>
                <p className="heading--secondary mt-2">
                  {user?.socials?.twitter}
                </p>
                <p className="heading--secondary mt-2">
                  {user?.socials?.facebook}
                </p>
                <p className="heading--secondary mt-2">
                  {user?.socials?.twitter}
                </p>
              </div>
            </article>
            <article className="personaldetails--section">
              <p className="personaldetails__heading">Guarantor</p>
              <div className="information grid-col-4">
                <p className="heading--tertiary">Full Name</p>
                <p className="heading--tertiary">Phone Number</p>
                <p className="heading--tertiary">Email Address</p>
                <p className="heading--tertiary hide-items">Relationship</p>
                <p className="heading--secondary mt-2">{`${user?.guarantor?.firstName} ${user?.guarantor.lastName}`}</p>
                <p className="heading--secondary mt-2">
                  {user?.guarantor?.phoneNumber}
                </p>
                <p className="heading--secondary mt-2">{`${user?.guarantor?.firstName.toLowerCase()}${user?.guarantor.lastName.toLowerCase()}@gmail.com`}</p>
                <p className="heading--secondary mt-2 hide-items">
                  {user?.guarantor?.gender === "Male" ? "Brother" : "Sister"}
                </p>
              </div>
            </article>
          </div>
        </Fragment>
      )}
    </div>
  );
};
