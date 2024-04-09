const {GatewayIntentBits,Client,Events} = require('discord.js');  // Discord icin gerekli paketler iceri aktarildi.

const client = new Client({intents:[Object.values(GatewayIntentBits)]});  // Bot internet kullanimina acildi.

const {token}=require('./config.json'); // config.json ice aktarildi.

client.on(Events.ClientReady,()=>{
    console.log('Bota giris yabildi.'+' '+ client.user.username +' '+ client.user.tag);       // Bota giris yabildigi bilgisini veren kod,botun ismi ve botun etiketi alindi.
})

client.on(Events.MessageCreate,(message)=>{
    if(message.author.bot) return;    // Bot bir kez cevap vermesini sagliyor
    //message.channel.send('RTE');      //Kullanıcı bir mesaj gonderirse cevap olarak yazar.

    // const channelName = message.channel.name;
    //message.channel.send(channelName);          // Kullanici mesaj yazdiginda kanal ismini yaziyor

    //Etiket yapmak icin asagidaki kod kullanilir.
    //const member= message.author.toString();
    //message.channel.send(member);

    //if(message.content=='Araba'){
       // message.reply('BMW');        // Kullanicidan Araba yazilinca bot BMW ciktisi verir.
    //}
    message.reply('Javascript')  //Mesaj yazildiginda otomatik cevap doner.
})
client.login(token);


