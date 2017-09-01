def largestOfFour(array):
  new_list = []
  for arr in array:
    max_num = 0
    for num in arr:
      if num > max_num:
        max_num = num
    new_list.append(max_num)
  return new_list


print(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],  [1000, 1, 857, 1], [32, 35, 37, 39]]))
