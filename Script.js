var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


// //fillRect()
// ctx.fillStyle='red';
// ctx.fillRect(20,20,150,100);
// ctx.fillStyle='blue';
// ctx.fillRect(200,20,150,100);

// //strokeRect()
// ctx.linewidh=5;
// ctx.strokeStyle='green';
// ctx.strokeRect(20,150,150,100);

// Path
// ctx.strokeStyle='black';
// ctx.beginPath();
// ctx.moveTo(60,300);
// ctx.lineTo(150,300);
// ctx.lineTo(95,350);
// ctx.lineTo(60,300);
// ctx.stroke();

//
// ctx.fillStyle = '#8ED6FF';
ctx.beginPath();
ctx.arc(300, 100, 45, 0, Math.PI * 2);
ctx.fillStyle = '#59b300';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Start', 285, 100);
// ctx.closePath();
ctx.stroke();

//leftarc
ctx.beginPath();
ctx.arc(150,220,45,0,Math.PI * 2);
ctx.fillStyle = '#ff794d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('New', 135, 210);
ctx.fillText('Paygroup', 120, 230);
ctx.stroke();

//rightarc
ctx.beginPath();
ctx.arc(450,220,45,0,Math.PI * 2);
ctx.fillStyle = '#ff794d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('New', 435, 210);
ctx.fillText('Paycode', 420, 230);
ctx.stroke();

//bootomarc
ctx.beginPath();
ctx.arc(300, 1000, 45, 0, Math.PI * 2);
ctx.fillStyle = '#ff794d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Create', 279, 1000);
ctx.stroke(); 


//leftPath
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(259,120);
ctx.lineTo(150,160);
ctx.lineTo(150,170);
// ctx.lineTo(95,350);
// ctx.lineTo(60,300);
ctx.stroke();

//lefttriangle
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(143,168);
ctx.lineTo(150,175);
ctx.lineTo(157,168);
ctx.closePath();
ctx.fill();
ctx.stroke();

//leftline1
ctx.beginPath();
ctx.moveTo(150,265);
ctx.lineTo(150,290);
ctx.stroke();

//lefttriangle2
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,280);
ctx.lineTo(143,280);
ctx.lineTo(151,289);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR1
ctx.beginPath();
ctx.moveTo(80,290);
ctx.lineTo(220,290);
ctx.quadraticCurveTo(230,290,230,300);
ctx.lineTo(230,360);
ctx.quadraticCurveTo(230,370,220,370);
ctx.lineTo(80,370);
ctx.quadraticCurveTo(70,370,70,360);
ctx.lineTo(70,300);
ctx.quadraticCurveTo(70,290,80,290);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Paygroup and', 103, 320);
ctx.fillText('General Information', 90, 340);
ctx.stroke();

//leftline2
ctx.beginPath();
ctx.moveTo(150,371);
ctx.lineTo(150,398);
ctx.stroke();

//lefttriangle3
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,387);
ctx.lineTo(143,387);
ctx.lineTo(151,398);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR2
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(80,398);
ctx.lineTo(220,398);
ctx.quadraticCurveTo(230,398,230,410);
ctx.lineTo(230,468);
ctx.quadraticCurveTo(230,478,220,478);
ctx.lineTo(80,478);
ctx.quadraticCurveTo(70,478,70,468);
ctx.lineTo(70,408);
ctx.quadraticCurveTo(70,398,80,398);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Department, Federal', 88, 425);
ctx.fillText('Info and Bank', 105, 440);
ctx.fillText('Deposite', 120, 455);
ctx.stroke();

//leftline3
ctx.beginPath();
ctx.moveTo(150,479);
ctx.lineTo(150,506);
ctx.stroke();

//lefttriangle4
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,494);
ctx.lineTo(143,494);
ctx.lineTo(150,504);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR3
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(80,506);
ctx.lineTo(220,506);
ctx.quadraticCurveTo(230,506,230,517);
ctx.lineTo(230,576);
ctx.quadraticCurveTo(230,586,220,585);
ctx.lineTo(80,586);
ctx.quadraticCurveTo(70,586,70,576);
ctx.lineTo(70,516);
ctx.quadraticCurveTo(70,506,80,506);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Payroll Schedule', 88, 540);
ctx.fillText('and Frequency', 100, 555);
ctx.stroke();

