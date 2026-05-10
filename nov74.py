with open("students.txt", "a") as file:
    name = input("Enter name: ")
    file.write(name + "\n")
