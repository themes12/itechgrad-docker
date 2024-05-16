from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#================================================================================================
#------Page Programe Doctor of Philosophy (Ph.D.)------
button_program = driver.find_element(By.XPATH, '/html/body/div/div/div/nav[2]/header/ul/li[2]')
button_program.click()
button_Ph = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[1]/ul/li[2]')
button_Ph.click()
time.sleep(2)
#================================================================================================
#------Locate Page Programe Doctor of Philosophy (Ph.D.)------
try:
	heading_PdD = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/div/section/section/header/h1")
	assert heading_PdD .text == 'Doctor of Philosophy (Ph.D.) Program'
	print("Success locate page Doctor of Philosophy (Ph.D.)")
except :
	assert False,"Fail locate page Doctor of Philosophy (Ph.D.)"	


#end the code with
print(datetime.now())
driver.quit()