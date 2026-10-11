
;
const localStorage = (()=>{try{const s=window.localStorage;const k='__ssc_storage_probe__';s.setItem(k,'1');s.removeItem(k);return s;}catch(e){const m=new Map();return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear()};}})();
const $=id=>document.getElementById(id);
const MOCK_TEST_LOCAL_INDEX=[{"id":"193","title":"MOCK TEST - 1 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"193_questions0.7155126154514565.json","hiFile":"194_questions0.4303271967127016.json"},{"id":"195","title":"MOCK TEST - 2 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"195_questions0.3623482974787755.json","hiFile":"196_questions0.15495679982718102.json"},{"id":"197","title":"MOCK TEST - 3 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"197_questions0.40284421342741406.json","hiFile":"198_questions0.31093325582355413.json"},{"id":"199","title":"MOCK TEST - 4 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"199_questions0.09155957734173581.json","hiFile":"200_questions0.007698264801012544.json"},{"id":"201","title":"MOCK TEST - 5 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"201_questions0.6462643140759192.json","hiFile":"202_questions0.49309988681655237.json"},{"id":"203","title":"MOCK TEST - 6 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"203_questions0.07194176269952124.json","hiFile":"204_questions0.2062395182119796.json"},{"id":"205","title":"MOCK TEST - 7 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"205_questions0.06374161717551685.json","hiFile":"206_questions0.36792326055853886.json"},{"id":"207","title":"MOCK TEST - 8 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"207_questions0.5196851296213834.json","hiFile":"208_questions0.35922216261830775.json"},{"id":"209","title":"MOCK TEST - 9 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"209_questions0.8362884295668311.json","hiFile":"210_questions0.6250000174031345.json"},{"id":"211","title":"MOCK TEST - 10 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"211_questions0.07529227197535726.json","hiFile":"212_questions0.10370625514652099.json"},{"id":"213","title":"MOCK TEST - 11 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"213_questions0.025407635748219692.json","hiFile":"214_questions0.0657990929497807.json"},{"id":"215","title":"MOCK TEST - 12 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"215_questions0.47016548181194273.json","hiFile":"216_questions0.0723794146290907.json"},{"id":"217","title":"MOCK TEST - 13 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"217_questions0.3011159780740451.json","hiFile":"218_questions0.26285096757970106.json"},{"id":"219","title":"MOCK TEST - 14 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"219_questions0.14032564310832818.json","hiFile":"220_questions0.11424637546081795.json"},{"id":"221","title":"MOCK TEST - 15 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"221_questions0.247934681928893.json","hiFile":"222_questions0.8810309412150831.json"},{"id":"223","title":"MOCK TEST - 16 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"223_questions0.3289746091394349.json","hiFile":"224_questions0.2661114700154159.json"},{"id":"225","title":"MOCK TEST - 17 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"225_questions0.8884575293805566.json","hiFile":"226_questions0.6130749400068229.json"},{"id":"227","title":"MOCK TEST - 18 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"227_questions0.21870815997103277.json","hiFile":"228_questions0.24022469659630252.json"},{"id":"229","title":"MOCK TEST - 19 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"229_questions0.31941693490057865.json","hiFile":"230_questions0.6562443967845227.json"},{"id":"231","title":"MOCK TEST - 20 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"231_questions0.4488794476852328.json","hiFile":"232_questions0.959381422295656.json"},{"id":"233","title":"MOCK TEST - 21 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"233_questions0.09727563090935509.json","hiFile":"234_questions0.9634651758399573.json"},{"id":"235","title":"MOCK TEST - 22 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"235_questions0.9352779898159584.json","hiFile":"236_questions0.3274921431228106.json"},{"id":"237","title":"MOCK TEST - 23 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"237_questions0.6228556038791037.json","hiFile":"238_questions0.4486841292724141.json"},{"id":"239","title":"MOCK TEST - 24 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"239_questions0.6229563823852828.json","hiFile":"240_questions0.021625559303810715.json"},{"id":"241","title":"MOCK TEST - 25 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"241_questions0.37187269313375804.json","hiFile":"242_questions0.6539358791407597.json"},{"id":"1582","title":"MOCK TEST - 26 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1582_questions0.22229340775924.json","hiFile":"1583_questions0.7725496349432275.json"},{"id":"1584","title":"MOCK TEST - 27 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1584_questions0.6733865744429635.json","hiFile":"1585_questions0.4150192897075766.json"},{"id":"1586","title":"MOCK TEST - 28 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1586_questions0.49196351022890883.json","hiFile":"1587_questions0.6182898555902854.json"},{"id":"1588","title":"MOCK TEST - 29 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1588_questions0.8578431345445234.json","hiFile":"1589_questions0.28534584416177267.json"},{"id":"1590","title":"MOCK TEST - 30 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1590_questions0.7767904791268934.json","hiFile":"1591_questions0.8645909692073852.json"},{"id":"1592","title":"MOCK TEST - 31 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1592_questions0.2255860409392687.json","hiFile":"1593_questions0.60109624970205.json"},{"id":"1594","title":"MOCK TEST - 32 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1594_questions0.2961702537522768.json","hiFile":"1595_questions0.4045418866883923.json"},{"id":"1596","title":"MOCK TEST - 33 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1596_questions0.23086561863738186.json","hiFile":"1597_questions0.6948715789338453.json"},{"id":"1598","title":"MOCK TEST - 34 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1598_questions0.1521370551780281.json","hiFile":"1600_questions0.048834424573453106.json"},{"id":"1599","title":"MOCK TEST - 35 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1599_questions0.4008250108446354.json","hiFile":"1601_questions0.4908347930928869.json"},{"id":"1602","title":"MOCK TEST - 36 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1602_questions0.02785423242730456.json","hiFile":"1603_questions0.671898572469384.json"},{"id":"1604","title":"MOCK TEST - 37 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1604_questions0.7106720769298716.json","hiFile":"1605_questions0.7649494141705029.json"},{"id":"1606","title":"MOCK TEST - 38 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1606_questions0.7895865166189984.json","hiFile":"1607_questions0.7657209581908286.json"},{"id":"1608","title":"MOCK TEST - 39 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1608_questions0.3509133813101739.json","hiFile":"1609_questions0.7749966102567643.json"},{"id":"1610","title":"MOCK TEST - 40 (SSC MTS 2026)","questions":50,"minutes":45,"marks":150,"enFile":"1610_questions0.7859162502475986.json","hiFile":"1611_questions0.6279150269873259.json"}];
let papersBySection={english:[],gk:[],reading:[],chapterwise:[],mock:[]},currentSection="english",active=null,answers=[],current=0,remaining=1500,tick=null,startedAt=null;
let papers=papersBySection[currentSection];
let currentReadingChapter="all",readingAutoLoadPromise=null,readingFolderScanned=false,readingFolderLoadFailed=false;
// Runtime state for the exam palette and timer. These must exist before the first question renders.
let markedQuestions=new Set(),visitedQuestions=new Set(),timerPaused=false;
let folderOpen=false;
var SSC_CUSTOM={},SSC_ACTIVE_SUB=null,SSC_ACTIVE_SUB_LABEL=null;const SECTION_LABELS={chapterwise:"ENGLISH - CHAPTERWISE TEST",english:"Previous Year Sectional Tests - English",gk:"Previous Year Sectional Tests GK-GS",reading:"Reading Comprehension",mock:"Full Mock Tests"};
const READING_LABELS={cloze:"Cloze Test",passage:"Passage",rearrangement:"Sentence Rearrangement",uncategorized:"Uncategorized"};
function openSection(which){
 const root=FOLDER_TREE.find(function(n){return n.slug===which;})||FOLDER_TREE[0];
 if(!root){show("home");return;}
 playSfx("whoosh");openFolderNode(root);
}
function goHome(){navTrail=[];folderOpen=false;show("home");renderHome();scrollPageToTop();}
function openCurrentFolder(){if(navTrail.length)openFolderNode(navTrail[navTrail.length-1]);}
function backToFolders(){if(navTrail.length>1)openFolderNode(navTrail[navTrail.length-2]);else goHome();}

const clean=s=>String(s??"").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").trim();
function findArray(obj,depth=0){
 if(Array.isArray(obj)) return obj.length&&obj.every(x=>x&&typeof x==="object")?obj:null;
 if(!obj||typeof obj!=="object"||depth>7) return null;
 const keys=["questions","test_questions","testQuestions","question_list","questionList","question_paper","questionPaper","items","data","result","payload","response","exam","test"];
 for(const k of keys){const v=obj[k];if(Array.isArray(v)&&v.length&&v.some(x=>x&&typeof x==="object"))return v;}
 for(const v of Object.values(obj)){if(v&&typeof v==="object"){const a=findArray(v,depth+1);if(a&&a.length)return a;}}
 return null;
}
function parseQuestionJson(text){
 let source=String(text??"").replace(/^\\uFEFF/,"").trim();
 if(!source)throw new Error("The file is empty.");
 source=source.replace(/^```(?:json)?\\s*/i,"").replace(/\\s*```$/,"").trim();
 let parsed=JSON.parse(source);
 // Some exports wrap the complete JSON document as a JSON string.
 if(typeof parsed==="string"){parsed=JSON.parse(parsed.replace(/^\\uFEFF/,"").trim());}
 return parsed;
}
function pick(o,keys){for(const k of keys){if(o&&o[k]!==undefined&&o[k]!==null&&o[k]!=="")return o[k];}return null}
function htmlToText(value){
 if(value==null)return "";
 const doc=new DOMParser().parseFromString(String(value),"text/html");
 doc.querySelectorAll("style,script").forEach(el=>el.remove());
 doc.querySelectorAll("p,div,li,br").forEach(el=>{if(el.tagName==="BR")el.replaceWith("\n");else el.insertAdjacentText("beforebegin","\n")});
 return (doc.body.textContent||"").replace(/\u00a0/g," ").replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim();
}
function fmtQuestionHTML(t){const out=[];String(t||"").split(/\n+/).forEach(function(par){par=par.trim();if(!par)return;if(/\([a-e]\)/i.test(par)&&par.indexOf("/")>-1){par.split(/\s*\/\s*/).forEach(function(seg){seg=seg.trim();if(seg)out.push("<p>"+esc(seg)+"</p>")})}else out.push("<p>"+esc(par)+"</p>")});return out.join("")||"<p></p>"}function fmtExplanation(t){var lines=String(t||"").split(/\n+/),out=[],inList=false;function closeList(){if(inList){out.push("</ul>");inList=false}}function e2(s){return s.replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}lines.forEach(function(par){par=par.trim();if(!par)return;if(/^[\u2022\-\*]\s+/.test(par)){if(!inList){out.push("<ul class=\"explain-list\">");inList=true}out.push("<li>"+e2(par.replace(/^[\u2022\-\*]\s+/,""))+"</li>");return}closeList();if(par.length<=46&&!/[.!?:]$/.test(par)){out.push("<h4 class=\"explain-h\">"+e2(par)+"</h4>");return}out.push("<p>"+e2(par)+"</p>")});closeList();return out.join("")||("<p>"+e2(String(t||""))+"</p>")}function safeHtml(v){var s=String(v||"");if(!/<(p|div|br|ul|ol|li|strong|b|em|i|h[1-6])\b/i.test(s))return "";s=s.replace(/<(script|style|link|iframe|object|embed)[\s\S]*?<\/\1>/gi,"").replace(/<(script|style|link|iframe|object|embed)[^>]*>/gi,"");s=s.replace(/\son\w+\s*=\s*"[^"]*"/gi,"").replace(/\son\w+\s*=\s*[^\s>]+/gi,"").replace(/javascript:/gi,"");s=s.replace(/\sstyle\s*=\s*"[^"]*"/gi,"");return s.trim()}
function normalizeQuestion(q,i){
 const options=[];
 for(let j=1;j<=10;j++){
   const value=q?.[`option_${j}`] ?? q?.[`option${j}`] ?? q?.[`option ${j}`];
   if(value!==undefined && value!==null && String(value).trim()!==""){
     const raw=htmlToText(value);
     let m=raw.match(/^\s*([A-J])\s*[\).:-]\s*(.*)$/i);if(!m)m=raw.match(/^\s*\(([A-J])\)\s*(.*)$/i);
     options.push({label:m?m[1].toUpperCase():String.fromCharCode(64+j),text:(m&&m[2].trim())?m[2].trim():raw,raw:value});
   }
 }
 if(!options.length){
   const opts=pick(q,["options","option_list","answers","choices","question_options"]);
   if(Array.isArray(opts)) opts.forEach((o,j)=>options.push({label:String.fromCharCode(65+j),text:htmlToText(typeof o==="object"?pick(o,["text","option","value","title","answer"]):o),raw:o}));
   else if(opts&&typeof opts==="object")Object.entries(opts).forEach(([k,v])=>options.push({label:k,text:htmlToText(typeof v==="object"?pick(v,["text","option","value","title"]):v),raw:v}));
 }
 let answer=pick(q,["answer","correct_answer","correctAnswer","answer_key","answerKey","correct_option","correctOption","right_answer","correct"]);
 if(answer&&typeof answer==="object")answer=pick(answer,["option","text","value","id","label"]);
 return {raw:q,text:htmlToText(pick(q,["question","question_text","questionText","title","ques","q","text"])||`Question ${i+1}`),options,answer:answer==null?null:String(answer).trim(),explanation:htmlToText(pick(q,["solution_text","explanation","solution","answer_explanation","description","solution_heading","explanation_text","answer_explanation_text"])||""),explanationHtml:safeHtml(pick(q,["solution_text","explanation","solution","answer_explanation","description","solution_heading","explanation_text","answer_explanation_text"])||"")};
}
function getTitle(obj,file){
 const id=String(pick(obj,["test_id","testId","id"])||((file.match(/^\d+/)||[])[0]||""));
 const titles={
 "718":"PYST 1: SSC MTS 2025 – Held on 04 Shift 3","719":"PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
 "720":"PYST 3: SSC MTS 2025 – Held on 05 Shift 2","721":"PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
 "722":"PYST 5: SSC MTS 2025 – Held on 06 Shift 1","723":"PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
 "724":"PYST 7: SSC MTS 2025 – Held on 06 Shift 3","725":"PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
 "726":"PYST 9: SSC MTS 2025 – Held on 09 Shift 2","727":"PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
 "728":"PYST 11: SSC MTS 2025 – Held on 10 Shift 1","729":"PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
 "730":"PYST 13: SSC MTS 2025 – Held on 10 Shift 3","731":"PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
 "732":"PYST 15: SSC MTS 2025 – Held on 11 Shift 2","733":"PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
 "734":"PYST 17: SSC MTS 2025 – Held on 12 Shift 1","735":"PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
 "736":"PYST 19: SSC MTS 2025 – Held on 12 Shift 3","737":"PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
 "738":"PYST 21: SSC MTS 2025 – Held on 13 Shift 2","739":"PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
 "740":"PYST 23: SSC MTS 2025 – Held on 16 Shift 1","741":"PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
 "742":"PYST 25: SSC MTS 2025 – Held on 16 Shift 3","743":"PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
 "744":"PYST 27: SSC MTS 2025 – Held on 17 Shift 2","745":"PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
 "746":"PYST 29: SSC MTS 2025 – Held on 18 Shift 1","747":"PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
 "748":"PYST 31: SSC MTS 2025 – Held on 18 Shift 3","749":"PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
 "750":"PYST 33: SSC MTS 2025 – Held on 19 Shift 2","751":"PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
 "752":"PYST 35: SSC MTS 2025 – Held on 20 Shift 1","753":"PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
  "754":"PYST 1: SSC MTS 2025 – Held on 04 Shift 3",
 "755":"PYST 1: SSC MTS 2025 – Held on 04 Shift 3",
 "756":"PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
 "757":"PYST 2: SSC MTS 2025 – Held on 05 Shift 1",
 "758":"PYST 3: SSC MTS 2025 – Held on 05 Shift 2",
 "759":"PYST 3: SSC MTS 2025 – Held on 05 Shift 2",
 "760":"PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
 "761":"PYST 4: SSC MTS 2025 – Held on 05 Shift 3",
 "762":"PYST 5: SSC MTS 2025 – Held on 06 Shift 1",
 "763":"PYST 5: SSC MTS 2025 – Held on 06 Shift 1",
 "764":"PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
 "765":"PYST 6: SSC MTS 2025 – Held on 06 Shift 2",
 "766":"PYST 7: SSC MTS 2025 – Held on 06 Shift 3",
 "767":"PYST 7: SSC MTS 2025 – Held on 06 Shift 3",
 "768":"PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
 "769":"PYST 8: SSC MTS 2025 – Held on 09 Shift 1",
 "770":"PYST 9: SSC MTS 2025 – Held on 09 Shift 2",
 "771":"PYST 9: SSC MTS 2025 – Held on 09 Shift 2",
 "772":"PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
 "773":"PYST 10: SSC MTS 2025 – Held on 09 Shift 3",
 "774":"PYST 11: SSC MTS 2025 – Held on 10 Shift 1",
 "775":"PYST 11: SSC MTS 2025 – Held on 10 Shift 1",
 "776":"PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
 "777":"PYST 12: SSC MTS 2025 – Held on 10 Shift 2",
 "778":"PYST 13: SSC MTS 2025 – Held on 10 Shift 3",
 "779":"PYST 13: SSC MTS 2025 – Held on 10 Shift 3",
 "780":"PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
 "781":"PYST 14: SSC MTS 2025 – Held on 11 Shift 1",
 "782":"PYST 15: SSC MTS 2025 – Held on 11 Shift 2",
 "783":"PYST 15: SSC MTS 2025 – Held on 11 Shift 2",
 "784":"PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
 "785":"PYST 16: SSC MTS 2025 – Held on 11 Shift 3",
 "786":"PYST 17: SSC MTS 2025 – Held on 12 Shift 1",
 "787":"PYST 17: SSC MTS 2025 – Held on 12 Shift 1",
 "788":"PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
 "789":"PYST 18: SSC MTS 2025 – Held on 12 Shift 2",
 "790":"PYST 19: SSC MTS 2025 – Held on 12 Shift 3",
 "791":"PYST 19: SSC MTS 2025 – Held on 12 Shift 3",
 "792":"PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
 "793":"PYST 20: SSC MTS 2025 – Held on 13 Shift 1",
 "814":"PYST 21: SSC MTS 2025 – Held on 13 Shift 2",
 "815":"PYST 21: SSC MTS 2025 – Held on 13 Shift 2",
 "816":"PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
 "817":"PYST 22: SSC MTS 2025 – Held on 13 Shift 3",
 "818":"PYST 23: SSC MTS 2025 – Held on 16 Shift 1",
 "819":"PYST 23: SSC MTS 2025 – Held on 16 Shift 1",
 "820":"PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
 "821":"PYST 24: SSC MTS 2025 – Held on 16 Shift 2",
 "822":"PYST 25: SSC MTS 2025 – Held on 16 Shift 3",
 "823":"PYST 25: SSC MTS 2025 – Held on 16 Shift 3",
 "824":"PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
 "825":"PYST 26: SSC MTS 2025 – Held on 17 Shift 1",
 "826":"PYST 27: SSC MTS 2025 – Held on 17 Shift 2",
 "827":"PYST 27: SSC MTS 2025 – Held on 17 Shift 2",
 "828":"PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
 "829":"PYST 28: SSC MTS 2025 – Held on 17 Shift 3",
 "830":"PYST 29: SSC MTS 2025 – Held on 18 Shift 1",
 "831":"PYST 29: SSC MTS 2025 – Held on 18 Shift 1",
 "832":"PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
 "833":"PYST 30: SSC MTS 2025 – Held on 18 Shift 2",
 "834":"PYST 31: SSC MTS 2025 – Held on 18 Shift 3",
 "835":"PYST 31: SSC MTS 2025 – Held on 18 Shift 3",
 "836":"PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
 "837":"PYST 32: SSC MTS 2025 – Held on 19 Shift 1",
 "838":"PYST 33: SSC MTS 2025 – Held on 19 Shift 2",
 "839":"PYST 33: SSC MTS 2025 – Held on 19 Shift 2",
 "840":"PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
 "841":"PYST 34: SSC MTS 2025 – Held on 19 Shift 3",
 "842":"PYST 35: SSC MTS 2025 – Held on 20 Shift 1",
 "843":"PYST 35: SSC MTS 2025 – Held on 20 Shift 1",
 "844":"PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
 "845":"PYST 36: SSC MTS 2025 – Held on 20 Shift 2",
 };
 const embedded=pick(obj,["title","test_title","name","testName"]);
 if(titles[id]) return titles[id];
 if(embedded) return clean(embedded);
 const numericId=Number(id);
 if(numericId>=2508&&numericId<=2532)return `Sentence Rearrangement Set ${numericId-2507}`;
 if(numericId>=2533&&numericId<=2582)return `Passage Set ${numericId-2532}`;
 if(numericId>=2583&&numericId<=2607)return `Cloze Test Set ${numericId-2582}`;
 const chapterwiseTitles={2648:"NOUN - SET 1",2649:"NOUN - SET 2",2650:"NOUN - SET 3",2651:"PRONOUN - SET 1",2652:"PRONOUN - SET 2",2653:"PRONOUN - SET 3",2654:"ADJECTIVE - SET 1",2655:"ADJECTIVE - SET 2",2656:"ADJECTIVE - SET 3",2657:"ARTICLE - SET 1",2658:"ARTICLE - SET 2",2659:"ARTICLE - SET 3",2660:"SUBJECT VERB AGREEMENT - SET 1",2661:"SUBJECT VERB AGREEMENT - SET 2",2662:"SUBJECT VERB AGREEMENT - SET 3",2663:"TENSE - SET 1",2664:"TENSE - SET 2",2665:"TENSE - SET 3",2666:"VERB - SET 1",2667:"VERB - SET 2",2668:"VERB - SET 3",2669:"ADVERB - SET 1",2670:"ADVERB - SET 2",2671:"ADVERB - SET 3",2672:"CONJUNCTION - SET 1",2673:"CONJUNCTION - SET 2",2674:"CONJUNCTION - SET 3",2675:"CONDITIONAL - SET 1",2676:"CONDITIONAL - SET 2",2677:"CONDITIONAL - SET 3",2678:"PREPOSITION - SET 1",2679:"PREPOSITION - SET 2",2680:"PREPOSITION - SET 3",2681:"NARRATION - SET 1",2682:"NARRATION - SET 2",2683:"NARRATION - SET 3",2684:"NARRATION - SET 4",2685:"VOICE - SET 1",2686:"VOICE - SET 2",2687:"VOICE - SET 3",2688:"VOICE - SET 4"};
 if(chapterwiseTitles[numericId])return chapterwiseTitles[numericId];
 const base=String(file).split(/[\\/]/).pop().replace(/\.json$/i,"");
 const fromAsset=base.match(/^(\d+)_questions/);
 if(fromAsset) return `SSC MTS 2025 — Paper ${fromAsset[1]}`;
 return clean(base.replace(/_questions.*$/i,"").replace(/_/g," "));
}
function detectLanguage(obj,id,fileName){
 const base=String(fileName).split(/[\\/]/).pop().toLowerCase();
 if(/(^|[_ .-])(hindi|hin)([_ .-]|$)/.test(base))return "hi";
 if(/(^|[_ .-])(english|eng)([_ .-]|$)/.test(base))return "en";
 // For this SSC MTS set, the first URL in each pair is English (even ID),
 // and the paired second URL is Hindi (odd ID). This overrides generic API
 // metadata such as language:"hi", which describes the app's default locale.
 const n=Number(id); if(n>=754&&n<=845)return n%2===0?"en":"hi";
 const raw=String(pick(obj,["language","lang","test_language","testLanguage"])||"").toLowerCase();
 if(["hi","hindi","hindi language"].includes(raw))return "hi";
 if(["en","english","english language"].includes(raw))return "en";
 return "en";
}
function inferReadingChapter(s){
 const t=String(s||"").toLowerCase().replace(/[_-]+/g," ");
 if(/\b(cloze|close test|cloze test)\b/.test(t))return "cloze";
 if(/\b(sentence rearrangement|rearrangement|para jumble|paragraph jumble|jumbled sentence)\b/.test(t))return "rearrangement";
 if(/\b(passage|reading comprehension|comprehension|\brc\b)\b/.test(t))return "passage";
 return "uncategorized";
}
function updateReadingChapterCounts(){
 const chapters=[{key:"cloze",id:"count-cloze",label:"Cloze Test"},{key:"rearrangement",id:"count-rearrangement",label:"Sentence Rearrangement"},{key:"passage",id:"count-passage",label:"Passage"},{key:"uncategorized",id:"count-uncategorized",label:"Uncategorized"}];
 for(const c of chapters){const n=papersBySection.reading.filter(p=>(p.chapter||inferReadingChapter(p.title+" "+p.fileName))===c.key).length;const el=$(c.id);if(el)el.textContent=`${n} test${n===1?"":"s"} loaded`;}
 const chosen=chapters.find(c=>c.key===currentReadingChapter);const title=$("readingSelectedTitle"),hint=$("readingSelectedHint");if(title)title.textContent=chosen?chosen.label:"All chapters";if(hint){const shown=chosen?papersBySection.reading.filter(p=>(p.chapter||inferReadingChapter(p.title+" "+p.fileName))===chosen.key).length:papersBySection.reading.length;hint.textContent=`${shown} test${shown===1?"":"s"} loaded from Reading Comprehension`;}
 document.querySelectorAll(".chapter-view").forEach(b=>b.classList.toggle("secondary",b.dataset.chapter===currentReadingChapter));
}
function ingestQuestionObject(obj,displayName,chapter=null,targetSection=currentSection,rerender=true){
 let qs=findArray(obj);if(!qs&&obj&&typeof obj==="object"&&pick(obj,["question","question_text","questionText","ques","q"])!==null)qs=[obj];
 if(!qs||!qs.length)throw new Error("No question array found. Expected an array or a questions/data/items field containing question objects.");
 const baseName=String(displayName).split(/[\\/]/).pop();
 const id=String(pick(obj,["test_id","testId","id"])||pick(qs[0],["test_id","testId","test_title_id"])||((baseName.match(/^\d+/)||[])[0]||""));
 const title=getTitle(obj,baseName),parsed=qs.map(normalizeQuestion),lang=detectLanguage(obj,id,displayName);
 const item={id,title,language:lang,questions:parsed,fileName:displayName,raw:obj,chapter:chapter||(targetSection==="reading"?inferReadingChapter(title+" "+displayName):null),minutes:Number(pick(obj,["time","duration","duration_minutes"])||25),marks:Number(pick(obj,["marks","total_marks"])||75)};
 const target=papersBySection[targetSection]||(papersBySection[targetSection]=[]);
 {
  let grouped=target.find(p=>p.title===title&&(p.variants||(p.language&&p.language!==lang)));
  if(grouped){if(!grouped.variants){grouped.variants={};if(grouped.language)grouped.variants[grouped.language]=grouped;}grouped.variants[lang]=item;grouped.section=targetSection;if(!grouped.questions||!grouped.questions.length)grouped.questions=parsed;}
  else{const exists=target.findIndex(p=>p.fileName===displayName);if(exists>=0)target[exists]=item;else target.push(item);}
 }
 target.sort((a,b)=>(Number(a.id)||999999)-(Number(b.id)||999999));
 if(rerender&&currentSection===targetSection){papers=target;renderPapers();}
 return item;
}
const EXPECTED_LIBRARY_NAME="Test papers SSC";
var LOCAL_FOLDER_SPECS=[];
let folderScanComplete=false, loadingEmbeddedLibrary=false;
let embeddedQuestionTextByPath=new Map();
let sectionFolderResults={};
function ingestPaperMetadata(file,spec){
 const item={id:String(file.id||""),title:String(file.title||file.id||"Question paper"),language:String(file.language||"en"),questions:[],questionCount:Number(file.questionCount)||0,fileName:file.path,embeddedKey:file.path,raw:null,chapter:spec.chapter||null,minutes:Number(file.minutes)||25,marks:Number(file.marks)||75,section:spec.section};
 const target=papersBySection[spec.section]||(papersBySection[spec.section]=[]);
 let grouped=target.find(p=>p.title===item.title&&(p.variants||(p.language&&p.language!==item.language)||spec.groupLangs));
 if(grouped){if(!grouped.variants){grouped.variants={};if(grouped.language)grouped.variants[grouped.language]=grouped;}grouped.variants[item.language]=item;grouped.section=grouped.section||spec.section;}
 else target.push(item);
 target.sort((a,b)=>(Number(a.id)||999999)-(Number(b.id)||999999));
}
function setRootLibraryState(title,message){const t=$("rootLibraryTitle"),m=$("rootLibraryMessage");if(t)t.textContent=title;if(m)m.textContent=message;}
function specForCurrentFolder(){return LOCAL_FOLDER_SPECS.find(s=>s.section===currentSection);}
function paperCountForCurrentFolder(){return (papers||[]).length;}

/* ============================ Path-driven folder tree ==================== */
var FOLDER_TREE=[],FOLDER_NODE_BY_PATH={},navTrail=[];
function treeKey(a){return a.join("\u0001");}
function buildFolderTree(){
 FOLDER_TREE=[];FOLDER_NODE_BY_PATH={};
 Object.keys(papersBySection).forEach(function(slug){
  (papersBySection[slug]||[]).forEach(function(p){
   var parts=String(p.fileName||p.embeddedKey||"").replace(/\\/g,"/").split("/").filter(Boolean);
   if(parts.length<2)return;
   parts=parts.slice(0,-1);
   var parent=FOLDER_TREE,node=null;
   for(var i=0;i<parts.length;i++){
    var key=treeKey(parts.slice(0,i+1));
    node=FOLDER_NODE_BY_PATH[key];
    if(!node){node={name:parts[i],depth:i,path:parts.slice(0,i+1),key:key,slug:slug,children:[],papers:[],count:0,totalQuestions:0};FOLDER_NODE_BY_PATH[key]=node;parent.push(node);}
    node.count++;node.totalQuestions+=Number(p.questionCount)||0;
    parent=node.children;
   }
   if(node)node.papers.push(p);
  });
 });
 (function sortNodes(nodes){nodes.sort(function(a,b){return String(a.name).localeCompare(String(b.name),undefined,{numeric:true,sensitivity:"base"});});nodes.forEach(function(n){sortNodes(n.children);});})(FOLDER_TREE);
}
function ancestorsOf(node){var out=[],acc=[];node.path.forEach(function(seg){acc=acc.concat(seg);var n=FOLDER_NODE_BY_PATH[treeKey(acc)];if(n)out.push(n);});return out;}
function currentFolderNode(){return navTrail.length?navTrail[navTrail.length-1]:null;}
function folderPathForCurrentSection(){var out=["All folders"];navTrail.forEach(function(n){out.push(n.name);});return out;}
function navigateFolderBreadcrumb(level){if(level<0){goHome();return;}if(navTrail[level])openFolderNode(navTrail[level]);}
function updateSectionFolderPath(){
 var el=$("sectionFolderPath");if(!el)return;el.innerHTML="";
 var segs=[{label:"All folders",level:-1}];navTrail.forEach(function(n,i){segs.push({label:n.name,level:i});});
 segs.forEach(function(s,i){
  if(i){var sep=document.createElement("span");sep.className="folder-separator";sep.textContent="\u203a";sep.setAttribute("aria-hidden","true");el.appendChild(sep);}
  var seg=document.createElement("button");seg.type="button";
  seg.className="folder-segment"+(i===segs.length-1?" current":"");
  seg.dataset.folderLevel=String(s.level);
  seg.setAttribute("aria-label","Open folder: "+s.label);
  if(i===segs.length-1)seg.setAttribute("aria-current","location");
  seg.textContent=(i===0?"\ud83c\udfe0 ":i===segs.length-1?"\ud83d\udcc2 ":"\ud83d\udcc1 ")+s.label;
  seg.addEventListener("click",function(){navigateFolderBreadcrumb(s.level);});
  el.appendChild(seg);
 });
}
function updateFolderNavigationUI(){
 var node=currentFolderNode();
 var hasChildren=!!(node&&node.children.length);
 var hasPapers=!!(node&&node.papers.length);
 var fc=$("folderChildren");if(fc)fc.classList.toggle("hidden",!hasChildren);
 var pv=$("paperListView");if(pv)pv.classList.toggle("hidden",!hasPapers);
 var cf=$("childFolderNavigator");if(cf)cf.classList.add("hidden");
 var rc=$("readingChapters");if(rc)rc.classList.add("hidden");
 var btc=$("backToChildFolder");if(btc)btc.classList.toggle("hidden",!hasChildren||navTrail.length<2);
}
function updateSectionLoadStatus(){var el=$("sectionLoadStatus");if(el)el.classList.add("hidden");}
function resetLocalPaperArrays(){papersBySection={};papers=[];sectionFolderResults={};}
function mapRelativePathToSpec(path){
 const parts=String(path||"").replace(/\\/g,"/").split("/").filter(Boolean);if(parts.length&&parts[0].toLowerCase()===EXPECTED_LIBRARY_NAME.toLowerCase())parts.shift();if(parts.length<2)return null;
 const norm=parts.map(x=>x.trim().toLowerCase()),file=parts[parts.length-1];if(!/\.json$/i.test(file))return null;
 return LOCAL_FOLDER_SPECS.find(spec=>{const sp=spec.path.map(x=>x.toLowerCase());return norm.length===sp.length+1&&sp.every((x,i)=>x===norm[i]);})||null;
}
function variantForLanguage(p,lang){
 if(!p||!p.variants)return p;
 const base=p.variants[lang];if(!base)return null;
 return {...base,language:lang,selectedLanguage:lang,parentPaperId:String(p.id)};
}
var manifestPaths=new Set();var manifestAllPaths=[];
function slugify(s){return String(s||"papers").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"papers";}
function pathVariants(path){
 const seg=String(path).split("/").map(function(s){return encodeURIComponent(s);}).join("/");
 const out=[path,encodeURI(path),seg];
 return out.filter(function(v,i){return out.indexOf(v)===i;});
}
var pathPrefix="";
async function loadPaperText(path){
 if(embeddedQuestionTextByPath.has(path))return embeddedQuestionTextByPath.get(path);
 var lastErr=null;
 for(var i=0;i<pathVariants(path).length;i++){
  var cand=pathPrefix+pathVariants(path)[i];
  try{
   var res=await fetch(cand,{cache:"force-cache"});
   if(!res.ok){lastErr=new Error("Could not load "+path+" ("+res.status+")");continue;}
   var text=await res.text();embeddedQuestionTextByPath.set(path,text);return text;
  }catch(e){lastErr=e;}
 }
 throw lastErr||new Error("Could not load "+path);
}
function cleanPaperTitle(t,grouped){var s=String(t||"").trim();if(grouped)s=s.replace(/[\s_\-]*(hindi|english|hin|eng)\s*$/i,"").trim();return s||"Question paper";}
function ingestManifestPaper(p){
 const section=p.section||slugify(p.sectionLabel);
 const target=papersBySection[section]||(papersBySection[section]=[]);
 const path=String(p.path||"");
 /* Group English/Hindi versions of the SAME paper only within the SAME folder.
    The manifest groupKey is scoped to the root section, which wrongly merged
    identically-titled papers living in different sub-folders. */
 const dir=path.split("/").slice(0,-1).join("/");
 const suffix=p.groupKey?String(p.groupKey).split("::").slice(1).join("::"):String(p.title||p.id||"").trim().toLowerCase();
 const dirKey=dir+"::"+suffix;
 const item={id:String(p.id||""),title:cleanPaperTitle(p.title||p.id,!!p.groupKey),language:String(p.language||"en"),questions:[],questionCount:Number(p.questionCount)||0,fileName:path,embeddedKey:path,raw:null,chapter:p.chapter||null,minutes:Number(p.minutes)||25,marks:Number(p.marks)||75,section:section,subLabel:p.subLabel||null,sectionLabel:p.sectionLabel||null};
 item.dirKey=dirKey;item.groupKey=p.groupKey||null;
 const grouped=target.find(function(x){return x.dirKey===dirKey&&(x.variants||(x.language&&x.language!==item.language));});
 if(grouped){if(!grouped.variants){grouped.variants={};grouped.variants[grouped.language]=grouped;}grouped.variants[item.language]=item;if(grouped.language==="hi"&&grouped.variants.en)grouped.title=grouped.variants.en.title;}
 else target.push(item);
}
async function loadFolderLibrary(){
 if(loadingEmbeddedLibrary)return;loadingEmbeddedLibrary=true;
 setRootLibraryState("Loading question papers\u2026","Reading the library index and building the folder tree.");
 var _hf=$("homeFolders");if(_hf)_hf.innerHTML='<div class="skeleton"></div><div class="skeleton"></div>';
 try{
  const res=await fetch("papers.json",{cache:"default"});
  if(!res.ok)throw new Error("papers.json was not found ("+res.status+").");
  const manifest=await res.json();
  const list=(manifest.papers||[]).slice().sort(function(a,b){return String(a.path).localeCompare(String(b.path),undefined,{numeric:true,sensitivity:"base"});});
  resetLocalPaperArrays();embeddedQuestionTextByPath=new Map();manifestPaths=new Set();manifestAllPaths=[];LOCAL_FOLDER_SPECS.length=0;const seen={};
  list.forEach(function(p){
   manifestPaths.add(p.path);manifestAllPaths.push(p.path);
   const sec=p.section||slugify(p.sectionLabel);
   if(p.sectionLabel)SECTION_LABELS[sec]=p.sectionLabel;
   const key=sec+"||"+(p.subLabel||"");
   if(!seen[key]){seen[key]=1;LOCAL_FOLDER_SPECS.push({section:sec,path:[p.sectionLabel||sec,p.subLabel||"Uncategorized"],chapter:p.chapter||null,label:(p.sectionLabel||sec)+" / "+(p.subLabel||"Uncategorized"),sectionLabel:p.sectionLabel||sec});}
  });
  list.forEach(function(p){ingestManifestPaper(p);});
  buildFolderTree();
  folderScanComplete=true;
  setRootLibraryState("Library ready",list.length+" papers indexed across "+FOLDER_TREE.length+" sections.");
  renderHome();if(navTrail.length)renderSectionView();
 }catch(e){folderScanComplete=false;setRootLibraryState("Could not load papers",e.message||String(e));console.error("Library load failed",e);}
 finally{loadingEmbeddedLibrary=false;}
}
var cardLang={};
function chosenVariant(p,langPref){
 if(!p.variants)return p;
 // Never silently fall back to the other language: the selected language controls
 // the question JSON, answer key, explanations, and saved review snapshot together.
 const lang=langPref||cardLang[p.id]||$("gkLanguage").value||"en";
 const variant=variantForLanguage(p,lang);
 if(!variant)throw new Error(`The ${lang==="hi"?"Hindi":"English"} version is not available for ${p.title}.`);
 return variant;
}
let activeProfileId=localStorage.getItem("sscActiveProfileId")||"default";
function readAllAttemptHistory(){try{return JSON.parse(localStorage.getItem("sscAttemptHistory")||"[]")}catch(e){return []}}
function readAttemptHistory(){return readAllAttemptHistory().filter(r=>(r.profileId||"default")===activeProfileId)}
function openProfileNameDialog(){ openSettingsDrawer(); }
function openSettingsDrawer(){
 if(document.getElementById('settingsBackdrop'))return;
 const sel=document.getElementById('themeMode');
 const themes=sel?[].slice.call(sel.options).map(function(o){return {v:o.value,l:o.textContent};}):[];
 const backdrop=document.createElement('div');backdrop.id='settingsBackdrop';backdrop.className='settings-backdrop';
 backdrop.innerHTML=
 '<aside class="settings-drawer" role="dialog" aria-modal="true" aria-labelledby="settingsTitle">'
 +'<header class="settings-head"><div><p class="settings-eyebrow">Your space</p><h2 id="settingsTitle">Profile &amp; settings</h2></div><button class="settings-close" id="settingsClose" type="button" aria-label="Close settings">\u2715</button></header>'
 +'<div class="settings-body">'
 +'<section class="settings-block"><h3>Profile</h3>'
 +'<div class="settings-profile"><div class="settings-avatar" id="settingsAvatar">S</div><div class="settings-profile-main">'
 +'<form id="settingsNameForm" class="settings-name-row"><input id="settingsNameInput" type="text" maxlength="32" autocomplete="off" aria-label="Profile name" placeholder="Your name"><button type="submit" class="settings-btn primary">Save</button></form>'
 +'<div class="settings-profile-actions"><label class="settings-btn ghost" for="settingsPhotoInput">Upload photo</label><input id="settingsPhotoInput" type="file" accept="image/*" hidden><button type="button" class="settings-btn ghost" id="settingsRemovePhoto">Remove photo</button></div>'
 +'<div class="settings-hint" id="settingsNameHint">Your name and photo stay on this device.</div></div></div>'
 +'<div class="settings-row"><div><strong>Study profile</strong><span class="settings-sub">Separate progress for different people</span></div><button type="button" class="settings-btn ghost" id="settingsSwitchProfile">Switch</button></div>'
 +'</section>'
 +'<section class="settings-block"><h3>Appearance</h3><div class="settings-themes" id="settingsThemes"></div></section>'
 +'<section class="settings-block"><h3>Sound &amp; motion</h3>'
 +'<div class="settings-row"><div><strong>Sound effects</strong><span class="settings-sub">Taps, saves and results</span></div><button type="button" class="settings-toggle" id="settingsSound">On</button></div>'
 +'<div class="settings-row"><div><strong>Animations</strong><span class="settings-sub">Subtle motion and reveals</span></div><button type="button" class="settings-toggle" id="settingsMotion">On</button></div>'
 +'<div class="settings-row"><div><strong>Volume</strong><span class="settings-sub">Loudness of the effects</span></div><input id="settingsVolume" type="range" min="0" max="600" step="10" value="600" aria-label="Sound volume"></div>'
 +'</section>'
 +'<section class="settings-block"><h3>Your data</h3>'
 +'<div class="settings-row"><div><strong>Export results</strong><span class="settings-sub">Download a backup of your attempts</span></div><button type="button" class="settings-btn ghost" id="settingsExport">Export</button></div>'
 +'<div class="settings-row"><div><strong>Reset attempts</strong><span class="settings-sub">Clear this profile\u2019s progress</span></div><button type="button" class="settings-btn danger" id="settingsReset">Reset</button></div>'
 +'<p class="settings-note" id="settingsLibraryNote"></p>'
 +'</section>'
 +'</div></aside>';
 document.body.appendChild(backdrop);
 const q=function(id){return backdrop.querySelector('#'+id);};
 const themesHost=q('settingsThemes');
 themes.forEach(function(t){
  const b=document.createElement('button');b.type='button';b.className='theme-swatch';b.dataset.theme=t.v;
  b.innerHTML='<span class="theme-swatch-chip"><i class="sw-bg"></i><i class="sw-surf"></i><i class="sw-acc"></i></span><span class="theme-swatch-name">'+esc(t.l)+'</span>';
  b.onclick=function(){const s2=document.getElementById('themeMode');if(s2){s2.value=t.v;s2.dispatchEvent(new Event('change',{bubbles:true}));}markTheme();playSfx('theme');};
  themesHost.appendChild(b);
 });
 function markTheme(){const cur=document.body.dataset.theme;themesHost.querySelectorAll('.theme-swatch').forEach(function(b){b.classList.toggle('active',b.dataset.theme===cur);});}
 function drawAvatar(){const av=q('settingsAvatar');const photo=localStorage.getItem('sscProfilePhoto:'+activeProfileId);if(photo){av.innerHTML='<img alt="" src="'+photo+'">';}else{av.textContent=(profileDisplayName().trim()[0]||'S').toUpperCase();}}
 function syncToggles(){q('settingsSound').textContent=soundEnabled?'On':'Off';q('settingsSound').classList.toggle('on',soundEnabled);q('settingsMotion').textContent=motionEnabled?'On':'Off';q('settingsMotion').classList.toggle('on',motionEnabled);q('settingsVolume').value=Math.round(soundVolume*100);}
 q('settingsNameInput').value=(profileDisplayName()==='Student')?'':profileDisplayName();
 drawAvatar();markTheme();syncToggles();
 const note=q('settingsLibraryNote');if(note)note.textContent=((typeof FOLDER_TREE!=='undefined'&&FOLDER_TREE.length)?(FOLDER_TREE.length+' series \u00b7 '+manifestAllPaths.length+' papers indexed on this device.'):'Library indexing\u2026');
 q('settingsNameForm').addEventListener('submit',function(e){e.preventDefault();const n=q('settingsNameInput').value.trim();if(!n){q('settingsNameHint').textContent='Please enter a name.';return;}localStorage.setItem('sscProfileName:'+activeProfileId,n);localStorage.setItem('sscStudentName',n);let ps=[];try{ps=JSON.parse(localStorage.getItem('sscProfiles')||'[]')}catch(_){}const rec=ps.find(function(x){return x.id===activeProfileId});if(rec)rec.name=n;localStorage.setItem('sscProfiles',JSON.stringify(ps));paintProfile();drawAvatar();q('settingsNameHint').textContent='Saved.';playSfx('save');});
 q('settingsPhotoInput').addEventListener('change',function(e){const f=e.target.files&&e.target.files[0];if(!f||!f.type||f.type.indexOf('image/')!==0)return;const r=new FileReader();r.onload=function(){const img=new Image();img.onload=function(){const c=document.createElement('canvas');const sc=Math.min(1,512/Math.max(img.width,img.height));c.width=Math.round(img.width*sc);c.height=Math.round(img.height*sc);c.getContext('2d').drawImage(img,0,0,c.width,c.height);try{localStorage.setItem('sscProfilePhoto:'+activeProfileId,c.toDataURL('image/jpeg',.84));}catch(_){}drawAvatar();paintProfile();};img.src=r.result;};r.readAsDataURL(f);});
 q('settingsRemovePhoto').addEventListener('click',function(){localStorage.removeItem('sscProfilePhoto:'+activeProfileId);drawAvatar();paintProfile();});
 q('settingsSound').addEventListener('click',function(){document.getElementById('soundToggle').click();syncToggles();});
 q('settingsMotion').addEventListener('click',function(){document.getElementById('motionToggle').click();syncToggles();});
 q('settingsVolume').addEventListener('input',function(){const v=document.getElementById('soundVolume');if(v){v.value=q('settingsVolume').value;v.dispatchEvent(new Event('input',{bubbles:true}));}});
 q('settingsExport').addEventListener('click',function(){document.getElementById('exportResultsButton').click();});
 q('settingsReset').addEventListener('click',function(){document.getElementById('resetAttemptsButton').click();});
 q('settingsSwitchProfile').addEventListener('click',function(){openProfileSwitcher(backdrop);});
 function onKey(e){if(e.key==='Escape')close();}
 function close(){backdrop.remove();document.removeEventListener('keydown',onKey);}
 document.addEventListener('keydown',onKey);
 q('settingsClose').addEventListener('click',close);
 backdrop.addEventListener('click',function(e){if(e.target===backdrop)close();});
}
function openProfileSwitcher(host){
 let profiles=[];try{profiles=JSON.parse(localStorage.getItem('sscProfiles')||'[]')}catch(_){}
 const list=profiles.slice();if(!list.some(function(p){return p.id===activeProfileId;}))list.unshift({id:activeProfileId,name:profileDisplayName()});
 const panel=document.createElement('div');panel.className='settings-subpanel';
 panel.innerHTML='<h4>Switch study profile</h4><div class="settings-profile-list"></div><form class="settings-name-row" id="newProfileForm"><input id="newProfileName" type="text" maxlength="32" placeholder="New profile name" aria-label="New profile name"><button type="submit" class="settings-btn primary">Create</button></form>';
 const listHost=panel.querySelector('.settings-profile-list');
 list.forEach(function(p){const b=document.createElement('button');b.type='button';b.className='settings-profile-item'+(p.id===activeProfileId?' active':'');b.innerHTML='<span class="settings-profile-dot"></span>'+esc(p.name)+(p.id===activeProfileId?'<em>current</em>':'');b.onclick=function(){setActiveProfile(p.name);host.querySelector('.settings-close').click();};listHost.appendChild(b);});
 panel.querySelector('#newProfileForm').addEventListener('submit',function(e){e.preventDefault();const n=panel.querySelector('#newProfileName').value.trim();if(!n)return;setActiveProfile(n);host.querySelector('.settings-close').click();});
 host.querySelector('.settings-drawer').appendChild(panel);
}

function profileDisplayName(){return localStorage.getItem("sscProfileName:"+activeProfileId)||localStorage.getItem("sscStudentName")||"Student"}
function profileProgressKey(p){return progressKey(p)+":profile:"+activeProfileId}
function setActiveProfile(name){const clean=String(name||"").trim().slice(0,32);if(!clean)return;let profiles=[];try{profiles=JSON.parse(localStorage.getItem("sscProfiles")||"[]")}catch(e){}if(activeProfileId==="default"&&clean.toLowerCase()===(profileDisplayName()||"student").toLowerCase()&&!profiles.some(x=>x.id==="default")){profiles.push({id:"default",name:clean});localStorage.setItem("sscProfiles",JSON.stringify(profiles));localStorage.setItem("sscProfileName:default",clean);localStorage.setItem("sscStudentName",clean);paintProfile();renderPapers();return}let profile=profiles.find(x=>x.name.toLowerCase()===clean.toLowerCase());if(!profile){profile={id:"p_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7),name:clean};profiles.push(profile);localStorage.setItem("sscProfiles",JSON.stringify(profiles))}activeProfileId=profile.id;localStorage.setItem("sscActiveProfileId",activeProfileId);localStorage.setItem("sscProfileName:"+activeProfileId,profile.name);localStorage.setItem("sscStudentName",profile.name);paintProfile();renderPapers();setStatus("Switched to profile: "+profile.name)}
// A paper's title is not globally unique: GK and English often reuse the same title.
// Include its section, chapter, source filename and language in every storage key.
function paperIdentity(p, section=p?.section||currentSection){
 const sec=String(section||"unknown").trim().toLowerCase();
 const chapter=String(p?.chapter||"").trim().toLowerCase();
 const source=String(p?.fileName||p?.id||p?.title||"untitled").replace(/\\/g,"/").trim().toLowerCase();
 const language=String(p?.language||"").trim().toLowerCase();
 return [sec,chapter,source,language].join("::");
}
function historyMatchesPaper(record,p,section=currentSection){
 if(!record||!p)return false;
 const identity=paperIdentity(p,section);
 if(record.paperIdentity)return record.paperIdentity===identity;
 if(typeof record.paperKey==="string"&&record.paperKey.includes("::"))return record.paperKey===identity;
 // Legacy entries have no filename/identity. Only match them within the same section.
 if(!record.section||String(record.section)!==String(section))return false;
 if(record.fileName&&p.fileName&&String(record.fileName)!==String(p.fileName))return false;
 if(record.language&&p.language&&String(record.language)!==String(p.language))return false;
 return String(record.title||"")===String(p.title||"");
}
function showPaperResult(card,r){const box=card.querySelector(".paper-inline-result");box.classList.remove("hidden");box.innerHTML="";const head=document.createElement("strong");head.textContent="Saved full result";const line=document.createElement("p");line.textContent=`${new Date(r.date).toLocaleString()} · Score ${r.score===null?"N/A":r.score+" / "+r.total} · ${r.accuracy===null?"Accuracy unavailable":Number(r.accuracy).toFixed(2)+"%"} · ${r.correct} correct · ${r.incorrect} incorrect · ${r.unanswered} unanswered`;const open=document.createElement("button");open.className="btn";open.textContent=r.questionSnapshot?.length?"Open full report & explanations →":"Full review unavailable for this older attempt";open.disabled=!r.questionSnapshot?.length;open.onclick=()=>openSavedResult(r);const close=document.createElement("button");close.className="btn secondary";close.textContent="Hide result";close.onclick=()=>box.classList.add("hidden");box.append(head,line,open,close)}
function openSavedResult(record){if(!record?.questionSnapshot?.length){setStatus("This older result has no saved question snapshot. New attempts save complete question-by-question reports.");return}try{active={title:record.title,section:record.section,fileName:record.fileName,language:record.language,chapter:record.chapter,marks:record.marks||record.total,minutes:record.minutes||25,questions:record.questionSnapshot.map((q,i)=>q&&typeof q.text==="string"&&Array.isArray(q.options)?q:(q?.raw?normalizeQuestion(q.raw,i):normalizeQuestion(q,i)))};answers=Array(active.questions.length).fill(null).map((_,i)=>Number.isInteger(record.answers?.[i])?record.answers[i]:null);markedQuestions=new Set(record.marked||[]);current=0;viewingSavedResult=true;show("exam");finishTest(false,true);}catch(e){viewingSavedResult=false;setStatus("Could not reopen the saved report: "+e.message)}}
function togglePaperHistory(card,attempts){const box=card.querySelector(".paper-inline-result");if(!box.classList.contains("hidden")&&box.dataset.mode==="history"){box.classList.add("hidden");return}box.dataset.mode="history";box.classList.remove("hidden");box.innerHTML="<strong>Attempt history</strong>";attempts.forEach(r=>{const p=document.createElement("p");p.textContent=`${new Date(r.date).toLocaleString()} — ${r.score===null?"N/A":r.score+"/"+r.total} · ${r.correct} correct · ${r.incorrect} incorrect · ${r.unanswered} unanswered`;box.appendChild(p);if(r.questionSnapshot?.length){const b=document.createElement("button");b.className="btn secondary";b.textContent="Open full report";b.onclick=()=>openSavedResult(r);box.appendChild(b)}});const close=document.createElement("button");close.className="btn secondary";close.textContent="Hide history";close.onclick=()=>box.classList.add("hidden");box.appendChild(close)}
/* Paper rendering moved into the navigation core above (renderPapers / renderPaperChunk / buildPaperCard). */
/* ---------- Home + folder navigation rendering ---------- */
var PAPER_PAGE={list:[],shown:0,size:24,attemptsByKey:{},tag:"Paper"};
function plural(n,w){return Number(n).toLocaleString("en-IN")+" "+w+(n===1?"":"s");}
function renderHome(){
 var host=$("homeFolders");if(!host)return;host.innerHTML="";
 if($("headerCount"))$("headerCount").textContent=plural(FOLDER_TREE.reduce(function(a,n){return a+n.count;},0),"paper")+" indexed";
 if(!FOLDER_TREE.length){host.innerHTML='<div class="skeleton"></div><div class="skeleton"></div>';return;}
 FOLDER_TREE.forEach(function(node){
  var card=document.createElement("article");
  card.className="folder-card";card.setAttribute("role","link");card.tabIndex=0;
  var sub=(node.children.length?plural(node.children.length,"folder")+" \u00b7 ":"")+plural(node.count,"paper");
  card.innerHTML='<span class="folder-card-icon">\u25a4</span>'+
   '<div class="folder-card-body"><h3>'+esc(node.name)+'</h3><p>'+esc(sub)+' \u00b7 '+plural(node.totalQuestions,"question")+'</p></div>'+
   '<span class="folder-card-go">Open <b>\u2197</b></span>';
  var go=function(){playSfx("select");openFolderNode(node);};
  card.addEventListener("click",go);
  card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}});
  host.appendChild(card);
 });
}
function openFolderNode(node){
 navTrail=ancestorsOf(node);currentSection=node.slug;folderOpen=node.depth>0;
 papers=node.papers.slice();show("sectionView");renderSectionView();scrollPageToTop();
}
function renderSectionView(){
 var node=currentFolderNode();if(!node)return;
 if($("sectionHeading"))$("sectionHeading").textContent=node.name;
 if($("sectionCrumb"))$("sectionCrumb").textContent=node.name;
 if($("sectionSubheading")){
  var bits=[];
  if(node.children.length)bits.push(plural(node.children.length,"folder"));
  if(node.papers.length)bits.push(plural(node.papers.length,"paper"));
  bits.push(plural(node.totalQuestions,"question"));
  $("sectionSubheading").textContent=bits.join(" \u00b7 ");
 }
 var gw=$("gkLanguageWrap");
 if(gw)gw.style.display=node.papers.some(function(p){return p.variants&&p.variants.en&&p.variants.hi;})?"flex":"none";
 renderFolderChildren(node);
 updateSectionFolderPath();updateFolderNavigationUI();updateSectionLoadStatus();renderPapers();
}
function renderFolderChildren(node){
 var host=$("folderChildren");if(!host)return;host.innerHTML="";
 if(!node.children.length)return;
 node.children.forEach(function(child){
  var card=document.createElement("article");
  card.className="folder-card folder-card-sm";card.setAttribute("role","link");card.tabIndex=0;
  var sub=(child.children.length?plural(child.children.length,"folder")+" \u00b7 ":"")+plural(child.count,"paper");
  card.innerHTML='<span class="folder-card-icon">\ud83d\udcc1</span>'+
   '<div class="folder-card-body"><h3>'+esc(child.name)+'</h3><p>'+esc(sub)+'</p></div>'+
   '<span class="folder-card-go">Open <b>\u2197</b></span>';
  var go=function(){playSfx("select");openFolderNode(child);};
  card.addEventListener("click",go);
  card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}});
  host.appendChild(card);
 });
}
function currentPaperSource(){var node=currentFolderNode();return node?node.papers:(papers||[]);}
function matchesTerm(p,term){
 if(!term)return true;
 var hay=(p.title+" "+p.id+" "+String(p.fileName||"").split(/[\\/]/).pop()+" "+(p.subLabel||"")+" "+(p.sectionLabel||"")+" "+Object.values(p.variants||{}).map(function(v){return v.fileName+" "+v.id;}).join(" ")).toLowerCase();
 return hay.indexOf(term)>-1;
}
function sortPapers(list){
 var mode="name";try{mode=localStorage.getItem("sscSortMode")||"name";}catch(e){}
 var cmp;
 if(mode==="name-desc")cmp=function(a,b){return String(b.title||"").localeCompare(String(a.title||""),undefined,{numeric:true,sensitivity:"base"});};
 else if(mode==="new")cmp=function(a,b){return (Number(b.id)||0)-(Number(a.id)||0);};
 else if(mode==="old")cmp=function(a,b){return (Number(a.id)||0)-(Number(b.id)||0);};
 else cmp=function(a,b){return String(a.title||"").localeCompare(String(b.title||""),undefined,{numeric:true,sensitivity:"base"});};
 list.sort(cmp);
}
function renderPapers(){
 var term=(($("search")&&$("search").value)||"").toLowerCase().trim();
 var src=currentPaperSource();
 var filtered=(term?src.filter(function(p){return matchesTerm(p,term);}):src).slice();
 sortPapers(filtered);
 var history=readAttemptHistory();               /* read once per render, never per card */
 var byKey={};history.forEach(function(r){var k=r.paperIdentity||r.paperKey;if(k)(byKey[k]=byKey[k]||[]).push(r);});
 PAPER_PAGE.list=filtered;PAPER_PAGE.shown=0;PAPER_PAGE.attemptsByKey=byKey;PAPER_PAGE.term=term;
 PAPER_PAGE.tag=(currentFolderNode()&&currentFolderNode().name)||"Paper";
 var totalQ=filtered.reduce(function(s,p){return s+(Number(p.questionCount)||0);},0);
 if($("paperCount"))$("paperCount").textContent=filtered.length;
 if($("headerCount"))$("headerCount").textContent=filtered.length?(plural(filtered.length,"paper")+(term?" found":" in view")):(plural(FOLDER_TREE.reduce(function(a,n){return a+n.count;},0),"paper")+" indexed");
 if($("shown"))$("shown").textContent=filtered.length+(term?" matching":" shown");
 if($("questionCount"))$("questionCount").textContent=totalQ||"\u2014";
 if($("paperFolderCount"))$("paperFolderCount").textContent=plural(filtered.length,"paper");
 var grid=$("papers");if(grid)grid.innerHTML="";
 var old=$("loadMorePapers");if(old)old.remove();
 renderPaperChunk();
}
function renderPaperChunk(){
 var grid=$("papers");if(!grid)return;
 var start=PAPER_PAGE.shown,end=Math.min(PAPER_PAGE.list.length,PAPER_PAGE.shown+PAPER_PAGE.size);
 for(var i=start;i<end;i++)grid.appendChild(buildPaperCard(PAPER_PAGE.list[i]));
 PAPER_PAGE.shown=end;
 var old=$("loadMorePapers");if(old)old.remove();
 if(end<PAPER_PAGE.list.length){
  var b=document.createElement("button");b.id="loadMorePapers";b.className="btn secondary load-more";b.type="button";
  b.textContent="Show more papers ("+(PAPER_PAGE.list.length-end)+" remaining)";
  b.onclick=function(){renderPaperChunk();};
  grid.parentNode.appendChild(b);
 }
}
function launchPaper(variant,selected,btn){
 var choice=variant||selected;
 if(choice.section==="mock"){
  btn.disabled=true;var original=btn.innerHTML;btn.textContent="Loading questions\u2026";
  loadPaperText(choice.embeddedKey||choice.fileName).then(function(localText){
   if(typeof localText!=="string")throw new Error("Local JSON file was not found: "+(choice.fileName||""));
   var raw=parseQuestionJson(localText),arr=findArray(raw);
   if(!arr||!arr.length)throw new Error("No question array found in the selected JSON file.");
   start(Object.assign({},choice,{raw:raw,questions:arr.map(function(q,i){return normalizeQuestion(q,i);}),questionCount:arr.length,embeddedKey:null,language:choice.language,selectedLanguage:choice.language}));
  }).catch(function(e){setStatus("Could not load "+(choice.language==="hi"?"Hindi":"English")+" questions for "+choice.title+". ("+(e.message||e)+")");playSfx("error");})
   .then(function(){btn.disabled=false;btn.innerHTML=original;});
 } else start(choice);
}
function buildPaperCard(p){
 var selLang=(cardLang[p.id])||($("gkLanguage")&&$("gkLanguage").value)||"en";
 var selected=p;try{selected=chosenVariant(p,selLang);}catch(e){selected=p;}
 var card=document.createElement("article");card.className="testcard";
 var identity=paperIdentity(selected,currentSection);
 var attempts=PAPER_PAGE.attemptsByKey[identity]||[];
 var latest=attempts[0],count=attempts.length;
 var q=selected.questionCount||(selected.questions&&selected.questions.length)||0;
 var hasBoth=!!(p.variants&&p.variants.en&&p.variants.hi);
 card.innerHTML='<span class="tag">'+esc(PAPER_PAGE.tag)+'</span>'+
  '<h3>'+esc(p.title)+'</h3>'+
  '<div class="meta"><span>'+q+' Questions</span><span>'+selected.minutes+' Minutes</span><span>'+selected.marks+' Marks</span></div>'+
  (hasBoth?('<div class="lang-switch" role="group" aria-label="Paper language"><button type="button" data-lang="en" class="'+(selLang==="en"?"active":"")+'">English</button><button type="button" data-lang="hi" class="'+(selLang==="hi"?"active":"")+'">\u0939\u093f\u0902\u0926\u0940</button></div>'):"")+
  '<div class="paper-card-actions"><button class="btn paper-attempt" data-action="attempt">'+(latest?"Reattempt":"Attempt")+' paper \u2192</button></div>'+
  (latest?('<div class="paper-card-actions"><button class="btn secondary paper-results" data-action="results">Latest result</button><button class="btn secondary paper-history" data-action="history">'+count+' attempt'+(count===1?"":"s")+'</button></div>'):"")+
  '<div class="paper-inline-result hidden"></div>';
 card.querySelectorAll(".lang-switch button").forEach(function(b){b.onclick=function(){cardLang[p.id]=b.dataset.lang;var fresh=buildPaperCard(p);card.replaceWith(fresh);};});
 card.querySelector('[data-action="attempt"]').onclick=function(e){
  var btn=e.currentTarget;
  try{
   var lang=(cardLang[p.id])||($("gkLanguage")&&$("gkLanguage").value)||"en";
   var variant=p.variants?variantForLanguage(p,lang):p;
   if(!variant)throw new Error("The "+(lang==="hi"?"Hindi":"English")+" version is not available for "+p.title+".");
   launchPaper(Object.assign({},variant,{language:lang,selectedLanguage:lang,parentPaperId:String(p.id)}),selected,btn);
  }catch(err){setStatus(err.message||String(err));playSfx("error");}
 };
 var rb=card.querySelector('[data-action="results"]');if(rb)rb.onclick=function(){showPaperResult(card,latest);};
 var hb=card.querySelector('[data-action="history"]');if(hb)hb.onclick=function(){togglePaperHistory(card,attempts);};
 return card;
}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function show(section){["home","sectionView","exam","results"].forEach(s=>$(s).classList.toggle("hidden",s!==section));const brandHome=$("brandHomeButton");if(brandHome){brandHome.disabled=(section==="exam"||section==="results");brandHome.style.visibility=brandHome.disabled?"hidden":"visible";brandHome.setAttribute("aria-hidden",brandHome.disabled?"true":"false");}window.scrollTo(0,0)}
function setStatus(message){const el=$("appStatus");if(!el)return;el.textContent=message||"";el.classList.toggle("hidden",!message)}
$("brandHomeButton").addEventListener("click",()=>{if($("exam").classList.contains("hidden")&&$("results").classList.contains("hidden"))goHome()});
const themeMode=$("themeMode");
const savedTheme=localStorage.getItem("sscTheme");
if(savedTheme && [...themeMode.options].some(o=>o.value===savedTheme))themeMode.value=savedTheme;
themeMode.addEventListener("change",()=>{document.body.dataset.theme=themeMode.value;localStorage.setItem("sscTheme",themeMode.value);playSfx("theme");});
document.body.dataset.theme=themeMode.value;
function progressKey(p){return "sscExamProgress:"+paperIdentity(p,p?.section||currentSection).toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,180)+":profile:"+activeProfileId}
function persistProgress(){if(!active)return false;try{localStorage.setItem(progressKey(active),JSON.stringify({title:active.title,answers,marked:[...markedQuestions],current,savedAt:Date.now()}));return true}catch(e){setStatus("Could not save progress in this browser. Check available storage.");return false}}
function animeImpact(x,y){if(!document.body.classList.contains("motion-off")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const colors=document.body.dataset.theme==="rumik"?["#ff9b83","#dca1ff","#8ce9dd","#fff1e8"]:["#ff3d6e","#ffd166","#35d8ff","#a78bfa","#fff1a8"];const count=document.body.dataset.theme==="rumik"?8:6;for(let i=0;i<count;i++){const el=document.createElement("i");el.className=i===0?"energy-burst":"energy-streak";el.style.setProperty("--x",x+"px");el.style.setProperty("--y",y+"px");el.style.setProperty("--energy",colors[Math.floor(Math.random()*colors.length)]);el.style.setProperty("--angle",(i*32+Math.random()*22)+"deg");el.style.setProperty("--len",(document.body.dataset.theme==="rumik"?22+Math.random()*68:30+Math.random()*85)+"px");el.style.setProperty("--end","18px");document.body.appendChild(el);el.addEventListener("animationend",()=>el.remove(),{once:true});setTimeout(()=>el.remove(),800)}}}
document.addEventListener("click",e=>{const b=e.target.closest("button,.option");if(!b||b.disabled)return;const r=b.getBoundingClientRect();animeImpact(e.clientX||r.left+r.width/2,e.clientY||r.top+r.height/2)},true);
async function start(p){
 playSfx("awakening");
 if(p?.embeddedKey&&(!Array.isArray(p.questions)||p.questions.length===0)){
  try{const text=await loadPaperText(p.embeddedKey);if(!text)throw new Error("The JSON file is missing for this folder.");const rawBundle=parseQuestionJson(text);const rawQuestions=findArray(rawBundle);if(!rawQuestions||!rawQuestions.length)throw new Error("No question array was found in this JSON file.");p={...p,raw:rawBundle,questions:rawQuestions.map((q,i)=>normalizeQuestion(q,i)),questionCount:rawQuestions.length};}
  catch(e){setStatus(`Could not open ${p.title}: ${e.message||e}`);playSfx("error");return;}
 }
 active={...p,section:currentSection,paperIdentity:paperIdentity(p,currentSection),questions:(p.questions||[]).map((q,i)=>{
   if(q&&typeof q.text==="string"&&Array.isArray(q.options))return q;
   return normalizeQuestion(q,i);
 })};
 if(!active.questions.length){setStatus("This paper has no usable questions. Check the JSON file in its local folder.");return;}
 answers=Array(active.questions.length).fill(null);current=0;markedQuestions=new Set();visitedQuestions=new Set();timerPaused=false;
 try{const saved=JSON.parse(localStorage.getItem(progressKey(active))||"null");if(saved&&saved.answers?.length===answers.length){answers=saved.answers.map(a=>Number.isInteger(a)?a:null);markedQuestions=new Set((saved.marked||[]).filter(i=>Number.isInteger(i)&&i>=0&&i<answers.length));}}catch(e){}
 remaining=Math.max(1,Number(active.minutes)||25)*60;startedAt=Date.now();show("exam");const mockToggle=$("mockLanguageToggle");if(mockToggle){mockToggle.style.display=paperHasBothLanguages(active.parentPaperId||active.id)?"inline-flex":"none";mockToggle.textContent=active.language==="hi"?"Switch to English":"Switch to Hindi";}$("examTitle").textContent=active.title||"SSC MTS Practice Test";$("examMeta").textContent=`${active.questions.length} Questions · ${Math.max(1,Number(active.minutes)||25)} Minutes · ${active.marks||active.questions.length*3} Marks${active.section==="mock"?` · ${active.language==="hi"?"Hindi":"English"}`:""}`;clearInterval(tick);renderTimer();tick=setInterval(()=>{if(timerPaused)return;remaining=Math.max(0,remaining-1);renderTimer();if(remaining<=0){clearInterval(tick);finishTest(true)}},1000);try{renderQuestion()}catch(err){console.error("Question render failed",err);$("qText").textContent="Could not render this question. Check this paper’s JSON file.";$("options").textContent=err.message||"Rendering error"}}
