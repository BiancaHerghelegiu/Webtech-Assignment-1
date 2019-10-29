function distance(first, second){
	if((Array.isArray(first)!=true) || (Array.isArray(second)!=true))
	{
		throw new TypeError("InvalidType")
		
	}
	if(first.length==null ||second.length==null)
	{
		return 0;
	}
	let unic=new Set(first)
	first=Array.from(unic)
	
	let unic2=new Set(second)
	second=Array.from(unic2)
	
	var k=0;
for( var i=0; i<first.length;i++)
for( var j=0;j<second.length;j++) {
	if(first[i] != second[j]) 
	  {
		  k++;
	  }
	  if( first[i] !== second[j] && first[i]== second[j])
	  k+=2; 
}

return k;
	
	
}


module.exports.distance = distance