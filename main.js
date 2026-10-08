const rawData = `Jan 21,13.7,15.33,10,8.38,8.9,179.93
Feb 21,17.98,13.63,8.9,7.4,11.36,196.08
Mar 21,18.5,12.5,8.71,6,10.63,180.85
Apr 21,17.03,14.98,8.85,6.12,12.11,191.49
May 21,18.02,12.52,6.93,5.18,11.76,168.66
Jun 21,19.88,11.77,7.16,6.01,9.21,173.47
Jul 21,13.77,10.38,7.66,6.92,7.37,163.96
Aug 21,14.95,9.5,8.52,7.73,9.12,153.8
Sep 21,16.16,12.93,8.23,9.54,10.09,181.22
Oct 21,13.48,12.13,8.93,8.57,9.27,170.96
Nov 21,14.39,15.96,10.44,9.29,10.04,172.77
Dec 21,16.47,16.59,11.8,8.88,11.94,198.9
Jan 22,20.15,16.61,12.04,8.56,13.19,223.93
Feb 22,19.37,16.4,10.69,8.91,12.76,211.17
Mar 22,20.99,16.65,11.48,7.09,13.41,204.04
Apr 22,21.68,15.49,9.54,8.33,14.46,215.55
May 22,24.73,17.77,9.18,7.57,13.17,212.79
Jun 22,23.88,14.82,8.93,8.13,13.58,209.78
Jul 22,21.24,15.13,9.61,9,10.87,199.57
Aug 22,19.28,12.6,10.89,9.36,11.57,183.61
Sep 22,18.89,14.62,11.93,11.27,11.11,206.54
Oct 22,19.67,16.76,11.75,11.1,11.18,202.74
Nov 22,17.44,16.72,14.52,12,13.36,208.69
Dec 22,21.35,19.57,12.83,11.38,14.21,227.85
Jan 23,20.22,18.6,13.7,11.31,14,228.04
Feb 23,22.73,18.89,12.93,10.7,16.48,240.97
Mar 23,25.97,20.52,11.58,10.06,17.64,244.14
Apr 23,23.85,19.08,11.63,8.8,16.19,237.91
May 23,25.27,19.08,10.61,9.73,15.48,234.05
Jun 23,23.59,15.44,11.19,9.54,14.2,210.9
Jul 23,23.09,17.45,11.86,10.89,13.89,227.45
Aug 23,18.82,19.23,13.55,9.83,13.91,223.75
Sep 23,19.24,17.17,13.69,11.2,12.46,212.82
Oct 23,20.4,18.37,14.02,13.17,12.48,224.53
Nov 23,23.03,20,15.03,14.56,14.36,235.22
Dec 23,23.09,19.44,15.86,13.78,14.76,246.38
Jan 24,25.08,22.87,15.75,12.31,17.77,264.54
Feb 24,27.69,21.4,16.36,11,17.92,270.04
Mar 24,27.18,22.48,15.58,12.09,17.22,265.5
Apr 24,29.26,23.46,13.44,11.1,18.39,270.66
May 24,27.83,20.46,12.8,11.51,17.93,265.49
Jun 24,25.91,20.68,11.12,11.52,17.6,241.11
Jul 24,26.29,20.51,13.14,12.15,16.17,242.65
Aug 24,26.23,19.67,13.63,15.09,17.38,244.78
Sep 24,25.13,18.58,15.2,13.91,15.13,245.72
Oct 24,24.59,20.77,16.86,14.49,16.04,264.53
Nov 24,28.15,24.54,17.52,14.85,17.01,269.55
Dec 24,27.16,22.03,17.77,14.47,18.15,273.18
Jan 25,29.61,24.93,17.88,15.16,19.83,296.9
Feb 25,32.91,25.22,17.13,13.61,21.19,310.04
Mar 25,30.05,25.79,16.66,13.7,22.41,300.9
Apr 25,31.03,25.73,13.19,13.04,19.69,287.05
May 25,34.25,25.57,15.07,13.63,20.04,293.84
Jun 25,30.38,22.67,15.12,13.42,19.2,278.26
Jul 25,30.16,23.07,15.35,12.96,19.54,281.92
Aug 25,30.18,22.65,16.28,13.77,17.77,261.73
Sep 25,29.15,23.19,18.08,16.58,16.29,284.12
Oct 25,30.07,23.3,18.11,15.85,18.57,287.36
Nov 25,30.44,24.34,21.18,15.7,19.47,297.09
Dec 25,31.3,25.72,20.38,16.09,20.96,293.63
Jan 26,30.87,27.21,19.75,17.04,21.16,305.09
Feb 26,34.53,28.85,19.1,14.55,24.65,341.29
Mar 26,35.34,29.19,18.47,14.32,23.31,320.99
Apr 26,34.05,28.06,17.08,14.05,23.34,307.08
May 26,37.22,26.17,17.24,13.58,22.09,309.58
Jun 26,35.67,27.51,17.47,13.97,21.16,303.63
Jul 26,33.53,26.53,18.12,14.43,20,300.66
Aug 26,31.98,24.56,18.95,16.06,20.14,307.51
Sep 26,30,24.65,19.34,17.02,19.54,290.79
Oct 26,31.56,26.75,19.5,17.48,22.75,315.66
Nov 26,32.56,29.37,20.92,17.14,20.2,313.35
Dec 26,32.38,29.91,23.16,19.12,22.18,346.69`;