//leftline4
ctx.beginPath();
ctx.moveTo(150,585);
ctx.lineTo(150,612);
ctx.stroke();

//lefttriangle5
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,601);
ctx.lineTo(143,601);
ctx.lineTo(150,611);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR4
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(80,614);
ctx.lineTo(220,614);
ctx.quadraticCurveTo(230,614,230,626);
ctx.lineTo(230,684);
ctx.quadraticCurveTo(230,694,220,694);
ctx.lineTo(80,694);
ctx.quadraticCurveTo(70,694,70,684);
ctx.lineTo(70,624);
ctx.quadraticCurveTo(70,614,80,614);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Gross Calculation,', 88, 640);
ctx.fillText('Accrual Plan and', 90, 655);
ctx.fillText('GTL', 135, 670);
ctx.stroke();

//leftline5
ctx.beginPath();
ctx.moveTo(150,693);
ctx.lineTo(150,720);
ctx.stroke();

//lefttriangle6
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,708);
ctx.lineTo(143,708);
ctx.lineTo(150,718);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR5
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(80,722);
ctx.lineTo(220,722);
ctx.quadraticCurveTo(230,722,230,734);
ctx.lineTo(230,792);
ctx.quadraticCurveTo(230,802,220,802);
ctx.lineTo(80,802);
ctx.quadraticCurveTo(70,802,70,792);
ctx.lineTo(70,732);
ctx.quadraticCurveTo(70,722,80,722);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Tax Configuration', 88, 765);
ctx.stroke();

//leftline6
ctx.beginPath();
ctx.moveTo(150,801);
ctx.lineTo(150,828);
ctx.stroke();

//lefttriangle7
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(157,816);
ctx.lineTo(143,816);
ctx.lineTo(151,827);
ctx.closePath();
ctx.fill();
ctx.stroke();

//lR6
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(80,830);
ctx.lineTo(220,830);
ctx.quadraticCurveTo(230,830,230,842);
ctx.lineTo(230,900);
ctx.quadraticCurveTo(230,912,220,912);
ctx.lineTo(80,910);
ctx.quadraticCurveTo(70,912,70,902);
ctx.lineTo(70,840);
ctx.quadraticCurveTo(70,830,80,830);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Miscellanous', 110, 875);

//leftline7
ctx.beginPath();
ctx.moveTo(150,910);
ctx.lineTo(150,926);
ctx.stroke();

//leftline8
ctx.beginPath();
ctx.moveTo(150,926);
ctx.lineTo(250,970);
ctx.stroke();

//triangle8
ctx.beginPath();
ctx.moveTo(252,963);
ctx.lineTo(245,978);
ctx.lineTo(260,975);
ctx.closePath();
ctx.fill();
ctx.stroke();




//RigthPath
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(340,120);
ctx.lineTo(450,160);
ctx.lineTo(450,170);
ctx.stroke();

//righttriangle
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,168);
ctx.lineTo(443,168);
ctx.lineTo(450,175);
ctx.closePath();
ctx.fill();
ctx.stroke();

//rightline
ctx.beginPath();
ctx.moveTo(450,265);
ctx.lineTo(450,290);
ctx.stroke();

//righttriangle2
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,280);
ctx.lineTo(443,280);
ctx.lineTo(451,289);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR1
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(373,290);
ctx.lineTo(523,290);
ctx.quadraticCurveTo(533,290,533,300);
ctx.lineTo(533,360);
ctx.quadraticCurveTo(533,370,523,370);
ctx.lineTo(373,370);
ctx.quadraticCurveTo(363,370,363,360);
ctx.lineTo(363,300);
ctx.quadraticCurveTo(363,290,373,290);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Basic details', 403, 330);
ctx.stroke();

//rightline2
ctx.beginPath();
ctx.moveTo(450,370);
ctx.lineTo(450,395);
ctx.stroke();

//righttriangle3
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,390);
ctx.lineTo(443,390);
ctx.lineTo(451,399);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR2
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(373,398);
ctx.lineTo(523,398);
ctx.quadraticCurveTo(533,398,533,408);
ctx.lineTo(533,468);
ctx.quadraticCurveTo(533,478,523,478);
ctx.lineTo(373,478);
ctx.quadraticCurveTo(363,478,363,468);
ctx.lineTo(363,408);
ctx.quadraticCurveTo(363,398,373,398);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Add accumulators', 395, 440);


