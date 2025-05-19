/**
 * Εμφανίζει το HTML frontend από το αρχείο `index`
 */
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Καταγραφή Καθαρισμών')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Καταγράφει τον τύπο καθαρισμού στο φύλλο `Καταγραφές`
 * @param {string} action
 */
function recordCleaning(action) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Καταγραφές')
              || ss.insertSheet('Καταγραφές');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Ημερομηνία/Ώρα', 'Τύπος Καθαρισμού']);
  }
  sheet.appendRow([new Date(), action]);
}