import React from "react";
import moment from "moment";
export const dateFormatter = ( timestamp:any,format="DD/MM/YYYY" ) => {
    // Format the date using Moment.js
    const formattedDate = moment(timestamp).format(format);
  
    return formattedDate;
  };
  