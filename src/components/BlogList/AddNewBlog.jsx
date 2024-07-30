import toast from "react-hot-toast";
import "../../styles/Create.css";
import Button from "../ui/Button";
import ProductInput from "./ProductInput";

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
    placeholder: "Tarih giriniz.",
    name: "date",
  },
];

const AddNewBlog = ({
  handleSubmit,
  form,
  setForm,
  handleClose,
  productToUpdate,
  setProductToUpdate,
  setProducts,
  setIsShowModal,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(form).every(
      (value) => String(value).trim() !== ""
    );

    if (!isFormValid) {
      toast.error("Tüm alanları doldurunuz");
      return;
    }

    if (productToUpdate) {
      setProducts((products) =>
        products.map((item) =>
          item.id === productToUpdate.id
            ? { ...form, id: productToUpdate.id }
            : item
        )
      );
      toast.success("Blog başarıyla güncellendi");
      setProductToUpdate(null);
    } else {
      handleSubmit(form);
      toast.success("Blog başarıyla oluşturuldu");
    }

    setIsShowModal(false);
    handleClose();
  };
  return (
    <div className="container_blogs">
      <div className="modal_overlay" onClick={handleClose}></div>
      <div className="create_wrapper">
        <div className="blog_form">
          <h1>{productToUpdate ? "Blog Güncelle" : "Yeni Blog Ekle"}</h1>
          <form onSubmit={onSubmit}>
            {productInputs.map((input, index) => (
              <ProductInput
                handleChange={handleChange}
                value={form[input.name]}
                key={index}
                {...input}
              />
            ))}
            <Button type="submit" size="md" color="primary">
              {productToUpdate ? "Güncelle" : "Oluştur"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
