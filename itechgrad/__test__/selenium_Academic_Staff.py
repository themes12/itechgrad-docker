import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# =============================Configuration===================================================================
URL = "http://localhost:3000"
STAFF_XPATH = '//*[@id="react-aria-:R3b6mlkq:"]'
ACADEMIC_STAFF_XPATH = '/html/body/div[2]/div/div[1]/ul/li[1]'
STAFF_INFO_XPATHS = [
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[1]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[2]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[3]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[4]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[5]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[6]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[7]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[8]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[9]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[10]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[11]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[12]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[13]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[14]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[15]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[16]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[17]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[18]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[19]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[20]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[21]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[22]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[23]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[24]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[25]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[26]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[27]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[28]/div/div/div[2]/div',
    '/html/body/div/div/div/div/div/div/section[4]/div/div/div[29]/div/div/div[2]/div',
]
# Staff data
staff_data = [
    'ผู้ช่วยศาสตราจารย์ ดร. วิจักษณ์ ศรีสัจจะเลิศวาจา\nAssistant Professor Dr. Wijak Srisujjalertwaja\nรักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์\nผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์\nRecommender System\n053-943412 with 124\nwijak.cscmu@gmail.com\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. รัศมีทิพย์ วิตา\nAssistant Professor Dr. Ratsameetip Wita\nรักษาการแทนรองหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์\nSecurity management\nwebservice\nontology and semantic\n053-943412 with 215\nratsameetip.w@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. เมทินี เขียวกันยะ\nAssistant Professor Dr. Matinee Kiewkanya\nรักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายบริการวิชาการ\nSoftware Metrics\nSoftware Improvement\nMachine Learning\n053-943412 with 113\nmatinee.k@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ เบญจมาศ ปัญญางาม\nAssistant Professor Benjamas Panyangam\nรักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายกิจการพิเศษ\n053-943412 with 112\nbpanyangam@yahoo.com\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. ปราการ อุณจักร\nAssistant Professor Dr. Prakarn Unachak\nรักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายวิจัยและวิชาการ\nEvolutionary Computing\nOptimization\n053-943412 with 119\nfortmanpung@gmail.com\nPersonal Website',
    'อาจารย์ ดร. สุธาสินี โทวุฒิกุล\nInstructor Dr. Sutasinee Thovuttikul\nรักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายพัฒนานักศึกษา ศิษย์เก่าสัมพันธ์ และประชาสัมพันธ์\nHuman-computer interaction\nHuman behavior and interaction Simulation\nSocial behavioral analysis and design for Different Cultural Communication\nVirtual Reality (VR) and Augmented Reality (AR)\n053-943412 with 119\nsutasinee.th@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. รัฐสิทธิ์ สุขะหุต\nAssociate Professor Dr. Rattasit Sukhahuta\nรองอธิการบดีในงานเทคโนโลยีดิจิทัลและกฏหมาย\nNatural Language Processing (NLP)\n053-943412\nrattasit.s@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. เอกรัฐ บุญเชียง\nAssociate Professor Dr. Ekkarat Boonchieng\nรองคณบดีบัณฑิตวิทยาลัย\ndata communication\ncomputer networking\ncomputer security\ncomputer graphics\nimage processing\ncloud computing\nIOT\nblockchain\ndata science and biomedical engineering.\n053-943412\nekkarat@boonchieng.net\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. ดุษฎี ประเสริฐธิติพงษ์\nAssistant Professor Dr. Dussadee Praserttitipong\nรองผู้อำนวยการสำนักทะเบียนและประมวลผล\nData Warehousing\nRecommender Sysytem\nKnowledge Discovery\nSoftware Engineering\nEducation Data Mining\n053-943412 with 121\ndussadee.p@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. ศุภกิจ อาวิพันธุ์\nAssistant Professor Dr. Suphakit Awiphan\nรองผู้อำนวยการสำนักบริการเทคโนโลยีสารสนเทศ\nAdaptive Video Streaming\nMultimedia Networks\nFuture Internet Architecture\nP2P Networks\n053-943412 with 116\nsuphakit_a@outlook.com\nPersonal Website',
    'อาจารย์ ดร. วรวุฒิ ศรีสุขคำ\nInstructor Dr. Worawut Srisukkham\nผู้ช่วยคณบดีฝ่ายกายภาพ คณะวิทยาศาสตร์\nMachine Learning\nNeural Networks\nImage Processing\nComputer Hardware Interfacing and Controlling System\nIntelligent Medical Diagnosis\nHuman Blood Diagnosis to Identify Cancer\n053-943412 with 211\nworawut.s@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. จีรยุทธ ไชยจารุวณิช\nAssociate Professor Dr. Jeerayut Chaijaruwanich\nBioinformatics\nMachine Learning\n053-943412 with 115\njeerayut.c@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. ชุรี เตชะวุฒิ\nAssociate Professor Dr. Churee Techawut\nหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์\nHuman-Computer Interaction\nInformation Visualization\nKnowledge Engineering\n053-943412 with 102\nchuree.t@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. ชุมพล บุญคุ้มพรภัทร\nAssociate Professor Dr. Chumphol Bunkhumpornpat\nPattern Recognition\nData Mining\nData Science\n053-943412 with 218\nchumphol.b@cmu.ac.th\nPersonal Website',
    'รองศาสตราจารย์ ดร. วาริน เชาวทัต\nAssociate Professor Dr. Varin Chouvatut\nComputer Vision\n3D Reconstruction\n2D and 3D Motion Processing\nImage Processing\nAugmented (Mixed) Reality\nVirtual Reality\nComputer Graphics\nMachine Learning\nArtificial Intelligence\nWeb-based Applications\nMedical Imaging Analysis\n053-943412 with 118\nvarin.ch@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. เสมอแข สมหอม\nAssistant Professor Dr. Samerkae Somhom\nEvolutionary Algorithm (Neural Net\nFuzzy\nGA\nSwarm Algo.)\n053-943412 with 123\nsamerkae.s@cmu.ac.th\nsamnoi@yahoo.com\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. อารีรัตน์ ตรงรัศมีทอง\nAssistant Professor Dr. Areerat Trongratsameethong\nDatabase\nQuery Optimization\n053-943412 with 221\nareerat.t@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. จักริน ชวชาติ\nAssistant Professor Dr. Jakarin Chawachat\nNetwork Design Problems and Graph Theory\nP2P Network\n053-943412 with 213\njakarin.c@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. วัฒนา จินดาหลวง\nAssistant Professor Dr. Wattana Jindaluang\nApproximation Algorithms\nGraph Theory\n053-943412 with 117\nwjindaluang@gmail.com\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. จักรเมธ บุตรกระจ่าง\nAssistant Professor Dr. Jakramate Bootkrajang\nMachine learning\nStatistical Machine Learning\nLearning under uncertainty\nLifelong machine learning\n053-943412 with 214\njakramate.b@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ ดร. ปภังกร อิ่นแก้ว\nAssistant Professor Dr. Papangkorn Inkeaw\nPattern Recognition and Machine Learning Feature Engineering Signal and Image Processing\n053-943412 with 111\npapangkorn.i@cmu.ac.th\nPersonal Website',
    'ผู้ช่วยศาสตราจารย์ วาสนา นัยโพธิ์\nAssistant Professor Wassana Naiyapo\n053-943412 with 125\nwassanacs@gmail.com\nPersonal Website',
    'อาจารย์ นพรัตน์ วนิชชานันท์\nInstructor Noparut Vanitchanant\n053-943412 with 126\nnoparutceess@gmail.com\nPersonal Website',
    'อาจารย์ ดร. ประภาพร เตชอังกูร\nInstructor Dr. Prapaporn Techa-Angkoon\nComputational Biology\nBioinformatics\nData Mining\nand Machine Learning\n053-943412 with 216\nprapaporn.techaang@cmu.ac.th\nPersonal Website',
    'อาจารย์ ดร. ฐาปนพงษ์ รักกาญจนันท์\nInstructor Dr. Thapanapong Rukkanchanunt\nImage Processing\nComputer Vision\nArtificial Intelligence\nMachine Learning\n053-943412\nthapanapong.r@cmu.ac.th\nPersonal Website',
    'อาจารย์ ดร. กมลภพ ศรีโสภา\nInstructor Dr. Kamonphop Srisopha\nSoftware Engineering\nRequirement Engineering\nMining Software Repositories\nSoftware Maintenance and Evolution\n053-943412\nsrisopha@alumni.usc.edu\nPersonal Website',
    'อาจารย์ ดร. กรพรหม พิกุลแก้ว\nInstructor Dr. Kornprom Pikulkaew\nComputer Vision\nImage Processing\nAnimation\nArtificial Intelligence (AI)\nMachine Learning (ML)\nDeep Learning (DL)\n2D & 3D Games\nMixed Reality\nMetaverse\n053-943412\nkornprom_p@cmu.ac.th\nPersonal Website',
    'อาจารย์ กิตติพิชญ์ คุปตะวาณิช\nInstructor\nSimulation Modeling\nkittipitch.k@cmu.ac.th\nPersonal Website',
    'อาจารย์ สิทธิโชค ทรัพย์ไพบูลย์กิจ\nInstructor\n(ลาศึกษาต่อ)\nBioinformatics\nPersonal Website',
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
        check_element_text(driver, "/html/body/div/div/div/div/div/div/section[2]/header/div/h1", "Academic Staff")
        
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
