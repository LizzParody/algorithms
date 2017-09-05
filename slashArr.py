def slasher(arr, howMany):
  new_list = []
  for pos, e in enumerate(arr):
    if pos >= howMany:
      new_list.append(e)
  return new_list
