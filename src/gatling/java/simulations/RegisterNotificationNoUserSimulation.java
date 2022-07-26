package simulations;

import io.gatling.javaapi.core.FeederBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import io.gatling.javaapi.http.HttpRequestActionBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class RegisterNotificationNoUserSimulation extends Simulation {
    int userCount = Integer.getInteger("users");
    int seconds = Integer.getInteger("seconds");
    String csvFile = System.getProperty("csv");


    FeederBuilder.Batchable<String> feeder =
            csv(csvFile).random();

    HttpRequestActionBuilder httpRequest = http("notification-pf-register")
            .post("/notification/register")
            .header("accept", "application/json")
            .body(StringBody("{\n" +
                    "  \"activity\": \"point_reward\",\n" +
                    "  \"source\": \"gatling\",\n" +
                    "  \"notifications\": [\n" +
                    "      {\n" +
                    "          \"to_istyle_id\": ${ISTYLE_ID},\n" +
                    "          \"properties\": {\n" +
                    "              \"message\": \"ポイントを獲得しました。\",\n" +
                    "              \"sp_reference\": \"https://www.staging-cosme.net/\",\n" +
                    "              \"pc_reference\": \"https://www.staging-cosme.net/\"\n" +
                    "          }\n" +
                    "      }\n" +
                    "  ]\n" +
                    "}"))
            .check(status().is(201));

    ScenarioBuilder sb = scenario("notification-pf-perfornance-test")
            .feed(feeder.eager().circular())
            .exec(httpRequest);

    HttpProtocolBuilder httpProtocol =
            http.baseUrl("https://notification-pf-api.staging-cosme.net")
                    .acceptHeader("application/json")
                    .userAgentHeader(
                            "\tMozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
                    );

    {
        setUp(
                sb.injectOpen(rampUsers(userCount).during(seconds))
        ).protocols(httpProtocol);
    }
}
