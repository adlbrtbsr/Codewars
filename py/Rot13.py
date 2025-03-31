# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
# ROT13 is an example of the Caesar cipher.
#
# Create a function that takes a string and returns the string ciphered with Rot13.
# If there are numbers or special characters included in the string, they should be returned as they are.
# Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
#
# Please note that using encode is considered cheating.

def shift_13_up(char):
    return chr(ord(char) + 13)

def shift_13_down(char):
    return chr(ord(char) - 13)

def rot13(message):
    return "".join([shift_13_up(char) if (96 < ord(char) < 110 or 64 < ord(char) < 78) else shift_13_down(char) if (109 < ord(char) < 123 or 77 < ord(char) < 91) else char for char in message])
