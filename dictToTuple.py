def dict_to_tuple(a_dict):
    my_tuple = ()
    result = []
    for key, value in a_dict.items():
        my_tuple = key, value
        result += my_tuple,
    return result
