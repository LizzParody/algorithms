def chunkArrayInGroups(a_list, size):
  new_list = []
  i = 0
  while i < len(a_list):
    new_list.append(a_list[i: i + size])
    i += size
  return new_list

print(chunkArrayInGroups(["a", "b", "c", "d"], 2))
