var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4707",
        "ok": "4707",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "736",
        "ok": "736",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1217",
        "ok": "1218",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1724",
        "ok": "1724",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2160",
        "ok": "2161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2881",
        "ok": "2881",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7705,
    "percentage": 39
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2016,
    "percentage": 10
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 10279,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1666.667",
        "ok": "1666.667",
        "ko": "-"
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
        "total": "20000",
        "ok": "20000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4707",
        "ok": "4707",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "736",
        "ok": "736",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1218",
        "ok": "1218",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1724",
        "ok": "1724",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2160",
        "ok": "2161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2881",
        "ok": "2881",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7705,
    "percentage": 39
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2016,
    "percentage": 10
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 10279,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1666.667",
        "ok": "1666.667",
        "ko": "-"
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
