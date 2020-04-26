const config = {
  "ownerID": "683673139493732380",//Bu kısıma, kendi ID'niz. 
  "sahip": [""],
  "admins": [""],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "NzAzNjgyMjU3MTIxOTY4MjQx.XqSL5Q.Y_cE2gZeoCgJ-xedf2G0cZPdmBk",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "PvRGNHyE1ueTKDiLsd-BHdyEfg8FfBNQ",//Client secret.
    "callbackURL": `https://discordapp.com/api/oauth2/authorize?client_id=703682257121968241&permissions=8&scope=bot`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": ""//Sitenin, adresi.
  }
};

module.exports = config;
