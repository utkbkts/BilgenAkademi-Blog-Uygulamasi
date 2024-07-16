import React, { useEffect, useState } from "react";
import "../../styles/Create.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaLeftLong } from "react-icons/fa6";
import { addData, getData, updateData } from "../../redux/features/dataSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const AddNewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.data);
  const [form, setForm] = useState({
    name: "",
    author: "",
    description: "",
    url: "",
    date: "",
  });
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getData(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (data && id) {
      setForm({ ...data });
    }
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.author ||
      !form.date ||
      !form.description ||
      !form.url
    ) {
      toast.error("Lütfen alanları doldurunuz");
    } else {
      if (!id) {
        dispatch(addData(form));
        toast.success("İşlem başarılı");
        navigate("/");
      } else {
        dispatch(updateData(form));
        navigate("/");
        toast.success("Güncelleme başarılı");
      }
    }
  };

  return (
    <div className="container_blogs">
      <Link className="Left" to={"/"}>
        <FaLeftLong size={32} color="white" />
      </Link>
      <div className="create_wrapper">
        <div className="blog_form">
          <h1>{!id ? "Yeni Blog Oluştur" : "Postu Güncelle"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <Input
                label="Blog İsmi"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_container">
              <Input
                label="Yazar ismi"
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
              />
            </div>
            <div className="input_container">
              <TextArea
                label="Açıklama"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <div className="input_container">
              <Input
                label="Resim Url"
                type="url"
                name="url"
                value={form.url}
                onChange={handleChange}
              />
            </div>
            <div className="input_container">
              <Input
                label="Tarih"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
            <Button type={"submit"} size="md" color="primary">
              {!id ? "Oluştur" : "Güncelle"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
