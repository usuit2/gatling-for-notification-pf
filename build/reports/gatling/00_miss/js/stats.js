var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "210000",
        "ok": "30568",
        "ko": "179432"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "221",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "70921",
        "ok": "61168",
        "ko": "70921"
    },
    "meanResponseTime": {
        "total": "13456",
        "ok": "13924",
        "ko": "13377"
    },
    "standardDeviation": {
        "total": "9341",
        "ok": "8573",
        "ko": "9463"
    },
    "percentiles1": {
        "total": "12880",
        "ok": "13020",
        "ko": "12857"
    },
    "percentiles2": {
        "total": "18673",
        "ok": "18034",
        "ko": "18796"
    },
    "percentiles3": {
        "total": "28645",
        "ok": "29159",
        "ko": "28603"
    },
    "percentiles4": {
        "total": "45463",
        "ok": "45371",
        "ko": "45482"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 105,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 333,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 30130,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 179432,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1826.087",
        "ok": "265.809",
        "ko": "1560.278"
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
        "total": "210000",
        "ok": "30568",
        "ko": "179432"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "221",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "70921",
        "ok": "61168",
        "ko": "70921"
    },
    "meanResponseTime": {
        "total": "13456",
        "ok": "13924",
        "ko": "13377"
    },
    "standardDeviation": {
        "total": "9341",
        "ok": "8573",
        "ko": "9463"
    },
    "percentiles1": {
        "total": "12882",
        "ok": "13020",
        "ko": "12861"
    },
    "percentiles2": {
        "total": "18671",
        "ok": "18034",
        "ko": "18797"
    },
    "percentiles3": {
        "total": "28621",
        "ok": "29159",
        "ko": "28574"
    },
    "percentiles4": {
        "total": "45459",
        "ok": "45371",
        "ko": "45482"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 105,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 333,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 30130,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 179432,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1826.087",
        "ok": "265.809",
        "ko": "1560.278"
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
