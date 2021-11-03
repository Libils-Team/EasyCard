export const products = [
  {
    id: 1,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
    imageGalery: null,
    lates: false,
    priceCurrent: 500,
    priceFrom: false,
    priceOld: "",
    productCategory: {},
    sale: false,
    saleCount: "",
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 2,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: false,
    priceCurrent: 500,
    priceFrom: false,
    priceOld: "",
    productCategory: {
      id: 10,
    },
    sale: false,
    saleCount: "",
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 3,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/RRqNSJshQtQ/fit/440/0/ce/1/plain/images/products/1/3137/434785345/large_10.jpg",
    imageGalery: null,
    lates: false,
    priceCurrent: 500,
    priceFrom: false,
    priceOld: "",
    productCategory: {
      id: 10,
    },
    sale: false,
    saleCount: "",
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 4,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/SXHRKQ75lQw/fit/440/0/ce/1/plain/images/products/1/3253/434785461/large_24.jpg",
    imageGalery: null,
    lates: true,
    priceCurrent: 500,
    priceFrom: true,
    priceOld: 4300,
    productCategory: {
      id: 10,
    },
    sale: false,
    saleCount: 50,
    shortTitle: "Какой то короткий заголовок",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
];
export const categories = [
  {
    id: 10,
    title: "main",
    dropdownMenu: null,
    mainCategory: true,
  },
];
export const getTempProducts = (ids) => {
  const pt = [];
  ids.forEach((el1) => {
    let temp = products.find((el2) => {
      return +el2.id === +el1;
    });
    if (temp) pt.push(temp);
  });
  return pt;
};
export const getTempCategoryById = ({ categoryId }) => {
  return products.filter((el) => +el.productCategory.id === +categoryId);
};
