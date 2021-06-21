# React Native GoogleSheet I18n Practice

## Google script : 

```
function doGet() {
  var content = getSheetData();
  var contentObject = {GoogleSheetData: content}
  return ContentService.createTextOutput(JSON.stringify(contentObject) ).setMimeType(ContentService.MimeType.JSON); 
}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('DATA'); 
  var dataRange = dataSheet?.getDataRange();
  var dataValues = dataRange?.getValues();  
  return dataValues;
}
```

## Usage

1. Clone repository

```
  git clone https://github.com/thiendangit/RN-GoogleSheet-I18n-Practice.git
```

2. Cd into directory

```
  cd RN-GoogleSheet-I18n-Practice/
```

3. Install dependencies using npm

```
  npm i or yarn install
```

4. Pod install

```
  npm run pod
```

5. Run device

```
  npm run ios or yarn ios
  OR
  npm run android or yarn android
```

6.Edit excel file 

```
https://docs.google.com/spreadsheets/d/1D_xe0FY60htm7NgzvwAs1LNQhCxucqcTNADTOIcfBZg/edit#gid=0
```

6. Generate language json file : 

```
npm run generateLanguagesJson
```

## Set up your GoogleSheet

Follow this : 

```
https://www.youtube.com/watch?v=GzXoIviIVRY&ab_channel=CodeWithCurtCodeWithCurt
```
