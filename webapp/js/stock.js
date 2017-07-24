/**
 * Created by sunholdIng on 2017/7/4.
 */
(function ($) {

    //定义globle数据
    var globle = {
        queryPager: {
            pageSize:20,
            pageNum:1
        }
    };

    var ajax = {

        //获取列表数据
        getDataList: function (data, fn) {
            $.ajax({
                type: 'post',
                url: "http://localhost:8080/mobile/getMobileList.json",
                data: data,
                success: function (result) {
                    if (result.success && $.isFunction(fn)) {
                        fn.call(this, result);
                    }
                }
            });
        }
    };

    var elements = {
        $stockConfirmGrid: $("#stockConfirm-grid"),
        //查询按钮id
        $searchBtn: $("#searchBtn"),
        $importStock: $("#importStockBatchBtn")
    };

    var ajaxs = {
        getDataList: function (params,fn) {
            $.ajax({
                type: 'post',
                url: "http://localhost:8080/mobile/getMobileList.json",
                data: params,
                success: function (result) {
                    if (result.success && $.isFunction(fn)) {
                        fn.call(this, result);
                    }
                    debugger;
                }
            });
        }
    };

    var data = {
        dataNew: [{itemid: 1, productid: 1, listprice: 1, unitcost: 1, attr1: "a", status: "离线"},{itemid: 1, productid: 1, listprice: 1, unitcost: 1, attr1: "a", status: "离线"}]
    };

    var STOCK = {
        eventBind: function () {
            var els = elements;
            //批量导入
            els.$importStock.click(function () {
                console.log("ok");
                alert("导入数据");
            });

            //查询数据
            els.$searchBtn.click(function () {
                /*ajaxs.getDataList("",function (resap) {
                    els.$stockConfirmGrid.datagrid('loadData', {
                       rows:resap.data.rows
                    });
                });*/
                els.$stockConfirmGrid.datagrid('loadData', {
                    rows:data.dataNew
                });

            });

            //列表
            els.$stockConfirmGrid.datagrid({
                title: '库存查询结果',
                remoteSort: false,
                pagination: true,
                //fitColumns: true,
                rownumbers:true,
                fit:true,
                //width:$.clientWidth,
                columns: [[
                    {field: 'itemid', title: 'id',width:30,align: 'center'},
                    {field: 'productid', title: '产品id',width:80,align: 'center'},
                    {field: 'listprice', title: '价格列表',width:80,align: 'center'},
                    {field: 'unitcost', title: 'unitcost',width:80,align: 'center'},
                    {field: 'attr1', title: 'attr1',width:80,align: 'center'},
                    {field: 'status', title: 'Status', width: 100, align: 'center'}
                ]]
            });

        }
    };

    STOCK.eventBind();

})(jQuery);
