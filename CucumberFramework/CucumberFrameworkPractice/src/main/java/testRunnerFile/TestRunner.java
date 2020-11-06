package testRunnerFile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\hp 1\\eclipse-workspace\\CucumberFramework\\CucumberFrameworkPractice\\src\\main\\java\\featureFile\\UserSteps.feature"
		,glue = {"stepDefination"}
		,dryRun = false
		,monochrome = true
		,strict = true
		,format = {"pretty","html:Reports"}
		)

public class TestRunner {

}
