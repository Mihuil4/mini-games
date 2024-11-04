# n = int (input("n = "))
# print(str(n//1440) + ":" + str((n%1440)//60) + ":" + str((n%1440)%60))
n = int(input("year:"))
if n % 4 == 0 and n % 100 and n!= 0 and n > 0:
    print("YES")
elif n < 0:
    print("э нормальное число вводи")
else:
    print("NO")