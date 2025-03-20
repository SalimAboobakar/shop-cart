import * as yup from "yup";

// Product Schema with  Validation Messages
export const productSchemaValidation = yup.object().shape({
  id: yup.number().required("ID must be number"),
  title: yup.string().min(4).max(20).required("minimum 4 and maximum 20"),
  price: yup.number().required("c. price must be a number and required"),
  images: yup.string().required("mandatory"),
});
