
maths = int(input("maths: "))
english = int(input("english: "))
science = int(input("science: "))
history = int(input("history: "))
geography = int(input("geography: "))

total = maths+english+science+history+geography
print(total)


average = total/5

if average > 100:
    print("invalid marks above 100")

else:
    print(average)

if average < 0:
    print("invalid negative marks")

if average >=0 and average <= 39 :
    print("E")

if average >= 40 and average <= 50:
    print("D")

if average >= 51 and average <= 60:
  print("C")

if average >= 61 and average <= 70:
  print("B")

if average >= 71 and average <= 100:
    print("A")

elif average < 0:
    print("invalid negative marks")















