from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#==============================================================================
#---------------------------------Page About Us--------------------------------
#==============================================================================
button_program = driver.find_element(By.XPATH, '/html/body/div/div/nav[2]/header/ul/li[7]/a/button')
button_program.click()
time.sleep(2)
#===============================================================================
#--------------------------------Locate About Us--------------------------------
#===============================================================================
try:
	url_About = driver.current_url
	assert url_About == "http://localhost:3000/en/about"
	print("Success locate page")
except:
	assert False,"Failure to locate page"
#===============================================================================
#--------------------------Check Display Master's Degree------------------------
#===============================================================================
try:
	data_master = ["Master's degree program",
	'"Computer Science is a discipline that relies on knowledge and understanding of essential computer concepts, which are critical for effectively solving complex problems systematically and accurately. Additionally, it involves an understanding of applying data and information as a foundation and a commitment to keeping up with rapidly evolving technologies and contemporary techniques for swift and efficient operations to meet the needs of both the public and private sectors.\n\nStudents in this field can develop knowledge and expertise in various areas, such as software development, data science and technology, and computer networking. They have the potential to conduct high-quality research, solve problems, and continuously enhance themselves. This field provides qualifications and capabilities for employment and can be a valuable asset to all aspects of society."',
	  True]
	time.sleep(2)
	Master_heading = driver.find_element(By.XPATH, "/html/body/div/div/div/div/section[1]/div[2]/h2")
	Detail_Master = driver.find_element(By.XPATH, "/html/body/div/div/div/div/section[1]/div[2]/p")
	Button_Master = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section[1]/div[2]/button').is_enabled()
	assert Master_heading.text == data_master[0]
	assert Detail_Master.text == data_master[1]
	assert Button_Master == data_master[2]

	print("Success Display Master's degree program and Description")
except :
	assert False,"Failure Display Master's degree program and Description"	

#===============================================================================
#--------------------------Check Display PhD's------------------------
#===============================================================================
try:
	data_phd = ["PhD's degree program",
	'"The Doctor of Philosophy (Ph.D.) program in Computer Science aims to produce graduates who possess a deep understanding of the science, a thirst for knowledge, and a commitment to staying up-to-date with advancements in the field to continually develop themselves. They should have innovative and creative thinking abilities, be capable of conducting independent research, and contribute to the creation of new knowledge or innovations that hold value and have the potential to enhance society and the nation ethically."',
	  True]
	time.sleep(2)
	Phd_heading = driver.find_element(By.XPATH, "/html/body/div/div/div/div/section[2]/div[3]/h2")
	Detail_Phd = driver.find_element(By.XPATH, "/html/body/div/div/div/div/section[2]/div[3]/p")
	Button_Phd = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section[2]/div[3]/button').is_enabled()
	assert Phd_heading.text == data_phd[0]
	assert Detail_Phd.text == data_phd[1]
	assert Button_Phd == data_phd[2]

	print("Success Display PhD's program and Description")
except :
	assert False,"Failure Display PhD's program and Description"	

#end the code with
print(datetime.now())
driver.quit()