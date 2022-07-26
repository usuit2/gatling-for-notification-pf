var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4000",
        "ok": "3937",
        "ko": "63"
    },
    "minResponseTime": {
        "total": "31",
        "ok": "31",
        "ko": "4132"
    },
    "maxResponseTime": {
        "total": "7658",
        "ok": "7658",
        "ko": "6724"
    },
    "meanResponseTime": {
        "total": "930",
        "ok": "861",
        "ko": "5237"
    },
    "standardDeviation": {
        "total": "1567",
        "ok": "1479",
        "ko": "597"
    },
    "percentiles1": {
        "total": "73",
        "ok": "71",
        "ko": "5090"
    },
    "percentiles2": {
        "total": "979",
        "ok": "947",
        "ko": "5714"
    },
    "percentiles3": {
        "total": "5174",
        "ok": "5029",
        "ko": "6280"
    },
    "percentiles4": {
        "total": "6254",
        "ok": "6233",
        "ko": "6589"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2760,
    "percentage": 69
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 423,
    "percentage": 11
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 754,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 63,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "266.667",
        "ok": "262.467",
        "ko": "4.2"
    }
},
contents: {
"req_notification-pf-0817f": {
        type: "REQUEST",
        name: "notification-pf-register",
path: "notification-pf-register",
pathFormatted: "req_notification-pf-0817f",
stats: {
    "name": "notification-pf-register",
    "numberOfRequests": {
        "total": "4000",
        "ok": "3937",
        "ko": "63"
    },
    "minResponseTime": {
        "total": "31",
        "ok": "31",
        "ko": "4132"
    },
    "maxResponseTime": {
        "total": "7658",
        "ok": "7658",
        "ko": "6724"
    },
    "meanResponseTime": {
        "total": "930",
        "ok": "861",
        "ko": "5237"
    },
    "standardDeviation": {
        "total": "1567",
        "ok": "1479",
        "ko": "597"
    },
    "percentiles1": {
        "total": "73",
        "ok": "71",
        "ko": "5090"
    },
    "percentiles2": {
        "total": "979",
        "ok": "947",
        "ko": "5714"
    },
    "percentiles3": {
        "total": "5174",
        "ok": "5029",
        "ko": "6280"
    },
    "percentiles4": {
        "total": "6254",
        "ok": "6233",
        "ko": "6589"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2760,
    "percentage": 69
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 423,
    "percentage": 11
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 754,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 63,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "266.667",
        "ok": "262.467",
        "ko": "4.2"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
