def is_palindrome(s):
    if s == '':
        return True
    elif s[0] == s[-1]:
        return is_palindrome(s[1:-1])
    else:
        return False
