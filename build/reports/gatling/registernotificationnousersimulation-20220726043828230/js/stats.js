var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21000",
        "ok": "18872",
        "ko": "2128"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "3769"
    },
    "maxResponseTime": {
        "total": "7676",
        "ok": "7676",
        "ko": "7122"
    },
    "meanResponseTime": {
        "total": "1444",
        "ok": "1003",
        "ko": "5358"
    },
    "standardDeviation": {
        "total": "1982",
        "ok": "1548",
        "ko": "679"
    },
    "percentiles1": {
        "total": "602",
        "ok": "70",
        "ko": "5357"
    },
    "percentiles2": {
        "total": "2259",
        "ok": "1018",
        "ko": "5863"
    },
    "percentiles3": {
        "total": "5804",
        "ok": "5153",
        "ko": "6487"
    },
    "percentiles4": {
        "total": "6434",
        "ok": "6194",
        "ko": "6757"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12194,
    "percentage": 58
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2439,
    "percentage": 12
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 4239,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 2128,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "323.077",
        "ok": "290.338",
        "ko": "32.738"
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
        "ok": "18872",
        "ko": "2128"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "3769"
    },
    "maxResponseTime": {
        "total": "7676",
        "ok": "7676",
        "ko": "7122"
    },
    "meanResponseTime": {
        "total": "1444",
        "ok": "1003",
        "ko": "5358"
    },
    "standardDeviation": {
        "total": "1982",
        "ok": "1548",
        "ko": "679"
    },
    "percentiles1": {
        "total": "602",
        "ok": "70",
        "ko": "5357"
    },
    "percentiles2": {
        "total": "2259",
        "ok": "1018",
        "ko": "5863"
    },
    "percentiles3": {
        "total": "5804",
        "ok": "5153",
        "ko": "6487"
    },
    "percentiles4": {
        "total": "6434",
        "ok": "6194",
        "ko": "6757"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12194,
    "percentage": 58
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2439,
    "percentage": 12
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 4239,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 2128,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "323.077",
        "ok": "290.338",
        "ko": "32.738"
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
