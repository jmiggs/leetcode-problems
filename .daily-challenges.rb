def is_happy(n)
    return false if n < 1
    return true if n = 1
    
    n_split = n.to_s.to_a
    
    return is_happy((n_split[0]*n_split[0])+(n_split[1]*n_split[1]))
    
end

p is_happy(19)