//rightline3
ctx.beginPath();
ctx.moveTo(450,477);
ctx.lineTo(450,502);
ctx.stroke();

//righttriangle4
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,497);
ctx.lineTo(443,497);
ctx.lineTo(451,506);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR3
ctx.strokeStyle='black';
ctx.beginPath();  
ctx.moveTo(373,506);
ctx.lineTo(523,506);
ctx.quadraticCurveTo(533,506,533,518);
ctx.lineTo(533,576);
ctx.quadraticCurveTo(533,586,523,586);
ctx.lineTo(373,586);
ctx.quadraticCurveTo(363,586,363,576);
ctx.lineTo(363,516);
ctx.quadraticCurveTo(363,506,373,506);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font = 'Bold 10pt Arial';
ctx.fillText('Add Formulas', 400, 548);

//rightline4
ctx.beginPath();
ctx.moveTo(450,585);
ctx.lineTo(450,610);
ctx.stroke();

//righttriangle5
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,604);
ctx.lineTo(443,604);
ctx.lineTo(451,613);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR4
ctx.strokeStyle='black';
ctx.beginPath();  
ctx.moveTo(373,614);
ctx.lineTo(523,614);
ctx.quadraticCurveTo(533,614,533,626);
ctx.lineTo(533,684);
ctx.quadraticCurveTo(533,694,523,694);
ctx.lineTo(373,694);
ctx.quadraticCurveTo(363,694,363,684);
ctx.lineTo(363,624);
ctx.quadraticCurveTo(363,614,373,614);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font='bold 10pt arial';
ctx.fillText('Add menos',410,655);

//rightline5
ctx.beginPath();
ctx.moveTo(450,693);
ctx.lineTo(450,718);
ctx.stroke();

//righttriangle6
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,711);
ctx.lineTo(443,711);
ctx.lineTo(451,720);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR5
ctx.strokeStyle='black';
ctx.beginPath();  
ctx.moveTo(373,722);
ctx.lineTo(523,722);
ctx.quadraticCurveTo(533,722,533,734);
ctx.lineTo(533,792);
ctx.quadraticCurveTo(533,802,523,802);
ctx.lineTo(373,802);
ctx.quadraticCurveTo(363,802,363,792);
ctx.lineTo(363,732);
ctx.quadraticCurveTo(363,722,373,722);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font='bold 10pt arial';
ctx.fillText('Add cafe plans',405,765);

//rightline6
ctx.beginPath();
ctx.moveTo(450,801);
ctx.lineTo(450,826);
ctx.stroke();

//righttriangle7
ctx.strokeStyle='black';
ctx.beginPath();
ctx.moveTo(457,818);
ctx.lineTo(443,818);
ctx.lineTo(451,827);
ctx.closePath();
ctx.fill();
ctx.stroke();

//RR6
ctx.strokeStyle='black';
ctx.beginPath();  
ctx.moveTo(373,830);
ctx.lineTo(523,830);
ctx.quadraticCurveTo(533,830,533,842);
ctx.lineTo(533,900);
ctx.quadraticCurveTo(533,910,523,910);
ctx.lineTo(373,910);
ctx.quadraticCurveTo(363,910,363,900);
ctx.lineTo(363,840);
ctx.quadraticCurveTo(363,830,373,830);
ctx.fillStyle = '#ffdb4d';
ctx.fill();
ctx.fillStyle='black';
ctx.stroke();
ctx.font='bold 10pt arial';
ctx.fillText('Add tax grid options',385,875);

////rightline6
ctx.beginPath();
ctx.moveTo(450,910);
ctx.lineTo(450,926);
ctx.stroke();

//rightline8
ctx.beginPath();
ctx.moveTo(450,926);
ctx.lineTo(350,970);
ctx.stroke();

//triangle8
ctx.beginPath();
ctx.moveTo(350,963);
ctx.lineTo(355,976);
ctx.lineTo(340,975);
ctx.closePath();
ctx.fill();
ctx.stroke();