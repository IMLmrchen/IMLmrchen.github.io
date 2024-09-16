import random
start_page=input("请输入抽签时可抽到的最小页码：")
last_page=input("请输入抽签时可抽到的最大页码：")

start_page=int(start_page)
last_page=int(last_page)

while True:
    if last_page<start_page:
        last_page = input("重新输入最大页码，使其不小于最小页码：")
        last_page = int(last_page)
    else:break
max_number_of_page=input("为了防止学生压力过大，输入最大订正页数：")
max_number_of_page=int(max_number_of_page)
while True:
    if last_page-start_page+1<max_number_of_page:
        max_number_of_page = input("重新输入最大订正页数，使其不大于最大页码与最小页码之间的页数：")
        max_number_of_page = int(max_number_of_page)
    else:break
zw=input("<--按回车键开始抓阄-->")
choose_start=random.randint(start_page,last_page)
while True:
    if choose_start>last_page-max_number_of_page:
        choose_start = random.randint(start_page, last_page)
    else:break
choose_last=random.randint(start_page,last_page)


while True:
    if choose_last-choose_start+1>max_number_of_page or choose_last<choose_start:
        choose_last = random.randint(start_page, last_page)

    else:break
print("请订正",choose_start,"-",choose_last,"页")