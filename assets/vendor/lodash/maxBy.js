var baseExtremum=require("./_baseExtremum"),baseGt=require("./_baseGt"),baseIteratee=require("./_baseIteratee");function maxBy(e,r){return e&&e.length?baseExtremum(e,baseIteratee(r,2),baseGt):void 0}module.exports=maxBy;