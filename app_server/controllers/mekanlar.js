const anaSayfa=function(req,res){
    res.render('anasayfa',{
        "baslik":"Anasayfa",
        "sayfaBaslik": {
            "siteAd":"MekanBul",
            "slogan":"Civardaki Mekanları Keşfet!"    
        },
        "mekanlar":[
            {
                "ad":"Barida Hotels Roof Restaurant",
                "puan":"4",
                "adres":"Isparta Merkez Bahçelievler",
                "imkanlar":["Uluslarlararası","Akdeniz","Bar"],
                "mesafe":"6km"
            }
            ,
            {
                "ad":"Hanedan Restaurant",
                "puan":"5",
                "adres":"Isparta Fatih Mahallesi",
                "imkanlar":["Kahvaltı","Türk Mutfağı"],
                "mesafe":"5km"
            }
        ]
    }
    );
}

const mekanBilgisi=function(req,res){
    res.render('mekanBilgisi',
     { "baslik":'Mekan Bilgisi',
        "mekanBaslik":"Barida Hotels Roof Restaurant",
        "mekanDetay":{
            "ad":"Barida Hotels Roof Restaurant",
            "adres":"Isparta Merkez Bahçelievler",
            "puan":"4",
            "saatler":[
                {
                    "gunler":"Pazartesi-Cuma",
                    "acilis": "9:00",
                    "kapanis":"00:00",
                    "kapali":false
                },
                {
                    "gunler":"Cumartesi-Pazar",
                    "acilis": "10:00",
                    "kapanis":"22:00",
                    "kapali":false
                }
            ],
            "imkanlar":["Kahvaltı","Türk Mutfağı"],
            "koordinatlar":{
                "enlem":"37.78059",
                "boylam":"30.54667"
            },
            "yorumlar":[
                {
                    "yorumYapan":"Nuray Araç",
                    "puan":"5",
                    "tarih":"14 Ekim 2022",
                    "yorumMetni":"Kahveler güzel."
                }
            ]
        }
    
    
    });
}

const yorumEkle=function(req,res){
    res.render('yorumEkle', { title: 'Yorum Sayfası' });
}
module.exports ={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
