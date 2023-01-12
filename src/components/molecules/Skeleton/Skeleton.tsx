import React, { Fragment } from "react";
import { ISkeleton } from "./Skeleton.interface";
export const Skeleton: React.FC<ISkeleton> = ({ length = 5 }) => {
  return (
    <Fragment>
      {Array.from({ length: length }).map((_, index) => (
        <div className="skeleton__wrapper" key={index.toString()}>
          {Array.from({ length: 1 }).map((_, index) => (
            <Fragment key={index}>
              <div className="skeleton__wrapper--entry"></div>
              <div className="skeleton__wrapper--entry"></div>
              <div className="skeleton__wrapper--entry"></div>
              <div className="skeleton__wrapper--entry show"></div>
              <div className="skeleton__wrapper--entry show"></div>
              <div className="skeleton__wrapper--entry show"></div>
            </Fragment>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
