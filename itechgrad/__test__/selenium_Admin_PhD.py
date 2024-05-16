from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys 
import time
from datetime import datetime
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("http://localhost:3000/api/auth/signin?callbackUrl=%2Fadmin")
#================================================================================================
#----------------------------------Locate Page Admin---------------------------------------------
#================================================================================================
try:
    url_login = driver.current_url
    assert url_login == "http://localhost:3000/api/auth/signin?callbackUrl=%2Fadmin"
    print("Success locate page administrator")
except:
    assert False,"Fail locate page page administrator"	
#==========================================================================================================
#----------------------------------------Login Admin with invalid password---------------------------------
#==========================================================================================================
try:
    input_user_invalid= driver.find_element(By.XPATH, '//*[@id="input-username-for-credentials-provider"]').send_keys("invalid username")
    input_password_invalid= driver.find_element(By.XPATH, '//*[@id="input-password-for-credentials-provider"]').send_keys("invalid password")
    button_login_invalid = driver.find_element(By.XPATH, '/html/body/div/div/div/div/form/button')
    button_login_invalid.click()
    print("Success Login Administrator with invalid password")
except:
    assert False,"Fail Login Administrator with invalid password"
#====================================================================
#-------------------------Login Admin Normal-------------------------
#====================================================================
try:
    input_user_valid= driver.find_element(By.XPATH, '//*[@id="input-username-for-credentials-provider"]').send_keys("admin")
    input_password_valid= driver.find_element(By.XPATH, '//*[@id="input-password-for-credentials-provider"]').send_keys("1234567890")
    button_login_valid= driver.find_element(By.XPATH, '/html/body/div/div/div/div/form/button')
    button_login_valid.click()
    print("Success Login Administrator with valid password")
except:
    assert False,"Fail Login Administrator with valid password"
#=========================================================================
#-------------------------Locate page after login-------------------------
#=========================================================================
try:
    heading_choose = driver.find_element(By.XPATH, '/html/body/div/div/div/div/h1')
    assert heading_choose.text == "เลือกหน้าที่ต้องการแก้ไข"
    print("Success locate page after login")
except:
    assert False,"Failed to locate page after login" 
#=================================================================================================
#-------------------------choose PhD & locate course-management-------------------------
#=================================================================================================
try:
    button_PhD = driver.find_element(By.XPATH, '/html/body/div/div/div/div/div/div[2]/a')
    button_PhD.click()
    #time.sleep(4)
    url_PhD = driver.current_url
    #assert url_PhD == "http://localhost:3000/admin/phd/course-management"
    print("Success choose PhD & locate course-management")
except:
    assert False,"Failure to choose PhD & locate course-management"  
#================================================================================================
#-----------------------------add course PhD nomal-------------------------------------
#================================================================================================    
try:
    time.sleep(4)
    button_PhD_add = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div/section/div[1]/a')))
    driver.execute_script("arguments[0].scrollIntoView();", button_PhD_add)
    button_PhD_add.click()
    time.sleep(4)
    input_PhD = driver.find_elements(By.CSS_SELECTOR, "input")
    input_data = ["204999", "TEST COURSE NORMAL", "ทดสอบ", "3", "1", "1", "1"]

    for i in range(7):
        try:
            # Check if the input field is visible and enabled before sending keys
            if input_PhD[i].is_displayed() and input_PhD[i].is_enabled():
                input_PhD[i].send_keys(input_data[i])
            else:
                print(f"Input field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input field {i}: {str(e)}")


    textarea_PhD = driver.find_elements(By.CSS_SELECTOR, "textarea")
    input_data_textarea = ["TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ", "ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ "]
    for i in range(2):
        try:
            # Check if the input field is visible and enabled before sending keys
            if textarea_PhD[i].is_displayed() and textarea_PhD[i].is_enabled():
                textarea_PhD[i].send_keys(input_data_textarea[i])
            else:
                print(f"Input TEXT field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input TEXT field {i}: {str(e)}")

    
    button_PhD_add_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/div[5]/button')
    button_PhD_add_course.click()
    time.sleep(4)
    button_back_to_PhD = driver.find_element(By.XPATH, '/html/body/div/div/div/nav/header/ul[1]/li[1]/a')
    button_back_to_PhD.click()
    time.sleep(4)
    button_check_display = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[1]/label')))
    driver.execute_script("arguments[0].scrollIntoView();", button_check_display)
    button_check_display.click() 

    driver.get("http://localhost:3000/courses/phd") #############

    time.sleep(4)
    test_on_course = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/header/div/div/div/div[2]/div/div/div[4]/div/div/span') 

     
    assert test_on_course.text == "204999"
    print("Success add course PhD nomal")
    driver.get("http://localhost:3000/en/admin/phd/course-management")
except:
    assert False,"Failure to add course PhD nomal" 
