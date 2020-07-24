import moment from 'moment';
import {idGenerator, trimToDate} from '../components/util/utils.js'

/**
 * Return: Boolean. Decide whether the item matches the search. Contain Regular Expression "+".
 * @param {*} item A single item from stored products.
 * @param {*} composedObj A composed searching keywords object.
 */
function searchResult(item, composedObj){
  let valid = false;
  for (let key of Object.keys(composedObj)){
    if (composedObj[key] !== "" && composedObj[key] !== undefined){
      if (key === "date") {
        let itemTime = moment(item.createTime);
        let time1 = composedObj[key][0];
        let time2 = composedObj[key][1];
        if (itemTime.isBetween(time1, time2)) {
          valid = true;
        }

      } else {
        let regx = new RegExp(`${composedObj[key]}+`);
        if (regx.test(item[key])){
          valid = true;
        }
      }
    }
  }
  return valid;
}


/**
 * 
 * @param {*} state 
 * @param {*} bool  Boolean
 */
function setVisible(state, bool){
  let newState = state;
  for (let i = 0; i < newState.products.length; i++){
    newState.products[i].visible = bool;
  }
  
  return newState;
}

export default {
  namespace: 'products',
  state: {
    products: [
      { key: "1",
        name: 'dva', 
        id: 1,
        createTime: trimToDate(new Date('August 19, 2020 23:15:30 UTC').toJSON()),
        creator: "A",
        price: 0,
        category: "AAA",
        visible: true,
        place: ["zhejiang", "hangzhou", "xihu"]
      },
      { key: "2",
        name: 'antd', 
        id: 2, 
        createTime: trimToDate(new Date('July 19, 2019 23:15:30 UTC').toJSON()),
        creator: "B",
        price: 0,
        category: "AAA",
        visible: true,
        place: ["zhejiang", "hangzhou", "xihu"]
      },
    ],
  },

  reducers: {
    delete(state, { payload: id }) {
      let result = state.products.filter(item => item.id !== id);
      return Object.assign({}, state, {products: result});
    },

    addNewItem(state, { payload: newItem}) {
      const newId = idGenerator(4);
      const newItemWithId = { ...newItem, id: newId, key: newId.toString()};
      const nextData = state.products.concat(newItemWithId);

      return Object.assign({}, state, { products: nextData });

      // const newResult = Object.assign({}, {...state}, { products: nextData });
      // state.products = newResult;
      // return newResult;
    },

    editItem(state, {payload: editedItem}){
      return Object.assign({}, state, {products: editedItem});
    },

    searchItem(state, {payload: composedObj}){
      let result = setVisible(state, false);
      result = result.products.map(item => {
        item.visible = searchResult(item, composedObj);
        return item;
      })

      return Object.assign({}, state, {products: result});
    },

    cancelSearch(state){
      // document.getElementById("itemName").value = "";
      let newState = setVisible(state, true);
      return Object.assign({}, newState);
    },
  },
};