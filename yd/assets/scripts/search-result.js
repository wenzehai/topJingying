/*
 * @Author: Administrator
 * @Date:   2017-06-26 19:44:30
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-06-26 19:48:23
 */

'use strict';
$(function(argument) {
    // body...
    $('.btn-primary').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('#main-content').html('<div class="search_result_top clearfix">' +
            '<div class="clearfix"><i class="icon_return"></i>' +
            '<h3>搜索结果</h3>' +
            '</div>' +
            '</div>' +
            '<div class="search_result_content">' +
            '<div class="contacts">' +
            '<h4>联系人</h4>' +
            '<table>' +
            '<thead>' +
            '<tr class="row">' +
            '<th class="col-md-1">操作</th>' +
            '<th class="col-md-2">姓名</th>' +
            '<th class="col-md-2">电话</th>' +
            '<th class="col-md-2">生日</th>' +
            '<th class="col-md-2">标签</th>' +
            '<th class="col-md-3">其他</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '<div class="policy">' +
            '<h4>保单</h4>' +
            '<table>' +
            '<thead>' +
            '<tr class="row">' +
            '<th class="col-md-1">操作</th>' +
            '<th class="col-md-2">姓名</th>' +
            '<th class="col-md-2">电话</th>' +
            '<th class="col-md-2">生日</th>' +
            '<th class="col-md-2">标签</th>' +
            '<th class="col-md-3">其他</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '<div class="type_of_insurance">' +
            '<h4>险种</h4>' +
            '<table>' +
            '<thead>' +
            '<tr class="row">' +
            '<th class="col-md-1">操作</th>' +
            '<th class="col-md-2">姓名</th>' +
            '<th class="col-md-2">电话</th>' +
            '<th class="col-md-2">生日</th>' +
            '<th class="col-md-2">标签</th>' +
            '<th class="col-md-3">其他</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '<tr class="row">' +
            '<td class="col-md-1">背景图</td>' +
            '<td class="col-md-2">分红险</td>' +
            '<td class="col-md-2">12312312312</td>' +
            '<td class="col-md-2">2000-00-00</td>' +
            '<td class="col-md-2">xxxxxx</td>' +
            '<td class="col-md-3">备注</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>    ' +
            '</div>' +
            '</div>');
    });
})
