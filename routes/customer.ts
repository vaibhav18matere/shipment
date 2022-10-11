import express from "express";

import {
  createCustomer,
  getCustomerDetails,
  updateCustomer,
  deleteCustomer,
  getAllCustomer,
} from "../controllers/customer";
const router = express.Router();

router.route("/customer").post(createCustomer);
router.route("/customers").get(getAllCustomer);
router
  .route("/customer/:id")
  .get(getCustomerDetails)
  .put(updateCustomer)
  .delete(deleteCustomer);

export { router };
