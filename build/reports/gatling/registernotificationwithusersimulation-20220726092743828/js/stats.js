var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1075",
        "ok": "1075",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles1": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles2": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "percentiles3": {
        "total": "580",
        "ok": "580",
        "ko": "-"
    },
    "percentiles4": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9986,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "909.091",
        "ok": "909.091",
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1075",
        "ok": "1075",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles1": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles2": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "percentiles3": {
        "total": "580",
        "ok": "580",
        "ko": "-"
    },
    "percentiles4": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9986,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "909.091",
        "ok": "909.091",
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
