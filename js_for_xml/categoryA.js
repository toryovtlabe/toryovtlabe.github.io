let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","/../xml/CategoryA.xml",false);
xmlhttp.send();
let xmldoc=xmlhttp.responseXML;
let len=xmldoc.getElementsByTagName('category').length;
let str = window.location+"0";
str = str[str.length-2];
let i;
let category;
for(i=0;i<len;i++) {
    category = xmldoc.getElementsByTagName('category')[i].childNodes;
    if (str == category[1].innerHTML) break;
}
let head1 = document.createElement('h1');
head1.innerHTML=category[3].innerHTML;
document.getElementById('fromxml').appendChild(head1);

let backimg = document.createElement('div');
backimg.className='imgback';
document.getElementById('fromxml').appendChild(backimg);
let link = document.createElement('img');
link.src=category[5].innerHTML;
if(i == 3) link.style='margin:-10%';
if(i == 5) link.style='width:30%';
backimg.appendChild(link);

let cost = document.createElement('div');
cost.className='cost';
let cost1=document.createElement('p');
cost1.className='text';
cost1.innerHTML=category[7].innerHTML;
cost.appendChild(cost1);
let num = document.createElement('p');
num.className='num';
num.innerHTML=category[9].innerHTML;
cost.appendChild(num);
document.getElementById('fromxml').appendChild(cost);

let info_about_category = document.createElement('div');
info_about_category.className='info_about_category';
let info1 = document.createElement('p');
info1.className='text';
info1.innerHTML=category[11].innerHTML;
let info2
if (i != 5) {
    info2 = document.createElement('p');
    info2.className='text';
    info2.innerHTML=category[13].innerHTML;
}
if (i == 4) info2.innerHTML=category[15].innerHTML;
info_about_category.appendChild(info1);
if (i != 5) info_about_category.appendChild(info2);
document.getElementById('fromxml').appendChild(info_about_category);

let head2=document.createElement('h1');
head2.className='head2';
if (i != 5)head2.innerHTML=category[15].innerHTML;
if (i == 4) head2.innerHTML=category[13].innerHTML;
if (i == 5) head2.innerHTML=category[13].innerHTML;
document.getElementById('fromxml').appendChild(head2);

let info_about_category2=document.createElement('div');
info_about_category2.className='info_about_category';
let info3=document.createElement('p');
info3.className='text';
if (i != 5) info3.innerHTML=category[17].innerHTML;
if (i == 5) info3.innerHTML=category[15].innerHTML;
info_about_category2.appendChild(info3);
document.getElementById('fromxml').appendChild(info_about_category2);