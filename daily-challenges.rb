# Apr 1, 2020 - Wednesday

def single_number(nums)
    check_hash = {}
    
    nums.each do |i|
        if check_hash[i]
            check_hash[i] = nil
        else
            check_hash[i] = true
        end
    end
    ret_val =  check_hash.compact.to_a
    return ret_val[0][0]
end

# p single_number([2,2,1])
# p single_number([4,1,2,1,2])
# p single_number([5,1,7,8,100,7,1,5,8])

# Apr 2, 2020 - Thursday 
# Write an algorithm to determine if a number is "happy".

# A happy number is a number defined by the following process: Starting with any positive integer, 
# replace the number by the sum of the squares of its 
# digits, and repeat the process until the number equals 1 (where it will stay), or it loops 
# endlessly in a cycle which does not include 1. Those numbers 
# for which this process ends in 1 are happy numbers.

def is_happy(n)
    return false if n < 10 && n % 2 == 0
    return false if n < 1 
    return true if n == 1
    
    sum = 0

    nsplit = n.to_s.split("")
    nsplit.each do |i|
        sum += (i.to_i * i.to_i)
    end

    return is_happy(sum)
    
end

p is_happy(2)
p is_happy(7)
p is_happy(19)




# def is_happy(n, hash = {})
# return false if n < 10 && n % 2 == 0
# return false if n < 1 
# return true if n == 1
# return false if hash[n]

#     sum = 0

#     nsplit = n.to_s.split("")
#     nsplit.each do |i|
#         sum += (i.to_i * i.to_i)
#     end
    
#     hash[sum] = true

#     return is_happy(sum, hash)
    
# end

