var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "22500",
        "ok": "22500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7198",
        "ok": "7198",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1774",
        "ok": "1774",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "906",
        "ok": "906",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1864",
        "ok": "1863",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2417",
        "ok": "2417",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3050",
        "ok": "3050",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3869",
        "ok": "3869",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4091,
    "percentage": 18
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2370,
    "percentage": 11
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 16039,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1875",
        "ok": "1875",
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
        "total": "22500",
        "ok": "22500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7198",
        "ok": "7198",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1774",
        "ok": "1774",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "906",
        "ok": "906",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1864",
        "ok": "1864",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2417",
        "ok": "2417",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3050",
        "ok": "3050",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3869",
        "ok": "3869",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4091,
    "percentage": 18
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2370,
    "percentage": 11
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 16039,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1875",
        "ok": "1875",
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
