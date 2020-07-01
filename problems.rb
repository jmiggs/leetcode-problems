
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