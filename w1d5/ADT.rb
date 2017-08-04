class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def show
    @stack
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el)
  end

  def dequeue
    @queue.pop
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @map = Hash.new {}
  end

  def assign(key, value)
    @map[key] = value
  end

  def lookup(key)
    @map[key]
  end

  def remove(key)
    @map.reject { |k| k == key}
  end

  def show
    @map
  end
end
