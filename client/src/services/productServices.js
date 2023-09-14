import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../api/axios";

// Gọi API lấy thông tin tất cả product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await instance.get("products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
); // tên đối tượng đang làm/ tên hàm

// Gọi API xóa thông tin 1 product theo id
export const deleteById = createAsyncThunk(
  "product/deleteById",
  async (productId) => {
    try {
      await instance.delete(`products/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

// API thêm mới sản phẩm
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productUp) => {
    try {
      const response = await instance.post("products", productUp);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// API sửa sản phẩm
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (productEdit) => {
    try {
      const response = await instance.put(
        `products/${productEdit.id}`,
        productEdit
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
