var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3750",
        "ok": "3718",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "3976"
    },
    "maxResponseTime": {
        "total": "7217",
        "ok": "7217",
        "ko": "6681"
    },
    "meanResponseTime": {
        "total": "835",
        "ok": "798",
        "ko": "5203"
    },
    "standardDeviation": {
        "total": "1426",
        "ok": "1372",
        "ko": "638"
    },
    "percentiles1": {
        "total": "77",
        "ok": "75",
        "ko": "5216"
    },
    "percentiles2": {
        "total": "900",
        "ok": "876",
        "ko": "5744"
    },
    "percentiles3": {
        "total": "4873",
        "ok": "4636",
        "ko": "6086"
    },
    "percentiles4": {
        "total": "6154",
        "ok": "6151",
        "ko": "6499"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2708,
    "percentage": 72
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 364,
    "percentage": 10
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 646,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "247.867",
        "ko": "2.133"
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
        "total": "3750",
        "ok": "3718",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "3976"
    },
    "maxResponseTime": {
        "total": "7217",
        "ok": "7217",
        "ko": "6681"
    },
    "meanResponseTime": {
        "total": "835",
        "ok": "798",
        "ko": "5203"
    },
    "standardDeviation": {
        "total": "1426",
        "ok": "1372",
        "ko": "638"
    },
    "percentiles1": {
        "total": "76",
        "ok": "75",
        "ko": "5216"
    },
    "percentiles2": {
        "total": "900",
        "ok": "876",
        "ko": "5744"
    },
    "percentiles3": {
        "total": "4873",
        "ok": "4636",
        "ko": "6086"
    },
    "percentiles4": {
        "total": "6154",
        "ok": "6151",
        "ko": "6499"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2708,
    "percentage": 72
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 364,
    "percentage": 10
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 646,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "247.867",
        "ko": "2.133"
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
