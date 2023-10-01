def lengthOfLongestSubstring(s: str) -> int:
    if len(s) <= 1 : return len(s)
    seen = set()
    largest = 1 
    first = 0 
    second = 1 
    seen.add(s[first])
    while second < len(s):
        if s[second] not in seen:
            seen.add(s[second])
            if len(seen) > largest : largest = len(seen)
            second += 1 
            continue 
        track = s[first]
        while track != s[second]:
            seen.remove(track)
            first += 1 
            track = s[first]
        first += 1 
        second += 1 
    return largest

s = 'abcabcbb'

lengthOfLongestSubstring(s)