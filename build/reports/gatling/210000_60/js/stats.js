var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21000",
        "ok": "18874",
        "ko": "2126"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "3756"
    },
    "maxResponseTime": {
        "total": "16612",
        "ok": "15996",
        "ko": "16612"
    },
    "meanResponseTime": {
        "total": "1487",
        "ok": "1045",
        "ko": "5410"
    },
    "standardDeviation": {
        "total": "2082",
        "ok": "1669",
        "ko": "995"
    },
    "percentiles1": {
        "total": "613",
        "ok": "70",
        "ko": "5377"
    },
    "percentiles2": {
        "total": "2283",
        "ok": "1029",
        "ko": "5892"
    },
    "percentiles3": {
        "total": "5858",
        "ok": "5261",
        "ko": "6492"
    },
    "percentiles4": {
        "total": "6551",
        "ok": "6367",
        "ko": "6835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12093,
    "percentage": 58
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2437,
    "percentage": 12
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 4344,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 2126,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "269.629",
        "ko": "30.371"
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
        "total": "21000",
        "ok": "18874",
        "ko": "2126"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "3756"
    },
    "maxResponseTime": {
        "total": "16612",
        "ok": "15996",
        "ko": "16612"
    },
    "meanResponseTime": {
        "total": "1487",
        "ok": "1045",
        "ko": "5410"
    },
    "standardDeviation": {
        "total": "2082",
        "ok": "1669",
        "ko": "995"
    },
    "percentiles1": {
        "total": "613",
        "ok": "70",
        "ko": "5377"
    },
    "percentiles2": {
        "total": "2283",
        "ok": "1029",
        "ko": "5892"
    },
    "percentiles3": {
        "total": "5858",
        "ok": "5261",
        "ko": "6492"
    },
    "percentiles4": {
        "total": "6551",
        "ok": "6367",
        "ko": "6835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12093,
    "percentage": 58
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2437,
    "percentage": 12
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 4344,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 2126,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "269.629",
        "ko": "30.371"
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
