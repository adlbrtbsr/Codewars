# How many ways can you make the sum of a number?
# From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)
#
# In number theory and combinatorics, a partition of a positive integer n, also called an integer partition,
# is a way of writing n as a sum of positive integers.
# Two sums that differ only in the order of their summands are considered the same partition.
# If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
#
# 4
# 3 + 1
# 2 + 2
# 2 + 1 + 1
# 1 + 1 + 1 + 1
#
# Examples
# Basic
# exp_sum(1) # 1
# exp_sum(2) # 2  -> 1+1 , 2
# exp_sum(3) # 3 -> 1+1+1, 1+2, 3
# exp_sum(4) # 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
# exp_sum(5) # 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
# exp_sum(10) # 42
#
# Explosive
# exp_sum(50) # 204226
# exp_sum(80) # 15796476
# exp_sum(100) # 190569292

def pentagonal_number(k):
    return int(k*(3*k-1) / 2)


def exp_sum(n):
    partitions = [1]
    for i in range(1, n + 1):
        partitions.append(0)
        for k in range(1, i + 1):
            coeff = (-1) ** (k + 1)
            for t in [pentagonal_number(k), pentagonal_number(-k)]:
                if (i - t) >= 0:
                    partitions[i] = partitions[i] + coeff * partitions[i - t]
    return partitions[-1]

if __name__ == '__main__':
    print(exp_sum(10))