/* eslint-disable react/prop-types */
// import { useState } from 'react'

function DateToData(date) {
  const monthNum = date.length > 0 ? Number(date.slice(5, 7)) : "";
  const year = date.length > 0 ? date.slice(0, 4) : "";
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  return {month: months[monthNum-1], year: year};
}

export default DateToData