class Queue
{
   constructor(){
    this.items=[];
   }
    enQueue(element)
    {  
        this.items.push(element);
    }
    deQueue()
    {
        if(this.isEmpty())
        {
            return "Underflow";
        }
        return this.items.shift();
    }
    isEmpty()
    {
        return this.items.length==0;
    }
    printQueue()
    {
        var str=" ";
        for(var i=0;i<this.items.length;i++)
        {
            str+= this.items[i] + " ";
        }
        return str;
    }
    front()
    {
        if(this.isEmpty())
            return "no elements in queue";
        return this.items[0];
    }
}
// function to generate binary numbers
function generatePrintBinary(n)
{
	// Create an empty queue of strings
	var q = new Queue();
		
	// Enqueue the first binary number
	q.enQueue("1");
		
	// This loops is like BFS of a tree with 1 as root
	// 0 as left child and 1 as right child and so on
	while(n-- > 0)
	{
		// print the front of queue
		var s1 = q.front();
		q.deQueue();
		console.log(s1);
			
		// Store s1 before changing it
		var s2 = s1;
			
		// Append "0" to s1 and enqueue it
		q.enQueue(s1 + "0");
			
		// Append "1" to s2 and enqueue it. Note that s2 contains
		// the previous front
		q.enQueue(s2 + "1");
	}
}

// calling the above function	
// prints [1 10 11 100 101]
generatePrintBinary(9);
