# object-oriented programming
#
# class Person:
#     def __init__(self):
#         self.name = "kiddy"
#         self.age = 57
#         self.school = "United"
#         self.country = "Kenya"
#
#
# person = Person()
# person.name = "joker"
#
#
#
#
# print(person.name)

class People:
    def __init__(self, name, age, school, country):
        self.name = name
        self.age = age
        self.school = school
        self.country = country


person1 = People(name="kiddy", age=67, school="United", country="Kenya")

person2 = People(name="john", age=27, school="Harvard", country="Uganda")


print(f'My name is {person1.name} am {person1.age} years old in {person1.country}')





