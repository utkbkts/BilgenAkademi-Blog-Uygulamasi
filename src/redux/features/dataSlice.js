import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const DataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    datas: [
      {
        id: uuidv4(),
        name: "Yapay Zeka ve Gelecek",
        date: "2024-01-10",
        author: "John Doe",
        description:
          "Yapay zeka (AI), hayatımızın her alanında devrim yaratıyor. Bu makalede, AI'nin gelecekte nasıl şekilleneceği ve potansiyel etkileri üzerine detaylı bir inceleme yapıyoruz.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI12_kaA_xfWLVUcPp45zA1BkC-E2lxYG7w&s",
      },
      {
        id: uuidv4(),
        name: "Blockchain Teknolojisi",
        date: "2024-02-15",
        author: "Jane Smith",
        description:
          "Blockchain, sadece kripto para birimleri için değil, aynı zamanda güvenli ve şeffaf veri yönetimi için de devrim niteliğinde bir teknoloji. Blockchain'in farklı sektörlerdeki uygulamaları hakkında bilgi edinin.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJr8-_AGqIEZzvC73j7B3wDlqLzUZWOtmreQ&s",
      },
      {
        id: uuidv4(),
        name: "Nesnelerin İnterneti (IoT)",
        date: "2024-03-20",
        author: "Alice Johnson",
        description:
          "IoT, gündelik nesneleri internetle bağlayarak hayatımızı kolaylaştırıyor. Bu makalede, IoT'nin nasıl çalıştığını ve hayatımıza getirdiği yenilikleri keşfedeceksiniz.",
        url: "https://cdn.mysoft.com.tr/v1/images/nesnelerin-interneti-iot-nedir-ne-ise-yarar-nesnelerin-interneti-kullanim-alanlari-nelerdir_1.webp",
      },
      {
        id: uuidv4(),
        name: "5G Teknolojisi",
        date: "2024-04-25",
        author: "Bob Brown",
        description:
          "5G, mobil iletişimde devrim yaratıyor. Bu makalede, 5G'nin sunduğu yenilikler ve avantajları hakkında kapsamlı bir analiz sunuyoruz.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVPpZMp30aoXusy0V7Js0KNzQt9f-69sB1A&s",
      },
      {
        id: uuidv4(),
        name: "Siber Güvenlik",
        date: "2024-05-30",
        author: "Charlie Davis",
        description:
          "Dijital dünyada güvenlik, her zamankinden daha önemli. Siber güvenlik önlemleri ve stratejileri hakkında bilgilendirici bir makale.",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnIGRh6-5TunpO8cn3XS-IWNqmprhfzsU2Q&s",
      },
      {
        id: uuidv4(),
        name: "Yazılım Geliştirme Trendleri",
        date: "2024-06-05",
        author: "Dana Evans",
        description:
          "Yazılım geliştirme dünyasında en son trendler ve yenilikler. Bu makalede, 2024'te yazılım geliştirme alanında neler bekleyebileceğinizi öğrenin.",
        url: "https://www.pazarlamasyon.com/wp-content/uploads/2023/01/17/yazilim-gelistirmede-2023-un-en-onemli-trendleri.jpg",
      },
      {
        id: uuidv4(),
        name: "Bulut Bilişim",
        date: "2024-07-10",
        author: "Eve Foster",
        description:
          "Bulut bilişim, verilerin güvenli ve erişilebilir olmasını sağlıyor. Bulut bilişimin avantajları ve uygulamaları hakkında detaylı bilgi.",
        url: "https://turk.net/blog/wp-content/uploads/bulut-bilisim-cloud-computing-nedir-2x.jpg",
      },
      {
        id: uuidv4(),
        name: "Giyilebilir Teknolojiler",
        date: "2024-08-15",
        author: "Frank Green",
        description:
          "Giyilebilir cihazlar, sağlık ve fitness'tan eğlenceye kadar birçok alanda kullanılabiliyor. Bu makalede, giyilebilir teknolojilerin güncel durumu ve geleceği inceleniyor.",
        url: "https://fikrimulkiyet.com/wp-content/uploads/2022/08/giyilebilir-teknolojiler-calisma-hayatina-konformu-getiriyor-fikrimulkiyet.com-av.taner-sevim.jpg",
      },
      {
        id: uuidv4(),
        name: "Robotik ve Otomasyon",
        date: "2024-09-20",
        author: "Grace Harris",
        description:
          "Robotlar ve otomasyon sistemleri, endüstriyel süreçleri dönüştürüyor. Robotik teknolojilerin çalışma prensipleri ve uygulama alanları hakkında bilgi.",
        url: "https://www.yapikredi.com.tr/medium/image/robotik-otomasyon-ve-uretimin-gelecegi_68490/view",
      },
      {
        id: uuidv4(),
        name: "Sanal Gerçeklik (VR) ve Artırılmış Gerçeklik (AR)",
        date: "2024-10-25",
        author: "Henry White",
        description:
          "VR ve AR teknolojileri, kullanıcı deneyimini farklı bir boyuta taşıyor. Bu makalede, VR ve AR'nin mevcut uygulamaları ve gelecekteki potansiyeli ele alınıyor.",
        url: "https://www.cioupdate.com.tr/wp-content/uploads/2021/09/sanal-gerceklik.jpeg",
      },
    ],
    data: {
      name: "",
      author: "",
      date: "",
      description: "",
      image: "",
    },
  },
  reducers: {
    getData: (state, action) => {
      state.data = state.datas.find((item) => item.id === action.payload);
    },
    addData: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.datas = [newData, ...state.datas];
    },
    deleteData: (state, action) => {
      state.datas = state.datas.filter((item) => item.id !== action.payload);
    },
    updateData: (state, action) => {
      state.datas = state.datas.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addData, deleteData, updateData, getData } = DataSlice.actions;
export default DataSlice.reducer;