const featureKeys = ['youtube', 'instagram', 'netflix', 'prime', 'hotstar'];
const labels = ['YouTube', 'Instagram', 'Netflix', 'Prime Video', 'JioHotstar'];
const colors = ['#ff5f57','#ffba46','#9079ff','#54c7b3','#4fa8ff'];
let model;

function parseDefault() { return rawData.split('\n').map(line => { const p = line.split(','); return { month:p[0], x:p.slice(1,6).map(Number), y:Number(p[6]) }; }); }
function transpose(a) { return a[0].map((_,i) => a.map(r => r[i])); }
function multiply(a,b) { return a.map(r => b[0].map((_,j) => r.reduce((s,v,i) => s + v*b[i][j], 0))); }
function inverse(a) { const n=a.length, m=a.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>i===j?1:0)]); for(let i=0;i<n;i++){ let pivot=i; for(let r=i+1;r<n;r++)if(Math.abs(m[r][i])>Math.abs(m[pivot][i]))pivot=r; [m[i],m[pivot]]=[m[pivot],m[i]]; const d=m[i][i]; if(Math.abs(d)<1e-10) throw Error('Dataset features are too closely correlated to train a stable model.'); m[i]=m[i].map(v=>v/d); for(let r=0;r<n;r++)if(r!==i){const f=m[r][i];m[r]=m[r].map((v,c)=>v-f*m[i][c]);} } return m.map(r=>r.slice(n)); }
function fit(rows) { const x=rows.map(r=>[1,...r.x]), y=rows.map(r=>[r.y]); return multiply(multiply(inverse(multiply(transpose(x),x)),transpose(x)),y).map(r=>r[0]); }
function predict(coeff, x) { return coeff[0] + x.reduce((s,v,i)=>s+v*coeff[i+1],0); }
function seededSplit(data) { const items=[...data]; let seed=42; for(let i=items.length-1;i>0;i--){seed=(seed*1664525+1013904223)>>>0;const j=seed%(i+1);[items[i],items[j]]=[items[j],items[i]];} const cut=Math.round(items.length*.8); return [items.slice(0,cut),items.slice(cut)]; }
function train(data) { if(data.length<12) throw Error('Please provide at least 12 valid observations.'); const [training,test]=seededSplit(data); const coeff=fit(training); const points=test.map(r=>({actual:r.y,predicted:predict(coeff,r.x)})); const errors=points.map(p=>p.actual-p.predicted); const mae=errors.reduce((s,e)=>s+Math.abs(e),0)/errors.length; const mse=errors.reduce((s,e)=>s+e*e,0)/errors.length; const mean=test.reduce((s,r)=>s+r.y,0)/test.length; const r2=1-errors.reduce((s,e)=>s+e*e,0)/test.reduce((s,r)=>s+(r.y-mean)**2,0); return {coeff,points,mae,mse,rmse:Math.sqrt(mse),r2,train:training.length,test:test.length}; }
const money = n => `₹${n.toFixed(2)} L`;
function render(m, rows) { model=m; document.querySelector('#r2').textContent=m.r2.toFixed(3); document.querySelector('#mae').textContent=money(m.mae); document.querySelector('#rmse').textContent=money(m.rmse); document.querySelector('#mse').textContent=`${m.mse.toFixed(2)} L²`; document.querySelector('#testCount').textContent=m.test; document.querySelector('#trainCount').textContent=m.train; document.querySelector('#datasetStatus').textContent=`${rows.length} monthly observations`; document.querySelector('#equation').textContent=`Sales = ${m.coeff[0].toFixed(1)} ${m.coeff.slice(1).map((c,i)=>`${c>=0?'+':'−'} ${Math.abs(c).toFixed(2)} × ${labels[i]}`).join(' ')}`;
 const max=Math.max(...m.coeff.slice(1).map(Math.abs)); document.querySelector('#coefficients').innerHTML=m.coeff.slice(1).map((c,i)=>`<div class="coefficient"><div><span class="dot" style="background:${colors[i]}"></span><b>${labels[i]}</b><small>per additional ₹1 L</small></div><div><strong>${c>=0?'+':''}${c.toFixed(2)} L</strong><i><em style="width:${Math.abs(c)/max*100}%;background:${colors[i]}"></em></i></div></div>`).join('');
 const leader=m.coeff.slice(1).reduce((best,c,i)=>Math.abs(c)>Math.abs(m.coeff[best+1])?i:best,0); document.querySelector('#insight p').textContent=`${labels[leader]} has the strongest estimated marginal effect: an additional ₹1 lakh is associated with ${money(Math.abs(m.coeff[leader+1]))} ${m.coeff[leader+1]>=0?'more':'less'} in sales revenue, all else equal.`; updateForecast(); drawChart(m.points); }
