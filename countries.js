// array with each country ID
var arrNumbers = [];
for (let i = 1; i < 51; i++) {
  arrNumbers.push( i );
};
// array with country information
var countries = [];
class Country {
  constructor(name, src, dif) {
    this.name = name;
    this.source = src;
    this.difficulty = dif;
  };
} 
countries[0] = new Country("BLANK", "https://i.ibb.co/qWXvqsL/00.png", 0);
countries[1] = new Country("AFGHANISTAN", "https://i.ibb.co/hDVG2ff/01.png", 2);
countries[2] = new Country("ALBANIA", "https://i.ibb.co/Pg03kWn/02.png", 2);
countries[3] = new Country("ALGERIA", "https://i.ibb.co/cJv5SYh/03.png", 2);
countries[4] = new Country("ANDORRA"," https://i.ibb.co/JphyjDm/04.png", 3);
countries[5] = new Country("ANGOLA","https://i.ibb.co/wykQkFw/05.png", 2);
countries[6] = new Country("ANTIGUA AND BARBUDA", "https://i.ibb.co/0Gznrdd/06.png", 3);
countries[7] = new Country("ARGENTINA", "https://i.ibb.co/bzqgn6Z/07.png", 1);
countries[8] = new Country("ARMENIA", "https://i.ibb.co/G2t6Sf3/08.png", 2);
countries[9] = new Country("AUSTRALIA", "https://i.ibb.co/TwWSL2H/09.png", 1);
countries[10] = new Country("AUSTRIA", "https://i.ibb.co/pQWzyQQ/10.png", 1);
countries[11] = new Country("AZERBAIJAN", "https://i.ibb.co/09BkLW7/11.png", 2);
countries[12] = new Country("BAHAMAS","https://i.ibb.co/ggJJhyF/12.png", 3);
countries[13] = new Country("BAHRAIN","https://i.ibb.co/vXw3NSK/13.png", 2);
countries[14] = new Country("BANGLADESH", "https://i.ibb.co/hyJFb1t/14.png" ,2);
countries[15] = new Country("BARBADOS", "https://i.ibb.co/dtF3Whp/15.png",3);
countries[16] = new Country("BELARUS", "https://i.ibb.co/wBPWrC8/16.png", 2);
countries[17] = new Country("BELGIUM", "https://i.ibb.co/2PTnXQR/17.png", 1);
countries[18] = new Country("BELIZE", "https://i.ibb.co/hLNBRyx/18.png", 3);
countries[19] = new Country("BENIN", "https://i.ibb.co/NN24szs/19.png", 3);
countries[20] = new Country("BHUTAN", "https://i.ibb.co/JkphY9k/20.png", 3);
countries[21] = new Country("BOLIVIA", "https://i.ibb.co/gFXX8HF/21.png", 2);
countries[22] = new Country("BOSNIA AND HERZEGOVINA", "https://i.ibb.co/tXg7KRN/22.png", 1);
countries[23] = new Country("BOTSWANA", "https://i.ibb.co/xC7qtRQ/23.png", 2);
countries[24] = new Country("BRAZIL", "https://i.ibb.co/wppqNMk/24.png", 1);
countries[25] = new Country("BRUNEI", "https://i.ibb.co/T1KbFzj/25.png", 3);
countries[26] = new Country("BULGARIA", "https://i.ibb.co/bPgrxqL/26.png", 2)
countries[27] = new Country("BURKINA FASO", "https://i.ibb.co/52c3ybC/27.png", 3);
countries[28] = new Country("BURUNDI", "https://i.ibb.co/Xz5DKck/28.png", 3);
countries[29] = new Country("CAMBODIA", "https://i.ibb.co/p06gZw8/29.png", 3);
countries[30] = new Country("CAMEROON", "https://i.ibb.co/ZLxKYGH/30.png", 3);
countries[31] = new Country("CANADA", "https://i.ibb.co/ysKpK7d/31.png",1);
countries[32] = new Country("CAPE VERDE", "https://i.ibb.co/7SqnXHR/32.png",3);
countries[33] = new Country("CENTRAL AFRICAN REPUBLIC", "https://i.ibb.co/xDS1n4M/33.png",3);
countries[34] = new Country("CHAD", "https://i.ibb.co/TTRTphk/34.png", 3);
countries[35] = new Country("CHILE", "https://i.ibb.co/R7HrGnd/35.png", 2);
countries[36] = new Country("CHINA", "https://i.ibb.co/prq2cTW/36.png", 1);
countries[37] = new Country("COLOMBIA", "https://i.ibb.co/Kj8kCvB/37.png",2);
countries[38] = new Country("COMOROS", "https://i.ibb.co/Jpyfb38/38.png",3);
countries[39] = new Country("DEMOCRATIC REPUBLIC OF THE CONGO", "https://i.ibb.co/GQWTN2d/39.png",3);
countries[40] = new Country("REPUBLIC OF THE CONGO", "https://i.ibb.co/NynWzT7/40.png",3);
countries[41] = new Country("COSTA RICA", "https://i.ibb.co/Fk1vBzX/41.png",3);
countries[42] = new Country("CROATIA", "https://i.ibb.co/9bSMhFT/42.png",2);
countries[43] = new Country("CUBA", "https://i.ibb.co/bgbxK5D/43.png",2);
countries[44] = new Country("CYPRUS", "https://i.ibb.co/8PgngzX/44.png",2);
countries[45] = new Country("CZECH REPUBLIC", "https://i.ibb.co/LNvRySh/45.png", 2);
countries[46] = new Country("DENMARK", "https://i.ibb.co/tPmmJDS/46.png", 1);
countries[47] = new Country("DJIBOUTI", "https://i.ibb.co/Fm7Snbx/47.png", 3);
countries[48] = new Country("DOMINICA", "https://i.ibb.co/HDFFw0b/48.png",3);
countries[49] = new Country("DOMINICAN REPUBLIC", "https://i.ibb.co/xLWGmcf/49.png",3);
countries[50] = new Country("EAST TIMOR", "https://i.ibb.co/BG21xfv/50.png",3);
