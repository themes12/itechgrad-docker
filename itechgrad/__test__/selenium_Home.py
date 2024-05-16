from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#----Locate Page Home------
try:
	heading = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[1]/div[1]/h2[1]')
	assert heading.text == "Master and Ph.D Program in" 
	print("Success locate page Normal")
	
except :
	assert False, "Fail locate page Normal"
#----click en to th button check locate page ------
try:
	button_translate = driver.find_element(By.XPATH, '/html/body/div/div/div/nav[1]/header/ul[2]/label/span/span[2]/span')
	button_translate.click()
	headingTh = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[1]/div[1]/h2[1]').is_displayed()
	assert headingTh is True
	print("Success locate page TH")
	time.sleep(2)	
except :
	assert False,"Fail Success locate page TH"

#----click button next card Announcement------
try:
	button_next = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[2]/div/div/div/button[2]')
	button_next.click()
	button_next_check = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[2]/div/div/div/button[2]').is_enabled()
	assert button_next_check is True
	print("Success click button next card Announcement")
		
except :
	assert False,"Fail click button next card Announcement"

#------check Congratulations display------
try:
	Congratulations = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[3]/div/h3').is_displayed()
	image_con = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[3]/div/div/div[1]/img').is_displayed()
	assert Congratulations is True
	assert image_con is True
	print("Success Congratulations Display")
		
except :
	assert False,"Fail Congratulations Display"
#------check map and address / contact display------
try:
	map = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[1]/div/iframe').is_displayed()
	div_address_contact = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[2]').is_displayed()
	address = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[2]/div[1]/h5')
	contact = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[2]/div[2]/h5')
	address_check = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[2]/div[1]/h5').is_displayed()
	contact_check = driver.find_element(By.XPATH, '/html/body/div/div/div/div/main/section[4]/div/div[2]/div[2]/h5').is_displayed()
	assert map is True
	assert div_address_contact is True
	assert address_check is True
	assert contact_check is True
	assert address.text == 'Address' 
	assert contact.text == 'Contact us'
	print("Success Map and Address/Contact Display")
		
except :
	assert False,"Map and Address/Contact Display"
#------check footer display------
try:
	footer = driver.find_element(By.XPATH, '/html/body/div/div/div/footer').is_displayed()
	assert footer is True
	print("Success Footer Display")
		
except :
	assert False,"Fail Footer Display"

#================================================================================================
#------Page Programe Master's Degree------
button_program = driver.find_element(By.XPATH, '/html/body/div/div/div/nav[2]/header/ul/li[2]')
button_program.click()
button_master = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[1]/ul/li[1]')
button_master.click()
#================================================================================================
#------Locate Page Programe Master's Degree------
try:
	heading_master = driver.find_elements(By.XPATH, '/html/body/div/div/div/div/div/div/section/section/header/h1')
	print(heading_master)
	#assert heading_master.text == "Master of Science Program in Computer Science"
	#print("Success locate page Master's Degree")
except :
	assert False,"Fail locate page Master's Degree"	


#end the code with
print(datetime.now())
driver.quit()