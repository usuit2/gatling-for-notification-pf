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
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles3": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles4": {
        "total": "696",
        "ok": "696",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19996,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 4,
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
        "total": "952.381",
        "ok": "952.381",
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
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "-"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles3": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "percentiles4": {
        "total": "696",
        "ok": "695",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19996,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 4,
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
        "total": "952.381",
        "ok": "952.381",
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
