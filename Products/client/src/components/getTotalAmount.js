import axios from "axios";
import { useRef, useState, useEffect } from "react";

const getTotalAmount = function (items) {
  let total = 0;
  items.map((item, key) => {
    total += item.unit * item.quantity;
  });
  return total;
};

export default getTotalAmount;
