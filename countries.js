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
countries[0] = new Country("BLANK", "flags/00.png", 0);
countries[1] = new Country("AFGHANISTAN", "flags/01.png", 2);
countries[2] = new Country("ALBANIA", "flags/02.png", 2);
countries[3] = new Country("ALGERIA", "flags/03.png", 2);
countries[4] = new Country("ANDORRA","flags/04.png", 3);
countries[5] = new Country("ANGOLA","flags/05.png", 2);
countries[6] = new Country("ANTIGUA AND BARBUDA", "flags/06.png", 3);
countries[7] = new Country("ARGENTINA", "flags/07.png", 1);
countries[8] = new Country("ARMENIA", "flags/08.png", 2);
countries[9] = new Country("AUSTRALIA", "flags/09.png", 1);
countries[10] = new Country("AUSTRIA", "flags/10.png", 1);
countries[11] = new Country("AZERBAIJAN", "flags/11.png", 2);
countries[12] = new Country("BAHAMAS","flags/12.png", 3);
countries[13] = new Country("BAHRAIN","flags/13.png", 2);
countries[14] = new Country("BANGLADESH", "flags/14.png" ,2);
countries[15] = new Country("BARBADOS", "flags/15.png",3);
countries[16] = new Country("BELARUS", "flags/16.png", 2);
countries[17] = new Country("BELGIUM", "flags/17.png", 1);
countries[18] = new Country("BELIZE", "flags/18.png", 3);
countries[19] = new Country("BENIN", "flags/19.png", 3);
countries[20] = new Country("BHUTAN", "flags/20.png", 3);
countries[21] = new Country("BOLIVIA", "flags/21.png", 2);
countries[22] = new Country("BOSNIA AND HERZEGOVINA", "flags/22.png", 1);
countries[23] = new Country("BOTSWANA", "flags/23.png", 2);
countries[24] = new Country("BRAZIL", "flags/24.png", 1);
countries[25] = new Country("BRUNEI", "flags/25.png", 3);
countries[26] = new Country("BULGARIA", "flags/26.png", 2)
countries[27] = new Country("BURKINA FASO", "flags/27.png", 3);
countries[28] = new Country("BURUNDI", "flags/28.png", 3);
countries[29] = new Country("CAMBODIA", "flags/29.png", 3);
countries[30] = new Country("CAMEROON", "flags/30.png", 3);
countries[31] = new Country("CANADA", "flags/31.png",1);
countries[32] = new Country("CAPE VERDE", "flags/32.png",3);
countries[33] = new Country("CENTRAL AFRICAN REPUBLIC", "flags/33.png",3);
countries[34] = new Country("CHAD", "flags/34.png", 3);
countries[35] = new Country("CHILE", "flags/35.png", 2);
countries[36] = new Country("CHINA", "flags/36.png", 1);
countries[37] = new Country("COLOMBIA", "flags/37.png",2);
countries[38] = new Country("COMOROS", "flags/38.png",3);
countries[39] = new Country("DEMOCRATIC REPUBLIC OF THE CONGO", "flags/39.png",3);
countries[40] = new Country("REPUBLIC OF THE CONGO", "flags/40.png",3);
countries[41] = new Country("COSTA RICA", "flags/41.png",3);
countries[42] = new Country("CROATIA", "flags/42.png",2);
countries[43] = new Country("CUBA", "flags/43.png",2);
countries[44] = new Country("CYPRUS", "flags/44.png",2);
countries[45] = new Country("CZECH REPUBLIC", "flags/45.png", 2);
countries[46] = new Country("DENMARK", "flags/46.png", 1);
countries[47] = new Country("DJIBOUTI", "flags/47.png", 3);
countries[48] = new Country("DOMINICA", "flags/48.png",3);
countries[49] = new Country("DOMINICAN REPUBLIC", "flags/49.png",3);
countries[50] = new Country("EAST TIMOR", "flags/50.png",3);
