if (s.length !== t.length){ return false }
    let hmap = {}
    let ctr = 0 
    for (let i = 0 ; i < s.length ; i++){
        let sLetter = s[i]
        let tLetter = t[i]
        if (hmap[sLetter] && hmap[tLetter]) { 
            ctr += 1 ; 
            continue 
        }
        if (!hmap[sLetter]) {
            hmap[sLetter] = true 
            ctr += 1 
        }   
        if (!hmap[tLetter]) {
            hmap[tLetter] = true 
            ctr += 1 
        }
}
if (ctr !== s.length) { return false }
else { return true }