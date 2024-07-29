import "../../styles/Create.css";
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
    placeholder: "Tarih ismi giriniz.",
    name: "date",
  },
];

const AddNewBlog = ({ handleSubmit, form, setForm, handleClose }) => {
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  function onSubmit(e) {
    e.preventDefault();

    handleSubmit(form);
    console.log(form);
  }
  return (
    <div className="container_blogs">
      <div className="modal_overlay" onClick={handleClose}></div>
      <div className="create_wrapper">
        <div className="blog_form">
          <h1>Post Ekle</h1>
          <form onSubmit={onSubmit}>
            {productInputs.map((input, index) => (
              <ProductInput
                handleChange={handleChange}
                value={form[input.name]}
                key={index}
                {...input}
              />
            ))}
            <button type="submit" size="md" color="primary">
              Oluştur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
