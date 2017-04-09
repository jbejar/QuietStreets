// ==UserScript==
// @name         QuietStreets - Hotwire.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Displays CrimeReports on Travelocity.com website
// @author       You
// @match        https://vacation.hotwire.com/*.Hotel-Information*
// @grant        none
// ==/UserScript==
var onlyRunOnce = false;
$(document).ajaxStop(function () {
    if(onlyRunOnce) {
        return;
    }
    onlyRunOnce = true;
    var address = $("span.street-address:last").text() + " " + $("span.city").text() + ", " + $("span.province:first").text();
    var search = encodeURIComponent(encodeURIComponent(address));
    vals = $("div.map a.map-link figure img:first").attr("src").split(/[=,&]/);
    lat = vals[5];
    lng = vals[6];
    iframe = '<iframe src="https://www.crimereports.com/home/?is_widget=true#!/dashboard?incident_types=Assault%252CAssault%2520with%2520Deadly%2520Weapon%252CBreaking%2520%2526%2520Entering%252CDisorder%252CDrugs%252CHomicide%252CKidnapping%252CLiquor%252COther%2520Sexual%2520Offense%252CProperty%2520Crime%252CProperty%2520Crime%2520Commercial%252CProperty%2520Crime%2520Residential%252CQuality%2520of%2520Life%252CRobbery%252CSexual%2520Assault%252CSexual%2520Offense%252CTheft%252CTheft%2520from%2520Vehicle%252CTheft%2520of%2520Vehicle&start_date=2017-03-25&end_date=2017-04-08&days=sunday%252Cmonday%252Ctuesday%252Cwednesday%252Cthursday%252Cfriday%252Csaturday&start_time=0&end_time=23&include_sex_offenders=false&zoom=16&lat=' +
        lat + '&lng=' + lng + '&current_tab=list&shapeIds=&shape_id=false&date_type=relative&searchText=' + search + '" width="668" height="586" style="border: 1px solid #28566c;"></iframe>';
    $("#hotel-thumbnails").after(iframe);

});