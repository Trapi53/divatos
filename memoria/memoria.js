var tomb = new Array("1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8")
function shuffle() {
    var tart;
    var csere;
    var i;
    var j;

    
    for (csere=0; csere<tomb.length; csere++) {
        i = Math.floor(Math.random()*tomb.length);
        j = Math.floor(Math.random()*tomb.length);
        
        tart = tomb[i];
        tomb[i] = tomb[j];
        tomb[j]=tart;
       
     }
return tomb[i];
}
talalat=0
shuffle()
hasonlit=-1
valaszthat=true
function mutat(x)
    {
	if (!valaszthat)
		return false
   document.getElementById('h'+x).innerHTML=tomb[x]
if (hasonlit!=-1)
   {
   valaszthat=false
   if(tomb[x]==tomb[hasonlit])
      {
      valaszthat=true
      hasonlit=-1
      talalat++
      if (talalat==8)
         alert("Szép volt! Vége a játéknak.")
      }
    else
      {
      setTimeout("rejt("+x+")",2000)
      }
   }
  else
    {
    hasonlit=x
    }
 return false
}
function rejt(x)
{
 document.getElementById('h'+x).innerHTML='<a href="#" onclick="mutat('+x+')">*****</a></td>'
 document.getElementById('h'+hasonlit).innerHTML='<a href="#" onclick="mutat('+hasonlit+')">*****</a></td>'
 hasonlit=-1
 valaszthat=true

}

document.write('<table>');
for (i=0;i<16;i++)
	{
	if(i%4==0)
	   document.write("<tr>")
	document.write('<td align="center" width="50" id="h'+i+'">')
    document.write('<a href="#" onclick="mutat('+i+')">*****</a></td>')
	if((i+1)%4==0)
	   document.write("</tr>")
	}
document.write('</table>')
