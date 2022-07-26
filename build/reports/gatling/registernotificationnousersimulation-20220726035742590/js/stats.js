var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3500",
        "ok": "3500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6440",
        "ok": "6440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles2": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2777",
        "ok": "2777",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3161,
    "percentage": 90
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 202,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 137,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
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
        "total": "3500",
        "ok": "3500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6440",
        "ok": "6440",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles2": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2777",
        "ok": "2777",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3161,
    "percentage": 90
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 202,
    "percentage": 6
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 137,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
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
