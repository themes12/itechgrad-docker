from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#================================================================================================
#------Page Research------
button_researh = driver.find_element(By.XPATH, '/html/body/div/div/div/nav[2]/header/ul/li[4]/a/button')
button_researh.click()
time.sleep(2)
#================================================================================================
#------Locate Page Research------
try:
	heading_Research = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[1]/div/h2[1]")
	assert heading_Research.text == "Research \nat the"
	print("Success locate page Research")
except :
	assert False,"Fail locate page Research"	


#end the code with
print(datetime.now())
driver.quit()