function celebrate(correct,total){
 const overlay=document.createElement("div");overlay.className="celebrate";const colors=["#f6bd60","#84dcc6","#a78bfa","#fb7185","#60a5fa","#f97316"];
 for(let i=0;i<90;i++){const piece=document.createElement("i");piece.className="confetti";piece.style.left=Math.random()*100+"%";piece.style.background=colors[i%colors.length];piece.style.animationDelay=(Math.random()*.8)+"s";piece.style.setProperty("--drift",(Math.random()*240-120)+"px");overlay.appendChild(piece)}document.body.appendChild(overlay);
 const banner=document.createElement("div");banner.className="celebrateBanner";banner.innerHTML=`<strong>🎉 Test complete!</strong><span>${esc(localStorage.getItem("sscStudentName")||"Well done")} · ${correct} correct answers. Take a moment to celebrate!</span>`;document.body.appendChild(banner);
 // Short celebratory chime using the browser's built-in audio; no external assets required.
 playSfx("finish");playTone(130,.28,.10,.02,"triangle");
 setTimeout(()=>{overlay.remove();banner.remove()},3600)
}
function renderTimer(){const m=Math.floor(Math.max(0,remaining)/60),s=Math.max(0,remaining)%60;$("timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")}
var MOCK_SECTION_NAMES={"1":"English Language","2":"General Intelligence & Reasoning","4":"General Awareness (GK/GS)","5":"Numerical Aptitude"};function mockSections(){var qs=(active&&active.questions)||[];var out=[],cur=null;for(var i=0;i<qs.length;i++){var raw=qs[i].raw||{};var key=String((raw.section_id!==undefined&&raw.section_id!==null&&raw.section_id!=="")?raw.section_id:(raw.subject_title||raw.subject||raw.section||raw.part||"1"));if(!cur||cur.key!==key){cur={key:key,start:i,end:i};out.push(cur);}else{cur.end=i;}}out.forEach(function(s,idx){var n=MOCK_SECTION_NAMES[s.key];s.label=n||("Section "+(idx+1));s.idx=idx;s.color=(idx%2===0)?"#3b82f6":"#16a34a";});return out;}function renderQuestion(){
 let q=active?.questions?.[current]||{};
 // Recover from papers that were normalized with an incomplete schema.
 const raw=q.raw&&typeof q.raw==="object"?q.raw:q;
 if(!q.text||!Array.isArray(q.options)||q.options.length===0){
   const repaired=normalizeQuestion(raw,current);
   q={...repaired,...q,raw};
   if(!q.text)q.text=repaired.text;
   if(!Array.isArray(q.options)||!q.options.length)q.options=repaired.options;
   active.questions[current]=q;
 }
 visitedQuestions.add(current);
 $("qCounter").textContent=`Question ${current+1} of ${active.questions.length}`;
 const sectionBanner=$("mockSectionBanner"),sectionNav=$("mockSectionNav");if(sectionBanner&&sectionNav){const secs=mockSections();if(secs.length>1){const curSec=secs.find(s=>current>=s.start&&current<=s.end)||secs[0];sectionBanner.style.display="block";sectionNav.style.display="flex";sectionBanner.textContent="SECTION "+(curSec.idx+1)+" \u00b7 "+String(curSec.label).toUpperCase()+" \u00b7 QUESTIONS "+(curSec.start+1)+"\u2013"+(curSec.end+1);sectionBanner.style.borderLeft="4px solid "+curSec.color;const navHtml=secs.map(s=>'<button class="btn secondary'+(s===curSec?" active":"")+'" type="button" data-mock-start="'+s.start+'">Section '+(s.idx+1)+' \u00b7 '+s.label+' (Q'+(s.start+1)+'\u2013'+(s.end+1)+')</button>').join("");if(sectionNav.dataset.sig!==navHtml){sectionNav.innerHTML=navHtml;sectionNav.dataset.sig=navHtml;}}else{sectionBanner.style.display="none";sectionNav.style.display="none";}}
 const visibleQuestion=htmlToText(q.text||pick(raw,["question","question_text","questionText","title","ques","q","text"]))||`Question ${current+1}`;
 $("qText").innerHTML=fmtQuestionHTML(visibleQuestion);
 $("qStatus").textContent=answers[current]===null?"Not answered":"Answered";
 $("options").innerHTML="";
 const questionOptions=Array.isArray(q.options)?q.options:[];
 if(!questionOptions.length){
   $("options").innerHTML='<div class="notice">This question has no recognized options. Try reloading the original JSON file; expected fields include option_1, option_2, etc.</div>';
 } else {
   questionOptions.forEach((o,i)=>{
     const optionText=typeof o==="string"?o:(o?.text??o?.option??o?.value??"");
     const optionLabel=typeof o==="object"?(o.label||String.fromCharCode(65+i)):String.fromCharCode(65+i);
     const label=document.createElement("label");label.className="option";
     const input=document.createElement("input");input.type="radio";input.name="answer";input.value=i;input.checked=answers[current]===i;
     const text=document.createElement("span");text.innerHTML=`<b>${esc(optionLabel)}.</b> ${esc(htmlToText(optionText))}`;
     input.onchange=()=>{answers[current]=i;$("qStatus").textContent="Answered";persistProgress();playSfx("select");renderPalette()};
     label.append(input,text);$("options").appendChild(label);
   });
 }
 $("prev").disabled=current===0;
 $("next").textContent=current===active.questions.length-1?"Save response":"Save & Next →";
 renderPalette();
}
function renderPalette(){$("palette").innerHTML="";answers.forEach((a,i)=>{const b=document.createElement("button");b.className="pal"+(a!==null?" answered":"")+(i===current?" current":"")+(markedQuestions.has(i)?" marked":"");b.textContent=i+1;b.title=`Question ${i+1}${a!==null?" · Answered": " · Unanswered"}${markedQuestions.has(i)?" · Marked for review":""}`;b.setAttribute("aria-label",b.title);b.onclick=()=>{current=i;playSfx("next");renderQuestion()};$("palette").appendChild(b)});$("answeredCount").textContent=answers.filter(a=>a!==null).length+" answered · "+answers.filter(a=>a===null).length+" unanswered";const mark=$("markReview");if(mark){const on=markedQuestions.has(current);mark.classList.toggle("active",on);mark.textContent=on?"★ Marked for review":"☆ Mark for review";mark.setAttribute("aria-pressed",String(on))}}
function answerIndex(q){if(q.answer===null)return null;let a=String(q.answer).trim();const byLabel=q.options.findIndex(o=>String(o.label).toLowerCase()===a.toLowerCase());if(byLabel>=0)return byLabel;const n=Number(a);if(Number.isInteger(n)){if(n>=1&&n<=q.options.length)return n-1;if(n===0&&q.options.length)return 0}const exact=q.options.findIndex(o=>o.text.toLowerCase()===a.toLowerCase());return exact>=0?exact:null}
let viewingSavedResult=false;
async function paperHasBothLanguages(pid){pid=String(pid||"").replace(/-hi$/,"");for(var s in papersBySection){var f=(papersBySection[s]||[]).find(function(p){return String(p.id)===pid;});if(f&&f.variants&&f.variants.en&&f.variants.hi)return true;}return false;}
async function toggleMockQuestionLanguage(){
 if(!active)return;
 const nextLang=active.language==="hi"?"en":"hi";
 const _pid=String(active.parentPaperId||active.id).replace(/-hi$/,"");let base=(papersBySection[active.section]||[]).find(p=>String(p.id)===_pid&&p.variants);if(!base){for(const _s in papersBySection){const _f=(papersBySection[_s]||[]).find(p=>String(p.id)===_pid&&p.variants);if(_f){base=_f;break;}}}
 const variant=base&&base.variants?base.variants[nextLang]:null;
 if(!variant){setStatus(`The ${nextLang==="hi"?"Hindi":"English"} version is not available for ${active.title}.`);return;}
 const path=variant.embeddedKey||variant.fileName;
 try{
  let parsed=null,rawQuestions=null;
  if(variant.questions&&variant.questions.length){rawQuestions=variant.questions.map(q=>q.raw||{});parsed=rawQuestions;}
  else{const text=await loadPaperText(path);if(typeof text!=="string")throw new Error("The local "+(nextLang==="hi"?"Hindi":"English")+" JSON is missing: "+(path||"unknown file"));parsed=parseQuestionJson(text);rawQuestions=findArray(parsed);}
  if(!rawQuestions||!rawQuestions.length)throw new Error("No questions were found in that local JSON.");
  const nextQuestions=rawQuestions.map((q,i)=>normalizeQuestion(q,i));
  const oldAnswers=answers.slice();
  active={...active,...variant,raw:parsed,questions:nextQuestions,questionCount:nextQuestions.length,language:nextLang,selectedLanguage:nextLang,parentPaperId:String(base.id),fileName:path,embeddedKey:null,paperIdentity:paperIdentity({...variant,language:nextLang,section:"mock"},"mock")};
  answers=Array(nextQuestions.length).fill(null).map((_,i)=>Number.isInteger(oldAnswers[i])?oldAnswers[i]:null);
  markedQuestions=new Set([...markedQuestions].filter(i=>i<nextQuestions.length));
  visitedQuestions=new Set([...visitedQuestions].filter(i=>i<nextQuestions.length));
  const btn=$("mockLanguageToggle");btn.textContent=nextLang==="hi"?"Switch to English":"Switch to Hindi";
  $("examMeta").textContent=`${active.questions.length} Questions · ${Math.max(1,Number(active.minutes)||45)} Minutes · ${active.marks||active.questions.length*3} Marks · ${nextLang==="hi"?"Hindi":"English"}`;
  persistProgress();renderQuestion();setStatus(`Switched to ${nextLang==="hi"?"Hindi":"English"}.`);playSfx("select");
 }catch(e){setStatus(`Could not switch language: ${e.message||e}`);playSfx("error");}
}
$("mockLanguageToggle").addEventListener("click",toggleMockQuestionLanguage);
$("mockSectionNav").addEventListener("click",e=>{const b=e.target.closest("button[data-mock-start]");if(!b||!active)return;current=Math.min(Number(b.dataset.mockStart),active.questions.length-1);persistProgress();renderQuestion();playSfx("next");});
function renderReviewItems(){var correct=[];var _qs=active.questions||[];_qs.forEach(function(q,ix){var _k=answerIndex(q),ch=answers[ix];if(_k!==null&&ch===_k)correct.push(ix);});
$("review").innerHTML="";$("reviewQuestionList").innerHTML="";
 active.questions.forEach((q,i)=>{
   const key=answerIndex(q),chosen=answers[i];
   const status=chosen===null?"skip":key===null?"unknown":chosen===key?"correct":"wrong";
   const statusLabel=status==="correct"?"✓ Correct":status==="wrong"?"✕ Incorrect":status==="skip"?"Not answered":"Key unavailable";
   const your=chosen===null?"Not answered":q.options[chosen]?.text||"Selected option";
   const keyText=key===null?"Answer key not found":q.options[key]?.text||"Answer key found";
   const el=document.createElement("article");el.className="reviewitem";el.dataset.status=status;
   const top=document.createElement("div");top.className="reviewtop";
   top.innerHTML=`<span class="reviewnum">Question ${i+1} of ${active.questions.length}</span><span class="reviewbadge ${status==="correct"?"good":status==="wrong"?"bad":"skip"}">${statusLabel}</span>`;
   const question=document.createElement("div");question.className="reviewquestion";question.innerHTML=fmtQuestionHTML(q.text);
   const options=document.createElement("div");options.className="reviewoptions";
   q.options.forEach((o,j)=>{
     const row=document.createElement("div");row.className="reviewoption";
     if(key!==null&&j===key)row.classList.add("is-correct");
     if(chosen!==null&&chosen===j&&key!==null&&chosen!==key)row.classList.add("is-wrong");
     const letter=document.createElement("span");letter.className="reviewletter";letter.textContent=o.label||String.fromCharCode(65+j);
     const body=document.createElement("div");body.style.flex="1";body.textContent=o.text;
     if(key!==null&&j===key){const tag=document.createElement("span");tag.className="reviewtag";tag.textContent=chosen===j?"✓ YOUR ANSWER — CORRECT":"✓ CORRECT ANSWER";body.appendChild(tag)}
     else if(chosen===j&&key!==null&&chosen!==key){const tag=document.createElement("span");tag.className="reviewtag";tag.textContent="✕ YOUR ANSWER";body.appendChild(tag)}
     row.append(letter,body);options.appendChild(row);
   });
   const details=document.createElement("div");details.className="reviewdetails";
   const yours=document.createElement("p");yours.className="yourline";yours.textContent="Your answer: "+(chosen===null?"Not answered":`${q.options[chosen]?.label||String.fromCharCode(65+chosen)}. ${your}`);
   const correctLine=document.createElement("p");correctLine.className="answerline";correctLine.textContent="Correct answer: "+(key===null?"Answer key not found":`${q.options[key]?.label||String.fromCharCode(65+key)}. ${keyText}`);
   details.append(yours,correctLine);
   if(q.explanation){const exp=document.createElement("div");exp.className="explainline";exp.innerHTML='<span class="explain-label">Explanation</span>'+(q.explanationHtml?q.explanationHtml:fmtExplanation(q.explanation));details.appendChild(exp)}
   el.append(top,question,options,details);$("review").appendChild(el);
   const nav=document.createElement("button");nav.type="button";nav.className="review-rail-item";nav.dataset.index=i;nav.dataset.status=status;
   const num=document.createElement("span");num.className="review-rail-num";num.textContent=i+1;
   const copy=document.createElement("span");copy.className="review-rail-copy";
   const qtitle=document.createElement("span");qtitle.className="review-rail-question";qtitle.textContent=q.text;
   const meta=document.createElement("span");meta.className="review-rail-meta";meta.innerHTML=`<span class="dot"></span>${statusLabel}`;
   copy.append(qtitle,meta);nav.append(num,copy);nav.onclick=()=>selectReviewQuestion(i);$("reviewQuestionList").appendChild(nav);
 });
 $("reviewTotal").textContent=active.questions.length+" questions"+(active.section==="mock"?` · ${active.language==="hi"?"Hindi":"English"}`:"");$("reviewProgress").textContent=correct.length+"/"+active.questions.length+" correct";
 $("reviewQuestionList").querySelectorAll("button").forEach((b,i)=>{if(i===0)b.classList.add("active")});
 $("review").querySelectorAll(".reviewitem").forEach((el,i)=>{el.hidden=i!==0});
 $("reviewPosition").textContent=active.questions.length?"Question 1 of "+active.questions.length:"No questions";
 var _lt=$("resultLangToggle");if(_lt){var _show=paperHasBothLanguages(active.parentPaperId||active.id);_lt.style.display=_show?"inline-flex":"none";_lt.textContent=(active.language==="hi")?"View in English":"View in Hindi";_lt.onclick=toggleResultLanguage;}
}
async function toggleResultLanguage(){if(!active)return;var nextLang=active.language==="hi"?"en":"hi";var _pid=String(active.parentPaperId||active.id).replace(/-hi$/,"");var base=(papersBySection[active.section]||[]).find(function(p){return String(p.id)===_pid&&p.variants;});if(!base){for(var _s in papersBySection){var _f=(papersBySection[_s]||[]).find(function(p){return String(p.id)===_pid&&p.variants;});if(_f){base=_f;break;}}}var variant=base&&base.variants?base.variants[nextLang]:null;if(!variant){setStatus("The "+(nextLang==="hi"?"Hindi":"English")+" version is not available for "+active.title+".");return;}var qs=null;if(variant.questions&&variant.questions.length){qs=variant.questions.slice();}else{var _t=await loadPaperText(variant.embeddedKey||variant.fileName);if(typeof _t!=="string"){setStatus("That language file is missing.");return;}qs=findArray(parseQuestionJson(_t)).map(function(q,i){return normalizeQuestion(q,i);});}if(qs.length!==(active.questions||[]).length){setStatus("The two language versions have different question counts.");return;}active=Object.assign({},active,{questions:qs,questionCount:qs.length,language:nextLang,selectedLanguage:nextLang});renderReviewItems();setStatus("Answers now shown in "+(nextLang==="hi"?"Hindi":"English")+".");playSfx("select");}
function finishTest(auto=false,confirmed=false){if(!active||$("exam").classList.contains("hidden"))return;if(!auto&&!confirmed){$("finishMessage").textContent=`You have answered ${answers.filter(a=>a!==null).length} of ${active.questions.length} questions. Submit now and view your result?`; $("finishModal").classList.remove("hidden");playTone(440,.08,.025);return;} $("finishModal").classList.add("hidden");if(!viewingSavedResult)persistProgress();clearInterval(tick);const correct=[],wrong=[],unknown=[],skip=[];active.questions.forEach((q,i)=>{const key=answerIndex(q);if(answers[i]===null)skip.push(i);else if(key===null)unknown.push(i);else if(answers[i]===key)correct.push(i);else wrong.push(i)});
 const keyCount=active.questions.filter(q=>answerIndex(q)!==null).length;const score=correct.reduce((sum,i)=>sum+(Number(active.questions[i].raw.positive_marks)||3),0)-wrong.reduce((sum,i)=>sum+(Number(active.questions[i].raw.negative_marks)||1),0); $("resultTitle").textContent=active.title+(active.section==="mock"?` · ${active.language==="hi"?"Hindi":"English"} paper`:"");$("score").textContent=keyCount?`${score} / ${active.marks}`:"Not available";$("scoreNote").textContent=keyCount?`${correct.length} correct × 3 − ${wrong.length} incorrect × 1`:"No recognizable answer key was found in this JSON; showing response counts only.";
 $("correctN").textContent=correct.length;$("wrongN").textContent=wrong.length;$("skipN").textContent=skip.length;
 const attempted=correct.length+wrong.length, accuracy=attempted?Math.round(correct.length/attempted*10000)/100:0;
 $("accuracyN").textContent=keyCount?accuracy.toFixed(2)+"%":"—";$("rankEstimate").textContent=active.questions.length;
 $("chartCorrect").textContent=correct.length;$("chartWrong").textContent=wrong.length;$("chartSkip").textContent=skip.length;
 const maxBar=Math.max(1,active.questions.length);[["Correct",correct.length],["Wrong",wrong.length],["Skip",skip.length]].forEach(([name,val])=>{const el=$("bar"+name);el.style.height=Math.max(val?6:3,150*val/maxBar)+"px"});
 $("summaryRows").innerHTML="";const row=document.createElement("tr");row.innerHTML=`<td>${esc(active.title+(active.section==="mock"?` (${active.language==="hi"?"Hindi":"English"})`:""))}</td><td>${esc(keyCount?String(score):"—")} / ${active.marks}</td><td>${attempted} / ${active.questions.length}</td><td>${keyCount?accuracy.toFixed(2)+"%":"—"}</td><td>${correct.length}</td><td>${wrong.length}</td><td>${skip.length}</td>`;$("summaryRows").appendChild(row);
 renderReviewItems();
 if(!viewingSavedResult){const identity=paperIdentity(active,active.section||currentSection);const attemptRecord={id:Date.now(),date:new Date().toISOString(),profileId:activeProfileId,profileName:profileDisplayName(),paperKey:identity,paperIdentity:identity,title:active.title,section:active.section||currentSection,fileName:active.fileName||"",language:active.language||"",chapter:active.chapter||"",score:keyCount?score:null,total:active.marks||active.questions.length*3,correct:correct.length,incorrect:wrong.length,unanswered:skip.length,attempted:attempted,accuracy:keyCount?accuracy:null,answers:answers.slice(),marked:[...markedQuestions],questionCount:active.questions.length,questionSnapshot:active.questions.map(q=>({raw:q.raw||null,text:q.text,options:q.options,answer:q.answer,explanation:q.explanation})),marks:active.marks||active.questions.length*3,minutes:active.minutes||25};let history=[];try{history=JSON.parse(localStorage.getItem("sscAttemptHistory")||"[]")}catch(e){}history.unshift(attemptRecord);history=history.slice(0,800);history.forEach(function(r,i){if(i>=8&&r.questionSnapshot)delete r.questionSnapshot;});const latestByPaper={};history.forEach(r=>{const k=r.paperIdentity||r.paperKey||(String(r.section||"legacy")+"::"+String(r.title||"untitled"));if(!latestByPaper[k])latestByPaper[k]=r});try{localStorage.setItem("sscAttemptHistory",JSON.stringify(history));localStorage.setItem("sscLatestResults",JSON.stringify(latestByPaper));localStorage.setItem("sscLastAttempt",JSON.stringify(attemptRecord))}catch(e){setStatus("Result calculated, but browser storage is full. Export your results to keep a copy.")}}setResultView("overview");show("results");if(!viewingSavedResult)celebrate(correct.length,active.questions.length);viewingSavedResult=false}
