# Assignment-13

# 1. Write a python script to store multiple items in a single variable ( Items are “Java”
# ,“Python”, “SQL”, “C” ) using list

# list=["java","python","SQL","C"]
# print(list)

# 3. Write a python script to get the last item of the list ( mylist = ["Java", "C", "Python"])

# myList=["java","C","python"]
# print(myList[-1])

# 4. Write a python script to Change the values "SQL" and "Reactnative" with the values
# "NoSQL" and "Flutter" (List is thislist = ["Java", "SQL", "C", "Reactnative",
# "Javascript", "Python"]

# thislist=["java","sql","c","reactnative"]
# print(thislist)
# i=0
# while i<len(thislist):
#     if thislist[i]=='sql':
#         thislist[i]='Nosql'
#     if thislist[i]=='reactnative':
#         thislist[i]='flutter'
#     i=i+1    
# print(thislist)       

#  5. Write a python script to add an item to the end of the list (item “Python”. (mylist =
# ["Java", "SQL", "C", "Reactnative"]

# mylist=list(["java","c","sql","reactnative"])
# mylist.append('himanshu')

# 6.Write a python program to append elements from another list to the current list.(
# firstlist = ["Java", "Python", "SQL"]
# secondlist = ["C", "Cpp", "NoSQL"] )

# firstlist = ["Java", "Python", "SQL"]
# secondlist = ["C", "Cpp", "NoSQL"]
# for x in secondlist:
#     firstlist.append(x)
# print(firstlist)

# 8. Write a python program to sort the list alphanumerically – thislist = ["Java", "SQL",
# "C", "Reactjs", "Javascript", "Python"]

# thislist = ["Java", "SQL", "C", "Reactjs", "Javascript", "Python"]
# print(sorted(thislist))

# 9. Write a Python script to create a list of city names taken from the user.
# l=[]
# value=True
# while value:
#      x=input('Enter your city name')
#      l.append(x)
#      print('do you want to add more city names')
#      y=input()
#      if y=='yes':
#       value=True
#      else:
#       value=False
# print(l)      


# Write a Python script to create a list, where each element of the list is a digit of a
# given number

# p=[int(x) for x in input('Enter the num')]
# print(p)