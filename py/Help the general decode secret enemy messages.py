# General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy,
# but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war.
# Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to
# crack it though.
# So the general is asking you , his most odd but brilliant programmer.
#
# You can call the encoder like this.
# encode("Hello World!")
#
# Our cryptoanalysts kept poking at it and found some interesting patterns.
#
# print(
# encode("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
# print(
# encode("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"))
# print(encode("!@#$%^&*()_+-"))
# a,b,c = "", "", ""
# for w in "abcdefghijklmnopqrstuvwxyz":
#     a += encode(  "" + w)[0]
#     b += encode( "_" + w)[1]
#     c += encode("__" + w)[2]
# print(a)
# print(b)
# print(c)
#
# Log:
# bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir
# dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp
# !@#$%^&*()_+-
# bdfhjlnprtvxzBDFHJLNPRTVXZ
# dhlptxBFJNRVZ37,aeimquyCGK
# hpxFNV3,emuCKS08bjrzHPX5 g
#
# We think if you keep on this trail you should be able to crack the code! You are expected to fill in the
# decode
# function. Good luck ! General Patron is counting on you!




char_map = {
    '?': ' ',
    '8': ',',
    '6': '.',
    'M': '0',
    'O': '1',
    'Q': '2',
    'S': '3',
    'U': '4',
    'W': '5',
    'Y': '6',
    '0': '7',
    '2': '8',
    '4': '9',
    '.': '?',
    '1': 'A',
    '3': 'B',
    '5': 'C',
    '7': 'D',
    '9': 'E',
    ',': 'F',
    ' ': 'G',
    'a': 'H',
    'c': 'I',
    'e': 'J',
    'g': 'K',
    'i': 'L',
    'k': 'M',
    'm': 'N',
    'o': 'O',
    'q': 'P',
    's': 'Q',
    'u': 'R',
    'w': 'S',
    'y': 'T',
    'A': 'U',
    'C': 'V',
    'E': 'W',
    'G': 'X',
    'I': 'Y',
    'K': 'Z',
    'b': 'a',
    'd': 'b',
    'f': 'c',
    'h': 'd',
    'j': 'e',
    'l': 'f',
    'n': 'g',
    'p': 'h',
    'r': 'i',
    't': 'j',
    'v': 'k',
    'x': 'l',
    'z': 'm',
    'B': 'n',
    'D': 'o',
    'F': 'p',
    'H': 'q',
    'J': 'r',
    'L': 's',
    'N': 't',
    'P': 'u',
    'R': 'v',
    'T': 'w',
    'V': 'x',
    'X': 'y',
    'Z': 'z'
}

def decode(s):
    decoded = ""
    for index, char in enumerate(s):
        if char in char_map:
            for _ in range(index + 1):
                char = char_map[char]
        decoded += char

    return decoded