let selectedReview=0,reviewFilter="all";
function selectReviewQuestion(i){const cards=[...$("review").querySelectorAll(".reviewitem")],navs=[...$("reviewQuestionList").querySelectorAll(".review-rail-item")];if(!cards.length)return;selectedReview=Math.max(0,Math.min(i,cards.length-1));cards.forEach((c,j)=>c.hidden=j!==selectedReview);navs.forEach((n,j)=>n.classList.toggle("active",j===selectedReview));$("reviewPosition").textContent=`Question ${selectedReview+1} of ${cards.length}`;$("reviewPrev").disabled=selectedReview===0;$("reviewNext").disabled=selectedReview===cards.length-1;}
function setResultView(view){$("resultTabs").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.view===view));const overview=view==="overview";$("resultOverview").classList.toggle("hidden",!overview);$("resultReviewView").classList.toggle("hidden",overview);if(!overview){reviewFilter=view==="all"?"all":view;$("reviewFilters").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.filter===reviewFilter));applyReviewFilter(reviewFilter);}}
function applyReviewFilter(filter){reviewFilter=filter;const navs=[...$("reviewQuestionList").querySelectorAll(".review-rail-item")];navs.forEach(n=>n.hidden=filter!=="all"&&n.dataset.status!==filter);const first=navs.findIndex(n=>!n.hidden);if(first>=0)selectReviewQuestion(first);else{$("review").querySelectorAll(".reviewitem").forEach(c=>c.hidden=true);$("reviewPosition").textContent="No questions in this filter";$("reviewPrev").disabled=true;$("reviewNext").disabled=true;}}
$("resultTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-view]");if(b)setResultView(b.dataset.view)});
$("reviewFilters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(!b)return;$("reviewFilters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));applyReviewFilter(b.dataset.filter)});
$("reviewPrev").onclick=()=>selectReviewQuestion(selectedReview-1);$("reviewNext").onclick=()=>selectReviewQuestion(selectedReview+1);
$("reviewMistakes").onclick=()=>setResultView("wrong");$("resultBack").onclick=()=>{clearInterval(tick);show("home");};
var _searchTimer=null;
$("search").addEventListener("input",function(){clearTimeout(_searchTimer);_searchTimer=setTimeout(renderPapers,170);});
$("gkLanguage").addEventListener("change",renderPapers);

