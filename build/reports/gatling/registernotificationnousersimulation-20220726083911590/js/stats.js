var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15974",
        "ok": "15974",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2249",
        "ok": "2249",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1547",
        "ok": "1547",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2008",
        "ok": "2008",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2642",
        "ok": "2642",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5639",
        "ok": "5639",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7185",
        "ok": "7185",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3997,
    "percentage": 16
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1519,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 19484,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1086.957",
        "ok": "1086.957",
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
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15974",
        "ok": "15974",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2249",
        "ok": "2249",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1547",
        "ok": "1547",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2008",
        "ok": "2008",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2642",
        "ok": "2642",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5639",
        "ok": "5639",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7185",
        "ok": "7185",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3997,
    "percentage": 16
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1519,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 19484,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1086.957",
        "ok": "1086.957",
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
