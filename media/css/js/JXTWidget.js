/* Start of Advanced Search */

var IsDynamicWidget = "'1'";

$(document).ready(function () {
    // When you select Profession
    $('#professionID1').change(function () {

        $("#divRoleID1").html("<img src='/images/loading.gif' />");

        var professionID = "";
        $("#professionID1 option:selected").each(function () {
            professionID += $(this).val();
        });

        //alert('You selected: ' + professionID);
        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetRoles",
            data: "{'ProfessionId':" + professionID + ", 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divRoleID1").replaceWith(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divRoleID1").html("It didn't work");
            }
        });

    });

    $('#salaryID1').change(function () {

        var salaryTypeId = "";

        $("#salaryID1 option:selected").each(function () {
            salaryTypeId += $(this).val();
        });

        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetSalaryRangeFrom",
            data: "{'salaryTypeid': '" + salaryTypeId + "','SalaryValueSet': '0;0', 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divSalaryFrom1").html(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divSalaryFrom1").html("It didn't work");
            }
        });

        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetSalaryRangeTo",
            data: "{'salaryTypeid': '" + salaryTypeId + "','SalaryValueSet': '0;0', 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divSalaryTo1").html(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divSalaryTo1").html("It didn't work");
            }
        });
    });

    // When you select Country

    $('#countryID1').change(function () {

        $("#divLocation1").html("<img src='/images/loading.gif' />");

        var countryID = "";
        var defaultLocationID = "-1";

        $("#countryID1 option:selected").each(function () {
            countryID += $(this).val();
        });

        //alert('You selected: ' + professionID);
        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetLocations",
            data: "{'CountryId':" + countryID + ", 'DefaultLocationID':" + defaultLocationID + ", 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divLocation1").html(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divLocation1").html("It didn't work");
            }
        });

        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetAreas",
            data: "{'LocationId':-1, 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divArea1").html(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divArea1").html("It didn't work");
            }
        });

        $.ajax({
            type: "POST",
            cache: false,
            url: "/job/ajaxcalls/ajaxmethods.asmx/GetAreasDropDown",
            data: "{'LocationId':-1, 'IsDynamicWidget':" + IsDynamicWidget + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                // Replace the div's content with the page method's return.
                $("#divAreaDropDown1").html(msg.d);
            },
            fail: function () {
                // Replace the div's content with the page method's return.
                $("#divAreaDropDown1").html("It didn't work");
            }
        });
    });


});

function SalaryFromChange1() {
    var salaryFromId = "";

    $("#salarylowerband1 option:selected").each(function () {
        salaryFromId += $(this).val();
    });

    var salaryTypeId = "";

    $("#salaryID1 option:selected").each(function () {
        salaryTypeId += $(this).val();
    });

    $.ajax({
        type: "POST",
        cache: false,
        url: "/job/ajaxcalls/ajaxmethods.asmx/GetSalaryRangeTo",
        data: "{'salaryTypeid': '" + salaryTypeId + "','SalaryValueSet': '" + salaryFromId + "'" + ", 'IsDynamicWidget':" + IsDynamicWidget + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            // Replace the div's content with the page method's return.
            $("#divSalaryTo1").html(msg.d);
        },
        fail: function () {
            // Replace the div's content with the page method's return.
            $("#divSalaryTo1").html("It didn't work");
        }
    });
}

/* End of Advanced Search */

/* Get Advanced Search Values */
var strValue = '?search=1';
function WidgetJobSearch(url) {
    if (url == null)
        url = '';

    strValue = '?search=1';

    GetValues1("keywords1");
    GetValues1("professionID1");
    GetValues1("roleIDs1");
    GetValues1("countryID1");
    GetValues1("locationID1");
    GetValues1("areaIDs1");
    GetValues1("salaryID1");
    GetValues1("salarylowerband1");
    GetValues1("salaryupperband1");
    GetValues1("workTypeID1");


    if (strValue.indexOf("&", 0) < 1) {
        var str = url + "/advancedsearch.aspx?search=1";
        var load = window.open(str, "_top");
    }
    else {
        var str = url + "/advancedsearch.aspx";
        var finalPage = str + strValue;

        var load = window.open(finalPage, "_top");
    }
}

function GetValues1(variableID) {
    var _value = $.trim($('#' + variableID).val());
    if (_value != "" && _value != "-1" && _value != "0")
        strValue = strValue + "&" + variableID.replace("1", "") + "=" + encodeURIComponent(_value);
}

/* End */

