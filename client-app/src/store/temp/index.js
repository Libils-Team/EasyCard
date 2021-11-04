const random = (tf = false, sale = false) => {
  if (tf) return !!Math.round(Math.random());
  if (sale) return Math.floor(Math.random() * (100 - 1)) + 1;
  return Math.floor(Math.random() * (100000 - 1000)) + 1000;
};
export const products = [
  {
    id: 1,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 10,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 2,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 10,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 3,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 10,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },

  {
    id: 4,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 11,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 5,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 11,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 6,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 11,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },

  {
    id: 7,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 12,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 8,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 12,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 9,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 12,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },

  {
    id: 10,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 13,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 11,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 13,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
  {
    id: 12,
    code: 1,
    description: "test",
    image:
      "https://static-sl.insales.ru/r/xLcR06VC4QU/fit/440/0/ce/1/plain/images/products/1/3030/434785238/large_27.jpg",
    imageGalery: null,
    lates: random(true),
    priceCurrent: random(),
    priceFrom: random(true),
    priceOld: random(),
    productCategory: {
      id: 13,
    },
    sale: random(true),
    saleCount: random(false, true),
    shortTitle: "",
    specifications: "",
    title: "Какой то интересный и длинный заголовок товара",
  },
];
export const categories = [
  {
    id: 10,
    label: "Нижняя одежда",
    dropdownMenu: [
      {
        id: 11,
        label: "Джинсы",
        dropdownMenu: null,
        mainCategory: false,
      },
    ],
    mainCategory: true,
  },
  {
    id: 12,
    label: "Верхняя одежда",
    dropdownMenu: [
      {
        id: 13,
        label: "Свитшоты",
        dropdownMenu: null,
        mainCategory: false,
      },
    ],
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
