# Assignment-18

# Write a python program to create and print a dictionary which stores your information.
# (name, age, gender …..)

# d={'name':"himanshu",'age':22,'gender':'Male'}
# for e in d:
#     print(d[e],end=' ')

# 3. Write a python program to get a list of the values from a dictionary.
# print(d.values())

# 4. Write a python program to change the value of a specific item by referring to its key
# name.
# d['name']='Raushan'
# 5. Write a python program to print all key names in the dictionary, one by one.
# for e in d:
#     print(e)

# 6. Write a python program to create a dictionary that contains three dictionaries.
# (nested)
# dictionary1 = {'key1': 'value1', 'key2': 'value2'}
# dictionary2 = {'key3': 'value3', 'key4': 'value4'}
# dictionary3 = {'key5': 'value5', 'key6': 'value6'}

# nested_dictionary = {'dict1': dictionary1, 'dict2': dictionary2, 'dict3': dictionary3}

# print(nested_dictionary)

# 8. Write a python program to convert two lists into a dictionary in a way that item from
# list1 is the key and item from list2 is the value.
# l1=['name','age','gender']
# l2=['himanshu',22,'Male']
# d1={}
# for i in range(len(l1)):
#     d1[l1[i]]=l2[i]
# print(d1)

# 10. Write a python program to get the key of lowest value from the dictionary.
# sample_dict = {
# 'C': 92,
# 'Java': 66,
# 'Python': 85
# }

# def get_key_with_lowest_value(dictionary):
#     if not dictionary:
#         return None

#     lowest_value = min(dictionary.values())
#     lowest_value_keys = [key for key, value in dictionary.items() if value == lowest_value]

#     return lowest_value_keys[0]

# # Example usage
# sample_dict = {
#     'C': 92,
#     'Java': 66,
#     'Python': 85
# }

# lowest_value_key = get_key_with_lowest_value(sample_dict)
# print("Key with the lowest value:", lowest_value_key)
