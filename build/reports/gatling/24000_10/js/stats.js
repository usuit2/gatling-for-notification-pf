var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "24000",
        "ok": "24000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7837",
        "ok": "7837",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2576",
        "ok": "2576",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2455",
        "ok": "2455",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3069",
        "ok": "3069",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4726",
        "ok": "4726",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6658",
        "ok": "6658",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 684,
    "percentage": 3
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1114,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 22202,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1714.286",
        "ok": "1714.286",
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
        "total": "24000",
        "ok": "24000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7837",
        "ok": "7837",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2576",
        "ok": "2576",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2455",
        "ok": "2455",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3069",
        "ok": "3069",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4726",
        "ok": "4726",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6658",
        "ok": "6658",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 684,
    "percentage": 3
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1114,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 22202,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1714.286",
        "ok": "1714.286",
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
