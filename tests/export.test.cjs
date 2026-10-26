const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const exportUI=require('../docs/app/export.js');
const data={entries:[{date:'2026-10-03',category:'meal',label:'<script>',detail:'A & B\nsecond line',calories:42,water:2},{date:'2026-10-04',category:'note',detail:'excluded'}],sleeps:[{date:'2026-10-03',segments:[{start:1380,end:1800,type:'night'},{start:1700,end:1860,type:'nap'}],dream:'<dream>',note:'sleep note',mood:'Okay'}],items:{medicine:[{name:'Medicine',doctorNotes:'Doctor <note>'}],place:[]},calorieTracking:false};
test('print range validates dates and includes both boundaries',()=>{
 assert.deepEqual(exportUI.dates('2024-02-28','2024-03-01'),['2024-02-28','2024-02-29','2024-03-01']);
 for(const range of [['2026-02-30','2026-03-01'],['2026-10-04','2026-10-03'],['2025-01-01','2026-10-03'],['','2026-10-03']])assert.throws(()=>exportUI.dates(...range));
});
test('calendar prints icons only for selected dates and active records',()=>{
 const html=exportUI.calendar({...data,entries:[...data.entries,{date:'2026-10-03',category:'medication',voided:true}]},['2026-10-03']);
 assert.match(html,/print-icons">☾ ◌<\/div>/);
 assert.doesNotMatch(html,/<div class="print-icons">✳/);
 assert.doesNotMatch(html,/<script>|excluded|A &amp; B/);
});
test('timeline preserves notes safely, excludes hidden calories, and merges overlapping sleep',()=>{
 const html=exportUI.timeline(data,['2026-10-03']);
 assert.match(html,/&lt;script&gt;/);assert.match(html,/A &amp; B\nsecond line/);
 assert.match(html,/Sleep · 8 h 0 m/);assert.match(html,/&lt;dream&gt;/);assert.match(html,/Doctor &lt;note&gt;/);
 assert.doesNotMatch(html,/Calories:|excluded|<script>/);
 assert.match(exportUI.timeline({...data,calorieTracking:true},['2026-10-03']),/Calories: 42 kcal/);
});
test('appearance follows system on first use, reacts to device changes and allows explicit override',()=>{
 let dark=true,change;const meta={},dataset={},storage=new Map([['reorder.theme','dark']]);
 const context={document:{documentElement:{dataset},querySelectorAll:()=>[meta],addEventListener(){}},window:{},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},matchMedia:()=>({get matches(){return dark},addEventListener:(_,cb)=>change=cb})};
 vm.runInNewContext(fs.readFileSync(require.resolve('../docs/app/appearance.js'),'utf8'),context);
 assert.equal(dataset.theme,'system');assert.equal(dataset.colorMode,'dark');assert.equal(meta.content,'#000000');
 dark=false;change();assert.equal(dataset.colorMode,'light');assert.equal(meta.content,'#ffffff');
 context.window.reorderAppearance('dark');assert.equal(dataset.colorMode,'dark');assert.equal(storage.get('reorder.appearance.v2'),'dark');
});