#================================================================================================================================
#-----------------------------add course PhD prereq one & group and check is display-----------------------------------   
#================================================================================================================================  
try:
    button_PhD_add = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div/section/div[1]/a')))
    driver.execute_script("arguments[0].scrollIntoView();", button_PhD_add)
    button_PhD_add.click()
    time.sleep(4)
    input_PhD = driver.find_elements(By.CSS_SELECTOR, "input")
    input_data = ["204998", "TEST COURSE PREREQ ONE", "ทดสอบ PREREQ ONE", "3", "1", "1", "1"]

    for i in range(7):
        try:
            # Check if the input field is visible and enabled before sending keys
            if input_PhD[i].is_displayed() and input_PhD[i].is_enabled():
                input_PhD[i].send_keys(input_data[i])
            else:
                print(f"Input field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input field {i}: {str(e)}") 


    textarea_PhD = driver.find_elements(By.CSS_SELECTOR, "textarea")
    input_data_textarea = ["TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ", "ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ "]
    for i in range(2):
        try:
            # Check if the input field is visible and enabled before sending keys
            if textarea_PhD[i].is_displayed() and textarea_PhD[i].is_enabled():
                textarea_PhD[i].send_keys(input_data_textarea[i])
            else:
                print(f"Input TEXT field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input TEXT field {i}: {str(e)}") 

    add_if_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/button')   
    add_if_course.click()
    add_if_course_one = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/section/div[2]/div/button[1]') 
    add_if_course_group = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/section/div[2]/div/button[2]')
    for i in range(2):
        add_if_course_group.click()
    for i in range(3):
        add_if_course_one.click()
    add_if_course_one_in_group = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/section/div[2]/div[1]/div[1]/button')  

    text_add_if = driver.find_elements(By.CSS_SELECTOR,'input')

    data_input_prereq = ["204pre1","204pre2","204pre3","204pre4","204pre5"]
    index_add = len(text_add_if)
    for i in range(len(data_input_prereq)):
        text_add_if[index_add-i-1].send_keys(data_input_prereq[i])

    button_PhD_save = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/section/footer/button')
    button_PhD_save.click()

    button_PhD_add_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/div[5]/button')
    button_PhD_add_course.click()

    button_back_to_PhD_ = driver.find_element(By.XPATH, '/html/body/div/div/div/nav/header/ul[1]/li[1]/a')
    time.sleep(4)
    button_back_to_PhD_.click()
    time.sleep(4)
    button_check_display = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[4]/td[1]/label')))
    driver.execute_script("arguments[0].scrollIntoView();", button_check_display)
    button_check_display.click() 
    
    driver.get("http://localhost:3000/en/courses/phd")

    time.sleep(4)
    test_on_course = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/header/div/div/div/div[2]/div/div/div[5]/div/div/span') 
    assert test_on_course.text == "204998"
    print("Success add course PhD prereq one")
    driver.get("http://localhost:3000/en/admin/phd/course-management")
except:
    assert False,"Failure to add course PhD prereq one"  

#=================================================================================================
#-------------------------------------check Edit and Delete---------------------------------------
#=================================================================================================
try:    
    time.sleep(4)
    button_edit = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[4]/div[3]/a')
    button_edit.click()
    time.sleep(4)
    input_PhD = driver.find_elements(By.CSS_SELECTOR, "input")
    input_data = ["", "TEST COURSE NORMAL change", "ทดสอบ change", "5", "3", "3", "3","TESTtttttttttttttttttttttttttt", "ทดสอบบบบบบบบบบบบบบบบบบบบบ"]

    for i in range(len(input_PhD)):
        try:
            input_field = input_PhD[i]
            # Check if the input field is visible and enabled before sending keys
            if input_field.is_displayed() and input_field.is_enabled():
                input_field.clear()
                input_PhD[i].send_keys(input_data[i])
            else:
                print(f"Input field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input field {i}: {str(e)}")


    


    button_PhD_add_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/div[5]/button')
    button_PhD_add_course.click()
    time.sleep(4)
    button_back_to_PhD_ = driver.find_element(By.XPATH, '/html/body/div/div/div/nav/header/ul[1]/li[1]/a')
    button_back_to_PhD_.click()

    
    driver.get("http://localhost:3000/en/courses/phd")

    time.sleep(4)
    test_on_course = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,'/html/body/div/div/div/div/section/header/div/div/div/div[2]/div/div/div[4]/span[1]/span[1]'))) 

     
    assert test_on_course.text == "TEST COURSE NORMALTEST COURSE NORMAL change"
    driver.get("http://localhost:3000/en/admin/phd/course-management") 
    time.sleep(4)
    delete_button = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[4]/div[3]/button').click()
    confirmButtonDelete = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[4]/div[2]/div/div/div/div[1]/div/div[2]/button[1]').click()
    time.sleep(4)
    delete_button1 = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[4]/div[3]/button').click()
    confirmButtonDelete = driver.find_element(By.XPATH,'/html/body/div/div/div/div/section/div[2]/div/div[1]/table/tbody/tr[3]/td[4]/div[2]/div/div/div/div[1]/div/div[2]/button[1]').click()
 
    print("Success to Edit and Delete")
    
except:
    assert False,"Failure to Edit and Delete"



#end the code with
time.sleep(4)
print(datetime.now())
driver.quit()