function updateForecast(){if(!model)return;const x=featureKeys.map(k=>Number(document.querySelector(`[data-channel="${k}"]`).value)||0);document.querySelector('#prediction').textContent=money(predict(model.coeff,x));document.querySelector('#totalSpend').textContent=money(x.reduce((s,v)=>s+v,0));}
function drawChart(points){const canvas=document.querySelector('#scatterChart'),ctx=canvas.getContext('2d'),box=canvas.getBoundingClientRect(),dpr=devicePixelRatio||1;canvas.width=box.width*dpr;canvas.height=box.height*dpr;ctx.scale(dpr,dpr);const w=box.width,h=box.height,p=38, values=points.flatMap(o=>[o.actual,o.predicted]),min=Math.floor(Math.min(...values)/10)*10,max=Math.ceil(Math.max(...values)/10)*10,scale=v=>p+(v-min)/(max-min)*(w-p*2),y=v=>h-p-(v-min)/(max-min)*(h-p*2);ctx.clearRect(0,0,w,h);ctx.strokeStyle='#e7e9ee';ctx.lineWidth=1;for(let i=0;i<4;i++){const pos=p+i*(h-p*2)/3;ctx.beginPath();ctx.moveTo(p,pos);ctx.lineTo(w-p,pos);ctx.stroke();}ctx.strokeStyle='#aeb5c2';ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(scale(min),y(min));ctx.lineTo(scale(max),y(max));ctx.stroke();ctx.setLineDash([]);points.forEach(o=>{ctx.fillStyle='#1c36c7';ctx.globalAlpha=.82;ctx.beginPath();ctx.arc(scale(o.actual),y(o.predicted),4.5,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;ctx.fillStyle='#718096';ctx.font='11px DM Mono';ctx.fillText(`₹${min}L`,p,h-12);ctx.fillText(`₹${max}L`,w-p-36,h-12);ctx.save();ctx.translate(13,h/2+28);ctx.rotate(-Math.PI/2);ctx.fillText('Predicted',0,0);ctx.restore();ctx.fillText('Actual sales revenue',w/2-54,h-2);}
function normaliseRow(row){ const keys=Object.keys(row); const find=(names)=>{const key=keys.find(k=>names.every(n=>k.toLowerCase().includes(n)));return Number(row[key]);}; const x=[find(['youtube']),find(['instagram']),find(['netflix']),find(['prime']),find(['jio'])];const y=find(['sales']);return x.every(Number.isFinite)&&Number.isFinite(y)?{month:row.Month||row.month||'Imported',x,y}:null;}
async function importFile(file){try{let rows;if(file.name.toLowerCase().endsWith('.csv')){const text=await file.text();const [header,...lines]=text.trim().split(/\r?\n/);const heads=header.split(',').map(x=>x.trim());rows=lines.map(line=>Object.fromEntries(heads.map((h,i)=>[h,line.split(',')[i]?.trim()])));}else{if(!window.XLSX)throw Error('Spreadsheet reader is still loading. Please try again.');const wb=XLSX.read(await file.arrayBuffer());rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);}const data=rows.map(normaliseRow).filter(Boolean);render(train(data),data);document.querySelector('#datasetStatus').textContent=`${data.length} imported observations`;}catch(e){alert(`Could not use this file: ${e.message}\n\nExpected columns: YouTube, Instagram, Netflix, Prime, JioHotstar and Sales.`);}}
const scenarios={balanced:[25,20,14,12,16],growth:[34,27,18,15,22],efficient:[20,16,11,9,13]};document.querySelector('#forecastForm').addEventListener('input',updateForecast);document.querySelector('#forecastForm').addEventListener('submit',e=>{e.preventDefault();updateForecast();document.querySelector('.forecast-result').animate([{transform:'translateY(0)'},{transform:'translateY(-3px)'},{transform:'translateY(0)'}],{duration:320,easing:'ease-out'});});document.querySelectorAll('.scenario-chip').forEach(button=>button.addEventListener('click',()=>{featureKeys.forEach((key,index)=>document.querySelector(`[data-channel="${key}"]`).value=scenarios[button.dataset.scenario][index]);document.querySelectorAll('.scenario-chip').forEach(chip=>chip.classList.toggle('active',chip===button));updateForecast();}));document.querySelector('#uploadButton').onclick=()=>document.querySelector('#fileInput').click();document.querySelector('#fileInput').addEventListener('change',e=>e.target.files[0]&&importFile(e.target.files[0]));window.addEventListener('resize',()=>model&&drawChart(model.points));render(train(parseDefault()),parseDefault());
