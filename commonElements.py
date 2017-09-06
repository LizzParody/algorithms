tuple_1 = (1, 5, 6, 4, 8)
tuple_2 = (1, 6, 10, 5)
common_values(tuple_1, tuple_2)  #{1, 4, 5, 6, 8, 10}

def common_values(tuple_1, tuple_2):
    return set(tuple_1) | set(tuple_2)
