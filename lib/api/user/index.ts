import axiosInstance from "@/lib/common/axios";

export const createUserApi = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/register", {
    name,
    email,
    password,
  });
};

export const loginUserApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/login", {
    email,
    password,
  });
};