// Swipe horizontally across the question panel to move between questions on touch screens.
let touchStartX=null,touchStartY=null;
$("exam").addEventListener("touchstart",e=>{const t=e.changedTouches[0];touchStartX=t.clientX;touchStartY=t.clientY},{passive:true});
$("exam").addEventListener("touchend",e=>{if(touchStartX===null)return;const t=e.changedTouches[0],dx=t.clientX-touchStartX,dy=t.clientY-touchStartY;touchStartX=null;touchStartY=null;if(Math.abs(dx)<85||Math.abs(dx)<Math.abs(dy)*1.25||$("exam").classList.contains("hidden")||!active)return;if(dx<0&&current<active.questions.length-1){current++;renderQuestion()}else if(dx>0&&current>0){current--;renderQuestion()}},{passive:true});
$("prev").onclick=()=>{if(current>0){current--;renderQuestion()}};$("next").onclick=()=>{if(current<active.questions.length-1){current++;playTone(740,.06,.025);renderQuestion()}else{playTone(740,.06,.025);renderPalette()}};
$("clearAnswer").onclick=()=>{answers[current]=null;playSfx("clear");renderQuestion()};$("markReview").onclick=()=>{if(markedQuestions.has(current))markedQuestions.delete(current);else markedQuestions.add(current);persistProgress();playSfx("mark");renderPalette()};
$("saveCurrent").onclick=()=>{const b=$("saveCurrent");const ok=persistProgress();if(ok){b.classList.add("saved");b.textContent="✓ Progress saved";b.title="Answer and review marks saved on this device";playSfx("save");renderPalette();setStatus("Progress saved on this device. You can return to this paper and continue.");setTimeout(()=>{if(b.isConnected){b.classList.remove("saved");b.textContent="▣ Save";b.title="Save your answers and review marks"}},1800)}else{b.textContent="Save failed";playSfx("clear")}};$("examSectionTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-examtab]");if(!b)return;$("examSectionTabs").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));const mode=b.dataset.examtab;const buttons=[...$("palette").querySelectorAll(".pal")];buttons.forEach((x,i)=>{x.style.display=mode==="unanswered"&&answers[i]!==null||mode==="marked"&&!markedQuestions.has(i)?"none":""})});$("pauseTest").onclick=()=>{timerPaused=!timerPaused;playSfx("pause");$("pauseTest").textContent=timerPaused?"▶":"Ⅱ";$("pauseTest").title=timerPaused?"Resume timer":"Pause timer";if(timerPaused){clearInterval(tick)}else tick=setInterval(()=>{if(remaining>0){remaining--;renderTimer()}else finishTest(true)},1000);};$("examThemeToggle").onclick=()=>{const modes=["light","dark","paper","slate"];const idx=modes.indexOf(document.body.dataset.theme||"paper");document.body.dataset.theme=modes[(idx+1)%modes.length];const sel=$("themeMode");if(sel)sel.value=document.body.dataset.theme;localStorage.setItem("sscTheme",document.body.dataset.theme);playSfx("theme")};$("examFullscreen").onclick=()=>{playSfx("power");if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()};$("finish").onclick=()=>finishTest(false);$("finishSide").onclick=()=>finishTest(false);$("cancelFinish").onclick=()=>{$("finishModal").classList.add("hidden");playTone(520,.06,.025)};$("confirmFinish").onclick=()=>finishTest(false,true);$("backHome").onclick=()=>{clearInterval(tick);show("sectionView");renderPapers()};
$("retry").onclick=()=>start(active);$("nextPaper").onclick=()=>{show("home");renderPapers()};

// Personal profile and local sound preferences.
let soundEnabled=localStorage.getItem('sscSound')!=='off';let savedSoundVol=Number(localStorage.getItem('sscSoundVolume')||250);if(savedSoundVol<=100){savedSoundVol=600;localStorage.setItem('sscSoundVolume','600')}let soundVolume=savedSoundVol/100;let motionEnabled=localStorage.getItem("sscMotion")!=="off";if(!motionEnabled)document.body.classList.add("motion-off");
function paintProfile(){const n=profileDisplayName()||localStorage.getItem('sscStudentName')||'';$('userNameLabel').textContent=n||'Student';const av=$('userAvatar'),photo=localStorage.getItem('sscProfilePhoto:'+activeProfileId);if(photo){av.innerHTML='';const im=document.createElement('img');im.src=photo;im.alt='';im.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:50%';av.appendChild(im)}else av.textContent=(n.trim()[0]||'S').toUpperCase();$('soundToggle').textContent=soundEnabled?'🔊 Sound on':'🔇 Sound off';$('motionToggle').textContent=motionEnabled?'✨ Motion on':'✨ Motion off';$('motionToggle').setAttribute('aria-pressed',String(motionEnabled));}
function askName(force=false){if(force||!localStorage.getItem('sscStudentName')){$('nameInput').value=localStorage.getItem('sscStudentName')||'';$('welcomeModal').classList.remove('hidden');setTimeout(()=>$('nameInput').focus(),100)}}
function playTone(freq=660,duration=.07,volume=.035,delay=0,type='sine'){if(!soundEnabled||soundVolume<=0)return;try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ctx=playTone.ctx||(playTone.ctx=new C());if(ctx.state==='suspended')ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,ctx.currentTime+delay);g.gain.setValueAtTime(.0001,ctx.currentTime+delay);const gain=Math.min(.92,Math.max(.0001,volume*soundVolume));g.gain.exponentialRampToValueAtTime(gain,ctx.currentTime+delay+.012);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+delay+duration);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+delay);o.stop(ctx.currentTime+delay+duration+.02)}catch(e){}}
function playSweep(from,to,duration=.12,volume=.035,delay=0,type='sawtooth'){
 if(!soundEnabled||soundVolume<=0)return;
 try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ctx=playTone.ctx||(playTone.ctx=new C());if(ctx.state==='suspended')ctx.resume();
 const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(Math.max(1,from),ctx.currentTime+delay);o.frequency.exponentialRampToValueAtTime(Math.max(1,to),ctx.currentTime+delay+duration);
 g.gain.setValueAtTime(.0001,ctx.currentTime+delay);g.gain.exponentialRampToValueAtTime(Math.min(.32,Math.max(.0001,volume*soundVolume)),ctx.currentTime+delay+.012);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+delay+duration);
 o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+delay);o.stop(ctx.currentTime+delay+duration+.02)}catch(e){}
}
function playSoftWhoosh(){
 if(!soundEnabled||soundVolume<=0)return;
 playSweep(260,1050,.12,.032,0,'sawtooth');playSweep(900,240,.16,.023,.055,'triangle');
}
function playSfx(kind='tap'){
 if(!soundEnabled||soundVolume<=0)return;
 if(kind==='whoosh'){playSoftWhoosh();return}
 if(kind==='awakening'){playSoftWhoosh();[[330,.08,.045,.02,'triangle'],[494,.10,.045,.10,'sine'],[659,.12,.045,.19,'triangle']].forEach(a=>playTone(...a));return}
 if(kind==='theme'){[[520,.055,.028,0,'sine'],[660,.06,.03,.055,'triangle'],[790,.075,.023,.11,'sine']].forEach(a=>playTone(...a));return}
 if(kind==='secret'){[[523,.09,.035,0,'triangle'],[659,.09,.035,.08,'sine'],[784,.11,.035,.16,'triangle'],[1047,.16,.03,.25,'sine']].forEach(a=>playTone(...a));return}
 if(kind==='pause'){playTone(440,.055,.022,0,'sine');return}
 if(kind==='power'){playSweep(190,680,.1,.03);playTone(880,.075,.025,.09,'triangle');return}
 const seq={
  tap:[[740,.045,.035,0,'triangle']],
  select:[[520,.055,.045,0,'sine'],[780,.06,.035,.045,'sine']],
  save:[[660,.065,.055,0,'triangle'],[880,.08,.045,.065,'triangle']],
  mark:[[620,.055,.045,0,'triangle'],[930,.075,.04,.05,'triangle']],
  next:[[440,.045,.032,0,'sine'],[660,.05,.03,.04,'triangle']],
  back:[[520,.05,.032,0,'triangle'],[390,.06,.025,.04,'triangle']],
  clear:[[330,.06,.04,0,'sawtooth'],[240,.075,.03,.05,'sawtooth']],
  success:[[523,.11,.065,0,'triangle'],[659,.11,.06,.10,'triangle'],[784,.14,.06,.2,'triangle'],[1047,.18,.055,.33,'triangle']],
  finish:[[392,.12,.07,0,'triangle'],[523,.12,.065,.11,'triangle'],[659,.14,.06,.22,'triangle'],[784,.14,.055,.34,'triangle'],[1047,.2,.05,.47,'triangle']],
  error:[[260,.075,.045,0,'sawtooth'],[190,.095,.035,.06,'sawtooth']]
 };
 (seq[kind]||seq.tap).forEach(a=>playTone(...a));
}

