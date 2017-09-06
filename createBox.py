def create_box(height, width, character):
    box = ""
    for i in range(height):
        box += character * width
        box += '\n'
    return box

create_box(3, 4, '*')
'****
 ****
 ****'
