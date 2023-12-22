# Snake case is the naming convention for Python
# variables and functions

"""
This
is
a
multiline
comment
"""

# Print 1-255
# print1To255()
# Print all the integers from 1 to 255.

# for "thing" in "things"

# the range function returns a range of numbers
# starting at start, stopping at stop
# and changing by step
# range(start, stop, step)

# function declaration
def print_1_to_255():
    for i in range(1, 256):
        print(i)

# function invocation
print_1_to_255()

"""
2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255.
"""

def print_odds_1_to_255():
    for i in range(1, 256, 2):
        print(i)

print_odds_1_to_255()

def print_odds_with_modulo():
    for i in range(1, 256):
        if (i % 2 == 1):
            print(i)

print_odds_with_modulo()

"""
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. 
"""

def print_ints_and_sum_0_to_255():
    # create a variable for sum
    # for loop starting at 0
    # stops at 256, and steps by 1
    sum = 0
    for i in range(256):
        sum += i
        print(f"int: {i}, sum: {sum}")
    # inside the loop:
        # print the num
        # and the sum so far
    
print_ints_and_sum_0_to_255()

"""
4. Iterate and Print List
printListVals(lst)
Iterate through a given list, printing each value. 
"""

def print_list_vals(lst):
    for element in lst:
        print(element)

colors = ['red', 'blue', 'yellow']

print_list_vals(colors)

def print_list_vals_with_range(lst):
    for i in range(len(lst)):
        print(lst[i])

print_list_vals_with_range(colors)