const vol=$("soundVolume");if(vol){vol.value=Math.round(soundVolume*100);$("soundVolumeValue").textContent=vol.value+"%";vol.addEventListener("input",()=>{soundVolume=Number(vol.value)/100;localStorage.setItem("sscSoundVolume",vol.value);$("soundVolumeValue").textContent=vol.value+"%";if(Number(vol.value)>0)playSfx("success")})}
$('welcomeForm').addEventListener('submit',e=>{e.preventDefault();const n=$('nameInput').value.trim();if(!n)return;localStorage.setItem('sscStudentName',n);$('welcomeModal').classList.add('hidden');paintProfile();playTone(660,.1,.04);playTone(880,.13,.04,.11)});
$('profileButton').addEventListener('click',openProfileNameDialog);$('soundToggle').addEventListener('click',()=>{soundEnabled=!soundEnabled;localStorage.setItem('sscSound',soundEnabled?'on':'off');paintProfile();if(soundEnabled)playTone(720,.08,.035)});$('motionToggle').addEventListener('click',()=>{motionEnabled=!motionEnabled;localStorage.setItem('sscMotion',motionEnabled?'on':'off');document.body.classList.toggle('motion-off',!motionEnabled);paintProfile();if(soundEnabled)playTone(motionEnabled?880:440,.08,.03)});

// Full-result backup and profile-scoped reset controls.
function downloadJsonFile(name,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
$("exportResultsButton").addEventListener("click",()=>{const history=readAttemptHistory();downloadJsonFile("ssc-mts-results-"+activeProfileId+".json",{exportedAt:new Date().toISOString(),profileId:activeProfileId,profileName:profileDisplayName(),attempts:history});setStatus("Exported "+history.length+" full result record(s), including saved questions and explanations.");playSfx("save")});
$("resetAttemptsButton").addEventListener("click",()=>{if(!confirm("Reset all saved attempts and progress for profile ‘"+profileDisplayName()+"’? This cannot be undone unless you exported a backup."))return;const kept=readAllAttemptHistory().filter(r=>(r.profileId||"default")!==activeProfileId);localStorage.setItem("sscAttemptHistory",JSON.stringify(kept));const latest={};kept.forEach(r=>{const k=r.paperIdentity||r.paperKey;if(k&&!latest[k])latest[k]=r});localStorage.setItem("sscLatestResults",JSON.stringify(latest));localStorage.removeItem("sscLastAttempt");const progressKeys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("sscExamProgress:")&&k.endsWith(":profile:"+activeProfileId))progressKeys.push(k)}progressKeys.forEach(k=>localStorage.removeItem(k));renderPapers();setStatus("Attempts and saved progress cleared for this profile only.");playSfx("clear")});

// Easter egg: tap the brand star seven times to reveal a tiny study-spirit message.
let logoTapCount=0,logoTapTimer=null;
const brandStar=document.querySelector('.brandlogo');
if(brandStar){brandStar.title='A tiny secret might be hiding here…';brandStar.setAttribute('aria-label','SSC MTS logo; tap seven times for a surprise');brandStar.setAttribute('role','button');brandStar.setAttribute('tabindex','0');brandStar.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();brandStar.click()}});brandStar.addEventListener('click',()=>{
  logoTapCount++;clearTimeout(logoTapTimer);logoTapTimer=setTimeout(()=>{logoTapCount=0},5200);
  if(logoTapCount>=7){logoTapCount=0;clearTimeout(logoTapTimer);playSfx('secret');
    if(typeof animeImpact==='function'){const r=brandStar.getBoundingClientRect();animeImpact(r.left+r.width/2,r.top+r.height/2)}
    document.querySelector('.secret-toast')?.remove();const quips=['SECRET UNLOCKED · study spirit +1 ✨','A tiny star believes in you 🌟','Lucky study charm acquired 🍀','Plot armor activated. Back to the grind ⚡','Side quest complete · +10 confidence 💫'];
    const toast=document.createElement('div');toast.className='secret-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');toast.textContent=quips[Math.floor(Math.random()*quips.length)];document.body.appendChild(toast);setTimeout(()=>toast.remove(),2900);
  }
})}

const examBackButton=$('examBack');if(examBackButton)examBackButton.addEventListener('click',()=>{clearInterval(tick);show('sectionView');renderSectionView()});
const _childNav=$('childFolderNavigator');if(_childNav)_childNav.addEventListener('click',()=>openCurrentFolder());
document.querySelectorAll('.sectioncard').forEach(card=>{
 const opener=card.querySelector('button[onclick*="openSection"]');
 const key=opener?.getAttribute('onclick')?.match(/openSection\('([^']+)'\)/)?.[1];
 if(!key)return;card.classList.add('directory-clickable');card.setAttribute('role','link');card.setAttribute('tabindex','0');
 const activate=()=>openSection(key);
 card.addEventListener('click',e=>{if(e.target.closest('button,a,input,select,label'))return;activate();});
 card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===card){e.preventDefault();activate();}});
});
document.querySelectorAll('.reading-chapter-card').forEach(card=>{
 const opener=card.querySelector('.chapter-view[data-chapter]');if(!opener)return;const chapter=opener.dataset.chapter;
 card.classList.add('directory-clickable');card.setAttribute('role','link');card.setAttribute('tabindex','0');
 const activate=()=>openCurrentFolder(chapter);
 card.addEventListener('click',e=>{if(e.target.closest('button,a,input,select,label'))return;activate();});
 card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===card){e.preventDefault();activate();}});
});
const _btc=$('backToChildFolder');if(_btc)_btc.addEventListener('click',backToFolders);
const _arc=$('allReadingChapters');if(_arc)_arc.addEventListener('click',backToFolders);
document.querySelectorAll('.chapter-view').forEach(b=>b.addEventListener('click',()=>openCurrentFolder(b.dataset.chapter)));
paintProfile();askName();
updateSectionFolderPath();updateFolderNavigationUI();
loadFolderLibrary();


// Premium folder navigation: clickable breadcrumb levels and quiet scroll feedback.
function scrollPageToTop(){
 try{const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:0,behavior:(!document.body.classList.contains('motion-off')&&!reduced)?'smooth':'auto'});}catch(_){window.scrollTo(0,0);}
}
(function setupPremiumNavigationEffects(){
 const bar=$('pageScrollProgressBar');
 let progressQueued=false;
 const updateProgress=()=>{progressQueued=false;if(!bar)return;const doc=document.documentElement;const max=Math.max(1,doc.scrollHeight-window.innerHeight);const ratio=Math.max(0,Math.min(1,(window.scrollY||doc.scrollTop)/max));bar.style.transform=`scaleX(${ratio})`;};
 window.addEventListener('scroll',()=>{if(!progressQueued){progressQueued=true;requestAnimationFrame(updateProgress)}},{passive:true});
 window.addEventListener('resize',updateProgress,{passive:true});updateProgress();
 if(!('IntersectionObserver' in window))return;
 const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced||document.body.classList.contains('motion-off'))return;
 const revealSelector='.sectioncard,.testcard,.reading-chapter-card,.local-child-folder,.paper-folder-heading,.stat,.panel,.reviewitem';
 const seen=new WeakSet();
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.07,rootMargin:'0px 0px -24px 0px'});
 let serial=0;
 const prepare=(node)=>{
   if(!(node instanceof Element))return;
   const candidates=[];if(node.matches(revealSelector))candidates.push(node);node.querySelectorAll?.(revealSelector).forEach(el=>candidates.push(el));
   candidates.forEach(el=>{if(seen.has(el))return;seen.add(el);el.classList.add('premium-reveal');el.style.setProperty('--reveal-delay',`${(serial++%7)*38}ms`);observer.observe(el);});
 };
 prepare(document.body);
 const mutation=new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(prepare)));
 mutation.observe(document.body,{childList:true,subtree:true});
 window.addEventListener('pagehide',()=>{observer.disconnect();mutation.disconnect()},{once:true});
})();
// Dedicated volume buttons make loud effects easier to tune on tablets and computers.
(function wireVolumeStepButtons(){
 const slider=$('soundVolume');if(!slider)return;
 const nudge=(delta)=>{slider.value=String(Math.max(Number(slider.min)||0,Math.min(Number(slider.max)||600,(Number(slider.value)||0)+delta)));slider.dispatchEvent(new Event('input',{bubbles:true}));};
 $('soundVolumeDown')?.addEventListener('click',()=>nudge(-50));
 $('soundVolumeUp')?.addEventListener('click',()=>nudge(50));
})();


;

(function(){
  "use strict";
  var NS="http://www.w3.org/2000/svg";
  function $(id){return document.getElementById(id);}
  function mk(tag,cls,attrs){var e=document.createElementNS(NS,tag);if(cls)e.setAttribute("class",cls);if(attrs)for(var k in attrs)e.setAttribute(k,attrs[k]);return e;}
  function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];});}
  function recs(){
    var h=[];
    try{ h=(typeof window.readAttemptHistory==="function")?window.readAttemptHistory():JSON.parse(localStorage.getItem("sscAttemptHistory")||"[]"); }catch(e){ h=[]; }
    return Array.isArray(h)?h.filter(function(r){return r&&typeof r==="object";}):[];
  }
  function pctOf(r){
    var t=Number(r.total)||0,s=Number(r.score); if(!isFinite(s))s=0;
    if(t>0)return Math.max(0,Math.min(100,(s/t)*100));
    var a=Number(r.accuracy); return isFinite(a)?Math.max(0,Math.min(100,a)):0;
  }
  function shortDate(iso){try{return new Date(iso).toLocaleDateString("en-IN",{day:"2-digit",month:"short"});}catch(e){return "";}}

  function drawChart(svg,list){
    while(svg.firstChild)svg.removeChild(svg.firstChild);
    var W=720,H=260,pl=46,pr=18,pt=20,pb=38,iw=W-pl-pr,ih=H-pt-pb,n=list.length;
    var defs=mk("defs"),g=mk("linearGradient",null,{id:"progArea",x1:"0",y1:"0",x2:"0",y2:"1"});
    g.appendChild(mk("stop",null,{offset:"0%","class":"ga-top"}));
    g.appendChild(mk("stop",null,{offset:"100%","class":"ga-bot"}));
    defs.appendChild(g);svg.appendChild(defs);
    [0,25,50,75,100].forEach(function(v){
      var y=pt+ih-(v/100)*ih;
      svg.appendChild(mk("line","grid-line",{x1:pl,y1:y.toFixed(1),x2:W-pr,y2:y.toFixed(1)}));
      var t=mk("text","axis-text",{x:pl-8,y:(y+4).toFixed(1),"text-anchor":"end"});t.textContent=v;svg.appendChild(t);
    });
    var xs=list.map(function(_,i){return n===1?pl+iw/2:pl+(i/(n-1))*iw;});
    var ys=list.map(function(r){return pt+ih-(pctOf(r)/100)*ih;});
    var dLine="";xs.forEach(function(x,i){dLine+=(i?" L":"M")+x.toFixed(1)+" "+ys[i].toFixed(1);});
    if(n>1){
      var dArea="M"+xs[0].toFixed(1)+" "+(pt+ih)+" "+dLine.slice(1)+" L"+xs[n-1].toFixed(1)+" "+(pt+ih)+" Z";
      svg.appendChild(mk("path","area",{d:dArea}));
      var p=mk("path","line",{d:dLine});svg.appendChild(p);
      try{var L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;
        requestAnimationFrame(function(){requestAnimationFrame(function(){p.style.transition="stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)";p.style.strokeDashoffset="0";});});
      }catch(e){}
    }
    list.forEach(function(r,i){
      var c=mk("circle","dot",{cx:xs[i].toFixed(1),cy:ys[i].toFixed(1),r:"4.5"});
      var tt=mk("title");tt.textContent=(r.title||"Attempt")+" — "+Math.round(pctOf(r))+"%"+(r.score!=null?(" ("+r.score+"/"+(r.total||"-")+")"):"");
      c.appendChild(tt);svg.appendChild(c);
      var t=mk("text","axis-text",{x:xs[i].toFixed(1),y:H-pb+20,"text-anchor":"middle"});
      t.textContent=(n<=8)?(shortDate(r.date)||("#"+(i+1))):("#"+(i+1));
      svg.appendChild(t);
    });
    svg.appendChild(mk("line","axis-line",{x1:pl,y1:pt+ih,x2:W-pr,y2:pt+ih}));
  }

  function drawRing(host,pct){
    host.innerHTML="";
    var r=58,c=2*Math.PI*r;
    var svg=mk("svg",null,{viewBox:"0 0 150 150"});
    var defs=mk("defs"),g=mk("linearGradient",null,{id:"ringGrad",x1:"0",y1:"0",x2:"1",y2:"1"});
    g.appendChild(mk("stop",null,{offset:"0%","class":"rg-a"}));g.appendChild(mk("stop",null,{offset:"100%","class":"rg-b"}));
    defs.appendChild(g);svg.appendChild(defs);
    svg.appendChild(mk("circle","track",{cx:75,cy:75,r:r}));
    var bar=mk("circle","bar",{cx:75,cy:75,r:r});bar.style.strokeDasharray=c;bar.style.strokeDashoffset=c;svg.appendChild(bar);
    host.appendChild(svg);
    var val=document.createElement("div");val.className="ring-val";
    val.innerHTML="<strong>"+Math.round(pct)+"%</strong><span>Accuracy</span>";host.appendChild(val);
    requestAnimationFrame(function(){requestAnimationFrame(function(){bar.style.strokeDashoffset=(c*(1-pct/100)).toFixed(1);});});
  }

  function chip(v,l,cls){return '<div class="progress-chip'+(cls?" "+cls:"")+'"><strong>'+esc(v)+'</strong><span>'+esc(l)+'</span></div>';}

  function renderProgress(){
    var panel=$("progressPanel");if(!panel)return;
    var all=recs(),list=all.slice(0,14).reverse();
    var chart=$("progressChart"),empty=$("progressEmpty"),ring=$("accuracyRing"),chips=$("progressChips");
    var latest=all[0]||null,acc=latest&&isFinite(Number(latest.accuracy))?Number(latest.accuracy):0;
    if(ring)drawRing(ring,acc);
    if(list.length){if(empty)empty.classList.add("hidden");if(chart){chart.classList.remove("hidden");drawChart(chart,list);}}
    else{if(empty)empty.classList.remove("hidden");if(chart)chart.classList.add("hidden");}
    var best=0,sum=0,cnt=0;
    list.forEach(function(r){var p=pctOf(r);if(p>best)best=p;var a=Number(r.accuracy);if(isFinite(a)){sum+=a;cnt++;}});
    var trend=list.length>=2?(pctOf(list[list.length-1])-pctOf(list[0])):0;
    if(chips)chips.innerHTML=
      chip(list.length,"Attempts")+
      chip(Math.round(best)+"%","Best score")+
      chip((cnt?Math.round(sum/cnt):0)+"%","Avg accuracy")+
      chip((trend>=0?"\u25b2 ":"\u25bc ")+Math.abs(Math.round(trend))+"%",trend>=0?"Improving":"Dipping",trend>=0?"good":"bad");
  }

  function setHeroGreeting(){
    var h=$("heroGreeting");if(!h)return;
    var n="";
    try{n=(localStorage.getItem("sscProfileName:"+(localStorage.getItem("sscActiveProfileId")||"default"))||localStorage.getItem("sscStudentName")||"").trim();}catch(e){}
    h.textContent=n?("Hello, "+n+"."):"Ready to practice?";
  }

  function hook(){
    if(typeof window.show==="function"&&!window.show.__progHooked){
      var orig=window.show;
      var w=function(s){var r=orig.apply(this,arguments);if(s==="results"){setTimeout(renderProgress,80);}return r;};
      w.__progHooked=true;window.show=w;
    }
    setHeroGreeting();renderProgress();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",hook);else hook();
})();

;

/* SSC test-series Admin panel — additive module (v2).
   - password verified against a SHA-256 hash (no plaintext in the file)
   - categories AND sub-categories (add / remove)
   - upload a single JSON paper, or a whole FOLDER of JSON papers
   - sub-category browsing inside the library (grid + filtered papers)
   - "export website" bakes everything into a fresh HTML file
   It only calls the host app's own functions; it never rewrites its logic. */
