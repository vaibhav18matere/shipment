import Customer from "../models/customer";
import expresss, {Request, Response, NextFunction} from 'express';

// create customer
export const createCustomer = async (req:Request, res: Response, next:NextFunction) => {
  try {
    const customer = await Customer.create(req.body);

    res.status(201).json({
      success: true,
      customer,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// Get all customers
export const getAllCustomer = async (req:Request, res:Response, next:NextFunction) => {
  const customers = await Customer.find();

  res.status(200).json({
    success: true,
    customers,
  });
};

// // get customer details
export const getCustomerDetails = async (req:Request, res:Response, next:NextFunction) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res
      .status(500)
      .json({ success: false, message: "Customer Not Found" });
  }

  res.status(200).json({
    success: true,
    customer,
  });
};

// // Update customer 
export const updateCustomer = async (req:Request, res:Response, next:NextFunction) => {
  let customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(500).json({
      success: false,
      message: "Customer not Found",
    });
  }

  customer = await Customer.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    customer,
  });
};

// Delete customer
export const deleteCustomer = async (req:Request, res:Response, next:NextFunction) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res
      .status(500)
      .json({ success: false, message: "Customer Not Found" });
  }

  await customer.remove();

  res.status(200).json({
    success: true,
    message: "Customer Deleted Successfully",
  });
};
