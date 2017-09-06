def is_list(p):
    return isinstance(p, list)

def deep_count(p):
    count = 0
    for e in p: 
        count += 1
        if is_list(e):
            count = count + deep_count(e)
    return count

print deep_count([1, [1, 2, [3, 4]]])
#>>> 7

print deep_count([[[[[[[[1, 2, 3]]]]]]]])
#>>> 10
