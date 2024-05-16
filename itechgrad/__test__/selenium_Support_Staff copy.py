import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# =============================Configuration===================================================================
URL = "http://localhost:3000"
STAFF_XPATH = '//*[@id="react-aria-:R3b6mlkq:"]'
ACADEMIC_STAFF_XPATH = '/html/body/div[2]/div/div[1]/ul/li[2]'
STAFF_INFO_XPATHS = [
    '/html/body/div/div/div/div/div/section[4]/div/div/div[1]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[2]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[3]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[4]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[5]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[6]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[7]/div/div/div/div',
    '/html/body/div/div/div/div/div/section[4]/div/div/div[8]/div/div/div/div',
]
# Staff data
staff_data = [
    'ปฏิบัติการ นาง อริษา ทาทอง\nPractitioner Mrs. Arisa Thathong\nพนักงานปฏิบัติงาน\n053-943412 with 101\narisa.t@cmu.ac.th',
    'ปฏิบัติการ นางสาว ณัฐศิธธาอัญญ์ ฟูตระกูล\nPractitioner Miss Natsitthaan Futrakull\nพนักงานปฏิบัติงาน\n053-943412 with 105\nnoo_noinnaja@hotmail.com',
    'ปฏิบัติการ นางสาว วราภรณ์ อินสม\nPractitioner Miss Waraporn Insom\nพนักงานปฏิบัติงาน\n053-943412 with 103\ninsom.waraporn@gmail.com',
    'ปฏิบัติการ นาย ประยูร ปันธิ\nPractitioner Mr. Prayoon Punti\nพนักงานบริการเอกสารทั่วไป\n053-943412 with 108\nprayoon.p@cmu.ac.th',
    'ปฏิบัติการ นางสาว ณิชาภา นิลละออ\nPractitioner Miss Nichapa Nillaor\nนักวิชาการคอมพิวเตอร์\n053-943412 with 306\naudsaya.n@cmu.ac.th',
    'ปฏิบัติการ นาย พัฒน์พงษ์ ศิริกุล\nPractitioner Mr. Patpong Sirikul\nนักวิชาการคอมพิวเตอร์\n053-943412 with 306\npatpong.s@cmu.ac.th',
    'ชำนาญการ นาย ถนอม กองใจ\nProfessional Mr. Tanom Kongjai\nนักวิชาการคอมพิวเตอร์\n053-943412 with 307\ntanom.k@cmu.ac.th',
    'ปฏิบัติการ นาย สุทธิพงศ์ สุรักษ์\nPractitioner Mr. Suttipong Surak\nนักวิชาการคอมพิวเตอร์\n053-943412 with 309\nsuttipong.s@cmu.ac.th\nsuttipong.net@gmail.com',

]
def click_button(driver, xpath):
    button = driver.find_element(By.XPATH, xpath)
    button.click()

def check_element_text(driver, xpath, expected_text):
    element = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, xpath)))
    assert element.text == expected_text, f"Expected: {expected_text}, Actual: {element.text}"

def main():
    driver = webdriver.Chrome()
    driver.get(URL)

    try:
        # Click on the "Staff" button
        click_button(driver, STAFF_XPATH)
        time.sleep(3)  # You can replace this with explicit waits

        # Click on the "Academic Staff" button
        click_button(driver, ACADEMIC_STAFF_XPATH)
        time.sleep(3)  # You can replace this with explicit waits

        # Check if we are on the Academic Staff page
        check_element_text(driver, "/html/body/div/div/div/div/div/section[2]/header/div/h1", "Support Staff")
        
        # Check staff information
        for xpath, data in zip(STAFF_INFO_XPATHS, staff_data):
            check_element_text(driver, xpath, data)
        print("Successfully")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        print(datetime.now())
        driver.quit()

if __name__ == "__main__":
    main()
