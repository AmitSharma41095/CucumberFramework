package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CodeFile {

	WebDriver driver;
	
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
		System. setProperty("webdriver.chrome.driver", "C:\\Users\\hp 1\\eclipse-workspace\\CucumberFramework\\CucumberFrameworkPractice\\Resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.freecrm.com/");
		
	}

	@Then("^User verifies the title of page$")
	public void user_verifies_the_title_of_page() throws Throwable {
	    
		driver.getTitle();
	}

	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String UserName, String Password) throws Throwable {
	   
		driver.findElement(By.name("email")).sendKeys(UserName);
		driver.findElement(By.name("password")).sendKeys(Password);
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    
		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}

	@Then("^User verifies the Home page$")
	public void user_verifies_the_Home_page() throws Throwable {
	    
		driver.getTitle();
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}
	
	@Then("^User navigates to Contacts tab$")
	public void User_navigates_to_Contacts_tab() throws Throwable {
		Thread.sleep(5000);
	    driver.findElement(By.xpath("//span[text()='Contacts']")).click();
	    driver.findElement(By.xpath("//button[text()='New']")).click();
	}
	
	@Then("^User enters First Name: \"(.*)\" and Last Name: \"(.*)\"$")
	public void user_enters_FirstName_and_LastName(String FirstName, String LastName) throws Throwable {
	    Thread.sleep(5000);
		driver.findElement(By.name("first_name")).sendKeys(FirstName);
	    driver.findElement(By.name("last_name")).sendKeys(LastName);
	}

	@Then("^User enters the Company Name: \"(.*)\"$")
	public void user_enters_the_CompanyName(String CompanyName) throws Throwable {
	    driver.findElement(By.xpath("//div[@name='company']/input")).sendKeys(CompanyName);
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//div[@name='company']//div[@role='option']")).click();
	    
	}

	@Then("^User Selects Category: \"(.*)\" and Status: \"(.*)\"$")
	public void user_Selects_Category_and_Status(String category, String Status) throws Throwable {
	    driver.findElement(By.xpath("(//label[text()='Category']//following::div)[1]")).click();
	    driver.findElement(By.xpath("//div[@class='visible menu transition']//div//span[contains(text(),'"+category+"')]")).click();
	    
	    driver.findElement(By.xpath("(//label[text()='Status']//following::div)[1]")).click();
	    driver.findElement(By.xpath("//div[@class='visible menu transition']//div//span[contains(text(),'"+Status+"')]")).click();
	}

	@Then("^User enters Address - Street Address: \"(.*)\", City: \"(.*)\" , State: \"(.*)\" ,Pincode: \"(.*)\" and Country: \"(.*)\"$")
	public void user_enters_Address_Street_adress_City_State_Zip_code_and_Country(String Address, String City, String State, String Zip, String Country) throws Throwable {
		driver.findElement(By.name("address")).sendKeys(Address);
		driver.findElement(By.name("city")).sendKeys(City);
		driver.findElement(By.name("state")).sendKeys(State);
		driver.findElement(By.name("zip")).sendKeys(Zip);
		
		driver.findElement(By.xpath("//div[@name='country']//input")).sendKeys(Country);
		driver.findElement(By.xpath("(//div[@class='visible menu transition']//div//span)[1]")).click();
		
	}

	@Then("^User saves the contact$")
	public void user_saves_the_contact() throws Throwable {
	    //System.out.println("Save");
	    driver.findElement(By.xpath("//button[text()='Save']")).click();
	}
	
	
}
