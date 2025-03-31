# Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
# Any whitespace at the end of the line should also be stripped out.
#
# Example:
#
# Given an input string of:
#
# apples, pears # and bananas
# grapes
# bananas !apples

# The output expected would be:
#
# apples, pears
# grapes
# bananas

# The code would be called like so:
#
# result = strip_comments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# # result should == "apples, pears\ngrapes\nbananas"

import re


def strip_comments(strng, markers):
    lines = strng.splitlines()
    stripped_text = ''
    for line in lines:
        for marker in markers:
            line = line.split(marker, 1)[0]

        if line:
            line = re.sub(r'\s+$', '', line)
            stripped_text += line

        stripped_text += '\n'
    return stripped_text[:-1]
