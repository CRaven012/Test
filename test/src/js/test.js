
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise',
'ojs/ojdatagrid', 'ojs/ojarraydatagriddatasource'],
function(oj, ko, $)
{
    $(document).ready(
        function()
        {
            ko.applyBindings({dataSource: new oj.ArrayDataGridDataSource([
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9']
            ])}, document.getElementById('datagrid'));
        }
    );
});