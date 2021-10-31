export const updateItems = ({ itemsNew, itemsCached, nestingKey }) => {
  return itemsNew.map((itemNew) => {
    return {
      ...itemsCached.find(
        (itemCached) => itemCached[nestingKey] === itemNew[nestingKey]
      ),
      ...itemNew,
    };
  });
};

export const updateItem = ({ itemNew, itemsCached, nestingKey }) => {
  return itemsCached.map((el) => {
    if (el[nestingKey] === itemNew[nestingKey]) return itemNew;
    return el;
  });
};

export const findItemNested = (arr, itemId, nestingKey) => {
  return arr.reduce((a, item) => {
    if (a) return a;
    if (+item.id === +itemId) return item;
    if (item[nestingKey])
      return findItemNested(item[nestingKey], itemId, nestingKey);
  }, null);
};

export const deepClone = (val) => JSON.parse(JSON.stringify(val));
