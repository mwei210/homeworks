


def sluggish(fishes)
  longest = ""
  fishes.each_with_index do |i, idx1|
    fishes[idx1..-1].each do |j|
      longest = j if i.length < j.length
    end
  end
  longest
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }
    return self if length <= 1
    midpoint = length / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      else
        merged << right.shift
      end
    end
    merged.concat(left)
    merged.concat(right)
    merged
  end
end

def dominant(fishes)
  prc = Proc.new { |x, y| y.length <=> x.length }
  fishes.merge_sort(&prc)[0]
end

def clever(fishes)
  longest = fishes[0]
  fishes.each do |fish|
    longest = fish if longest.length < fish.length
  end
  longest
end
