var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "26000",
        "ok": "26000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7039",
        "ok": "7039",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2298",
        "ok": "2298",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "994",
        "ok": "994",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2247",
        "ok": "2247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2797",
        "ok": "2798",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4164",
        "ok": "4164",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5323",
        "ok": "5323",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1582,
    "percentage": 6
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1470,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 22948,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2000",
        "ok": "2000",
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
        "total": "26000",
        "ok": "26000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7039",
        "ok": "7039",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2298",
        "ok": "2298",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "994",
        "ok": "994",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2247",
        "ok": "2247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2798",
        "ok": "2798",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4164",
        "ok": "4164",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5323",
        "ok": "5323",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1582,
    "percentage": 6
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1470,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 22948,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2000",
        "ok": "2000",
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
