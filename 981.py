class TimeMap:

    def __init__(self):
        self.hmap = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.hmap :
            self.hmap[key].append([value, timestamp])
        else:
            self.hmap[key] = [ [value, timestamp] ]
        

    def get(self, key: str, timestamp: int) -> str:
        vals = self.hmap[key]
        left = 0 
        right = len(vals) - 1  
        while left <= right : 
            middle = (left + right) // 2 
            if vals[middle][1] < timestamp : 
                left = middle + 1 
            elif vals[middle][1] > timestamp :
                right = middle - 1 
            else:
                return vals[middle][0]
        

hi = TimeMap()
hi.set("foo", "bar", 1)
hi.set("foo", "bar2", 2)
hi.set("foo", "bar4", 4)
hi.get("foo", 3)
hi.get("foo", 5)