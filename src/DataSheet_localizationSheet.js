import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_476009";
    item['en'] = "Paste";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text_938607";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_1046795";
    item['en'] = "SHOW";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_667176";
    item['en'] = "BACK";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