(function () {
  "use strict";
  var SALT = "ssc-mts::";
  var PASS_HASH = "9e760a0c034f27533496bedb0bfe6bff975a9e262ace645f46eff403bfe278d2";
  var CORE = ["chapterwise", "english", "gk", "reading", "mock"];

  /* ---------- compact SHA-256 (works offline, no secure-context needed) ---------- */
  function sha256(ascii) {
    function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
    var mp = Math.pow, mw = mp(2, 32), result = "";
    var words = [], asciiBitLength = ascii.length * 8;
    var hash = sha256.h = sha256.h || [], k = sha256.k = sha256.k || [], pc = k.length;
    var isComposite = {};
    for (var c = 2; pc < 64; c++) {
      if (!isComposite[c]) {
        for (var i = 0; i < 313; i += c) isComposite[i] = c;
        hash[pc] = (mp(c, .5) * mw) | 0; k[pc++] = (mp(c, 1 / 3) * mw) | 0;
      }
    }
    ascii += "\x80";
    while (ascii.length % 64 - 56) ascii += "\x00";
    for (i = 0; i < ascii.length; i++) { var j = ascii.charCodeAt(i); if (j >> 8) return; words[i >> 2] |= j << ((3 - i) % 4) * 8; }
    words[words.length] = (asciiBitLength / mw) | 0; words[words.length] = asciiBitLength;
    for (j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), oldHash = hash; hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i]
          + (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(t1 + t2) | 0].concat(hash); hash[4] = (hash[4] + t1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (hash[i] >> (j * 8)) & 255; result += ((b < 16) ? 0 : "") + b.toString(16); }
    return result;
  }

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function lsGet(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? d : v; } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function slugify(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40); }
  function baked() { var b = window.__SSC_ADMIN__; return (b && typeof b === "object") ? b : { specs: [], papers: [] }; }
  var contentCache = {}, idbAvailable = null;
  function idbOpen() {
    return new Promise(function (res, rej) {
      var settled = false;
      var to = setTimeout(function () { if (!settled) { settled = true; idbAvailable = false; rej(new Error("idb timeout")); } }, 3000);
      try {
        var rq = indexedDB.open("sscAdminDB", 1);
        rq.onupgradeneeded = function () { var db = rq.result; if (!db.objectStoreNames.contains("content")) db.createObjectStore("content"); };
        rq.onsuccess = function () { if (!settled) { settled = true; clearTimeout(to); idbAvailable = true; res(rq.result); } };
        rq.onerror = function () { if (!settled) { settled = true; clearTimeout(to); idbAvailable = false; rej(rq.error); } };
      } catch (e) { if (!settled) { settled = true; clearTimeout(to); idbAvailable = false; rej(e); } }
    });
  }
  function idbPut(path, content) { return idbOpen().then(function (db) { return new Promise(function (res, rej) { try { var tx = db.transaction("content", "readwrite"); tx.objectStore("content").put(content, path); tx.oncomplete = function () { res(); }; tx.onerror = function () { rej(tx.error); }; } catch (e) { rej(e); } }); }); }
  function idbDelete(path) { return idbOpen().then(function (db) { return new Promise(function (res) { try { var tx = db.transaction("content", "readwrite"); tx.objectStore("content").delete(path); tx.oncomplete = function () { res(); }; tx.onerror = function () { res(); }; } catch (e) { res(); } }); }).catch(function () {}); }
  function idbAll() { return idbOpen().then(function (db) { return new Promise(function (res) { var out = {}; try { var tx = db.transaction("content", "readonly"); var st = tx.objectStore("content"); var cur = st.openCursor(); cur.onsuccess = function () { var c = cur.result; if (c) { out[c.key] = c.value; c.continue(); } else res(out); }; cur.onerror = function () { res(out); }; } catch (e) { res(out); } }); }).catch(function () { return {}; }); }
  function collect() {
    var b = baked();
    var specs = (Array.isArray(b.specs) ? b.specs : []).concat(lsGet("sscAdminSpecs", []));
    var papers = (Array.isArray(b.papers) ? b.papers : []).concat(lsGet("sscAdminPapers", []));
    var seen = {}, S = [];
    specs.forEach(function (s) { var k = s && (s.label || s.section); if (s && s.section && !seen[k]) { seen[k] = 1; S.push(s); } });
    var seenp = {}, P = [];
    papers.forEach(function (p) { if (p && p.path && !seenp[p.path]) { seenp[p.path] = 1; if (!p.content && contentCache[p.path]) p.content = contentCache[p.path]; P.push(p); } });
    return { specs: S, papers: P };
  }
  function revealCards() { setTimeout(function () { try { document.querySelectorAll(".testcard.premium-reveal:not(.in-view),.reviewitem.premium-reveal:not(.in-view),.sectioncard.premium-reveal:not(.in-view),.metric-card.premium-reveal:not(.in-view)").forEach(function (el) { el.classList.add("in-view"); }); } catch (e) {} }, 300); }
  function specLabelFor(p) { try { var sp = mapRelativePathToSpec(p.fileName || p.embeddedKey || p.path); return sp ? sp.label : null; } catch (e) { return null; } }
  function subOf(spec) { return spec.subLabel || spec.path[spec.path.length - 1]; }

  /* ---------- merge uploaded / baked data into the live library ---------- */
  function makeCardClickable(el, go) {
    el.classList.add("directory-clickable");
    el.setAttribute("role", "link"); el.setAttribute("tabindex", "0");
    el.addEventListener("click", function (e) { if (e.target.closest("button,a,input,select,label")) return; go(); });
    el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    var b = el.querySelector("button"); if (b) b.onclick = go;
  }
  function yearOf(name) { var m = String(name || "").match(/\b(19|20)\d{2}\b/g); return m ? Math.max.apply(null, m.map(Number)) : 0; }
  function subcatOrder() { try { return localStorage.getItem("sscSubcatOrder") || "desc"; } catch (e) { return "desc"; } }
  function sortSpecs(list) {
    var dir = subcatOrder() === "asc" ? -1 : 1;
    return list.slice().sort(function (x, y) {
      var a = subOf(x), b = subOf(y), ya = yearOf(a), yb = yearOf(b);
      if (ya !== yb) return (yb - ya) * dir;
      return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
    });
  }
  function addCards(specs) {
    var host = document.querySelector(".sectioncards"); if (!host) return;
    var done = {};
    specs.forEach(function (sp) {
      if (!sp || !sp.section || CORE.indexOf(sp.section) >= 0 || done[sp.section] || host.querySelector('[data-cat="' + sp.section + '"]')) return;
      done[sp.section] = 1;
      var art = document.createElement("article"); art.className = "sectioncard"; art.setAttribute("data-cat", sp.section);
      art.innerHTML = '<div class="sectionicon purple" style="font-size:24px">▤</div><div class="sectionname">' + esc(sp.sectionLabel || sp.section) + '</div><button class="btn dark" type="button">Open ↗</button>';
      makeCardClickable(art, function () { try { openSection(sp.section); } catch (e) {} });
      host.appendChild(art);
    });
  }
  function merge() {
    var cfg = collect();
    cfg.specs.forEach(function (sp) { sp.custom = true; });
    // reconcile custom specs (so deletions take effect without a reload)
    var cfgLabels = {}; cfg.specs.forEach(function (s) { cfgLabels[s.label] = 1; });
    for (var i = LOCAL_FOLDER_SPECS.length - 1; i >= 0; i--) { var s = LOCAL_FOLDER_SPECS[i]; if (s.custom && !cfgLabels[s.label]) LOCAL_FOLDER_SPECS.splice(i, 1); }
    cfg.specs.forEach(function (sp) {
      try {
        if (!LOCAL_FOLDER_SPECS.some(function (x) { return x.label === sp.label; })) LOCAL_FOLDER_SPECS.push(sp);
        if (sp.sectionLabel) SECTION_LABELS[sp.section] = sp.sectionLabel;
        if (!papersBySection[sp.section]) papersBySection[sp.section] = [];
        SSC_CUSTOM[sp.section] = sp.sectionLabel || SECTION_LABELS[sp.section] || sp.section;
      } catch (e) {}
    });
    // drop sections that no longer have any spec
    var liveSec = {}; LOCAL_FOLDER_SPECS.forEach(function (x) { liveSec[x.section] = 1; });
    Object.keys(papersBySection).forEach(function (sec) {
      if (!liveSec[sec]) { delete papersBySection[sec]; try { delete SSC_CUSTOM[sec]; delete SECTION_LABELS[sec]; } catch (e) {} var c = document.querySelector('.sectioncard[data-cat="' + sec + '"]'); if (c) c.remove(); }
    });
    // remove previously-ingested admin papers so re-runs never duplicate
    var adminPaths = {}; cfg.papers.forEach(function (p) { adminPaths[p.path] = 1; });
    Object.keys(papersBySection).forEach(function (sec) {
      papersBySection[sec] = (papersBySection[sec] || []).filter(function (p) {
        if (p.variants) return !Object.keys(p.variants).some(function (l) { var v = p.variants[l] || {}; return adminPaths[v.embeddedKey || v.fileName]; });
        return !adminPaths[p.embeddedKey || p.fileName];
      });
    });
    cfg.papers.forEach(function (file) {
      try {
        var spec = mapRelativePathToSpec(file.path); if (!spec) return;
        embeddedQuestionTextByPath.set(file.path, file.content);
        ingestPaperMetadata(file, spec);
      } catch (e) {}
    });
    addCards(cfg.specs);
    try { papers = papersBySection[currentSection] || []; updateFolderNavigationUI(); updateSectionFolderPath(); renderPapers(); } catch (e) {}
    try { var sv = document.getElementById("sectionView"); if (sv && !sv.classList.contains("hidden")) renderSubcats(currentSection); } catch (e) {}
    try { var ap = $("adminPage"); if (ap && !ap.classList.contains("hidden")) renderAdmin(); } catch (e) {}
    revealCards();
  }
  function ready(fn) { var n = 0; var iv = setInterval(function () { n++; var done = false; try { done = (typeof folderScanComplete !== "undefined") && folderScanComplete; } catch (e) {} if (done || n > 80) { clearInterval(iv); fn(); } }, 250); }

  /* ---------- sub-category browsing in the library ---------- */
  function ensureSubBox() {
    var box = $("sscSubcats");
    if (!box) {
      box = document.createElement("div"); box.id = "sscSubcats"; box.className = "sectioncards hidden";
      var pv = $("paperListView"); var anchor = pv || $("sectionFolderPath");
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(box, anchor); else document.querySelector(".wrap").appendChild(box);
    }
    return box;
  }
  function renderSubcats(which) { return; /* disabled: the path-driven nav owns folder browsing */
    try { SSC_ACTIVE_SUB = null; SSC_ACTIVE_SUB_LABEL = null; } catch (e) {}
    var specs = sortSpecs(LOCAL_FOLDER_SPECS.filter(function (s) { return s.section === which; }));
    var box = ensureSubBox();
    var nav = $("childFolderNavigator"), pv = $("paperListView"), rc = $("readingChapters");
    if (specs.length <= 1) { box.classList.add("hidden"); box.innerHTML = ""; if (nav) nav.style.display = ""; return; }
    if (nav) nav.style.display = "none";
    if (rc) rc.classList.add("hidden");
    if (pv) pv.classList.add("hidden");
    box.classList.remove("hidden");
    var all = papersBySection[which] || [];
    box.innerHTML = specs.map(function (sp) {
      var cnt = all.filter(function (p) { return specLabelFor(p) === sp.label; }).length;
      return '<article class="sectioncard" data-sub="' + esc(sp.label) + '"><div class="sectionicon purple" style="font-size:22px">📁</div>'
        + '<div class="sectionname">' + esc(subOf(sp)) + '</div><span class="small" style="color:var(--muted)">' + cnt + ' papers</span>'
        + '<button class="btn dark" type="button">Open ↗</button></article>';
    }).join("");
    box.querySelectorAll("[data-sub]").forEach(function (el) { makeCardClickable(el, function () { openSubcat(which, el.getAttribute("data-sub")); }); });
  }
  function openSubcat(which, label) {
    try {
      folderOpen = true;
      try { SSC_ACTIVE_SUB = String(label).split("/").pop().trim(); SSC_ACTIVE_SUB_LABEL = label; } catch (e) {}
      papers = (papersBySection[which] || []).filter(function (p) { return specLabelFor(p) === label; });
      var box = $("sscSubcats"); if (box) box.classList.add("hidden");
      var name = label.split("/").pop().trim();
      if ($("sectionHeading")) $("sectionHeading").textContent = name;
      if ($("paperFolderTitle")) $("paperFolderTitle").textContent = name;
      updateFolderNavigationUI(); updateSectionFolderPath(); updateSectionLoadStatus(); renderPapers();
      if ($("paperListView")) $("paperListView").classList.remove("hidden");
      revealCards();
      if (typeof scrollPageToTop === "function") scrollPageToTop();
    } catch (e) {}
  }
  /* ---------- automatic paper sorting ---------- */
  var SORT_KEY = "sscSortMode";
  function sortMode() { try { return localStorage.getItem(SORT_KEY) || "name"; } catch (e) { return "name"; } }
  function applySort() {
    if (!Array.isArray(papers)) return;
    var m = sortMode(), cmp;
    if (m === "name") cmp = function (x, y) { return String(x.title || "").localeCompare(String(y.title || ""), undefined, { numeric: true, sensitivity: "base" }); };
    else if (m === "name-desc") cmp = function (x, y) { return String(y.title || "").localeCompare(String(x.title || ""), undefined, { numeric: true, sensitivity: "base" }); };
    else if (m === "new") cmp = function (x, y) { return (Number(y.id) || 0) - (Number(x.id) || 0); };
    else if (m === "old") cmp = function (x, y) { return (Number(x.id) || 0) - (Number(y.id) || 0); };
    else return;
    papers.sort(cmp);
  }
  function injectSortControl() {
    var search = $("search"); if (!search || $("sscSort")) return;
    var sel = document.createElement("select"); sel.id = "sscSort"; sel.className = "search";
    sel.style.flex = "0 1 190px"; sel.style.minWidth = "150px"; sel.setAttribute("aria-label", "Sort papers");
    sel.innerHTML = '<option value="name">Sort: Name (A\u2013Z)</option><option value="name-desc">Sort: Name (Z\u2013A)</option><option value="new">Sort: Newest first</option><option value="old">Sort: Oldest first</option>';
    sel.value = sortMode();
    sel.addEventListener("change", function () { try { localStorage.setItem(SORT_KEY, sel.value); } catch (e) {} try { applySort(); renderPapers(); } catch (e) {} });
    search.parentNode.insertBefore(sel, search.nextSibling);
  }
  function setFolderQuestionCount() {
    var el = $("questionCount"); if (!el) return;
    var list = (typeof papers !== "undefined" && Array.isArray(papers)) ? papers : [];
    var total = 0;
    list.forEach(function (p) { total += Number(p.questionCount) || 0; });
    el.textContent = total ? String(total) : "\u2014";
  }
  function installBrowserHooks() {
    if (window.openSection && !window.openSection.__subHooked) {
      var o = window.openSection;
      var w = function (which) { var r = o.apply(this, arguments); try { renderSubcats(which); } catch (e) {} return r; };
      w.__subHooked = true; window.openSection = w;
    }
    if (window.paperCountForCurrentFolder && !window.paperCountForCurrentFolder.__subHooked) {
      var pcf = window.paperCountForCurrentFolder;
      var wpcf = function () {
        try { if (SSC_ACTIVE_SUB_LABEL && folderOpen) return (papersBySection[currentSection] || []).filter(function (p) { return specLabelFor(p) === SSC_ACTIVE_SUB_LABEL; }).length; } catch (e) {}
        return pcf.apply(this, arguments);
      };
      wpcf.__subHooked = true; window.paperCountForCurrentFolder = wpcf;
    }
    if (window.renderPapers && !window.renderPapers.__sortHooked) {
      var rp = window.renderPapers;
      var wrp = function () { try { applySort(); } catch (e) {} var r = rp.apply(this, arguments); try { setFolderQuestionCount(); } catch (e) {} return r; };
      wrp.__sortHooked = true; window.renderPapers = wrp;
    }
    if (window.setResultView && !window.setResultView.__revealHooked) {
      var srv = window.setResultView;
      var wsrv = function () { var r = srv.apply(this, arguments); revealCards(); return r; };
      wsrv.__revealHooked = true; window.setResultView = wsrv;
    }
    var back = $("backToChildFolder");
    if (back && !back.__subHooked) { back.__subHooked = true; back.addEventListener("click", function () { setTimeout(function () { try { renderSubcats(currentSection); } catch (e) {} }, 0); }); }
    if (window.backToFolders && !window.backToFolders.__subHooked) {
      var bf = window.backToFolders;
      var wbf = function () { var r = bf.apply(this, arguments); try { renderSubcats(currentSection); } catch (e) {} return r; };
      wbf.__subHooked = true; window.backToFolders = wbf;
    }
    if (window.navigateFolderBreadcrumb && !window.navigateFolderBreadcrumb.__subHooked) {
      var nb = window.navigateFolderBreadcrumb;
      var wnb = function () { var r = nb.apply(this, arguments); try { var sv = document.getElementById("sectionView"); if (sv && !sv.classList.contains("hidden")) renderSubcats(currentSection); } catch (e) {} return r; };
      wnb.__subHooked = true; window.navigateFolderBreadcrumb = wnb;
    }
  }

  /* ---------- admin UI ---------- */
  function unlocked() { try { return sessionStorage.getItem("sscAdminUnlocked") === "1"; } catch (e) { return false; } }
  function msg(t, bad) {
    if (!t) return;
    var el = $("adminToast");
    if (!el) { el = document.createElement("div"); el.id = "adminToast"; el.className = "admin-toast"; document.body.appendChild(el); }
    el.textContent = t; el.style.borderColor = bad ? "var(--red)" : "var(--green)";
    el.classList.remove("hidden");
    clearTimeout(el.__t); el.__t = setTimeout(function () { el.classList.add("hidden"); }, 4500);
  }
  var adminSel = null;
  function build() {
    var page = $("adminPage");
    if (page) { wireAdmin(); return; }
    page = document.createElement("div"); page.className = "admin-page hidden"; page.id = "adminPage";
    page.innerHTML =
      '<div class="admin-topbar"><div class="admin-brand"><span class="admin-logo">\uD83D\uDD10</span><div><strong>Admin</strong><span class="small">Categories \u00b7 sub-categories \u00b7 papers</span></div></div>'
      + '<div class="admin-topactions"><button class="admin-btn ghost" id="adminBackup" type="button">Backup</button><button class="admin-btn ghost" id="adminRestore" type="button">Restore</button><button class="admin-btn" id="adminExport" type="button">Export website</button><button class="admin-btn ghost" id="adminClosePage" type="button">Close \u2715</button></div></div>'
      + '<div class="admin-login-wrap" id="adminLoginWrap"><div class="admin-login"><input class="admin-input" id="adminPass" type="password" placeholder="Admin password" autocomplete="off"><button class="admin-btn" id="adminUnlock" type="button">Unlock</button><div class="admin-error" id="adminErr"></div></div></div>'
      + '<div class="admin-workspace hidden" id="adminWorkspace"><aside class="admin-tree" id="adminTree"></aside><main class="admin-main" id="adminMain"></main></div>';
    document.body.appendChild(page);
    wireAdmin();
  }
  function wireAdmin() {
    $("adminClosePage").onclick = closeAdmin;
    $("adminUnlock").onclick = tryUnlock;
    $("adminPass").onkeydown = function (e) { if (e.key === "Enter") tryUnlock(); };
    $("adminExport").onclick = exportSite;
    $("adminBackup").onclick = exportData;
    $("adminRestore").onclick = importData;
  }
  function renderAdmin() { renderAdminTree(); renderAdminMain(); }
  function renderAdminTree() {
    var tree = $("adminTree"); if (!tree) return;
    var cfg = collect(), bySec = {};
    LOCAL_FOLDER_SPECS.forEach(function (sp) {
      if (!bySec[sp.section]) bySec[sp.section] = { section: sp.section, label: SECTION_LABELS[sp.section] || sp.section, specs: [], custom: CORE.indexOf(sp.section) < 0 };
      bySec[sp.section].specs.push(sp);
    });
    Object.keys(bySec).forEach(function (k) { bySec[k].specs = sortSpecs(bySec[k].specs); });
    var dirLabel = subcatOrder() === "asc" ? "Year \u2191" : "Year \u2193";
    var h = '<div class="admin-tree-head"><span>Categories</span><button class="admin-btn ghost" id="adminOrder" type="button" title="Sort sub-categories by year">' + dirLabel + '</button><button class="admin-btn" id="adminAddCat" type="button">+ New category</button></div><div id="adminAddCatSlot"></div>';
    Object.keys(bySec).forEach(function (k) {
      var sec = bySec[k];
      h += '<div class="admin-catrow"><div class="admin-catrow-head"><strong>' + esc(sec.label) + '</strong>' + (sec.custom ? '<button class="admin-mini danger" type="button" data-delcat="' + esc(sec.section) + '" title="Delete category">\u2715</button>' : '') + '</div><div class="admin-subrows">';
      sec.specs.forEach(function (sp) {
        var cnt = (papersBySection[sp.section] || []).filter(function (p) { return specLabelFor(p) === sp.label; }).length;
        h += '<button class="admin-subrow' + (adminSel === sp.label ? " active" : "") + '" type="button" data-sel="' + esc(sp.label) + '"><span class="admin-subrow-name">\uD83D\uDCC1 ' + esc(subOf(sp)) + '</span><span class="admin-badge">' + cnt + '</span></button>';
      });
      h += '</div><div class="admin-catrow-actions"><button class="admin-mini" type="button" data-addsub="' + esc(sec.section) + '">+ sub-category</button><button class="admin-mini" type="button" data-folder="' + esc(sec.section) + '">+ folder(s) as sub-category</button></div></div>';
    });
    tree.innerHTML = h;
    $("adminAddCat").onclick = function () { inlinePrompt($("adminAddCatSlot"), "New category name\u2026", doAddCategory); };
    $("adminOrder").onclick = function () { try { localStorage.setItem("sscSubcatOrder", subcatOrder() === "asc" ? "desc" : "asc"); } catch (e) {} renderAdmin(); try { if (typeof renderSubcats === "function") renderSubcats(currentSection); } catch (e) {} };
    tree.querySelectorAll("[data-sel]").forEach(function (b) { b.onclick = function () { adminSel = b.getAttribute("data-sel"); renderAdmin(); }; });
    tree.querySelectorAll("[data-addsub]").forEach(function (b) { b.onclick = function () { inlinePrompt(b.parentNode.parentNode, "New sub-category name\u2026", function (n) { doAddSub(b.getAttribute("data-addsub"), n); }); }; });
    tree.querySelectorAll("[data-folder]").forEach(function (b) { b.onclick = function () { uploadFoldersAsSubs(b.getAttribute("data-folder")); }; });
    tree.querySelectorAll("[data-delcat]").forEach(function (b) { b.onclick = function () { deleteCategory(b.getAttribute("data-delcat")); }; });
  }
  function renderAdminMain() {
    var main = $("adminMain"); if (!main) return;
    if (!adminSel) { main.innerHTML = '<div class="admin-empty">Select a sub-category on the left, or create a new one.</div>'; return; }
    var spec = specByLabel(adminSel);
    if (!spec) { main.innerHTML = '<div class="admin-empty">Sub-category not found.</div>'; return; }
    var cfg = collect();
    var papers = cfg.papers.filter(function (p) { return p.path.indexOf(spec.path.join("/") + "/") === 0; });
    var q = 0; papers.forEach(function (p) { q += Number(p.questionCount) || 0; });
    var h = '<div class="admin-main-head"><div><h2>' + esc(subOf(spec)) + '</h2><span class="small">' + esc(SECTION_LABELS[spec.section] || spec.section) + ' \u00b7 ' + papers.length + ' paper(s) \u00b7 ' + q + ' questions</span></div>'
      + '<div class="admin-main-actions"><button class="admin-btn" type="button" data-addfiles="1">+ Add papers</button><button class="admin-btn ghost" type="button" data-rensub="1">Rename</button><button class="admin-btn danger" type="button" data-delsub="1">Delete</button></div></div>';
    h += '<div class="admin-paperlist">';
    if (!papers.length) h += '<div class="admin-empty">No papers yet \u2014 click \u201c+ Add papers\u201d to upload a folder or files.</div>';
    papers.forEach(function (p) {
      h += '<div class="admin-paperrow"><span class="admin-paper-name">' + esc(p.title || p.path) + '</span><span class="admin-badge">' + esc((p.language || "en").toUpperCase()) + '</span><span class="small">' + (p.questionCount || 0) + ' Q</span><span class="admin-spacer"></span><button class="admin-mini" type="button" data-renpaper="' + esc(p.path) + '">Rename</button><button class="admin-mini danger" type="button" data-delpaper="' + esc(p.path) + '">Delete</button></div>';
    });
    h += '</div>';
    main.innerHTML = h;
    main.querySelector("[data-addfiles]").onclick = function () { uploadFolder(spec.label); };
    main.querySelector("[data-rensub]").onclick = function () { inlinePrompt(main.querySelector(".admin-main-head"), "Sub-category name\u2026", function (n) { renameSub(spec.label, n); }); };
    main.querySelector("[data-delsub]").onclick = function () { deleteSub(spec.label); };
    main.querySelectorAll("[data-renpaper]").forEach(function (b) { b.onclick = function () { renamePaper(b.getAttribute("data-renpaper")); }; });
    main.querySelectorAll("[data-delpaper]").forEach(function (b) { b.onclick = function () { removePaper(b.getAttribute("data-delpaper")); }; });
  }
  function renameSub(label, name) {
    name = String(name || "").trim(); if (!name) return;
    var spec = specByLabel(label); if (!spec) return;
    var cat = SECTION_LABELS[spec.section] || spec.section, newLabel = cat + " / " + name;
    lsSet("sscAdminSpecs", lsGet("sscAdminSpecs", []).map(function (x) { if (x.label === label) { x.subLabel = name; x.path = [cat, name]; x.label = newLabel; } return x; }));
    lsSet("sscAdminPapers", lsGet("sscAdminPapers", []).map(function (p) { if (p.path.indexOf(label + "/") === 0) p.path = newLabel + "/" + p.path.slice(label.length + 1); return p; }));
    adminSel = newLabel; merge(); renderAdmin(); msg("Renamed.");
  }
  function uploadFoldersAsSubs(section) {
    var inp = document.createElement("input"); inp.type = "file"; inp.webkitdirectory = true; inp.multiple = true; inp.accept = ".json,application/json";
    inp.onchange = function () {
      var files = Array.prototype.slice.call(inp.files || []).filter(function (f) { return /\.json$/i.test(f.name); });
      if (!files.length) { msg("No .json files in that folder.", true); return; }
      var root = String((files[0].webkitRelativePath || "").split("/")[0] || "Uploaded").slice(0, 60);
      var groups = {}, direct = [];
      files.forEach(function (f) {
        var parts = String(f.webkitRelativePath || "").split("/");
        if (parts.length >= 3) { var sub = parts[1]; (groups[sub] = groups[sub] || []).push(f); }
        else direct.push(f);
      });
      var jobs = [];
      Object.keys(groups).forEach(function (sub) { jobs.push({ name: sub.slice(0, 60), files: groups[sub] }); });
      if (direct.length) jobs.push({ name: root, files: direct });
      if (!jobs.length) { msg("No papers found.", true); return; }
      var cat = SECTION_LABELS[section] || section, specs = lsGet("sscAdminSpecs", []);
      jobs.forEach(function (job) {
        var label = cat + " / " + job.name;
        if (!LOCAL_FOLDER_SPECS.some(function (s) { return s.label === label; }) && !specs.some(function (s) { return s.label === label; }))
          specs.push({ section: section, sectionLabel: cat, path: [cat, job.name], chapter: null, label: label, subLabel: job.name });
      });
      lsSet("sscAdminSpecs", specs); merge();
      var i = 0, totalAdded = 0, totalQ = 0;
      (function nextJob() {
        if (i >= jobs.length) { adminSel = jobs.length === 1 ? (cat + " / " + jobs[0].name) : adminSel; merge(); renderAdmin(); msg("Added " + totalAdded + " paper(s), " + totalQ + " questions across " + jobs.length + " sub-category(ies)."); return; }
        var job = jobs[i++], spec = specByLabel(cat + " / " + job.name);
        if (!spec) { nextJob(); return; }
        readAll(job.files, spec, function (added, qTotal) { totalAdded += added; totalQ += qTotal; nextJob(); });
      })();
    };
    document.body.appendChild(inp); inp.style.display = "none"; inp.click();
  }
  function readAll(files, spec, done) {
    var added = 0, qTotal = 0, skipped = 0, i = 0;
    (function next() {
      if (i >= files.length) { done(added, qTotal, skipped); return; }
      var f = files[i++], r = new FileReader();
      r.onload = function () { var text = String(r.result || ""), info = analyse(text); if (info) { addPaperFile(spec, f.name, text, fileTitle(f.name), info.lang); added++; qTotal += info.count; } else skipped++; next(); };
      r.onerror = function () { skipped++; next(); };
      r.readAsText(f);
    })();
  }
  function showWorkspace() { $("adminLoginWrap").classList.add("hidden"); $("adminWorkspace").classList.remove("hidden"); renderAdmin(); }
  function tryUnlock() {
    var v = ($("adminPass") || {}).value || "", ok = false;
    try { ok = (sha256(SALT + v) === PASS_HASH); } catch (e) {}
    if (ok) { try { sessionStorage.setItem("sscAdminUnlocked", "1"); } catch (e) {} showWorkspace(); }
    else { $("adminErr").textContent = "Incorrect password."; }
  }
  function openAdmin() {
    build(); $("adminPage").classList.remove("hidden");
    if (unlocked()) showWorkspace();
    else { $("adminWorkspace").classList.add("hidden"); $("adminLoginWrap").classList.remove("hidden"); setTimeout(function () { var p = $("adminPass"); if (p) p.focus(); }, 60); }
  }
  function closeAdmin() { var b = $("adminPage"); if (b) b.classList.add("hidden"); }

  /* ---------- data actions ---------- */
  function inlinePrompt(host, placeholder, cb) {
    if (!host) return;
    var ex = host.querySelector(".admin-inline"); if (ex) { ex.remove(); return; }
    var row = document.createElement("div"); row.className = "admin-inline";
    row.innerHTML = '<input class="admin-input" type="text" maxlength="60" placeholder="' + esc(placeholder) + '"><button class="admin-btn" type="button">Add</button><button class="admin-btn ghost" type="button">Cancel</button>';
    host.insertBefore(row, host.firstChild);
    var inp = row.querySelector("input"); inp.focus();
    function add() { var v = inp.value.trim(); row.remove(); if (v) cb(v); }
    row.querySelector(".admin-btn").onclick = add;
    row.querySelector(".admin-btn.ghost").onclick = function () { row.remove(); };
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") add(); else if (e.key === "Escape") row.remove(); });
  }
  function addCategory() {
    var host = $("adminCats"); if (!host) return;
    inlinePrompt(host, "New category name\u2026", doAddCategory);
  }
  function doAddCategory(name) {
    name = String(name || "").trim(); if (!name) return;
    var s = slugify(name) || ("cat" + Date.now());
    var specs = lsGet("sscAdminSpecs", []);
    if (CORE.indexOf(s) >= 0 || specs.some(function (x) { return x.section === s; })) s = s + "-" + Math.floor(Math.random() * 900 + 100);
    specs.push({ section: s, sectionLabel: name, path: [name, "Uploaded"], chapter: null, label: name + " / Uploaded", subLabel: "Uploaded" });
    lsSet("sscAdminSpecs", specs);
    merge(); renderAdmin(); msg("Category added: " + name);
  }
  function addSub(section) {
    var host = document.querySelector('.admin-cat[data-sec="' + section + '"]') || $("adminCats");
    inlinePrompt(host, "New sub-category name\u2026", function (name) { doAddSub(section, name); });
  }
  function doAddSub(section, name) {
    name = String(name || "").trim(); if (!name) return;
    var cat = SECTION_LABELS[section] || section;
    var specs = lsGet("sscAdminSpecs", []);
    var label = cat + " / " + name;
    if (LOCAL_FOLDER_SPECS.some(function (s) { return s.label === label; })) { msg("That sub-category already exists.", true); return; }
    specs.push({ section: section, sectionLabel: cat, path: [cat, name], chapter: null, label: label, subLabel: name });
    lsSet("sscAdminSpecs", specs);
    merge(); renderAdmin(); msg("Sub-category added: " + name);
  }
  function isCoreSpec(label) { return LOCAL_FOLDER_SPECS.some(function (s) { return s.label === label && CORE.indexOf(s.section) >= 0 && !(s.subLabel); }); }
  function deleteSub(label) {
    var bakedSpec = baked().specs.some(function (s) { return s.label === label; });
    if (!window.confirm("Delete sub-category \"" + label + "\" and its uploaded papers?")) return;
    lsSet("sscAdminSpecs", lsGet("sscAdminSpecs", []).filter(function (x) { return x.label !== label; }));
    lsGet("sscAdminPapers", []).filter(function (p) { return p.path.indexOf(label + "/") === 0; }).forEach(function (p) { try { idbDelete(p.path); } catch (e) {} });
    lsSet("sscAdminPapers", lsGet("sscAdminPapers", []).filter(function (p) { return p.path.indexOf(label + "/") !== 0; }));
    merge(); renderAdmin(); msg("Sub-category removed." + (bakedSpec ? " (It was baked in — re-export to publish the change.)" : ""));
  }
  function deleteCategory(section) {
    if (!window.confirm("Delete this category and all its uploaded papers?")) return;
    lsSet("sscAdminSpecs", lsGet("sscAdminSpecs", []).filter(function (x) { return x.section !== section; }));
    lsSet("sscAdminPapers", lsGet("sscAdminPapers", []).filter(function (p) { return p.section !== section; }));
    merge(); renderAdmin(); msg("Category removed.");
  }
  function renamePaper(path) {
    var cur = (lsGet("sscAdminPapers", []).find(function (p) { return p.path === path; }) || {}).title || "";
    var t = window.prompt("Paper name:", cur); if (t === null) return;
    t = String(t).trim(); if (!t) return;
    lsSet("sscAdminPapers", lsGet("sscAdminPapers", []).map(function (p) { if (p.path === path) p.title = t; return p; }));
    merge(); renderAdmin(); msg("Renamed.");
  }
  function removePaper(path) {
    if (!window.confirm("Remove this paper?")) return;
    lsSet("sscAdminPapers", lsGet("sscAdminPapers", []).filter(function (p) { return p.path !== path; }));
    try { idbDelete(path); } catch (e) {}
    merge(); renderAdmin(); msg("Paper removed.");
  }
  function resetData() {
    if (!window.confirm("Remove ALL uploaded categories, sub-categories and papers from this browser?")) return;
    try { localStorage.removeItem("sscAdminSpecs"); localStorage.removeItem("sscAdminPapers"); } catch (e) {}
    merge(); renderAdmin(); msg("All uploaded data cleared.");
  }
  function specByLabel(label) { return LOCAL_FOLDER_SPECS.find(function (s) { return s.label === label; }); }
  function detectLang(text) { return /[\u0900-\u097F]/.test(text) ? "hi" : "en"; }
  function fileTitle(filename) {
    var t = String(filename || "paper").replace(/\.json$/i, "").replace(/\s+/g, " ").trim();
    return (t || "Paper").slice(0, 110);
  }
  function baseTitle(filename) {
    var t = String(filename || "").replace(/\.json$/i, "").replace(/[-\s_]*(en|eng|english|hi|hin|hindi)[-\s_]*$/i, "").replace(/\s+/g, " ").trim();
    return (t || fileTitle(filename)).slice(0, 110);
  }
  function deriveTitle(filename) { return fileTitle(filename); }
  function analyse(text) {
    var arr = null; try { arr = findArray(parseQuestionJson(text)); } catch (e) {}
    if (!arr || !arr.length) return null;
    var withAns = 0, withSol = 0, marks = 0;
    arr.forEach(function (q) {
      if (q && q.answer != null && q.answer !== "") withAns++;
      if (q && (q.solution_text || q.solution || q.explanation)) withSol++;
      var pm = Number(q && q.positive_marks); marks += (isFinite(pm) && pm) ? pm : 3;
    });
    return { count: arr.length, withAns: withAns, withSol: withSol, marks: Math.round(marks * 100) / 100, lang: detectLang(text) };
  }
  function addPaperFile(spec, filename, text, title, lang) {
    var info = analyse(text); if (!info) return null;
    var clean = String(filename || "paper.json").replace(/[^a-zA-Z0-9._-]/g, "_");
    if (!/\.json$/i.test(clean)) clean += ".json";
    var path = spec.path.concat([clean]).join("/");
    var file = { path: path, id: String(Date.now()) + "_" + Math.floor(Math.random() * 1000), title: title, language: lang, chapter: spec.chapter || null, section: spec.section, questionCount: info.count, minutes: 25, marks: info.marks || info.count * 3 };
    contentCache[path] = text;
    if (idbAvailable === false) { file.content = text; } else { try { idbPut(path, text); } catch (e) { file.content = text; } }
    var papers = lsGet("sscAdminPapers", []).filter(function (p) { return p.path !== path; });
    papers.push(file);
    if (!lsSet("sscAdminPapers", papers)) { msg("Browser storage is full \u2014 this paper was NOT saved. Remove some papers or use Backup data, then retry.", true); return null; }
    return info;
  }
  function uploadPaper(label) {
    var spec = specByLabel(label); if (!spec) { msg("Unknown sub-category.", true); return; }
    var inp = document.createElement("input"); inp.type = "file"; inp.accept = ".json,application/json";
    inp.onchange = function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var text = String(r.result || "");
        var info = analyse(text);
        if (!info) { msg("That file has no recognizable questions (expected a JSON array of question objects).", true); return; }
        var title = fileTitle(f.name);
        addPaperFile(spec, f.name, text, title, info.lang);
        merge(); renderAdmin();
        msg("Uploaded \"" + title + "\": " + info.count + " questions, " + info.withAns + " with answers, " + info.withSol + " with solutions, " + info.marks + " marks, language " + info.lang + ".");
      };
      r.readAsText(f);
    };
    document.body.appendChild(inp); inp.style.display = "none"; inp.click();
  }
  function uploadFolder(label) {
    var spec = specByLabel(label); if (!spec) { msg("Unknown sub-category.", true); return; }
    var inp = document.createElement("input"); inp.type = "file"; inp.webkitdirectory = true; inp.multiple = true; inp.accept = ".json,application/json";
    inp.onchange = function () {
      var files = Array.prototype.slice.call(inp.files || []).filter(function (f) { return /\.json$/i.test(f.name); });
      if (!files.length) { msg("No .json files found in that folder.", true); return; }
      var results = [], i = 0, skipped = 0;
      (function next() {
        if (i >= files.length) { finish(); return; }
        var f = files[i++]; var r = new FileReader();
        r.onload = function () { var text = String(r.result || ""), info = analyse(text); if (info) results.push({ name: f.name, text: text, info: info }); else skipped++; next(); };
        r.onerror = function () { skipped++; next(); };
        r.readAsText(f);
      })();
      function finish() {
        if (!results.length) { msg("No question papers found in that folder.", true); return; }
        var langs = {}; results.forEach(function (x) { langs[x.info.lang] = 1; });
        var twoLang = Object.keys(langs).length > 1;
        if (twoLang) {
          spec.groupLangs = true;
          var specs = lsGet("sscAdminSpecs", []).map(function (x) { if (x.label === label) x.groupLangs = true; return x; });
          lsSet("sscAdminSpecs", specs);
        }
        var qTotal = 0, mTotal = 0, added = 0;
        results.forEach(function (x) {
          var title = twoLang ? baseTitle(x.name) : fileTitle(x.name);
          addPaperFile(spec, x.name, x.text, title, x.info.lang);
          added++; qTotal += x.info.count; mTotal += x.info.marks;
        });
        merge(); renderAdmin();
        msg("Added " + added + " paper(s) \u00b7 " + qTotal + " questions \u00b7 " + Object.keys(langs).join("/") + " language" + (twoLang ? " mode ON (switch in the paper)" : "") + " \u00b7 " + Math.round(mTotal) + " total marks" + (skipped ? " \u00b7 skipped " + skipped + " non-paper JSON" : "") + ".");
      }
    };
    document.body.appendChild(inp); inp.style.display = "none"; inp.click();
  }
  function exportData() {
    var cfg = collect();
    var json = JSON.stringify({ specs: cfg.specs, papers: cfg.papers });
    try {
      var blob = new Blob([json], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "ssc-admin-backup.json";
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      msg("Backup downloaded (" + cfg.papers.length + " papers).");
    } catch (e) { msg("Backup failed: " + (e.message || e), true); }
  }
  function importData() {
    var inp = document.createElement("input"); inp.type = "file"; inp.accept = ".json,application/json";
    inp.onchange = function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var data = null; try { data = JSON.parse(String(r.result || "")); } catch (e) {}
        if (!data || !Array.isArray(data.papers)) { msg("That doesn't look like an SSC admin backup.", true); return; }
        var specs = lsGet("sscAdminSpecs", []), papers = lsGet("sscAdminPapers", []);
        (data.specs || []).forEach(function (s) { if (!specs.some(function (x) { return x.label === s.label; })) specs.push(s); });
        (data.papers || []).forEach(function (p) {
          var meta = {}; for (var k in p) { if (k !== "content") meta[k] = p[k]; }
          papers = papers.filter(function (x) { return x.path !== p.path; }); papers.push(meta);
          // content travels inside the backup record
        });
        lsSet("sscAdminSpecs", specs); lsSet("sscAdminPapers", papers);
        merge(); renderAdmin(); msg("Imported " + (data.papers || []).length + " paper(s).");
      };
      r.readAsText(f);
    };
    document.body.appendChild(inp); inp.style.display = "none"; inp.click();
  }
  function exportSite() {
    var cfg = collect();
    var json = JSON.stringify({ specs: cfg.specs, papers: cfg.papers });
    var LT = "<", GT = ">";
    var cOpen = LT + "!--", cClose = "--" + GT;
    var sOpen = LT + "script" + GT, sClose = LT + "/script" + GT;
    var A = cOpen + "SSC_ADMIN_DATA" + cClose, B = cOpen + "/SSC_ADMIN_DATA" + cClose;
    var ap = $("adminPage"), at = $("adminToast"), app = ap ? ap.parentNode : null, atp = at ? at.parentNode : null;
    if (ap) ap.remove(); if (at) at.remove();
    var src = LT + "!doctype html" + GT + "\n" + document.documentElement.outerHTML;
    if (ap && app) app.appendChild(ap); if (at && atp) atp.appendChild(at);
    var i = src.indexOf(A);
    while (i > -1) { var j = src.indexOf(B, i); if (j < 0) break; src = src.slice(0, i) + src.slice(j + B.length); i = src.indexOf(A); }
    var inject = A + sOpen + "window.__SSC_ADMIN__=" + json + ";" + sClose + B;
    src = src.replace(LT + "/body" + GT, inject + LT + "/body" + GT);
    try {
      var blob = new Blob([src], { type: "text/html" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "ssc_mts_test_paper_premium.html";
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
      msg("Exported " + cfg.papers.length + " uploaded paper(s). Upload this file to your host to publish them.");
    } catch (e) { msg("Export failed: " + (e.message || e), true); }
  }

  function checkHash() { if (location.hash === "#admin") openAdmin(); }
  function init() { ready(function () { idbAll().then(function (map) { for (var k in map) contentCache[k] = map[k]; }).catch(function () {}).then(function () { merge(); installBrowserHooks(); injectSortControl(); }); }); window.addEventListener("hashchange", checkHash); if (location.hash === "#admin") checkHash(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();


;

/* Study hub — progress dashboard, series progress, focus areas, resume.
   Data-driven from the app's own attempt history. No new storage. */
(function () {
  "use strict";
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function hist() { try { return (typeof window.readAttemptHistory === "function") ? window.readAttemptHistory() : JSON.parse(localStorage.getItem("sscAttemptHistory") || "[]"); } catch (e) { return []; } }
  function pct(r) { var t = Number(r.total) || 0, s = Number(r.score); if (!isFinite(s)) s = 0; if (t > 0) return Math.max(0, Math.min(100, (s / t) * 100)); var a = Number(r.accuracy); return isFinite(a) ? Math.max(0, Math.min(100, a)) : 0; }
  function dayKey(d) { return d.toISOString().slice(0, 10); }
  function todayKey() { return dayKey(new Date()); }
  function streak(h) { var set = {}; h.forEach(function (r) { try { set[dayKey(new Date(r.date))] = 1; } catch (e) {} }); var n = 0, d = new Date(); if (!set[dayKey(d)]) d.setDate(d.getDate() - 1); while (set[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); } return n; }
  var GOAL = 30;
  function fmtDate(iso) { try { return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }); } catch (e) { return ""; } }
  function stats(h) {
    var att = 0, corr = 0, best = 0, accSum = 0, accCnt = 0, today = 0;
    h.forEach(function (r) {
      att += Number(r.attempted) || 0; corr += Number(r.correct) || 0;
      var p = pct(r); if (p > best) best = p;
      var a = Number(r.accuracy); if (isFinite(a)) { accSum += a; accCnt++; }
      try { if (dayKey(new Date(r.date)) === todayKey()) today += Number(r.attempted) || 0; } catch (e) {}
    });
    var acc = att ? Math.round(corr / att * 100) : (accCnt ? Math.round(accSum / accCnt) : 0);
    var xp = corr;
    return { attempts: h.length, att: att, corr: corr, best: Math.round(best), acc: acc, xp: xp, lvl: Math.floor(xp / 100) + 1, into: xp % 100, today: today, streak: streak(h) };
  }
  function weekly(h) { var days = [], today = new Date(), L = ["S", "M", "T", "W", "T", "F", "S"]; for (var i = 6; i >= 0; i--) { var d = new Date(today); d.setDate(d.getDate() - i); days.push({ key: dayKey(d), label: L[d.getDay()], q: 0 }); } var m = {}; days.forEach(function (x) { m[x.key] = x; }); h.forEach(function (r) { try { var k = dayKey(new Date(r.date)); if (m[k]) m[k].q += Number(r.attempted) || 0; } catch (e) {} }); return days; }
  function seriesProgress(h) {
    if (typeof FOLDER_TREE === "undefined" || !FOLDER_TREE.length) return [];
    return FOLDER_TREE.map(function (node) {
      var recs = h.filter(function (r) { return (r.section || "") === node.slug; });
      var attempted = {}; recs.forEach(function (r) { if (r.paperIdentity) attempted[r.paperIdentity] = 1; });
      var att = 0, corr = 0; recs.forEach(function (r) { att += Number(r.attempted) || 0; corr += Number(r.correct) || 0; });
      return { name: node.name, total: node.count, attempted: Object.keys(attempted).length, acc: att ? Math.round(corr / att * 100) : 0, n: recs.length };
    }).filter(function (x) { return x.total > 0; });
  }
  function focusAreas(h) {
    var by = {}; h.forEach(function (r) { var f = String(r.fileName || "").split("/"); if (f.length < 2) return; var k = f[1]; var o = by[k] || (by[k] = { name: k, att: 0, corr: 0, n: 0 }); o.att += Number(r.attempted) || 0; o.corr += Number(r.correct) || 0; o.n++; });
    return Object.keys(by).map(function (k) { var o = by[k]; o.acc = o.att ? Math.round(o.corr / o.att * 100) : 0; return o; }).filter(function (o) { return o.att >= 5; }).sort(function (a, b) { return a.acc - b.acc; }).slice(0, 3);
  }
  function findPaperByFile(fileName) {
    try { for (var s in papersBySection) { var arr = papersBySection[s] || []; for (var i = 0; i < arr.length; i++) { var p = arr[i]; if (p.fileName === fileName) return p; if (p.variants) { for (var l in p.variants) { if (p.variants[l].fileName === fileName) return p.variants[l]; } } } } } catch (e) {}
    return null;
  }
  function openSeriesByName(name) { if (typeof FOLDER_TREE === "undefined") return; var node = FOLDER_TREE.find(function (n) { return n.name === name; }) || null; if (node && typeof openFolderNode === "function") openFolderNode(node); }
  function openL2ByName(name) { if (typeof FOLDER_TREE === "undefined") return; var node = null; FOLDER_TREE.forEach(function (r) { (r.children || []).forEach(function (c) { if (!node && c.name === name) node = c; }); }); if (node && typeof openFolderNode === "function") openFolderNode(node); }
  function render() {
    var panel = $("studyPanel"); if (!panel) return;
    var h = hist(), s = stats(h);
    var goalPct = Math.min(100, Math.round(s.today / GOAL * 100));
    var latest = h[0] || null;
    var series = seriesProgress(h), focus = focusAreas(h), week = weekly(h);
    var weekMax = Math.max.apply(null, week.map(function (x) { return x.q; })) || 1;
    var out = "";
    out += '<div class="hub-head"><div><p class="hub-eyebrow">Your progress</p><h2>Study hub</h2></div>'
      + '<div class="hub-level"><span class="hub-level-badge">Lv ' + s.lvl + '</span><div class="hub-xp"><i style="width:' + s.into + '%"></i></div><span class="hub-xp-text">' + s.xp + ' XP</span></div></div>';
    out += '<div class="hub-stats">'
      + '<div class="hub-stat"><span class="hub-stat-ic">\u25f4</span><strong>' + s.attempts + '</strong><span>Papers attempted</span></div>'
      + '<div class="hub-stat"><span class="hub-stat-ic">\u2713</span><strong>' + s.att + '</strong><span>Questions solved</span></div>'
      + '<div class="hub-stat"><span class="hub-stat-ic">\u25ce</span><strong>' + s.acc + '%</strong><span>Average accuracy</span></div>'
      + '<div class="hub-stat"><span class="hub-stat-ic">\u2605</span><strong>' + s.best + '%</strong><span>Best score</span></div>'
      + '<div class="hub-stat"><span class="hub-stat-ic">\u25f4</span><strong>' + s.streak + '</strong><span>Day streak</span></div>'
      + '</div>';
    out += '<div class="hub-row2">';
    out += '<div class="hub-card hub-continue"><p class="hub-card-eyebrow">' + (latest ? "Pick up where you left off" : "Start your first paper") + '</p>';
    if (latest) { out += '<h3>' + esc(latest.title || "Your last paper") + '</h3><p class="hub-sub">' + (latest.date ? ("Last attempted " + fmtDate(latest.date)) : "") + (latest.accuracy != null ? (" \u00b7 " + Number(latest.accuracy).toFixed(0) + "% accuracy") : "") + '</p><button class="hub-btn primary" id="hubResume" type="button">Resume paper \u2192</button>'; }
    else { out += '<h3>Nothing attempted yet</h3><p class="hub-sub">Open a series below and attempt your first paper \u2014 your progress will appear here.</p><button class="hub-btn primary" id="hubStart" type="button">Browse series \u2192</button>'; }
    out += '</div>';
    out += '<div class="hub-card hub-goal"><div class="hub-ring" style="--p:' + goalPct + '"><strong>' + s.today + '</strong><span>/ ' + GOAL + '</span></div><div><p class="hub-card-eyebrow">Daily goal</p><h3>' + (goalPct >= 100 ? "Goal reached" : "Questions today") + '</h3><p class="hub-sub">' + (goalPct >= 100 ? "Great work \u2014 target hit for today." : "Aim for " + GOAL + " questions a day.") + '</p></div></div>';
    out += '</div>';
    if (series.length) {
      out += '<div class="hub-card hub-series"><div class="hub-card-head"><h3>Series progress</h3><span class="hub-sub">Papers attempted</span></div>';
      series.forEach(function (x) { var p = x.total ? Math.round(x.attempted / x.total * 100) : 0; out += '<div class="hub-series-row"><div class="hub-series-top"><button type="button" class="hub-series-name" data-open-series="' + esc(x.name) + '">' + esc(x.name) + '</button><span class="hub-sub">' + x.attempted + ' / ' + x.total + ' \u00b7 ' + x.acc + '%</span></div><div class="hub-bar"><i style="width:' + p + '%"></i></div></div>'; });
      out += '</div>';
    }
    out += '<div class="hub-row2">';
    if (focus.length) {
      out += '<div class="hub-card"><div class="hub-card-head"><h3>Focus areas</h3><span class="hub-sub">Lowest accuracy</span></div>';
      focus.forEach(function (f) { out += '<div class="hub-focus-row"><div><button type="button" class="hub-focus-name" data-open-l2="' + esc(f.name) + '">' + esc(f.name) + '</button><span class="hub-sub">' + f.att + ' solved</span></div><span class="hub-pill warn">' + f.acc + '%</span></div>'; });
      out += '</div>';
    }
    out += '<div class="hub-card"><div class="hub-card-head"><h3>Recent attempts</h3><span class="hub-sub">Latest ' + Math.min(5, h.length) + '</span></div>';
    if (h.length) { h.slice(0, 5).forEach(function (r) { out += '<div class="hub-recent-row"><div><strong>' + esc(String(r.title || "Paper").slice(0, 60)) + '</strong><span class="hub-sub">' + fmtDate(r.date) + (r.language ? (" \u00b7 " + String(r.language).toUpperCase()) : "") + '</span></div><span class="hub-pill ' + (pct(r) >= 60 ? "good" : "warn") + '">' + Math.round(pct(r)) + '%</span></div>'; }); }
    else { out += '<p class="hub-sub">No attempts yet.</p>'; }
    out += '</div></div>';
    out += '<div class="hub-card hub-week"><div class="hub-card-head"><h3>Last 7 days</h3><span class="hub-sub">' + week.reduce(function (a, x) { return a + x.q; }, 0) + ' questions</span></div><div class="hub-week-bars">';
    week.forEach(function (x) { var p = x.q ? Math.max(8, Math.round(x.q / weekMax * 100)) : 0; out += '<div class="hub-day"><i style="height:' + p + '%"></i><span>' + x.label + '</span></div>'; });
    out += '</div></div>';
    panel.innerHTML = out;
    var res = $("hubResume"); if (res) res.onclick = function () { if (latest) { var p = findPaperByFile(latest.fileName); if (p && typeof start === "function") { start(p); return; } if (latest.questionSnapshot && typeof openSavedResult === "function") { openSavedResult(latest); } } };
    var st = $("hubStart"); if (st) st.onclick = function () { var el = $("homeFolders"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };
    panel.querySelectorAll("[data-open-series]").forEach(function (b) { b.onclick = function () { openSeriesByName(b.getAttribute("data-open-series")); }; });
    panel.querySelectorAll("[data-open-l2]").forEach(function (b) { b.onclick = function () { openL2ByName(b.getAttribute("data-open-l2")); }; });
  }
  function inject() {
    var home = $("home"); if (!home) return;
    var panel = $("studyPanel");
    if (!panel) { panel = document.createElement("section"); panel.id = "studyPanel"; panel.className = "hub-panel"; panel.setAttribute("aria-label", "Your progress"); var hero = home.querySelector(".home-hero"); if (hero && hero.parentNode) hero.parentNode.insertBefore(panel, hero.nextSibling); else home.appendChild(panel); }
    render();
  }
  function hook() { inject(); if (typeof window.show === "function" && !window.show.__hubHooked) { var o = window.show; var w = function (s) { var r = o.apply(this, arguments); if (s === "home") setTimeout(render, 60); return r; }; w.__hubHooked = true; window.show = w; } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(hook, 400); }); else setTimeout(hook, 400);
})();

/* =====================================================================
   ROUND 3 — "Previous year papers by exam" index + a hunter-rank system
   (ranks, daily quests, achievements). Additive: wraps renderHome and
   reads only the app's own data. Nothing existing is modified.
   ===================================================================== */
(function () {
  "use strict";
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function plural(n, w) { return Number(n).toLocaleString("en-IN") + " " + w + (n === 1 ? "" : "s"); }
  function hist() { try { return (typeof window.readAttemptHistory === "function") ? window.readAttemptHistory() : JSON.parse(localStorage.getItem("sscAttemptHistory") || "[]"); } catch (e) { return []; } }
  function dayKey(d) { return d.toISOString().slice(0, 10); }
  function streak(h) { var set = {}; h.forEach(function (r) { try { set[dayKey(new Date(r.date))] = 1; } catch (e) {} }); var n = 0, d = new Date(); if (!set[dayKey(d)]) d.setDate(d.getDate() - 1); while (set[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); } return n; }
  function pct(r) { var t = Number(r.total) || 0, s = Number(r.score); if (!isFinite(s)) s = 0; if (t > 0) return Math.max(0, Math.min(100, (s / t) * 100)); var a = Number(r.accuracy); return isFinite(a) ? Math.max(0, Math.min(100, a)) : 0; }
  function stats(h) {
    var att = 0, corr = 0, best = 0, accSum = 0, accCnt = 0, today = 0, todayPapers = 0, bestToday = 0, todayKey = dayKey(new Date());
    h.forEach(function (r) {
      att += Number(r.attempted) || 0; corr += Number(r.correct) || 0;
      var p = pct(r); if (p > best) best = p;
      var a = Number(r.accuracy); if (isFinite(a)) { accSum += a; accCnt++; }
      try { if (dayKey(new Date(r.date)) === todayKey) { today += Number(r.attempted) || 0; todayPapers++; bestToday = Math.max(bestToday, a || 0); } } catch (e) {}
    });
    return { attempts: h.length, att: att, corr: corr, best: Math.round(best), acc: att ? Math.round(corr / att * 100) : (accCnt ? Math.round(accSum / accCnt) : 0), xp: corr, today: today, todayPapers: todayPapers, bestToday: Math.round(bestToday), streak: streak(h) };
  }
  var RANKS = [
    { k: "E", n: "E-Rank", min: 0 }, { k: "D", n: "D-Rank", min: 100 },
    { k: "C", n: "C-Rank", min: 300 }, { k: "B", n: "B-Rank", min: 700 },
    { k: "A", n: "A-Rank", min: 1500 }, { k: "S", n: "S-Rank", min: 3000 }
  ];
  function rankFor(xp) { var r = RANKS[0]; RANKS.forEach(function (x) { if (xp >= x.min) r = x; }); return r; }
  function nextRank(xp) { for (var i = 0; i < RANKS.length; i++) { if (xp < RANKS[i].min) return RANKS[i]; } return null; }

  /* ---------- exam index (SSC CGL / CHSL / MTS / STENO by year) ---------- */
  var EXAM_INDEX = null;
  function buildExamIndex() {
    var map = {};
    (typeof FOLDER_TREE !== "undefined" ? FOLDER_TREE : []).forEach(function (root) {
      (root.children || []).forEach(function (l2) {
        (l2.children || []).forEach(function (l3) {
          var nm = String(l3.name || "");
          var m = nm.match(/\b(CGL|CHSL|MTS|STENO|CPO|GD)\b/i);
          var y = (nm.match(/\b(20\d{2})\b/) || [])[1];
          if (!m || !y || !l3.papers.length) return;
          var ex = m[1].toUpperCase();
          var o = map[ex] || (map[ex] = { exam: ex, years: {}, count: 0, q: 0, section: null });
          var yr = o.years[y] || (o.years[y] = { year: y, papers: [], count: 0, q: 0 });
          l3.papers.forEach(function (p) {
            yr.papers.push(p); yr.count++; yr.q += Number(p.questionCount) || 0;
            o.count++; o.q += Number(p.questionCount) || 0;
            if (!o.section) o.section = p.section || null;
          });
        });
      });
    });
    return map;
  }
  function renderExamIndex() {
    var host = $("homeExams"); if (!host) return;
    EXAM_INDEX = buildExamIndex();
    var keys = Object.keys(EXAM_INDEX).sort(function (a, b) { return EXAM_INDEX[b].count - EXAM_INDEX[a].count; });
    if (!keys.length) { host.innerHTML = ""; return; }
    var html = '<div class="home-section-head"><div><p class="hub-eyebrow">Exam-wise library</p><h2>Previous year papers by exam</h2></div>'
      + '<p class="hub-sub">Every CGL, CHSL, MTS and STENO paper in your library, grouped by year.</p></div><div class="exam-grid">';
    keys.forEach(function (k) {
      var o = EXAM_INDEX[k], years = Object.keys(o.years).sort().reverse();
      html += '<article class="exam-card" data-exam="' + esc(k) + '" role="link" tabindex="0">'
        + '<div class="exam-card-top"><span class="exam-badge">SSC ' + esc(k) + '</span><span class="exam-years">' + years.length + " year" + (years.length === 1 ? "" : "s") + '</span></div>'
        + '<div class="exam-card-years">' + years.map(function (y) { return '<span class="exam-year-chip">' + y + '</span>'; }).join("") + '</div>'
        + '<div class="exam-card-foot"><span>' + plural(o.count, "paper") + " \u00b7 " + plural(o.q, "question") + '</span><span class="folder-card-go">Open <b>\u2197</b></span></div>'
        + '</article>';
    });
    html += "</div>";
    host.innerHTML = html;
    host.querySelectorAll(".exam-card").forEach(function (c) {
      var go = function () { openExam(c.getAttribute("data-exam")); };
      c.addEventListener("click", go);
      c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }
  function openSynthetic(trail) {
    if (!trail || !trail.length) return;
    navTrail = trail.slice();
    var node = navTrail[navTrail.length - 1];
    if (node.section) currentSection = node.section;
    folderOpen = node.depth > 0;
    papers = (node.papers || []).slice();
    if (typeof playSfx === "function") playSfx("select");
    show("sectionView"); renderSectionView(); if (typeof scrollPageToTop === "function") scrollPageToTop();
  }
  function openExam(key) {
    var o = EXAM_INDEX && EXAM_INDEX[key]; if (!o) return;
    var examNode = { name: "SSC " + key, kind: "exam", examKey: key, depth: 0, section: o.section, path: ["SSC " + key], children: [], papers: [], count: o.count, totalQuestions: o.q };
    Object.keys(o.years).sort().reverse().forEach(function (y) {
      var yr = o.years[y];
      var yNode = { name: key + " " + y, kind: "year", examKey: key, depth: 1, section: o.section, path: ["SSC " + key, key + " " + y], children: [], papers: yr.papers.slice(), count: yr.count, totalQuestions: yr.q, _parent: examNode };
      examNode.children.push(yNode);
    });
    openSynthetic([examNode]);
  }

  /* ---------- hunter-rank system ---------- */
  function quests(s) {
    return [
      { label: "Solve 30 questions today", have: Math.min(s.today, 30), need: 30, xp: 50 },
      { label: "Attempt a paper today", have: Math.min(s.todayPapers, 1), need: 1, xp: 30 },
      { label: "Score 80%+ in a paper today", have: s.bestToday >= 80 ? 1 : 0, need: 1, xp: 40 },
      { label: "Keep your streak alive", have: s.streak > 0 ? 1 : 0, need: 1, xp: 20 }
    ];
  }
  var ACH = [
    { n: "First Step", d: "Attempt your first paper", on: function (s) { return s.attempts >= 1; } },
    { n: "Getting Serious", d: "Attempt 10 papers", on: function (s) { return s.attempts >= 10; } },
    { n: "Grinder", d: "Attempt 50 papers", on: function (s) { return s.attempts >= 50; } },
    { n: "Century", d: "Solve 100 questions", on: function (s) { return s.att >= 100; } },
    { n: "Half-Millennium", d: "Solve 500 questions", on: function (s) { return s.att >= 500; } },
    { n: "On Fire", d: "Reach a 3-day streak", on: function (s) { return s.streak >= 3; } },
    { n: "Unbroken", d: "Reach a 7-day streak", on: function (s) { return s.streak >= 7; } },
    { n: "Sharpshooter", d: "80%+ accuracy (20+ solved)", on: function (s) { return s.acc >= 80 && s.att >= 20; } },
    { n: "Sniper", d: "90%+ accuracy (20+ solved)", on: function (s) { return s.acc >= 90 && s.att >= 20; } },
    { n: "D-Rank Hunter", d: "Reach D-Rank", on: function (s) { return s.xp >= 100; } },
    { n: "B-Rank Hunter", d: "Reach B-Rank", on: function (s) { return s.xp >= 700; } },
    { n: "S-Rank Hunter", d: "Reach S-Rank", on: function (s) { return s.xp >= 3000; } }
  ];
  function ensureHeaderRank() {
    var tools = document.querySelector(".header-primary-tools"); if (!tools || $("rankChip")) return;
    var b = document.createElement("button");
    b.id = "rankChip"; b.type = "button"; b.className = "rank-chip"; b.title = "Your hunter rank";
    b.setAttribute("aria-label", "Your hunter rank");
    b.onclick = function () { var el = $("gamePanel"); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); };
    tools.insertBefore(b, tools.firstChild);
  }
  function paintHeaderRank(s) {
    var b = $("rankChip"); if (!b) return;
    var r = rankFor(s.xp);
    b.innerHTML = '<span class="rank-chip-letter">' + r.k + '</span><span class="rank-chip-copy"><strong>' + r.n + '</strong><span>' + s.xp.toLocaleString("en-IN") + " XP</span></span>";
    b.setAttribute("data-rank", r.k);
  }
  function toast(msg, sub) {
    var t = document.createElement("div");
    t.className = "game-toast";
    t.setAttribute("role", "status");
    t.innerHTML = '<span class="game-toast-ic">\u2b50</span><div><strong>' + esc(msg) + '</strong>' + (sub ? '<span>' + esc(sub) + '</span>' : "") + "</div>";
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 400); }, 3400);
  }
  function checkLevelUp(s) {
    var lvl = Math.floor(s.xp / 100) + 1, r = rankFor(s.xp);
    var prev = null; try { prev = localStorage.getItem("sscGameLevel"); } catch (e) {}
    if (prev === null) { try { localStorage.setItem("sscGameLevel", String(lvl)); localStorage.setItem("sscGameRank", r.k); } catch (e) {} return; }
    if (lvl > Number(prev)) { toast("Level up \u2014 Lv " + lvl, "Keep going, hunter."); if (typeof playSfx === "function") playSfx("success"); }
    var pr = null; try { pr = localStorage.getItem("sscGameRank"); } catch (e) {}
    if (pr && pr !== r.k) toast("Rank up \u2014 " + r.n, "Your hunter rank increased.");
    try { localStorage.setItem("sscGameLevel", String(lvl)); localStorage.setItem("sscGameRank", r.k); } catch (e) {}
  }
  function renderGame() {
    ensureHeaderRank();
    var h = hist(), s = stats(h), r = rankFor(s.xp), nx = nextRank(s.xp);
    paintHeaderRank(s);
    checkLevelUp(s);
    var host = $("gamePanel"); if (!host) return;
    var spanFrom = r.min, spanTo = nx ? nx.min : r.min, prog = nx ? Math.round((s.xp - spanFrom) / Math.max(1, spanTo - spanFrom) * 100) : 100;
    var out = "";
    out += '<div class="sys-panel">'
      + '<div class="sys-rank"><div class="sys-rank-badge" data-rank="' + r.k + '">' + r.k + '</div>'
      + '<div class="sys-rank-copy"><p class="hub-eyebrow">Hunter rank</p><h3>' + r.n + '</h3>'
      + '<p class="hub-sub">' + (nx ? (plural(nx.min - s.xp, "XP") + " to " + nx.n) : "Highest rank reached") + '</p></div></div>'
      + '<div class="sys-xp"><div class="sys-xp-head"><span>' + s.xp.toLocaleString("en-IN") + " XP</span><span>" + (nx ? (spanFrom + "\u2013" + spanTo) : "MAX") + '</span></div><div class="hub-bar"><i style="width:' + Math.max(2, prog) + '%"></i></div></div>'
      + "</div>";
    out += '<div class="hub-card sys-quests"><div class="hub-card-head"><h3>Daily quests</h3><span class="hub-sub">Resets every day</span></div>';
    quests(s).forEach(function (q) {
      var done = q.have >= q.need, p = Math.min(100, Math.round(q.have / q.need * 100));
      out += '<div class="quest-row' + (done ? " done" : "") + '"><div class="quest-main"><span class="quest-check">' + (done ? "\u2713" : "") + '</span><div><strong>' + esc(q.label) + '</strong><div class="quest-bar"><i style="width:' + p + '%"></i></div></div></div><span class="quest-xp">+' + q.xp + ' XP</span></div>';
    });
    out += "</div>";
    out += '<div class="hub-card sys-ach"><div class="hub-card-head"><h3>Achievements</h3><span class="hub-sub">' + ACH.filter(function (a) { return a.on(s); }).length + " / " + ACH.length + ' earned</span></div><div class="ach-grid">';
    ACH.forEach(function (a) { var on = a.on(s); out += '<div class="ach' + (on ? " on" : "") + '" title="' + esc(a.d) + '"><span class="ach-dot"></span><div><strong>' + esc(a.n) + '</strong><span>' + esc(a.d) + '</span></div></div>'; });
    out += "</div></div>";
    host.innerHTML = out;
  }
  function injectPanels() {
    var home = $("home"); if (!home) return;
    if (!$("homeExams")) {
      var ex = document.createElement("section");
      ex.id = "homeExams"; ex.className = "home-exams"; ex.setAttribute("aria-label", "Previous year papers by exam");
      var hf = $("homeFolders");
      if (hf && hf.parentNode) hf.parentNode.insertBefore(ex, hf); else home.appendChild(ex);
    }
    if (!$("gamePanel")) {
      var gp = document.createElement("section");
      gp.id = "gamePanel"; gp.className = "game-panel"; gp.setAttribute("aria-label", "Your hunter rank and quests");
      var sp = $("studyPanel");
      if (sp && sp.parentNode) sp.parentNode.insertBefore(gp, sp.nextSibling);
      else { var ex2 = $("homeExams"); if (ex2 && ex2.parentNode) ex2.parentNode.insertBefore(gp, ex2); else home.appendChild(gp); }
    }
  }
  function refresh() { injectPanels(); try { renderExamIndex(); } catch (e) { console.error("exam index", e); } try { renderGame(); } catch (e) { console.error("game", e); } }
  /* wrap renderHome (nav calls it on load and on goHome) */
  if (typeof window.renderHome === "function" && !window.renderHome.__extraHooked) {
    var rh = window.renderHome;
    var w = function () { var r = rh.apply(this, arguments); try { refresh(); } catch (e) { console.error(e); } return r; };
    w.__extraHooked = true; window.renderHome = w;
  }
  /* make the breadcrumb / back buttons understand the synthetic exam nodes */
  if (typeof window.navigateFolderBreadcrumb === "function" && !window.navigateFolderBreadcrumb.__extraHooked) {
    var nb = window.navigateFolderBreadcrumb;
    var wnb = function (level) { if (level < 0) { return nb.call(this, level); } var node = navTrail[level]; if (node && node.kind) { openSynthetic(navTrail.slice(0, level + 1)); return; } return nb.apply(this, arguments); };
    wnb.__extraHooked = true; window.navigateFolderBreadcrumb = wnb;
  }
  if (typeof window.openFolderNode === "function" && !window.openFolderNode.__extraHooked) {
    var ofn = window.openFolderNode;
    var wofn = function (node) {
      if (node && node.kind) {
        var trail = [], n = node;
        while (n) { trail.unshift(n); n = n._parent; }
        openSynthetic(trail); return;
      }
      return ofn.apply(this, arguments);
    };
    wofn.__extraHooked = true; window.openFolderNode = wofn;
  }
  if (typeof window.backToFolders === "function" && !window.backToFolders.__extraHooked) {
    var bf = window.backToFolders;
    var wbf = function () { if (navTrail.length > 1) { var p = navTrail[navTrail.length - 2]; if (p && p.kind) { openSynthetic(navTrail.slice(0, -1)); return; } } return bf.apply(this, arguments); };
    wbf.__extraHooked = true; window.backToFolders = wbf;
  }
  function hook() { refresh(); if (typeof window.show === "function" && !window.show.__extraShowHooked) { var o = window.show; var w2 = function (s) { var r = o.apply(this, arguments); if (s === "home") setTimeout(refresh, 70); return r; }; w2.__extraShowHooked = true; window.show = w2; } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(hook, 500); }); else setTimeout(hook, 500);
})();

