import React, { useState } from "react";
import Button from "../ui/Button";
import "../../styles/Create.css";
import ProductInput from "./ProductInput";
import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productInputs = [
  {
    label: "name",
    type: "text",
    placeholder: "Blog ismi giriniz.",
    name: "name",
  },
  {
    label: "Image Url",
    type: "url",
    placeholder: "Blog görseli giriniz.",
    name: "image",
  },
  {
    label: "Description*",
    type: "text",
    placeholder: "Blog açıklaması giriniz.",
    name: "description",
  },
  {
    label: "Author",
    type: "text",
    placeholder: "Yazar ismi giriniz.",
    name: "author",
  },
  {
    label: "Date",
    type: "date",
    placeholder: "Tarih ismi giriniz.",
    name: "date",
  },
];

const AddNewBlog = ({
  productData,
  setProductData,
  productToUpdate,
  setProducts,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const schema = z.object({
    name: z.string().min(1, "zorunlu alan"),
    image: z.string().url("geçerli bir URL olmalı"),
    description: z.string().min(1, "zorunlu alan"),
    author: z.string().min(1, "zorunlu alan"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "geçerli bir tarih olmalı",
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: productData,
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    if (productToUpdate) {
      setProducts((products) =>
        products.map((item) =>
          item.id === productToUpdate.id
            ? { ...data, id: productToUpdate.id }
            : item
        )
      );
      toast.success("Başarıyla Güncellendi");
    } else {
      const newProduct = { ...data, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
      console.log("Yeni Ürün:", newProduct);
      toast.success("Yeni Ürün Eklendi");
    }
    reset();
  };
  return (
    <div className="container_blogs">
      <div className="create_wrapper">
        <div className="blog_form">
          <h1>Post Ekle</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {productInputs.map((input, index) => (
              <Controller
                key={index}
                name={input.name}
                control={control}
                render={({ field }) => (
                  <ProductInput
                    {...input}
                    {...field}
                    handleChange={(e) => field.onChange(e.target.value)}
                    value={field.value || ""}
                    error={errors[input.name]?.message}
                  />
                )}
              />
            ))}
            {productToUpdate ? (
              <Button size="lg" color="primary">
                Ürünü Güncelle
              </Button>
            ) : (
              <Button size="lg" color="success">
                Yeni Ürün Ekle
              </Button>
            )}
          </form>
          {isShowModal && (
            <Modal
              setIsShowModal={setIsShowModal}
              title="Form Kontrol"
              desc="Input alanları boş geçilemez!"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
