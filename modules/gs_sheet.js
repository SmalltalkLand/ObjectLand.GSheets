olRuntime.module('ol.gsheets.sheet').requires(['ol.gsheets.base']).toRun(function(c){
olRuntime.subclass.call(Object,'ol.gsheets.Sheet',{
initialize: function(gapi,id){this._gapi = gapi; this._id = id},
get: function(label){return this._gapi.client.sheets.spreadsheets.values.get({spreadsheetId: this._id,range: label})},
    set: function(label,v){return this._gapi.client.sheets.spreadsheets.values.update({spreadsheetId: this._id,range: label,resource: {values: [[v]]}})},
});
    c();
})