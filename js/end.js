var fromQuizJS = localStorage.getItem("quizLocalStorage ");  
var caseNUM= Number(fromQuizJS);
console.log(caseNUM);
switch (caseNUM) {
    case 030011:
      document.getElementById('laptopRecommendation').innerHTML ="$296.0  HP Chromebook 11-inch Laptop ";
      break;
    case 030013:
      document.getElementById('laptopRecommendation').innerHTML ="$268.0 Acer Chromebook R13 CB5-312T- ";
      break;
    case 030015:
      document.getElementById('laptopRecommendation').innerHTML ="$282.0 2021 Newest Samsung Chromebook 4+, 15 ";
      break;
    case 030017:
      document.getElementById('laptopRecommendation').innerHTML ="$259.0  Flagship Model HP Pavilion 17.3 ";
      break;
  
  
    case 050011:
      document.getElementById('laptopRecommendation').innerHTML ="$340.0 Lenovo 11.6 IdeaPad Flex 3 2-in-1 Touchscreen ";
      break;
    case 050013:
      document.getElementById('laptopRecommendation').innerHTML ="$435.0 2020 Acer Chromebook R13 13.3 2-in-1 ";
      break;
    case 050015:
      document.getElementById('laptopRecommendation').innerHTML ="$499.0 Lenovo 15.6 IdeaPad Flex 5 Multi-Touch ";
      break;
    case 050017:
      document.getElementById('laptopRecommendation').innerHTML ="$490 ASUS VivoBook 17.3 FHD IPS LED Backlight  ";
      break;
  
  
    case 0100011:
      document.getElementById('laptopRecommendation').innerHTML ="$849.94 Lenovo - Yoga 710 2-in-1 80V6000PUS 11.6 Touch-Scree";
      break;
    case 0100013:
      document.getElementById('laptopRecommendation').innerHTML ="$783.89 ASUS ZenBook 13 Ultra-Slim Laptop 13.3 Full ";
      break;
    case 0100015:
      document.getElementById('laptopRecommendation').innerHTML ="$870.0 HP 15-cs3019nr Pavilion 15.6-Inch Laptop";
      break;
    case 0100017:
      document.getElementById('laptopRecommendation').innerHTML ="$960.0 Dell Inspiron 17 17.3 i3793-7275SLV-PUS 10th ";
      break;
  
      
    case 01000011:
      document.getElementById('laptopRecommendation').innerHTML ="$1,533.0 One Netbook One Mix 4 Yoga Platinum  ";
      break;
    case 01000013:
      document.getElementById('laptopRecommendation').innerHTML ="$1672.0 Dell XPS 13 (9310), 13.4- inch FHD+ Touch Laptop ";
      break;
    case 01000015:
      document.getElementById('laptopRecommendation').innerHTML ="$5,619.0 HIDevolution Gigabyte AERO 15 KB-7US1130SH,  ";
      break;
    case 01000017:
      document.getElementById('laptopRecommendation').innerHTML ="$9,114.0 EVOC High Performance Systems X1701F (X170SM-G) 17.3 ";
      break;
  
  
    default:
      document.getElementById('laptopRecommendation').innerHTML ="$An error happened please refresh the page";
      break;
  }