/* =====================================================================
   ROUND 4 — science-backed study tools:
     • Revision queue  (retrieval practice + spacing: mistakes resurface
       until you get them right in a later attempt)
     • Focus timer     (Pomodoro-style work/break cycles)
   Additive: reads the app's own attempt history, adds one home section.
   ===================================================================== */
(function () {
  "use strict";
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function hist() { try { return (typeof window.readAttemptHistory === "function") ? window.readAttemptHistory() : JSON.parse(localStorage.getItem("sscAttemptHistory") || "[]"); } catch (e) { return []; } }
  function hash(s) { var h = 5381, i = String(s).length; while (i) h = (h * 33) ^ String(s).charCodeAt(--i); return (h >>> 0).toString(36); }
  function qkey(q) { return hash((q.text || "") + "|" + (q.options || []).map(function (o) { return o.text; }).join("|")); }
  function correctIndex(q) { try { return (typeof answerIndex === "function") ? answerIndex(q) : null; } catch (e) { return null; } }

  /* ---------- revision queue: mistakes from your newest attempt per question ---------- */
  function mistakeBank() {
    var seen = {}, out = [];
    hist().forEach(function (r) {
      if (!r.questionSnapshot || !r.answers) return;
      r.questionSnapshot.forEach(function (q, i) {
        if (!q || !Array.isArray(q.options) || !q.options.length) return;
        var key = qkey(q);
        if (seen[key]) return; seen[key] = 1;
        var corr = correctIndex(q);
        if (corr === null) return;
        var mine = Number.isInteger(r.answers[i]) ? r.answers[i] : null;
        if (mine === null) return;          /* never attempted -> not a "mistake" */
        if (mine === corr) return;          /* already resolved in a later attempt */
        out.push({ key: key, q: q, mine: mine, corr: corr, title: r.title || "Paper", date: r.date });
      });
    });
    return out;
  }
  function topicsOf(items) {
    var by = {};
    items.forEach(function (x) {
      var f = String(x.title || "").split("/");
      var name = String(x.title || "Other");
      by[name] = (by[name] || 0) + 1;
    });
    return Object.keys(by).map(function (k) { return { name: k, n: by[k] }; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 3);
  }
  function startRevision(items) {
    if (!items.length) return;
    var qs = items.map(function (x) { return x.q; });
    var paper = {
      title: "Revision \u2014 " + qs.length + " mistake" + (qs.length === 1 ? "" : "s"),
      fileName: "__revision__", section: (typeof currentSection !== "undefined" ? currentSection : "revision"),
      minutes: Math.max(5, Math.ceil(qs.length * 1.2)), marks: qs.length * 3,
      questions: qs, questionCount: qs.length, language: "en"
    };
    if (typeof start === "function") start(paper);
  }
  function renderRevision() {
    var host = $("revisionPanel"); if (!host) return;
    var items = mistakeBank();
    var topics = topicsOf(items);
    var html = '<div class="home-section-head"><div><p class="hub-eyebrow">Retrieval practice</p><h2>Revision queue</h2></div>'
      + '<p class="hub-sub">Questions you got wrong come back until you get them right in a later attempt \u2014 the fastest known way to make them stick.</p></div>';
    if (!items.length) {
      html += '<div class="hub-card rev-empty"><strong>Nothing to revise right now</strong><span class="hub-sub">Attempt a paper \u2014 anything you get wrong will appear here for review.</span></div>';
    } else {
      html += '<div class="hub-card rev-card"><div class="rev-head"><div class="rev-count"><strong>' + items.length + '</strong><span>question' + (items.length === 1 ? "" : "s") + ' to review</span></div>'
        + '<button class="hub-btn primary" id="revStart" type="button">Start revision \u2192</button></div>'
        + '<div class="rev-topics">' + topics.map(function (t) { return '<span class="rev-chip">' + esc(String(t.name).slice(0, 42)) + " \u00b7 " + t.n + '</span>'; }).join("") + '</div>'
        + '<p class="rev-note">Answer these again from memory. Anything you get right is removed from the queue automatically.</p></div>';
    }
    host.innerHTML = html;
    var b = $("revStart"); if (b) b.onclick = function () { startRevision(items); };
  }

  /* ---------- focus timer (Pomodoro-style) ---------- */
  var POMO = { work: 25 * 60, brk: 5 * 60 };
  function pomoLoad() { try { return JSON.parse(localStorage.getItem("sscPomo") || "null") || { mode: "work", left: POMO.work, running: false, endsAt: 0, sessions: 0, day: "" }; } catch (e) { return { mode: "work", left: POMO.work, running: false, endsAt: 0, sessions: 0, day: "" }; } }
  function pomoSave(s) { try { localStorage.setItem("sscPomo", JSON.stringify(s)); } catch (e) {} }
  function todayStr() { return new Date().toISOString().slice(0, 10); }
  function fmt(t) { t = Math.max(0, Math.round(t)); var m = Math.floor(t / 60), s = t % 60; return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); }
  var pomoTick = null;
  function renderPomo() {
    var host = $("focusPanel"); if (!host) return;
    var s = pomoLoad();
    if (s.day !== todayStr()) { s.day = todayStr(); s.sessions = 0; }
    var left = s.running && s.endsAt ? (s.endsAt - Date.now()) / 1000 : s.left;
    if (s.running && left <= 0) {
      s.running = false;
      if (s.mode === "work") { s.mode = "brk"; s.left = POMO.brk; s.sessions++; } else { s.mode = "work"; s.left = POMO.work; }
      pomoSave(s);
      if (typeof playSfx === "function") playSfx("success");
      if (typeof window.__pomoToast === "function") window.__pomoToast(s.mode === "brk" ? "Focus session done \u2014 take a 5-minute break." : "Break over \u2014 back to it.");
    }
    var total = s.mode === "work" ? POMO.work : POMO.brk;
    var prog = Math.max(0, Math.min(100, Math.round((1 - left / total) * 100)));
    host.innerHTML = '<div class="home-section-head"><div><p class="hub-eyebrow">Focus</p><h2>Study timer</h2></div>'
      + '<p class="hub-sub">Work in focused blocks and take short breaks \u2014 time-boxing keeps attention high and fatigue low.</p></div>'
      + '<div class="hub-card focus-card"><div class="focus-left"><div class="focus-ring" style="--p:' + prog + '"><strong id="focusClock">' + fmt(left) + '</strong><span>' + (s.mode === "work" ? "Focus" : "Break") + '</span></div>'
      + '<div class="focus-meta"><p class="hub-card-eyebrow">' + (s.mode === "work" ? "Focus block" : "Short break") + '</p><h3>' + (s.running ? "Running" : "Paused") + '</h3>'
      + '<p class="hub-sub">' + s.sessions + ' focus session' + (s.sessions === 1 ? "" : "s") + ' completed today</p></div></div>'
      + '<div class="focus-actions"><button class="hub-btn primary" id="pomoToggle" type="button">' + (s.running ? "Pause" : "Start") + '</button>'
      + '<button class="settings-btn ghost" id="pomoReset" type="button">Reset</button></div></div>';
    var t = $("pomoToggle"); if (t) t.onclick = function () {
      var st = pomoLoad();
      if (st.running) { st.left = (st.endsAt - Date.now()) / 1000; st.running = false; }
      else { st.running = true; st.endsAt = Date.now() + (st.left > 0 ? st.left : POMO[st.mode === "work" ? "work" : "brk"]) * 1000; if (!st.left) st.left = POMO[st.mode === "work" ? "work" : "brk"]; }
      pomoSave(st); if (typeof playSfx === "function") playSfx("select"); renderPomo();
    };
    var r = $("pomoReset"); if (r) r.onclick = function () { var st = pomoLoad(); st.running = false; st.mode = "work"; st.left = POMO.work; st.endsAt = 0; pomoSave(st); renderPomo(); };
  }
  function pomoLoop() {
    if (pomoTick) return;
    pomoTick = setInterval(function () {
      var s = pomoLoad();
      if (!s.running) return;
      var left = (s.endsAt - Date.now()) / 1000;
      if (left <= 0) { renderPomo(); return; }
      var c = $("focusClock"); if (c) c.textContent = fmt(left);
      var ring = document.querySelector(".focus-ring");
      var total = s.mode === "work" ? POMO.work : POMO.brk;
      if (ring) ring.style.setProperty("--p", Math.max(0, Math.min(100, Math.round((1 - left / total) * 100))));
    }, 1000);
  }

  function inject() {
    var home = $("home"); if (!home) return;
    if (!$("revisionPanel")) {
      var rp = document.createElement("section");
      rp.id = "revisionPanel"; rp.className = "home-exams"; rp.setAttribute("aria-label", "Revision queue");
      var ex = $("homeExams");
      if (ex && ex.parentNode) ex.parentNode.insertBefore(rp, ex); else home.appendChild(rp);
    }
    if (!$("focusPanel")) {
      var fp = document.createElement("section");
      fp.id = "focusPanel"; fp.className = "home-exams"; fp.setAttribute("aria-label", "Study timer");
      var rp2 = $("revisionPanel");
      if (rp2 && rp2.parentNode) rp2.parentNode.insertBefore(fp, rp2.nextSibling); else home.appendChild(fp);
    }
  }
  function refresh() { inject(); try { renderRevision(); } catch (e) { console.error("revision", e); } try { renderPomo(); } catch (e) { console.error("pomo", e); } }
  if (typeof window.renderHome === "function" && !window.renderHome.__study2Hooked) {
    var rh = window.renderHome;
    var w = function () { var r = rh.apply(this, arguments); try { refresh(); } catch (e) {} return r; };
    w.__study2Hooked = true; window.renderHome = w;
  }
  function hook() { refresh(); pomoLoop(); if (typeof window.show === "function" && !window.show.__study2Hooked) { var o = window.show; var w2 = function (s) { var r = o.apply(this, arguments); if (s === "home") setTimeout(refresh, 90); return r; }; w2.__study2Hooked = true; window.show = w2; } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(hook, 600); }); else setTimeout(hook, 600);
})();
