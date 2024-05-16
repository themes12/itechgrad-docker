from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#================================================================================================
#------Page Programe Master's Degree------
button_program = driver.find_element(By.XPATH, '/html/body/div/div/div/nav[2]/header/ul/li[2]')
button_program.click()
button_master = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[1]/ul/li[1]')
button_master.click()
time.sleep(2)
#================================================================================================
#------Locate Page Programe Master's Degree------
try:
	heading_master = driver.find_elements(By.XPATH, "//h5[normalize-space()='Master of Science Program in Computer Science']")
	for h in heading_master:
		if h.text == 'Master of Science Program in Computer Science':
			assert h.text == 'Master of Science Program in Computer Science'
	print("Success locate page Master's Degree")
except :
	assert False,"Fail locate page Master's Degree"	


#end the code with
print(datetime.now())
driver.quit()