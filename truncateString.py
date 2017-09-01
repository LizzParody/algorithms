def truncateString(string, num):
  finish_in = num - 3
  return string[0:finish_in] + '...'


print(truncateString("A-tisket a-tasket A green and yellow basket", 11))
#A-tisket...
