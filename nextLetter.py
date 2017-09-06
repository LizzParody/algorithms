def shift(letter):
    output = ord(letter) + 1
    if letter == 'z':
        return 'a'
    return chr(output)

print shift('a')
#>>> b
print shift('n')
#>>> o
print shift('z')
#>>> a
