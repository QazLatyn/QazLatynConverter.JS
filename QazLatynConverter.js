(function (e) {
    var ev = e ? e : window.event,
        _QazLatynConverter = function () {};

    _QazLatynConverter.prototype = {
        constructor: _QazLatynConverter,
        version: 'V1.0.0.0',
        Sound: {
            Vowel: 1,
            Consonant: 2, //Дауыссыз дыбыс
            Unknown: 3 //Белгісіз
        },
        cyrlChars: ['А', 'Ә', 'Ə', 'Б', 'В', 'Г', 'Ғ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'Ң', 'О', 'Ө', 'Ɵ', 'П', 'Р', 'С', 'Т', 'У', 'Ұ', 'Ү', 'Ф', 'Х', 'Һ', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'І', 'Ь', 'Э', 'Ю', 'Я', '-'],
        vowelChars: ['А', 'Ә', 'Ə', 'Е', 'И', 'О', 'Ө', 'Ɵ', 'Ұ', 'Ү', 'У', 'Ы', 'І', 'Э'],
        wordsPackDic: {
           'хартия':'hartıa','тиіссіз':'tıissiz','тұқию':'tuqıý','дебют':'debút','винчестер':'vınchester','ұялшақтық':'uıalshaqtyq','бандероль':'banderól','элюент':'elúent','борпию':'borpıý','дифтонг':'dıftoń','гомогамиялық':'gomogamıalyq','тыртию':'tyrtıý','тальк':'tálk','шықию':'shyqıý','бағбию':'baǵbıý','стратегиялық':'strategıalyq','тәбия':'tábıa','омофония':'omofonıa','ұят-намыс':'uıat-namys','алюминийлеу':'alúmınıleý','позиция':'pozısıa','кульминациялық':'kúlmınasıalyq','жаялық':'jaıalyq','қалқаю':'qalqaıý','антикоммунизм':'antıkomýnızm','ауыртаяқ':'aýyrtaıaq','чартист':'chartıs','глютин':'glútın','ренессанстық':'renesanstyq','бақшию':'baqshıý','князь':'knáz','үю':'úıý','деформациялау':'deformasıalaý','уробактериялар':'ýrobakterıalar','жаялы':'jaıaly','хирургиялық':'hırýrgıalyq','зиянкестік':'zıankestik','металлургиялық':'metalýrgıalyq','аппаратшы':'aparatshy','қоянбұршақ':'qoıanburshaq','партияшылдық':'partıashyldyq','миолог':'mıolog','даярлау':'daıarlaý','кірпияздану':'kirpıazdaný','бояң':'boıań','әсіреинтернационалист':'ásіreınternasıonalıs','демобилизациялау':'demobılızasıalaý','шолтию':'sholtıý','констатация':'konstatasıa','зиялы':'zıaly','жаялықтай':'jaıalyqtaı','аянсақ':'aıansaq','тетания':'tetanıa','вариациялау':'varıasıalaý','естияр':'estıar','нейропсихология':'neıropsıhologıa','авиациялық':'avıasıalyq','фотография':'fotografıa','коллоквиум':'kolokvıým','акселерация':'akselerasıa','геоморфолог':'geomorfolog','формациялық':'formasıalyq','жылмию':'jylmıý','ықтиярсыз':'yqtıarsyz','сербию':'serbıý','романист':'romanıs','экспроприация':'eksproprıasıa','ұяңдану':'uıańdaný','вольт-ампер':'vólt-amper','вафли':'vaflı','гистологиялық':'gıstologıalyq','аяншақтау':'aıanshaqtaý','вегетативті':'vegetatıvti','амбулаториялық':'ambýlatorıalyq','дебютант':'debútant','тоятшыл':'toıatshyl','демографиялық':'demografıalyq','қаупию':'qaýpıý','менеджер':'menedjer','элеутерококк':'eleýterokok','қоқыраю':'qoqyraıý','сияқтандыру':'sıaqtandyrý','шлюздеу':'shlúzdeý','сопаю':'sopaıý','кіртию':'kirtıý','бегония':'begonıa','вольт':'vólt','сенсуалист':'sensýalıs','парфюмерлік':'parfúmerlik','натурфилософия':'natýrfılosofıa','гроссмейстер':'grosmeıster','конспирация':'konspırasıa','параллелизм':'paralelızm','аллашылдық':'allashyldyq','артикуляциялық':'artıkýlásıalyq','қоянтамақ':'qoıantamaq','қомпию':'qompıý','тояттық':'toıattyq','актиния':'aktınıa','батарея':'batareıa','байшыл-буржуазияшыл':'baıshyl-býrjýazıashyl','классикалық':'klasıkalyq','ортаю':'ortaıý','шлюз':'shlúz','биобиблиографиялық':'bıobıblıografıalyq','даяр':'daıar','гомеопатия':'gomeopatıa','компресс':'kompres','парабеллум':'parabelým','қолды-аяққа':'qoldy-aıaqqa','капеллалық':'kapelalyq','түксиюлі':'túksıýli','ватт-метр':'vatt-metr','минераграфия':'mıneragrafıa','тиянақтату':'tıanaqtatý','әлеуметтік-саяси':'áleýmettik-saıası','фолликул':'folıkýl','туыссыздық':'týyssyzdyq','иллюминация':'ılúmınasıa','оппонент':'oponent','автономия':'avtonomıa','нейрофизиология':'neırofızıologıa','аяқша':'aıaqsha','долларлы':'dollarly','аяғансу':'aıaǵansý','радиохимия':'radıohımıa','бордюр':'bordúr','экономия':'ekonomıa','ихтиолог':'ıhtıolog','абылхаят':'abylhaıat','стерлинг':'sterlıń','навигациялық':'navıgasıalyq','саю':'saıý','синхрониялық':'sınhronıalyq','модификациялық':'modıfıkasıalyq','топология':'topologıa','хронобиология':'hronobıologıa','морфонология':'morfonologıa','аксессуар':'aksesýar','таяз':'taıaz','террористік':'terorıstik','омонимия':'omonımıa','кардиограмма':'kardıogram','лемма':'lema','қиягездік':'qıagezdik','туыссырау':'týyssyraý','килограмм-күш':'kılogram-kúsh','галлица':'galısa','болыссымақ':'bolyssymaq','велодром':'velodrom','перпендикулярлық':'perpendıkýlárlik','мүдделілік':'múddelilik','альбинизм':'álbınızm','делию':'delıý','палеогляциология':'paleoglásıologıa','эпизоотология':'epızootologıa','жалпаю':'jalpaıý','демагогия':'demagogıa','нейропсихиатрия':'neıropsıhıatrıa','оппозиция':'opozısıa','аянкестік':'aıankestik','логография':'logografıa','плазмолемма':'plazmolem','сияқтану':'sıaqtaný','сарғаю':'sarǵaıý','магнитологиялық':'magnıtologıalyq','антипартиялық':'antıpartıalyq','сабаяқ':'sabaıaq','вице-адмирал':'vıse-admıral','панисламист':'panıslamıs','қаңқаю':'qańqaıý','субординация':'sýbordınasıa','диалектологиялық':'dıalektologıalyq','кальцит':'kálsıt','палеография':'paleografıa','милливатт':'mıllıvat','операция':'operasıa','килокалория':'kılokalorıa','субъект':'sýbekt','зиялылық':'zıalylyq','модуляциялау':'modýlásıalaý','гидрография':'gıdrografıa','көппартиялық':'kóppartıalyq','дактилология':'daktılologıa','бояухана':'boıaýhana','тарпию':'tarpıý','итмия':'ıtmıa','форфейтинг':'forfeıtıń','саңыраю':'sańyraıý','қиялес':'qıales','макросемья':'makrosemıa','күжірею':'kújireıý','трагедиялық':'tragedıalyq','поэзия':'poezıa','эмиссия':'emısıa','айыртұяқты':'aıyrtuıaqty','орфограммалау':'orfogramdaý','рефлексология':'refleksologıa','массагет':'masaget','иммигрант':'ımıgrant','іркіліссіз':'irkilissiz','бүржию':'búrjıý','пая':'paıa','дүңкию':'dúńkıý','нейрохирургия':'neırohırýrgıa','элегиялық':'elegıalyq','жымыраю':'jymyraıý','құдды':'quddy','инерциясыз':'ınersıasyz','түксию':'túksıý','геохронологиялық':'geohronologıalyq','радиобиология':'radıobıologıa','трапеция':'trapesıa','артериялық':'arterıalyq','баянды':'baıandy','бақа-шаян':'baqa-shaıan','пұштыраю':'pushtyraıý','антиципация':'antısıpasıa','қаратаяқ':'qarataıaq','электронография':'elektronografıa','журналист':'jýrnalıs','аяусыз':'aıaýsyz','бая-шая':'baıa-shaıa','диссонанс':'dısonans','археографиялық':'arheografıalyq','лексика-грамматикалық':'leksıka-gramatıkalyq','угро-финн':'ýgro-fın','иықаяқты':'ıyqaıaqty','аязшал':'aıazshal','идеялық':'ıdeıalyq','дерматолог':'dermatolog','ноология':'noologıa','құярлық':'quıarlyq','лицензиялану':'lısenzıalaný','буып-түю':'býyp-túıý','алюминийлі':'alúmınıli','сыптию':'syptıý','демагогиялық':'demagogıalyq','қиқию':'qıqıý','телеграфия':'telegrafıa','амбулатория':'ambýlatorıa','шүңірею':'shúńireıý','антологиялық':'antologıalyq','альтерация':'álterasıa','үшаяқты':'úshaıaqty','ұяңдау':'uıańdaý','алдияр':'aldıar','эпиграмма':'epıgram','аян':'aıan','абсолютшілдік':'absolútshildik','әсіреаянпаздық':'ásireaıanpazdyq','аяқжақсы':'aıaqjaqsy','вискоза':'vıskoza','мүдде':'múdde','зияратхана':'zıarathana','аяқүсті':'aıaqústi','сәйкессіздік':'sáıkessizdik','сүю':'súıý','аппарель':'aparel','минералогия':'mıneralogıa','астролог':'astrolog','баяусыну':'baıaýsyný','армян':'armán','цессионарий':'sesıonarı','лосьон':'losón','құпиясыздау':'qupıasyzdaý','биомасса':'bıomassa','экономгеография':'ekonomgeografıa','параллелепипед':'paralelepıped','бөріаяқ':'bóriaıaq','қаяз':'qaıaz','барограмма':'barogram','діңкию':'dińkıý','мономания':'monomanıa','аржию':'arjıý','тыржию':'tyrjıý','тарбию':'tarbıý','география':'geografıa','байланыссыздық':'baılanyssyzdyq','біррангілі':'birrangili','макромаркетинг':'makromarketıń','қияр':'qıar','идеология':'ıdeologıa','аяқшы':'aıaqshy','бактериемия':'bakterıemıa','сараджа':'saradja','тұқым-тұяқ':'tuqym-tuıaq','кейіссіз':'keıissiz','гидрогеохимия':'gıdrogeohımıa','литофагия':'lıtofagıa','топонимия':'toponımıa','абсолют':'absolút','дүмпию':'dúmpıý','шылқию':'shylqıý','ядрошықты':'ıadroshyqty','мещандық':'meshandyq','жарияланым':'jarıalanym','туыссыз':'týyssyz','термохимия':'termohımıa','эсхатология':'esqatologıa','астрология':'astrologıa','монтию':'montıý','кинобюллетень':'kınobúleten','баяншы':'baıanshy','пиязшөп':'pıazshóp','құя':'quıa','гравиметрия':'gravımetrıa','лицензиялық':'lısenzıalyq','минералог':'mıneralog','естиярлық':'estıarlyq','ербию':'erbıý','морфолог':'morfolog','валорлық':'valorlyq','металлургия':'metalýrgıa','дубляж':'dýbláj','қияли':'qıalı','рейтинг':'reıtıń','қылтию':'qyltıý','палеогидрогеология':'paleogıdrogeologıa','ащылы':'ashshyly','патофизиология':'patofızıologıa','биология':'bıologıa','разряд':'razrád','коммунист':'komýnıs','қазұялы':'qazuıaly','лексиколог':'leksıkolog','фотографиялық':'fotografıalyq','күрбию':'kúrbıý','гидрогеохимиялық':'gıdrogeohımıalyq','баю':'baıý','кюрий':'kúrı','цессия':'sesıa','геотехнология':'geotehnologıa','палеопсихология':'paleopsıhologıa','аяну':'aıaný','бильярд':'bılárd','гонококк':'gonokok','унция':'ýnsıa','миллион':'mıllıon','гипонимия':'gıponımıa','энциклопедияшы':'ensıklopedıashy','вариометр':'varıometr','ақтұяқ':'aqtuıaq','габбро-диабаз':'gabro-dıabaz','тонна-километр':'tonna-kılometr','реформация':'reformasıa','тыссыз':'tyssyz','қарынаяқ':'qarynaıaq','буржуазияшыл':'býrjýazıashyl','биотелеметрия':'bıotelemetrıa','тызғаяқтық':'tyzǵaıaqtyq','монофилия':'monofılıa','монополиялау':'monopolıalaý','шатқаяқтату':'shatqaıaqtatý','тызғаяқтату':'tyzǵaıaqtatý','тостию':'tostıý','дәлдию':'dáldıý','тымсыраю':'tymsyraıý','қазан-аяқ':'qazan-aıaq','иллюминатор':'ılúmınator','антенна':'antena','демодулятор':'demodýlátor','вирустасығыш':'vırýstasyǵysh','дию':'dıý','автономиялы':'avtonomıaly','палеозоология':'paleozoologıa','телеметрия':'telemetrıa','гидробиологиялық':'gıdrobıologıalyq','тымпию':'tympıý','ампелография':'ampelografıa','ілбию':'ilbıý','археография':'arheografıa','фитопатология':'fıtopatologıa','теолог':'teolog','жариялатқызу':'jarıalatqyzý','текстология':'tekstologıa','иерархия':'ıerarhıa','филокартист':'fılokartıs','шаян':'shaıan','топография':'topografıa','зияткер':'zıatker','эпистолярлық':'epıstolárlyq','монополист':'monopolıs','антициопатия':'antısıopatıa','шаяндәуіт':'shaıandáýit','террикон':'terıkon','атантұяқ':'atantuıaq','жаяулық':'jaıaýlyq','көбею':'kóbeıý','қоянжел':'qoıanjel','елессіз':'elessiz','аяқбаулы':'aıaqbaýly','картограмма':'kartogram','моногамиялық':'monogamıalyq','орфоэпиялық':'orfoepıalyq','айтыссыз':'aıtyssyz','балласт':'balas','ию-қию':'ıý-qıý','сәйкессіз':'sáıkessiz','ақмия':'aqmıa','ашаддылық':'ashaddylyq','агрохимиялық':'agrohımıalyq','сөлбірею':'sólbireıý','семитолог':'semıtolog','сою':'soıý','тұқшию':'tuqshıý','жию':'jıý','ешкімия':'eshkimıa','модуляция':'modýlásıa','шалжию':'shaljıý','вето':'veto','ян':'ıan','бульдозер':'búldozer','радиологиялық':'radıologıalyq','ватт-секунд':'vatt-sekýnd','биллион':'bıllıon','даярлаулы':'daıarlaýly','қаудию':'qaýdıý','рецензиялау':'resenzıalaý','миллиметрлік':'mıllımetrlik','парафония':'parafonıa','табыссыз':'tabyssyz','шалқаю':'shalqaıý','саятшылық':'saıatshylyq','хлорофилл':'hlorofıl','гравитациялық':'gravıtasıalyq','трюфель':'trúfel','ортопсихиатрия':'ortopsıhıatrıa','рубаят':'rýbaıat','дәсмия':'dásmıa','тіссауыт':'tissaýyt','алюминий':'alúmını','идеялы':'ıdeıaly','натуралист':'natýralıs','химиялық':'hımıalyq','армресслинг':'armreslıń','афония':'afonıa','саяздау':'saıazdaý','мотороллер':'motoroler','кинематография':'kınematografıa','эксплозия':'eksplozıa','аллергиялық':'alergıalyq','филологиялық':'fılologıalyq','метеоролог':'meteorolog','продюсер':'prodúser','вахта':'vahta','сомпию':'sompıý','горилла':'gorıla','саяткер':'saıatker','объектив':'obektıv','садист':'sadıs','оястау':'oıastaý','алтаяқты':'altaıaqty','экзарация':'ekzarasıa','амфибия':'amfıbıa','миллиондық':'mıllıondyq','фильм':'fılm','меню':'menú','ықылассыздық':'yqylassyzdyq','аккредиттеу':'akredıtteý','антикоммунистік':'antıkomýnıstik','конденсациялық':'kondensasıalyq','тіссіз':'tissiz','бурят':'býrát','биолог':'bıolog','саяттау':'saıattaý','галерея':'galereıa','бактерияжегі':'bakterıajegi','монографиялық':'monografıalyq','туннель':'týnel','отоскопия':'otoskopıa','эндотермиялық':'endotermıalyq','сүмсию':'súmsıý','обелиск':'obelısk','ыдыс-аяқ':'ydys-aıaq','мифология':'mıfologıa','эксклюзивті':'eksklúzıvti','петрология':'petrologıa','бүртию':'búrtıý','лейб-гвардия':'leıb-gvardıa','гибридология':'gıbrıdologıa','аяқ-қаптай':'aıaq-qaptaı','мұртаяқтылар':'murtaıaqtylar','ансамбль':'аnsámbl','иррационализм':'ırasıonalızm','делегация':'delegasıa','ономасиология':'onomasıologıa','атеист':'ateıs','автаркия':'avtarkıa','паттисон':'patıson','қосаяқ':'qosaıaq','летаргиялық':'letargıalyq','инкубация':'ınkýbasıa','конверсия':'konversıa','салбыраю':'salbyraıý','термотерапия':'termoterapıa','анархиялық':'anarhıalyq','барбию':'barbıý','шертию':'shertıý','хореографиялық':'horeografıalyq','бюджет':'búdjet','орфограмма':'orfogram','телефония':'telefonıa','оюластыру':'oıýlastyrý','лексикология':'leksıkologıa','аэрологиялық':'aerologıalyq','вермикулит':'vermıkýlıt','пресс':'pres','хеджерлеу':'hejerleý','уәлаят':'ýálaıat','тополог':'topolog','тікірею':'tikireıý','балл':'bal','төтеннен':'tótennen','коллекция':'koleksıa','миография':'mıografıa','өсек-аяң':'ósek-aıań','металграфиялық':'metalgrafıalyq','чекист':'chekıs','ландшафт':'landshaft','қазақия':'qazaqıa','баяуырақ':'baıaýyraq','телевизиялық':'televızıalyq','антипассат':'antıpasat','биоэкология':'bıoekologıa','қиял-ой':'qıal-oı','циркуляр':'sırkýlár','компьютер':'kompúter','сақаю':'saqaıý','дактилоскопия':'daktıloskopıa','пласт':'plas','инсаният':'ınsanıat','ащылату':'ashshylatý','сілею':'sileıý','коэффициент':'koefısıent','жағдаят':'jaǵdaıat','пальма':'pálma','тотияйындай':'totıaıyndaı','хирургия':'hırýrgıa','қызылмия':'qyzylmıa','авантюрист':'avantúrıs','империя':'ımperıa','муляж':'mýláj','комиссиялық':'komısıalyq','кальмар':'kálmar','арсию':'arsıý','терапия':'terapıa','тұщылану':'tushshylaný','қапияда':'qapıada','дубль':'dúbl','галантерея':'galantereıa','фильмографиялық':'fılmografıalyq','аязсыз':'aıazsyz','жариялау':'jarıalaý','филолог':'fılolog','уролог':'ýrolog','обструкционист':'obstrýksıonıs','жиюлы':'jıýly','қампию':'qampıý','саяхатшылық':'saıahatshylyq','суффикс':'sýfıks','дікию':'dikıý','шаянтәрізділер':'shaıantárizdiler','миниатюрашы':'mınıatúrashy','газбаллонды':'gazbalondy','қисаю':'qısaıý','шоссе':'shosе','аммонит':'amonıt','бұрыннан':'burynnan','тонзиллит':'tonzılıt','муссон':'mýson','жымпию':'jympıý','плащ-палатка':'plash-palatka','аннал':'anal','боямалы':'boıamaly','ақшию':'aqshıý','дирекция':'dıreksıa','ассистент':'asıstent','жою':'joıý','бояғыш':'boıaǵysh','хашия':'hashıa','алласыз':'allasyz','галлюцинациялық':'galúsınasıalyq','адаптация':'adaptasıa','шаңқаю':'shańqaıý','зымиян':'zymıan','бассүйектану':'bassúıektaný','коннотация':'konotasıa','қою':'qoıý','сиясорғыш':'sıasorǵysh','акваметрия':'akvametrıa','градация':'gradasıa','саялы':'saıaly','өмірбаян':'ómirbaıan','даяшы':'daıashy','индукциялық':'ındýksıalyq','авиацияшы':'avıasıashy','хиджаб':'hıdjab','түссіздену':'tússizdený','орфоэпия':'orfoepıa','гевея':'geveıa','биялай':'bıalaı','мотивация':'motıvasıa','балпаю':'balpaıý','қаздию':'qazdıý','девиация':'devıasıa','үшаяқ':'úshaıaq','агглютинативті':'aglútınatıvti','корпорация':'korporasıa','барракуда':'barakýda','баяндасу':'baıandasý','саясаттандыру':'saıasattandyrý','монист':'monıs','теллур':'telýr','инфаркт':'ınfarkt','эмоция':'emosıa','навигация':'navıgasıa','әуетаяқ':'áýetaıaq','онтология':'ontologıa','микрохирургия':'mıkrohırýrgıa','еңкею':'eńkeıý','ұятсыз':'uıatsyz','некен-саяқ':'neken-saıaq','аяқбау':'aıaqbaý','перфорация':'perforasıa','сапсию':'sapsıý','даяшылық':'daıashylyq','аялдау':'aıaldaý','велоспорт':'velosport','алыс-жұлыссыз':'alys-julyssyz','кеңею':'keńeıý','ащы':'ashshy','көкию':'kókıý','психотерапия':'psıhoterapıa','парфюмер':'parfúmer','қысылтаяң':'qysyltaıań','әскери-саяси':'áskerı-saıası','яһуди':'ıahýdı','қампаю':'qampaıý','технолог':'tehnolog','қоянқұлақшам':'qoıanqulaqsham','аушадияр':'aýshadıar','тысыраю':'tysyraıý','векторлық':'vektorlyq','қалбию':'qalbıý','қия':'qıa','релятивті':'relátıvti','билливердин':'bılıverdın','гомология':'gomologıa','қиял-арман':'qıal-arman','аяқдоп':'aıaqdop','монополиялық':'monopolıalyq','инверсия':'ınversıa','алтаяқ':'altaıaq','құпияласу':'qupıalasý','коммерция':'komersıa','парапсихология':'parapsıhologıa','бұртию':'burtıý','глиссандо':'glısando','боясу':'boıasý','мияткерлік':'mıatkerlik','қоссүзбелі':'qossúzbeli','лоция':'losıa','бажыраю':'bajyraıý','фантаст':'fantas','аяғыш':'aıaǵysh','оппозициялық':'opozısıalyq','егес-қияс':'eges-qıas','археолог':'arheolog','судья':'sýdıa','жыртию':'jyrtıý','альпинизм':'álpınızm','ащыландыру':'ashshylandyrý','қассақ':'qassaq','вариациялық':'varıasıalyq','хикаят':'hıkaıat','аннуитет':'anýıtet','қиял-ғажайып':'qıal-ǵajaıyp','рецензия':'resenzıa','тавтология':'tavtologıa','венчурлік':'venchýrlik','флокуляция':'flokýlásıa','рия':'rıa','миллиардшы':'mıllıardshy','фитогеография':'fıtogeografıa','беннеттит':'benetıt','мияткер':'mıatker','аялдасу':'aıaldasý','акцессориялар':'aksesorıalar','жаһаннамдық':'jahannamdyq','мыжыраю':'myjyraıý','зарядтау':'zarádtaý','тікею':'tikeıý','токсикология':'toksıkologıa','қалшию':'qalshıý','сықсию':'syqsıý','паразитология':'parazıtologıa','томсыраю':'tomsyraıý','ваниль':'vanıl','картография':'kartografıa','намыссыз':'namyssyz','митинг':'mıtıń','нитрификация':'nıtrıfıkasıa','утопия':'ýtopıa','бактерия':'bakterıa','шекшию':'shekshıý','медальон':'medalón','мирассыз':'mırassyz','иллюстрациялық':'ılústrasıalyq','қаяу':'qaıaý','фармакология':'farmakologıa','фортиссимо':'fortısımo','баяғы':'baıaǵy','вестибулярлы':'vestıbýlárly','баяндандыру':'baıandandyrý','шайқассыз':'shaıqassyz','биостратиграфиялық':'bıostratıgrafıalyq','саяжол':'saıajol','вексельдік':'vekseldik','қалтарыссыз':'qaltaryssyz','инспекция':'ınspeksıa','аккордеон':'akordeon','астрохимия':'astrohımıa','каталог':'katalog','операциялық':'operasıalyq','калькуляциялық':'kálkýlásıalyq','коммутация':'komýtasıa','квадриллион':'kvadrıllıon','макроэволюция':'makroevolúsıa','алдиярлау':'aldıarlaý','траектория':'traektorıa','махаббатшыл':'mahabbatshyl','синестезия':'sınestezıa','вируленттілік':'vırýlenttilik','экссудат':'ekssýdat','ықтиярлық':'yqtıarlyq','лютня':'lútnıa','әйкелтаяқ':'áıkeltaıaq','таяну':'taıaný','басмия':'basmıa','кердию':'kerdıý','көпаяқтылар':'kópaıaqtylar','веб-торап':'veb-torap','зарядты':'zarádti','шоқшию':'shoqshıý','солбыраю':'solbyraıý','партиялық':'partıalyq','аябоз':'aıaboz','шәлтию':'sháltıý','сый-сияпат':'syı-sıapat','криминолог':'krımınolog','аққоян':'aqqoıan','мүттакалам':'múttakalam','ванна':'vana','оят':'oıat','рентгенолог':'rentgenolog','биохимиялық':'bıohımıalyq','траншеялық':'transheıalyq','тракт':'trakt','аяқкиімсіз':'aıaqkıimsiz','қоянот':'qoıanot','мұқиятсыздық':'muqıatsyzdyq','аттик':'atık','рупия':'rýpıa','идиллия':'ıdılıa','баланс-нетто':'balans-neto','глоттохронология':'glotohronologıa','гегемония':'gegemonıa','химиотерапия':'hımıoterapıa','нитробояғыштар':'nıtroboıaǵyshtar','эллипс':'elıps','фитоценология':'fıtosenologıa','фототопография':'fototopografıa','борсию':'borsıý','эклампсия':'eklampsıa','патология':'patologıa','гвардиялық':'gvardıalyq','эскадрилья':'eskadrılıa','жыныссыз':'jynyssyz','беллетристика':'beletrıstıka','микропроцессор':'mıkroprosesor','апофония':'apofonıa','экспликация':'eksplıkasıa','таяуда':'taıaýda','символист':'sımvolıs','қояншөп':'qoıanshóp','вектор':'vektor','альтиметр':'áltımetr','пьеса':'pesa','қаннен-қаперсіз':'qannen-qapersiz','фракциялық':'fraksıalyq','иллюстрация':'ılústrasıa','конвенция':'konvensıa','зымияндық':'zymıandyq','графология':'grafologıa','инкубациялық':'ınkýbasıalyq','шатқаяқ':'shatqaıaq','аппроксимация':'aproksımasıa','хореография':'horeografıa','апелляция':'apelásıa','фация':'fasıa','статист':'statıs','соян':'soıan','аяқтаушы':'aıaqtaýshy','пропорциялау':'proporsıalaý','қаңқию':'qańqıý','шүю':'shúıý','суаяқ':'sýaıaq','қиқаю':'qıqaıý','топсаяхат':'topsaıahat','вегетативтік':'vegetatıvtik','биогеография':'bıogeografıa','аярлану':'aıarlaný','кежірею':'kejireıý','тұяқсерпер':'tuıaqserper','формация':'formasıa','редакциялау':'redaksıalaý','ирониялық':'ıronıalyq','баррикадалау':'barıkadalaý','диалект':'dıalekt','геронтология':'gerontologıa','бериллийлеу':'berılıleý','эксгумация':'eksgýmasıa','аномалия':'anomalıa','этиология':'etıologıa','жаядай':'jaıadaı','деривация':'derıvasıa','геодезияшы':'geodezıashy','аяқ':'aıaq','аллергологиялық':'alergologıalyq','бояну':'boıaný','съезд':'sıez','френолог':'frenolog','қосжұпаяқтылар':'qosjupaıaqtylar','аяншақтану':'aıanshaqtaný','синолог':'sınolog','асбест':'asbes','алхимия':'alhımıa','граммема':'gramem','агрессияшыл':'agresıashyl','аттестаттау':'atestattaý','вокалдық':'vokaldyq','сіргежияр':'sirgejıar','телефотография':'telefotografıa','волластонит':'volastonıt','зым-зия':'zym-zıa','фономорфология':'fonomorfologıa','мустанг':'mýstań','абсорбция':'absorbsıa','бірпартиялық':'birpartıalyq','тамырбояу':'tamyrboıaý','аккредитивтік':'akredıtıvtik','саябырлау':'saıabyrlaý','эмоциялы':'emosıaly','ырсию':'yrsıý','тест':'test','микробиолог':'mıkrobıolog','миссия':'mısıa','эллипсті':'elıpsti','шартию':'shartıý','ояу':'oıaý','аюша':'aıýsha','отқақұяр':'otqaquıar','палинология':'palınologıa','будда':'býdda','парашютші':'parashútshi','қиятас':'qıatas','геометриялық':'geometrıalyq','гипология':'gıpologıa','шоқыраю':'shoqyraıý','ес-түссіз':'es-tússiz','аяққұр':'aıaqqur','генеалогиялық':'genealogıalyq','эконометрия':'ekonometrıa','утопист':'ýtopıs','конденсациялау':'kondensasıalaý','полифония':'polıfonıa','баяндауыш':'baıandaýysh','биобиблиография':'bıobıblıografıa','гомеотерапия':'gomeoterapıa','бессаусақ':'bessaýsaq','аглютинация':'aglútınatsıa','кардиолог':'kardıolog','кумуляция':'kýmýlásıa','хроматография':'hromatografıa','парашют':'parashút','кірбию':'kirbıý','қаджари':'qadjarı','дуалист':'dýalıs','бактериялы':'bakterıaly','вокал':'vokal','ария':'arıa','жүкаяқ':'júkaıaq','метонимия':'metonımıa','құсаяқ':'qusaıaq','баялыш':'baıalysh','терракота':'terakota','аюбадам':'aıýbadam','мұсабба':'musabba','кавалерия':'kavalerıa','терция':'tersıa','вице-министр':'vıse-mınıstr','аполлон':'apolon','палинтомия':'palıntomıa','шілия':'shilıa','руханияттық':'rýhanıattyq','жалынып-жалпаю':'jalynyp-jalpaıý','сояу':'soıaý','қияқша':'qıaqsha','баянат':'baıanat','консервация':'konservasıa','эманация':'emanasıa','таяқты':'taıaqty','плюрализм':'plúralızm','хрестоматия':'hrestomatıa','мумиялау':'mýmıalaý','миссионер':'mısıoner','аллалы':'allaly','аяқтастыру':'aıaqtastyrý','агробиология':'agrobıologıa','аяз-боран':'aıaz-boran','глоссематика':'glosematıka','дендрология':'dendrologıa','гамма-тәсілдер':'gamma-tásilder','бальнеологиялық':'bálneologıalyq','бруцеллез':'brýselez','мүдде-мұрат':'múdde-murat','диссертант':'dısertant','альпинарий':'álpınarı','өңею':'óńeıý','қоңқаю':'qońqaıý','биязы':'bıazy','қиянат':'qıanat','оккупант':'okýpant','ақаю':'aqaıý','минималист':'mınımalıs','перцепция':'persepsıa','иықаяқтылар':'ıyqaıaqtylar','тұщыту':'tushshytý','анатомия':'anatomıa','петрографиялық':'petrografıalyq','шоштию':'shoshtıý','филармония':'fılarmonıa','ванадийлі':'vanadıli','вуда':'výda','мантия':'mantıa','пейзажист':'peızajıs','шаянмойнақ':'shaıanmoınaq','аллегро':'alegro','миядай':'mıadaı','сақтиян':'saqtıan','габбро':'gabro','хикаялау':'hıkaıalaý','биотермиялық':'bıotermıalyq','жариялату':'jarıalatý','гидробиолог':'gıdrobıolog','фантазиялық':'fantazıalyq','әпірею':'ápireıý','эпитаксия':'epıtaksıa','бассүйектілер':'bassúıektiler','турист':'týrıs','биотехнология':'bıotehnologıa','волюнтаризм':'volúntarızm','пресс-атташе':'pres-atashe','пассаж':'pasaj','аббаттық':'abattyq','баяғыша':'baıaǵysha','қақию':'qaqıý','жассыну':'jassyný','шақшыраю':'shaqshyraıý','энтомолог':'entomolog','грамм':'gram','аялы':'aıaly','қиял':'qıal','хикаяшыл':'hıkaıashyl','әскери-стратегиялық':'áskerı-strategıalyq','анатомиялық':'anatomıalyq','аяңдау':'aıańdaý','инновация':'ınovasıa','культ':'kúlt','сегізаяқ':'segizaıaq','баттию':'battıý','эллипсис':'elıpsıs','биотехния':'bıotehnıa','болбыраю':'bolbyraıý','бағжию':'baǵjıý','колледж':'kolej','бағыныссыз':'baǵynyssyz','дивергенция':'dıvergensıa','биологиялық':'bıologıalyq','конфабуляция':'konfabýlásıa','технология':'tehnologıa','зораю':'zoraıý','теократия':'teokratıa','күдірею':'kúdireıý','опыраю':'opyraıý','аппаратура':'aparatýra','варяг':'varág','диаграмма':'dıagram','қырып-жою':'qyryp-joıý','конверсиялық':'konversıalyq','микропроцессорлық':'mıkroprosesorlyq','фонометрия':'fonometrıa','оюласу':'oıýlasý','микрокалькулятор':'mıkrokalkýlátor','валенттілік':'valenttilik','арбию':'arbıý','бактериология':'bakterıologıa','гидрогеологиялық':'gıdrogeologıalyq','ысқаяқтану':'ysqaıaqtaný','қыдию':'qydıý','калориялық':'kalorıalyq','облигация':'oblıgasıa','сияқ':'sıaq','саяздату':'saıazdatý','ремиссия':'remısıa','шұңқыраю':'shuńqyraıý','роялист':'roıalıs','режиссуралық':'rejısýralyq','сыю':'syıý','арман-мүдде':'arman-múdde','нығаю':'nyǵaıý','драматургиялық':'dramatýrgıalyq','тобанаяқ':'tobanaıaq','контральто':'kontrálto','князьдық':'knázdik','энтропия':'entropıa','ашатұяқты':'ashatuıaqty','парфюмерия':'parfúmerıa','шасси':'shası','долларлық':'dollarlyq','лапарсия':'laparsıa','автоинспекция':'avtoınspeksıa','зиянды':'zıandy','таяздау':'taıazdaý','қоянерін':'qoıanerin','кею':'keıý','оюшы':'oıýshy','контакт':'kontakt','ванадий':'vanadı','оясыз':'oıasyz','шаянмойын':'shaıanmoıyn','ассоциациялану':'asosıasıalaný','ювеналдық':'ıývenaldyq','бассауғалау':'bassaýǵalaý','қоянсүйек':'qoıansúıek','аяқ-табақсыз':'aıaq-tabaqsyz','аннигиляция':'anıgılásıa','құдая':'qudaıa','фаялит':'faıalıt','жалаңаяқ':'jalańaıaq','монархияшыл':'monarhıashyl','ию':'ıý','пеленг':'peleń','ұят':'uıat','аффинация':'afınasıa','саясилану':'saıasılaný','демпинг':'dempıń','ескекаяқтылар':'eskekaıaqtylar','миятамыр':'mıatamyr','хикаялы':'hıkaıaly','аямай':'aıamaı','даярлаушы':'daıarlaýshy','одыраю':'odyraıý','морфометриялық':'morfometrıalyq','омсыраю':'omsyraıý','япырым-ай':'ıapyrym-aı','құрылымдық-металлогендік':'qurylymdyq-metalogendik','тып-тиянақты':'typ-tıanaqty','агрохимия':'agrohımıa','отаю':'otaıý','индукция':'ındýksıa','технократиялық':'tehnokratıalyq','рапсодия':'rapsodıa','анархист':'anarhıs','аяугершілік':'aıaýgershilik','артиллерия':'artılerıa','қаужию':'qaýjıý','гидрогеолог':'gıdrogeolog','ұяңдату':'uıańdatý','бірразрядты':'birrazrádti','шақшию':'shaqshıý','типология':'tıpologıa','ұя':'uıa','ақтаяқ':'aqtaıaq','браунинг':'braýnıń','пайда-зиян':'paıda-zıan','бітию':'bitıý','прапорщик':'praporshık','идеография':'ıdeografıa','жағдаяттылық':'jaǵdaıattylyq','милленаристік':'mılenarıstik','кекшию':'kekshıý','шошаю':'shoshaıý','геохронология':'geohronologıa','пианист':'pıanıs','түссіздік':'tússizdik','абстракция':'abstraksıa','түртию':'túrtıý','салғаннан':'salǵannan','келіссөз':'kelissóz','аналогиялық':'analogıalyq','әмиян':'ámıan','морфометрия':'morfometrıa','қоянжүн':'qoıanjún','монограма':'monogram','оюлы':'oıýly','миология':'mıologıa','барьер':'barer','травматологиялық':'travmatologıalyq','аттестат':'atestat','бактериолог':'bakterıolog','буржуазия':'býrjýazıa','баяғыдан':'baıaǵydan','агрессор':'agresor','мияу':'mıaý','бериллий':'berılı','жариясыз':'jarıasyz','тоқыраю':'toqyraıý','баяндамашы':'baıandamashy','аспект':'aspekt','терроризм':'terorızm','манифест':'manıfes','палладий':'paladı','аялдама':'aıaldama','аяу':'aıaý','картридж':'kartrıj','аминопласт':'amınoplas','қасқаю':'qasqaıý','комбинациялау':'kombınasıalaý','рентгенология':'rentgenologıa','ферробалқыту':'ferobalqytý','шағырбояу':'shaǵyrboıaý','демалыссыз':'demalyssyz','аффект':'afekt','артикль':'artıkl','электркардиограмма':'elektrkardıogram','мияттай':'mıattaı','витасфера':'vıtasfera','экзобиология':'ekzobıologıa','демагог':'demagog','ванадаттар':'vanadattar','позициялық':'pozısıalyq','гастроэнтерология':'gastroenterologıa','аберрация':'aberasıa','тілқияр':'tilqıar','күшею':'kúsheıý','экология':'ekologıa','фольклор':'fólklor','ярд':'ıard','аяқтоғыз':'aıaqtoǵyz','рияшыл':'rıashyl','гипоксия':'gıpoksıa','етею':'eteıý','тояттату':'toıattatý','құз-қия':'quz-qıa','биязылану':'bıazylaný','эпистемиология':'epıstemıologıa','репатриация':'repatrıasıa','дефектология':'defektologıa','люминесценттік':'lúmınesenttik','радиограмма':'radıogram','нюанс':'núans','герцог':'gersog','грамм-атом':'gramm-atom','дефектолог':'defektolog','киоск':'kıosk','берилл':'berıl','осциллограмма':'osılogram','саясатшыл':'saıasatshyl','дактилография':'daktılografıa','жуассыну':'jýassyný','невропатология':'nevropatologıa','телепатия':'telepatıa','онкология':'onkologıa','картодиаграмма':'kartodıagram','фенолог':'fenolog','жорғатаяқ':'jorǵataıaq','жаяу-жалпы':'jaıaý-jalpy','теология':'teologıa','глюкоза':'glúkoza','саябырлану':'saıabyrlaný','баяндалу':'baıandalý','кішірею':'kishireıý','философия':'fılosofıa','контрибуция':'kontrıbýsıa','ямб':'ıamb','моногамия':'monogamıa','фагоцителлотәрізділер':'fagosıtelotárizdiler','аяншақтық':'aıanshaqtyq','шедірею':'shedireıý','аутомия':'aýtomıa','қаяу-қайғы':'qaıaý-qaıǵy','қиямет-қайым':'qıamet-qaıym','инженер-технолог':'ınjener-tehnolog','варрант':'varant','бiрпартиялы':'birpartıaly','геодезиялық':'geodezıalyq','телефонограмма':'telefonogram','сейсмограмма':'seısmogram','фитопатолог':'fıtopatolog','аяқартар':'aıaqartar','биостратиграфия':'bıostratıgrafıa','ассоциация':'asosıasıa','аяқтату':'aıaqtatý','сленг':'sleng','бейпартиялық':'beıpartıalyq','педиатрия':'pedıatrıa','гомологиялық':'gomologıalyq','урологиялық':'ýrologıalyq','өңкию':'óńkıý','эволюциялық':'evolúsıalyq','әуекомпания':'áýekompanıa','автономиялық':'avtonomıalyq','территория':'terıtorıa','гемограмма':'gemogram','жариялы':'jarıaly','хедж':'hej','прогрессия':'progresıa','диверсия':'dıversıa','гидрометеорология':'gıdrometeorologıa','әбият':'ábıat','акцентология':'aksentologıa','варианттылық':'varıanttylyq','баррикада':'barıkada','химия':'hımıa','аксиология':'aksıologıa','скетч':'skech','әкімият':'ákimıat','қылқию':'qylqıý','аллитерация':'alıterasıa','бейнедиск':'beınedısk','саят':'saıat','аяныштылық':'aıanyshtylyq','ықтияттау':'yqtıattaý','тырбию':'tyrbıý','нитрификациялаушы':'nıtrıfıkasıalaýshy','коттедж':'kotej','миллениум':'mıllenıým','партиясыз':'partıasyz','категория':'kategorıa','милиция':'mılısıa','асатаяқ':'asataıaq','морфология':'morfologıa','магия':'magıa','тортию':'tortıý','летаргия':'letargıa','фармаколог':'farmakolog','мегатонна':'megatonna','алюмсиликаттар':'alúmsılıkattar','метеорологиялық':'meteorologıalyq','агробиолог':'agrobıolog','токсиколог':'toksıkolog','қиян':'qıan','номография':'nomografıa','антономазия':'antonomazıa','аяқтану':'aıaqtaný','аяқ-басы':'aıaq-basy','дзюдошы':'dzúdoshy','валеология':'valeologıa','қиярбалық':'qıarbalyq','шодыраю':'shodyraıý','конкреция':'konkresıa','снаряд':'snarád','баяндату':'baıandatý','көзбояу':'kózboıaý','аттракция':'atraksıa','классицизм':'klasısızm','цитология':'sıtologıa','шыныаяқ':'shynyaıaq','графиня':'grafınıa','геохимия':'geohımıa','конъюнктура':'konúnktýra','бая':'baıa','алкоголь':'аlkogól','бутафория':'býtaforıa','бөліссіз':'bólissiz','бас-аяқсыз':'bas-aıaqsyz','лықию':'lyqıý','ұялшақ':'uıalshaq','шақыраю':'shaqyraıý','антикоагулянт':'antıkoagýlánt','құпияландыру':'qupıalandyrý','ағжию':'aǵjıý','пессимизм':'pesımızm','ляпис':'lápıs','айғырқияқ':'aıǵyrqıaq','автомобиль':'avtomobıl','орнитология':'ornıtologıa','тасаяқ':'tasaıaq','тырқию':'tyrqıý','астробиология':'astrobıologıa','қисая-қисая':'qısaıa-qısaıa','үдірею':'údireıý','логографиялық':'logografıalyq','қоянша':'qoıansha','бюрократиялық':'búrokratıalyq','сионист':'sıonıs','кілмию':'kilmıý','аялдама-бекініс':'aıaldama-bekinis','разрядтау':'razrádteý','меңірею':'meńireıý','радиоаппарат':'radıoaparat','адыраю':'adyraıý','пирометаллургия':'pırometalýrgıa','қияс':'qıas','зиян':'zıan','модаль':'modál','шиншилла':'shınshıla','космогония':'kosmogonıa','қылжию':'qyljıý','велокросс':'velokros','тұқыраю':'tuqyraıý','бейсаясаттық':'beısaıasattyq','апатия':'apatıa','топографиялық':'topografıalyq','тиуроцилл':'tıýrosıl','ысқаяқ':'ysqaıaq','остеология':'osteologıa','инфузория':'ınfýzorıa','вице-президент':'vıse-prezıdent','аккредитация':'akredıtasıa','базофилия':'bazofılıa','функциялық':'fýnksıalyq','саяқсу':'saıaqsý','ұялмай-қызармай':'uıalmaı-qyzarmaı','тосыннан':'tosynnan','буржуазиялық':'býrjýazıalyq','бауыраяқты':'baýyraıaqty','психологиялық':'psıhologıalyq','коммуналдық':'komýnaldyq','факт':'fakt','саябақ':'saıabaq','амортизациялық':'amortızasıalyq','қуаяқ':'qýaıaq','нутация':'nýtasıa','қияқ':'qıaq','конфессиялы':'konfesıaly','ортопедия':'ortopedıa','шаянтектестер':'shaıantektester','кекею':'kekeıý','мәніссіз':'mánissiz','армия':'armıa','бактериялану':'bakterıalaný','фонетист':'fonetıs','новелла':'novela','волейбол':'voleıbol','пиязшық':'pıazshyq','амплиация':'amplıasıa','руханият':'rýhanıat','ащы-тұщы':'ashshy-tushshy','желқұяң':'jelquıań','геохимиялық':'geohımıalyq','биогеоценология':'bıogeosenologıa','ықтиятсыздық':'yqtıatsyzdyq','демаркетинг':'demarketıń','альгеологиялық':'álgeologıalyq','монотония':'monotonıa','целлулоид':'selýloıd','стрептококк':'streptokok','антикоррозиялық':'antıkorozıalyq','аяқмәшине':'aıaqmáshıne','келтию':'keltıý','корректор':'korektor','ватман':'vatman','картинг':'kartıń','ұю':'uıý','тиянақсыз':'tıanaqsyz','сиялы':'sıaly','абстракт':'abstrakt','транскрипция':'transkrıpsıa','итию':'ıtıý','тілқияқ':'tilqıaq','миллиард':'mıllıard','палеогеоморфологиялық':'paleogeomorfologıalyq','бояулы':'boıaýly','мусс':'mýs','тыңаю':'tyńaıý','фальстарт':'fálstart','авантюра':'avantúra','бюрократтық':'búrokrattyq','гидроэкология':'gıdroekologıa','зиянсыздандыру':'zıansyzdandyrý','морзист':'morzıs','гамма-спектрометр':'gamma-spektrometr','артикуляция':'artıkýlásıa','рецидивист':'resıdıvıs','аудитория':'aýdıtorıa','аллегорлау':'alegorlaý','ащысыну':'ashshysyný','бояту':'boıatý','дүрбию':'dúrbıý','ыдыссалғыш':'ydyssalǵysh','диффузор':'dıfýzor','саяжай':'saıajaı','аннотация':'anotasıa','эвакуациялық':'evakýasıalyq','тәйтию':'táıtıý','киноматография':'kınomatografıa','тұқым-тұқиян':'tuqym-tuqıan','аятолла':'aıatolla','федерациялық':'federasıalyq','юзанс':'ıýzans','маялауыш':'maıalaýysh','тайқию':'taıqıý','бюрократия':'búrokratıa','аббат':'abat','аябақ':'aıabaq','аю':'aıý','мықию':'myqıý','бельэтаж':'beletaj','активист':'aktıvıs','жариялану':'jarıalaný','кекжию':'kekjıý','саялату':'saıalatý','ащытамыр':'ashshytamyr','форпост':'forpos','шаю':'shaıý','мұқияттылық':'muqıattylyq','нақлият':'naqlıat','фотоаппарат':'fotoaparat','фотолитография':'fotolıtografıa','жариялылық':'jarıalylyq','паяпарлану':'paıaparlaný','даярласу':'daıarlasý','кейіннен':'keıinnen','ықылассыз':'yqylassyz','альт':'ált','биотехнологиялық':'bıotehnologıalyq','реквизация':'rekvızasıa','рауаят':'raýaıat','алшаю':'alshaıý','қыжыраю':'qyjyraıý','габбролық':'gabrolyq','жеміссағақ':'jemissaǵaq','аллонж':'alonj','кекірею':'kekireıý','аммонал':'amonal','радиация':'radıasıa','экзогамия':'ekzogamıa','қиядай':'qıadaı','бояушы':'boıaýshy','архебактериялар':'arhebakterıalar','сияқты':'sıaqty','ащылану':'ashshylaný','тіссіздік':'tissizdik','болпию':'bolpıý','дипломатиялық':'dıplomatıalyq','жаяусоқпақ':'jaıaýsoqpaq','бояма':'boıama','гамбузия':'gambýzıa','баяндау':'baıandaý','ацидафиль':'asıdafıl','вирусология':'vırýsologıa','миллибар':'mıllıbar','фасилитация':'fasılıtasıa','тоңқаю':'tońqaıý','бюрократияшылдық':'búrokratıashyldyq','гуманист':'gýmanıs','аятулкүрсі':'aıatýlkúrsi','оппортунизм':'oportýnızm','біздию':'bizdıý','апоплексия':'apopleksıa','флексия':'fleksıa','аппликата':'aplıkata','зарядтану':'zarádtaný','офтальмоскопия':'oftálmoskopıa','франчайзинг':'franchaızıń','қияңқылық':'qıańqylyq','таяқтастам':'taıaqtastam','үббе':'úbbe','барокко':'baroko','эквилибрист':'ekvılıbrıs','демаркациялық':'demarkasıalyq','магнолия':'magnolıa','оппортунистік':'oportýnıstik','вариация':'varıasıa','баллада':'ballada','антракт':'antrakt','баябан':'baıaban','құнтию':'quntıý','помещик':'pomeshık','иммиграция':'ımıgrasıa','тиянақ':'tıanaq','қаюбіз':'qaıýbiz','релятивизм':'relátıvızm','желаяқ':'jelaıaq','матч':'mach','батиметрия':'batımetrıa','параллель':'paralel','қария':'qarıa','мүддешіл':'múddeshil','астрономиялық':'astronomıalyq','алюминотермия':'alúmınotermıa','құнжию':'qunjıý','ранг':'rang','гибридологиялық':'gıbrıdologıalyq','эвфония':'evfonıa','тұғжию':'tuǵjıý','палеогеографиялық':'paleogeografıalyq','фортепьяно':'fortepáno','академия':'akademıa','ищай-ай':'ıshshaı-aı','флюороз':'flúoroz','галлюцинация':'galúsınasıa','дария':'darıa','валюталық':'valútalyq','көзаяқ':'kózaıaq','асимметриялық':'asımetrıalyq','миллимикрофон':'mıllımıkrofon','патруль':'patrúl','юань':'ıýán','сылқию':'sylqıý','тапқан-таянғаны':'tapqan-taıanǵany','желмаядай':'jelmaıadaı','ватт-сағат':'vatt-saǵat','бюджеттік':'búdjettik','аялдаушы':'aıaldaýshy','аяқсыту':'aıaqsytý','дағдарыссыз':'daǵdaryssyz','серею':'sereıý','конференция':'konferensıa','өлеңқияқ':'óleńqıaq','интернационалист':'ınternasıonalıs','монокристалл':'monokrıstal','плеврококк':'plevrokok','коммуникация':'komýnıkasıa','кассир':'kasır','идеялылық':'ıdeıalylyq','аяздану':'aıazdaný','юнион':'ıýnıon','батааяқ':'bataaıaq','лицензия':'lısenzıa','самиян':'samıan','мультимиллионер':'múltımıllıoner','бояқ':'boıaq','аякөз':'aıakóz','гастрономия':'gastronomıa','хайринг':'haırıń','бакалея':'bakaleıa','аскания':'askanıa','вакуум':'vakým','биогеологиялық':'bıogeologıalyq','пунктуация':'pýnktýasıa','оппа':'oppa','экспрессема':'ekspresema','тосыраю':'tosyraıý','ономасиологиялық':'onomasıologıalyq','физиатрия':'fızıatrıa','биогеология':'bıogeologıa','ватт':'vatt','саяттану':'saıattaný','вокабула':'vokabýla','бессайысшы':'bessaıysshy','конституциялық':'konstıtýsıalyq','биссектриса':'bısektrısa','маддұға':'madduǵa','фортификация':'fortıfıkasıa','лобия':'lobıa','ежірею':'ejireıý','баптист':'baptıs','декларация':'deklarasıa','муссондық':'mýsondyq','аллопатрия':'alopatrıa','экстракция':'ekstraksıa','дедукция':'dedýksıa','бояушытыршық':'boıaýshytyrshyq','вокализ':'vokalız','шолжию':'sholjıý','төбелессіз':'tóbelessiz','көзбояушылық':'kózboıaýshylyq','әуекасса':'áýekasa','электркардиография':'elektrkardıografıa','қаратұяқтану':'qaratuıaqtaný','ассимиляциялану':'asımılásıalaný','зияндылық':'zıandylyq','рияқорлық':'rıaqorlyq','гиподинамия':'gıpodınamıa','ұятсыну':'uıatsyný','капсюль':'kapsúl','қаяулық':'qaıaýlyq','литография':'lıtografıa','корректуралық':'korektýralyq','риясыздық':'rıasyzdyq','аккомпанемент':'akompanement','микробиологиялық':'mıkrobıologıalyq','глоттогенез':'glotogenez','ваучер':'vaýcher','комбинация':'kombınasıa','дерматология':'dermatologıa','валин':'valın','мүдделес':'múddeles','басаяқты':'basaıaqty','фьючерс':'fúchers','элизия':'elızıa','ұялас':'uıalas','миллионер':'mıllıoner','жандармерия':'jandarmerıa','таяздық':'taıazdyq','беккерель':'bekerel','іссіздік':'issizdik','таю':'taıý','сүмірею':'súmireıý','солист':'solıs','біп-биязы':'bip-bıazy','карбюратор':'karbúrator','ферромагнит':'feromagnıt','аннуитант':'anýıtant','синонимиялық':'sınonımıalyq','генералиссимус':'generalısımýs','дециграмм':'desıgram','шыбыртқыаяқтылар':'shybyrtqyaıaqtylar','тайпию':'taıpıý','терминология':'termınologıa','кейкию':'keıkıý','аңқию':'ańqıý','аяулы':'aıaýly','гортензия':'gortenzıa','экспозиция':'ekspozısıa','валиум':'valıým','оккультизм':'okúltızm','мұқият':'muqıat','коммунизм':'komýnızm','кірпияздық':'kirpıazdyq','трансплантация':'transplantasıa','технологиялық':'tehnologıalyq','аксельбант':'akselbant','томарбояу':'tomarboıaý','тиянақтылық':'tıanaqtylyq','дозиметрия':'dozımetrıa','экспромитация':'ekspromıtasıa','аллея':'aleıa','идея':'ıdeıa','этимологиялық':'etımologıalyq','агрономия':'agronomıa','функция':'fýnksıa','мият':'mıat','миллиграмдық':'mıllıgramdyq','шолтаю':'sholtaıý','психология':'psıhologıa','синонимия':'sınonımıa','вагон':'vagon','қоя':'qoıa','корпорациялық':'korporasıalyq','бейсаясат':'beısaıasat','конъюнктивит':'konúnktıvıt','аяқталу':'aıaqtalý','радиогидрогеология':'radıogıdrogeologıa','беджа':'bedja','мықшию':'myqshıý','конфессиялық':'konfesıalyq','вади':'vadı','модернист':'modernıs','гликемия':'glıkemıa','аяншақ':'aıanshaq','шұқыраю':'shuqyraıý','конгрессмен':'kongresmen','кідіріссіз':'kidirissiz','екіаяқты':'ekiaıaqty','күюлі':'kúıýli','велотрек':'velotrek','қоссайысшы':'qossaıysshy','жариялық':'jarıalyq','шүңкию':'shúńkıý','лексикографиялық':'leksıkografıalyq','саятшыл':'saıatshyl','биометрия':'bıometrıa','аяныштау':'aıanyshtaý','миксобактерия':'mıksobakterıa','моносиллабизм':'monosılabızm','ғидда':'ǵıdda','экспрессивті':'ekspresıvti','грамм-моль':'gramm-mól','азобояғыш':'azoboıaǵysh','лизинг':'lızıń','дырдию':'dyrdıý','риян':'rıan','хеджер':'hejer','тексеріссіз':'tekserissiz','амортизация':'amortızasıa','сымпию':'sympıý','қояншеккі':'qoıanshekki','анапест':'anapes','сығыраю':'syǵyraıý','саясаттану':'saıasattaný','деформациялану':'deformasıalaný','субъективист':'sýbektıvıs','фиксинг':'fıksıń','геоэкологиялық':'geoekologıalyq','оффшор':'ofshor','аккомпаниатор':'akompanıator','тақиятеппек':'taqıateppek','ұялы':'uıaly','пассив':'pasıv','имманенттік':'ımanentik','трагикомедия':'tragıkomedıa','презумпция':'prezýmpsıa','қартаю':'qartaıý','филология':'fılologıa','калькуляциялау':'kálkýlásıalaý','шөмию':'shómıý','зоология':'zoologıa','утопиялық':'ýtopıalyq','қоқаю':'qoqaıý','жая':'jaıa','арпамәдиян':'arpamádıan','шаянша':'shaıansha','тұщы':'tushshy','спиннинг':'spınıń','парономазия':'paronomazıa','қиялшыл':'qıalshyl','қазия':'qazıa','конгломерация':'konglomerasıa','культивациялау':'kúltıvasıalaý','шовинист':'shovınıs','фашист':'fashıs','миграциялық':'mıgrasıalyq','деструкция':'destrýksıa','тысқаяқ':'tysqaıaq','миллиметрдей':'mıllımetrdeı','қаятты':'qaıatty','холдинг':'holdıń','транслитерация':'translıterasıa','биогеоценологиялық':'bıogeosenologıalyq','антибактериялық':'antıbakterıalyq','мұң-мүдде':'muń-múdde','параллелограмм':'paralelogram','аяш':'aıash','тақиятастам':'taqıatastam','классификатор':'klasıfıkator','баллистика':'balıstıka','варикоз':'varıkoz','дозиметриялық':'dozımetrıalyq','бутафориялық':'býtaforıalyq','қашаннан':'qashannan','көркею':'kórkeıý','антропогеография':'antropogeografıa','орнитолог':'ornıtolog','бояушөп':'boıaýshóp','компания':'kompanıa','барщиналық':'barshınalyq','ассоциациялық':'asosıasıalyq','құпия':'qupıa','электрхимия':'elektrhımıa','инновациялық':'ınovasıalyq','құтаю':'qutaıý','кержию':'kerjıý','фельетон':'feleton','базидиялы':'bazıdıaly','аллотроптық':'alotroptyq','вариант':'varıant','қақыраю':'qaqyraıý','ояттыру':'oıattyrý','автосаяхатшы':'avtosaıahatshy','еммат':'emat','бацилла':'basıla','грамматика':'gramatıka','дендролог':'dendrolog','фотохимия':'fotohımıa','киноэпопея':'kınoepopeıa','аяқ-қапсыз':'aıaq-qapsyz','гидрохимиялық':'gıdrohımıalyq','аярлық':'aıarlyq','тап-таяу':'tap-taıaý','демобилизациялық':'demobılızasıalyq','ньюсмейкер':'núsmeıker','биосаясат':'bıosaıasat','резиденция':'rezıdensıa','амальгама':'amálgama','компьютерлік':'kompúterlik','баллистикалық':'balıstıkalyq','кесе-аяқ':'kese-aıaq','қиямпұрыстану':'qıampurystaný','жыланқияқ':'jylanqıaq','консолидация':'konsolıdasıa','физиология':'fızıologıa','эллипсограф':'elıpsograf','аяқжол':'aıaqjol','исламият':'ıslamıat','аэрономия':'aeronomıa','филлиттену':'fılıttený','аллерген':'alergen','процесс':'proses','оккупациялау':'okýpasıalaý','эмульгирлену':'emúlgırlený','филателист':'fılatelıs','қия-жар':'qıa-jar','нейрохирургиялық':'neırohırýrgıalyq','диюдай':'dıýdaı','биосферология':'bıosferologıa','вазелин':'vazelın','қоярда-қоймай':'qoıarda-qoımaı','қаят':'qaıat','гиббон':'gıbon','космология':'kosmologıa','шұқию':'shuqıý','кещелік':'keshshelik','қияршөп':'qıarshóp','зияпат':'zıapat','вагонша':'vagonsha','реформист':'reformıs','биязылық':'bıazylyq','тегіннен-тегін':'teginnen-tegin','фобия':'fobıa','бюрократ':'búrokrat','касса':'kasa','тромб':'tromb','пункт':'pýnkt','экотехнология':'ekotehnologıa','сопию':'sopıý','династия':'dınastıa','гравюра':'gravúra','саяси':'saıası','бассауға':'bassaýǵa','термоядролық':'termoıadrolyq','фаготерапия':'fagoterapıa','тапыраю':'tapyraıý','талпию':'talpıý','аккузатив':'akýzatıv','комментарий':'komentarı','аммиак':'amıak','құрдассыну':'qurdassyný','трагедия':'tragedıa','қаю':'qaıý','қияқөлең':'qıaqóleń','айыртұяқ':'aıyrtuıaq','көкаяз':'kókaıaz','абсолюттік':'absolúttik','висмутин':'vısmýtın','гипертония':'gıpertonıa','инквизиция':'ınkvızısıa','концессия':'konsesıa','мүддесіз':'múddesiz','плащ':'plash','археология':'arheologıa','кегжию':'kegjıý','аяздай':'aıazdaı','каюта':'kaıýta','неотения':'neotenıa','қытайпияз':'qytaıpıaz','тәлтию':'táltıý','альгеология':'álgeologıa','иіссабын':'ıissabyn','мұрат-мүдде':'murat-múdde','стоматолог':'stomatolog','корреспондент':'korespondent','репатриациялау':'repatrıasıalaý','брифинг':'brıfıń','ессіз-түссіз':'essiz-tússiz','геосаясаткер':'geosaıasatker','геосаяси':'geosaıası','метатеория':'metateorıa','идеясыз':'ıdeıasyz','мобилизациялау':'mobılızasıalaý','қиян-кескі':'qıan-keski','көзбояушы':'kózboıaýshy','пиктографиялық':'pıktografıalyq','гравитация':'gravıtasıa','хронология':'hronologıa','япыр-ау':'ıapyr-aý','тұяқты':'tuıaqty','мүддегер':'múddeger','фразеологиялық':'frazeologıalyq','бастан-аяқ':'bastan-aıaq','экю':'ekú','аямпаздық':'aıampazdyq','бүкірею':'búkireıý','комиссариат':'komısarıat','геоморфология':'geomorfologıa','вахмистр':'vahmıstr','рентгенограмма':'rentgenogram','электркардиостимулятор':'elektrkardıostımýlátor','саябырсу':'saıabyrsý','комбинациялық':'kombınasıalyq','гипотрофия':'gıpotrofıa','альбатрос':'álbatros','аяқбаусыз':'aıaqbaýsyz','ұлғая-ұлғая':'ulǵaıa-ulǵaıa','гинекологиялық':'gınekologıalyq','психолог':'psıholog','лякросс':'lákros','азиялықша':'azıalyqsha','шалқию':'shalqıý','гаплобактериялар':'gaplobakterıalar','монокулярлық':'monokýlárlik','миллиампер':'mıllıamper','жеміссабақ':'jemissabaq','санскритолог':'sanskrıtolog','ипподром':'ıpodrom','пассионарлық':'pasıonarlyq','якут':'ıakýt','эндокринолог':'endokrınolog','миллиардтай':'mıllıardtaı','жауқияқ':'jaýqıaq','ведомость':'vedimis','вакуумдық':'vakýmdyq','милитарист':'mılıtarıs','кристалл':'krıstal','ищай':'ıshshaı','иммундық':'ımýndyq','ноя':'noıa','вандал':'vandal','армиялық':'armıalyq','тызғаяқ':'tyzǵaıaq','гипотимия':'gıpotımıa','кикбоксинг':'kıkboksıń','вандализм':'vandalızm','психиатрия':'psıhıatrıa','демонополизация':'demonopolızasıa','магнитометриялық':'magnıtometrıalyq','эволюция':'evolúsıa','атты-жаяу':'atty-jaıaý','вирулентті':'vırýlentti','гематолог':'gematolog','эксплантация':'eksplantasıa','велосапар':'velosapar','аясыз':'aıasyz','эвакуациялану':'evakýasıalaný','қорбию':'qorbıý','анестезия':'anestezıa','агрометеорологиялық':'agrometeorologıalyq','радиология':'radıologıa','тотияйындау':'totıaıyndaý','трагедиялы':'tragedıaly','пародиялық':'parodıalyq','шөпжияр':'shópjıar','бюрократтану':'búrokrattaný','бауыраяқ':'baýyraıaq','сәңкию':'sáńkıý','ұяң':'uıań','вермахт':'vermaht','дауыссыз':'daýyssyz','мотокросс':'motokros','ортопедиялық':'ortopedıalyq','көстию':'kóstıý','палеогидрогеологиялық':'paleogıdrogeologıalyq','доссымақ':'dossymaq','санкция':'sanksıa','ыздию':'yzdıý','эндемия':'endemıa','гиппопотам':'gıpopotam','эндогамия':'endogamıa','шоқию':'shoqıý','мышьяк':'myshák','педагог':'pedagog','шалқаяқтау':'shalqaıaqtaý','жария':'jarıa','профессура':'profesýra','альфа':'álfa','мизантропия':'mızantropıa','гимназия':'gımnazıa','аяқтай':'aıaqtaı','миллиграмдай':'mıllıgramdaı','доссыз':'dossyz','қарғатұяқ':'qarǵatuıaq','юра':'ıýra','апельсин':'apelsın','вирустық':'vırýstyq','тоғаю':'toǵaıý','виолончель':'vıolonchel','экструзия':'ekstrýzıa','спектакль':'spektákl','қутұяқ':'qýtuıaq','ессіздік':'essizdik','геометриялау':'geometrıalaý','жаяулату':'jaıaýlatý','аяққы':'aıaqqy','қаяушы':'qaıaýshy','ядрошық':'ıadroshyq','макроэнергиялық':'makroenergıalyq','шуаяқ':'shýaıaq','зияратшы':'zıaratshy','ықтияттылық':'yqtıattylyq','таңыраю':'tańyraıý','гимназист':'gımnazıs','тиянақталу':'tıanaqtalý','эккаутинг':'ekaýtıń','брасс':'bras','аннуитеттік':'anýıtettik','эпилог':'epılog','саяхат':'saıahat','гастроль':'gаstról','сияз':'sıaz','мультимиллионерлік':'múltımıllıonerlik','фантасмагория':'fantasmagorıa','гипотермия':'gıpotermıa','коньяк':'konák','шөкию':'shókıý','миялы':'mıaly','иррационалдық':'ırasıonaldyq','шиқияқ':'shıqıaq','деривациялық':'derıvasıalyq','бейсаясатшылдық':'beısaıasatshyldyq','бариглоссия':'barıglosıa','бадыраю':'badyraıý','раббы':'rabby','тояттау':'toıattaý','генералиссимустық':'generalısımýstyq','туатаяқ':'týataıaq','ұйқассыз':'uıqassyz','егессіз':'egessiz','баяулатыңқырау':'baıaýlatyńqyraý','телеобъектив':'teleobektıv','анафилаксия':'anafılaksıa','аллашыл':'allashyl','әскери-демократиялық':'áskerı-demokratıalyq','федерация':'federasıa','осциллография':'osılografıa','люк':'lúk','ингалятор':'ıngalátor','конденсация':'kondensasıa','тараю':'taraıý','мещан':'meshan','астапыралла':'astapyralla','бүкшию':'búkshıý','саяхатшы':'saıahatshy','аяр':'aıar','зияндау':'zıandaý','аяң-жортаң':'aıań-jortań','вестибюль':'vestıbúl','мнемограмма':'mnemogram','авантюристік':'avantúrıstik','физиотерапия':'fızıoterapıa','жуып-шаю':'jýyp-shaıý','радист':'radıs','тотияйын':'totıaıyn','финн':'fın','диахрония':'dıahronıa','тонна':'tonna','фразеология':'frazeologıa','дедукциялау':'dedýksıalaý','кульминация':'kúlmınasıa','аммофос':'amofos','тюямунит':'túıamýnıt','училищелік':'ýchılıshelik','анаграмма':'anagram','шілтию':'shiltıý','объект':'obekt','неомифологиялық':'neomıfologıalyq','гидроэкструзия':'gıdroekstrýzıa','джип':'jıp','қилы-қиян':'qıly-qıan','қоржию':'qorjıý','ферментация':'fermentasıa','экологияландыру':'ekologıalandyrý','цитолог':'sıtolog','қарабаялыш':'qarabaıalysh','таяу':'taıaý','оюлану':'oıýlaný','ащылық':'ashshylyq','модификация':'modıfıkasıa','агробиологиялық':'agrobıologıalyq','эндокринология':'endokrınologıa','финикия':'fınıkıa','реквизиция':'rekvızısıa','джентльмен':'jentlmen','фракцияшылдық':'fraksıashyldyq','триллион':'trıllıon','когниция':'kognısıa','макропсия':'makropsıa','яшма':'ıashma','іннен-інге':'innen-inge','өңірею':'óńireıý','сүйек-саяқ':'súıek-saıaq','экотоксикология':'ekotoksıkologıa','джаз':'jaz','кіжірею':'kijireıý','дивизия':'dıvızıa','виски':'vıskı','аяқасты':'aıaqasty','гипотония':'gıpotonıa','сарымия':'sarymıa','ықтиярлы':'yqtıarly','популист':'popýlıs','археологиялық':'arheologıalyq','қойтұяқ':'qoıtuıaq','тиянақтану':'tıanaqtaný','агроэкология':'agroekologıa','аяқты':'aıaqty','ырыссыз':'yryssyz','медпункт':'medpýnkt','голографиялық':'golografıalyq','балпию':'balpıý','авиатрасса':'áýejol','үңірею':'úńireıý','тоннаж':'tonnaj','территориялық':'terıtorıalyq','реваншист':'revanshıs','тиянақты':'tıanaqty','зоолог':'zoolog','пассивтік':'pasıvtik','обсерватория':'observatorıa','фотоэтюд':'fotoetúd','қаяудай':'qaıaýdaı','құяң':'quıań','тюбингілік':'túbıńgilik','атпақияр':'atpaqıar','жанқияр':'janqıar','бассүйексіздер':'bassúıeksizder','көкшию':'kókshıý','этимология':'etımologıa','парфюмериялық':'parfúmerıalyq','қоянжырық':'qoıanjyryq','амнезия':'amnezıa','декорация':'dekorasıa','бақшыраю':'baqshyraıý','коалиция':'koalısıa','алюминат':'alúmınat','маялату':'maıalatý','венеролог':'venerolog','комменсализм':'komensalızm','вариолдар':'varıoldar','ояңдату':'oıańdatý','эвакуация':'evakýasıa','тою':'toıý','гаплология':'gaplologıa','жеңіліссіз':'jeńilissiz','комедиялық':'komedıalyq','рентгенологиялық':'rentgenologıalyq','бауыраяқтылар':'baýyraıaqtylar','аккумуляторшы':'akýmýlátorshy','имидж':'ımıj','репарациялық':'reparasıalyq','автоаялдама':'avtoaıaldama','гравиметриялық':'gravımetrıalyq','педикюр':'pedıkúr','инкассация':'ınkasasıa','интервенция':'ıntervensıa','гидробиология':'gıdrobıologıa','консалтинг':'konsaltıń','рефракция':'refraksıa','кавалерист':'kavalerıs','тікию':'tikıý','ащыот':'ashshyot','юзер':'ıýzer','гвардия':'gvardıa','микромаркетинг':'mıkromarketıń','шоқаю':'shoqaıý','аккумуляция':'akýmýlásıa','эмоциялылық':'emosıalylyq','эссе':'esse','рубль':'rúbl','фантазия':'fantazıa','баяулану':'baıaýlaný','диалог':'dıalog','поляк':'polák','іссіз':'issiz','бағдар-баян':'baǵdar-baıan','артиллерияшы':'artılerıashy','артиллериялық':'artılerıalyq','публицист':'pýblısıs','даярлану':'daıarlaný','аяң-жортақ':'aıań-jortaq','флювиогляциалдық':'flúvıoglásıaldyq','барилалия':'barılalıa','радиоспектроскопия':'radıospektroskopıa','эмпирия':'empırıa','шөлқияқ':'shólqıaq','вегетерианшылық':'vegeterıanshylyq','ұзыннан-ұзақ':'uzynnan-uzaq','асимметрия':'asımetrıa','аллерголог':'alergolog','ладья':'ladıa','баротерапия':'baroterapıa','ақпатаяқ':'aqpataıaq','демаркациялау':'demarkasıalaý','империалист':'ımperıalıs','көл-дария':'kól-darıa','қылмию':'qylmıý','капитуляция':'kapıtýlásıa','жаюлы':'jaıýly','диссимиляция':'dısımılásıa','түксірею':'túksireıý','компрессор':'kompresor','идеологиялық':'ıdeologıalyq','акарология':'akarologıa','контаминация':'kontamınasıa','вальс':'váls','тақияшаң':'taqıashań','бұлтарыссыз':'bultaryssyz','кассалық':'kasalyq','баяғыда':'baıaǵyda','гидрометеорологиялық':'gıdrometeorologıalyq','грация':'grasıa','арамсояу':'aramsoıaý','калькулятор':'kálkýlátor','фантазиялау':'fantazıalaý','энзимология':'enzımologıa','жезтұяқ':'jeztuıaq','дабыраю':'dabyraıý','метролог':'metrolog','баяғыдағы':'baıaǵydaǵy','альтруизм':'áltrýızm','жанқиярлық':'janqıarlyq','жағдаяттық':'jaǵdaıattyq','шипая':'shıpaıa','полигонометрия':'polıgonometrıa','метеорография':'meteorografıa','училище':'ýchılıshe','сұстию':'sustıý','құсария':'qusarıa','атолл':'atol','неврология':'nevrologıa','құю':'quıý','эксплозиялық':'eksplozıalyq','күрекаяқты':'kúrekaıaqty','объектілік':'obektilik','крест':'kres','дискриминациялау':'dıskrımınasıalaý','юниор':'ıýnıor','вербалды':'verbaldy','көкаяздану':'kókaıazdaný','экспедиция':'ekspedısıa','мәссаған':'mássaǵan','ашадды':'ashaddy','шекию':'shekıý','лимнология':'lımnologıa','неопаллиум':'neopalıým','аудиенция':'aýdıensıa','аэрология':'aerologıa','проторенессанс':'protorenesans','тұрнияз':'turnıaz','комиссар':'komısar','коммунар':'komýnar','радиожурналист':'radıojýrnalıs','гетерограмма':'geterogram','мұңаю':'muńaıý','көкпияз':'kókpıaz','идеограмма':'ıdeogram','аяқтау':'aıaqtaý','таяздану':'taıazdaný','тақиядай':'taqıadaı','химияландыру':'hımıalandyrý','теогония':'teogonıa','теориялық':'teorıalyq','биоценология':'bıosenologıa','деформациялық':'deformasıalyq','саясатшы':'saıasatshy','тойтию':'toıtıý','қайқию':'qaıqıý','милитаризация':'mılıtarızasıa','суспензия':'sýspenzıa','дәлию':'dálıý','қозапая':'qozapaıa','троллейбус':'troleıbýs','қоқию':'qoqıý','қоғамдық-саяси':'qoǵamdyq-saıası','идеалист':'ıdealıs','кокцидия':'koksıdıa','даярлықсыз':'daıarlyqsyz','коммивояжер':'komıvoıajer','сиякөк':'sıakók','физиологиялық':'fızıologıalyq','топологиялық':'topologıalyq','фонографиялық':'fonografıalyq','агломерациялық':'aglomerasıalyq','ваттық':'vattyq','оятқыш':'oıatqysh','қыңыраю':'qyńyraıý','футурист':'fýtýrıs','феноменология':'fenomenologıa','кюритерапия':'kúrıterapıa','тікшию':'tikshıý','саясаткер':'saıasatker','электрхимиялық':'elektrhımıalyq','калория':'kalorıa','оффшорлық':'ofshorlyq','эволюционист':'evolúsıonıs','вирус':'vırýs','аярсу':'aıarsý','талтию':'taltıý','сейсмолог':'seısmolog','гамма-функция':'gamma-fýnksıa','батиметриялық':'batımetrıalyq','ауремия':'aýremıa','мифологиядай':'mıfologıadaı','агрономиялық':'agronomıalyq','кают-компания':'kaıýt-kompanıa','шидию':'shıdıý','конгресс':'kongres','вадоз':'vadoz','шанжию':'shanjıý','палеогеография':'paleogeografıa','культивациялық':'kúltıvasıalyq','маятник':'maıatnık','пияла':'pıala','виза':'vıza','ноктюрн':'noktúrn','аюдайын':'aıýdaıyn','палеонтологиялық':'paleontologıalyq','қаратұяқ':'qaratuıaq','тыраю':'tyraıý','аннексия':'aneksıa','үюлі':'úıýli','саммит':'samıt','тарақия':'taraqıa','аялдаттыру':'aıaldattyrý','партиясыздық':'partıasyzdyq','компакт-диск':'kompakt-dısk','валюта':'valúta','саяттату':'saıattatý','аппендикулярия':'apendıkýlárıa','аяңдату':'aıańdatý','антерринум':'anterıným','ояздау':'oıazdaý','ассигнация':'asıgnasıa','перинатология':'perınatologıa','электркоагуляция':'elektrkoagýlásıa','саяткерлік':'saıatkerlik','үзіліссіз':'úzilissiz','шұқшию':'shuqshıý','тыюсыз':'tyıýsyz','аяқартқыш':'aıaqartqysh','увертюра':'ývertúra','мультипликациялық':'múltıplıkasıalyq','ащылы-тұщылы':'ashshyly-tushshyly','әкірею':'ákireıý','макроассемблер':'makroasembler','әуенавигация':'áýenavıgasıa','инерция':'ınersıa','миллиметр':'mıllımetr','іссапар':'issapar','зиянсыз':'zıansyz','қиялдану':'qıaldaný','бөгеліссіз':'bógelissiz','спираль':'spırál','ұябасар':'uıabasar','радиостудия':'radıostýdıa','локация':'lokasıa','апробациялау':'aprobasıalaý','король':'kоról','сессия':'sesıa','режиссерлік':'rejıserlik','аяқбәйге':'aıaqbáıge','өріссіз':'órissiz','баялды':'baıaldy','үлессіз':'úlessiz','жолдассыну':'joldassyný','имию':'ımıý','таңқию':'tańqıý','альюмель':'alúmel','венчур':'venchýr','прессинг':'presıń','материя':'materıa','кетию':'ketıý','волюнтативтік':'volúntatıvtik','партия':'partıa','қоянжүзген':'qoıanjúzgen','кампания':'kampanıa','құпиялылық':'qupıalylyq','пурист':'pýrıs','құссүзек':'qussúzek','ықтиярхат':'yqtıarhat','ямайлық':'ıamaılyq','теософия':'teosofıa','түюлі':'túıýli','аяқтандыру':'aıaqtandyrý','арахнология':'arahnologıa','аусию':'aýsıý','шұнтию':'shuntıý','экспедициялық':'ekspedısıalyq','жантаю':'jantaıý','тесірею':'tesireıý','ванилин':'vanılın','гидрогеометрия':'gıdrogeometrıa','жылтию':'jyltıý','экстраполяция':'ekstrapolásıa','агглютинативтік':'aglútınatıvtik','фальцет':'fálset','геоэкология':'geoekologıa','миясыз':'mıasyz','атрофия':'atrofıa','жампию':'jampıý','коммунистік':'komýnıstik','иіссу':'ıissý','қияқшы':'qıaqshy','агрессияшылдық':'agresıashyldyq','разрядталу':'razrádtelý','энциклопедиялық':'ensıklopedıalyq','композиция':'kompozısıa','белудж':'belýj','сықию':'syqıý','инжиниринг':'ınjınırıń','хиромантия':'hıromantıa','тоятсыз':'toıatsyz','бүгжию':'búgjıý','қиқоя':'qıqoıa','вольфрамит':'vólframıt','репродукция':'reprodýksıa','бинокулярлық':'bınokýlárlyq','телевизия':'televızıa','ой-қиял':'oı-qıal','миссионерлік':'mısıonerlik','баяулық':'baıaýlyq','бюллетень':'búleten','тұяқсыз':'tuıaqsyz','инфантерия':'ınfanterıa','миллиграмдау':'mıllıgramdaý','қояншық':'qoıanshyq','полиметалл':'polımetal','империялық':'ımperıalyq','инерциялық':'ınersıalyq','оппортунист':'oportýnıs','гидроавиация':'gıdroavıasıa','аллегория':'alegorıa','трансмиссия':'transmısıa','олимпиялық':'olımpıalyq','ақыраю':'aqyraıý','лицензиясыз':'lısenzıasyz','генеалогия':'genealogıa','жарияшы':'jarıashy','окказионал':'okazıonal','сценарий':'senarı','геронтократия':'gerontokratıa','мүфтият':'múftıat','пропорциялы':'proporsıaly','ұялу':'uıalý','валенттік':'valenttik','қиямет':'qıamet','акт':'akt','телетранслятор':'teletranslátor','эпопея':'epopeıa','трилогия':'trılogıa','торсию':'torsıý','коллектор':'kolektor','тіксию':'tiksıý','идеолог':'ıdeolog','аядай':'aıadaı','велосипед':'velosıped','бедірею':'bedireıý','гидрометеоролог':'gıdrometeorolog','авантюризм':'avantúrızm','дедукциялық':'dedýksıalyq','идеясыздық':'ıdeıasyzdyq','ою-өрнек':'oıý-órnek','кювет':'kúvet','библиографиялық':'bıblıografıalyq','экструзиялық':'ekstrýzıalyq','состию':'sostıý','аэротерапия':'aeroterapıa','пассионар':'pasıonar','винил':'vınıl','саптаяқтай':'saptaıaqtaı','большевизм':'bо́lshevızm','биоклиматология':'bıoklımatologıa','бадиян':'badıan','жаяужарыс':'jaıaýjarys','ромб':'romb','маңқию':'mańqıý','иіссіз':'ıissiz','баянсыз':'baıansyz','қоян-қолтық':'qoıan-qoltyq','буынаяқтылар':'býynaıaqtylar','славянтану':'slavántaný','альтрон':'áltron','микрофотография':'mıkrofotografıa','кіржию':'kirjıý','баратрия':'baratrıa','прогресс':'progres','метрология':'metrologıa','палеонтолог':'paleontolog','ферроқорытпа':'feroqorytpa','аюжүнді':'aıýjúndi','тәуірмия':'táýirmıa','шелтию':'sheltıý','байланыссыз':'baılanyssyz','коньки':'kónkı','аяң':'aıań','қалтию':'qaltıý','миелобласт':'mıeloblas','миятсыз':'mıatsyz','желмаяша':'jelmaıasha','далдию':'daldıý','баттерфляй':'baterfláı','рентгенотерапия':'rentgenoterapıa','бальнеология':'bálneologıa','аяңшыл':'aıańshyl','палеогеоморфология':'paleogeomorfologıa','операцияаралық':'operasıaaralyq','менеджмент':'menedjment','металлофон':'metalofon','үнжариялық':'únjarıalyq','аянпаз':'aıanpaz','флотилия':'flotılıa','пост':'post','антенналы':'antenaly','аяққұйрықтылар':'aıaqquıryqtylar','қыржию':'qyrjıý','декорациялық':'dekorasıalyq','инкассатор':'ınkasator','демография':'demografıa','инвестиция':'ınvestısıa','айылқияқ':'aıylqıaq','бояуүккіш':'boıaýúkkish','комплексонометрия':'kompleksonometrıa','афазия':'afazıa','литургия':'lıtýrgıa','вафлипісіргіш':'vaflıpisirgish','сықсыраю':'syqsyraıý','экскурсия':'ekskýrsıa','шадыраю':'shadyraıý','конфессияаралық':'konfesıaaralyq','тақыссыз':'taqyssyz','фенокопия':'fenokopıa','велошабандоз':'veloshabandoz','циркуль':'sırkúl','балладалық':'balladalyq','вегетация':'vegetasıa','стилист':'stılıs','асфальтит':'asfáltıt','дискриминациялық':'dıskrımınasıalyq','вульфенит':'vúlfenıt','коллоид':'koloıd','тиксотропия':'tıksotropıa','монархист':'monarhıs','жалқаяқтай':'jalqaıaqtaı','дипломатия':'dıplomatıa','вирусолог':'vırýsolog','терминологиялық':'termınologıalyq','аллергология':'alergologıa','пацифист':'pasıfıs','редукция':'redýksıa','таяқ':'taıaq','шаяндай':'shaıandaı','поляр':'polár','пиктограмма':'pıktogram','үрпию':'úrpıý','урология':'ýrologıa','ротация':'rotasıa','қоянжұт':'qoıanjut','сюзерен':'súzeren','грильяж':'grıláj','құшып-сүю':'qushyp-súıý','бульдог':'búldog','гинекология':'gınekologıa','осциллографиялық':'osılografıalyq','бюрократизм':'búrokratızm','мотофелюга':'motofelúga','микробактерия':'mıkrobakterıa','қушию':'qýshıý','жалаңаяқтық':'jalańaıaqtyq','геология':'geologıa','радиациялық':'radıasıalyq','категориялы':'kategorıaly','глоттогения':'glotogenıa','шоңқию':'shońqıý','қоян-қолтықтасу':'qoıan-qoltyqtasý','бумеранг':'býmerań','комиссия':'komısıa','қамыссырнай':'qamyssyrnaı','биогеографиялық':'bıogeografıalyq','телескопия':'teleskopıa','посткоммунистік':'postkomýnıstik','аргиллит':'argılıt','тайтұяқ':'taıtuıaq','фотообъектив':'fotoobektıv','зоологиялық':'zoologıalyq','вексель':'veksel','факторинг':'faktorıń','комедия':'komedıa','тренинг':'trenıń','шойқию':'shoıqıý','реалист':'realıs','аппликация':'aplıkasıa','реминисценция':'remınısensıa','вестерндену':'vesterndený','безаяқ':'bezaıaq','микроклиматология':'mıkroklımatologıa','геометрия':'geometrıa','қоян':'qoıan','антрополог':'antropolog','сиясауыт':'sıasaýyt','фарияд':'farıad','монополияландыру':'monopolıalandyrý','мобилизация':'mobılızasıa','миллимикрон':'mıllımıkron','монопсония':'monopsonıa','аңқаю':'ańqaıý','құмқияқ':'qumqıaq','осциллограф':'osılograf','компьютерлі':'kompúterli','баронесса':'baronesa','филокартия':'fılokartıa','ояту':'oıatý','аяласу':'aıalasý','әлейкүмассалам':'áleıkúmassalam','супияз':'sýpıaz','мультипликация':'múltıplıkasıa','мумиядай':'mýmıadaı','бемоль':'bemól','джентльмендік':'jentlmendik','сюрреалист':'súrealıs','аяқастынан':'aıaqastynan','сульфат':'súlfat','эмбриология':'embrıologıa','аммофосшы':'amofosshy','гипогликемия':'gıpoglıkemıa','микрокомпьютер':'mıkrokompúter','божбию':'bojbıý','голландиялық':'golandıalyq','диалектология':'dıalektologıa','пульс':'púls','дорбию':'dorbıý','вегетериандық':'vegeterıandyq','профессор':'profesor','вебер':'veber','генерал-адъютант':'general-adútant','қиюластыру':'qıýlastyrý','жаннаттай':'jannattaı','сақию':'saqıý','полисемия':'polısemıa','фестиваль':'festıvál','аттракцион':'atraksıon','гидрология':'gıdrologıa','аллалау':'allalaý','мумия':'mýmıa','анестезиолог':'anestezıolog','милитаризациялау':'mılıtarızasıalaý','ядкар':'ıadkar','голограмма':'gologramm','кілбию':'kilbıý','голография':'golografıa','барщина':'barshına','аяулау':'aıaýlaý','целлофан':'selofan','аурикулярия':'aýrıkýlárıa','географиялық':'geografıalyq','философиялық':'fılosofıalyq','тасқаяқшы':'tasqaıaqshy','авиамодельші':'avıamodelshi','гематология':'gematologıa','түйін-компьютер':'túıin-kompúter','альбом':'álbom','траекториялық':'traektorıalyq','ревизионист':'revızıonıs','ядролық':'ıadrolyq','альманах':'álmanah','боялу':'boıalý','мобилизациялану':'mobılızasıalaný','қоянтәрізділер':'qoıantárizdiler','эпиляция':'epılásıa','вольтті':'vóltti','қояр-қоймастан':'qoıar-qoımastan','фонология':'fonologıa','теннисші':'tenısshi','шыбыртқыаяқты':'shybyrtqyaıaqty','дактилоскопиялық':'daktıloskopıalyq','атаксия':'ataksıa','толассыз':'tolassyz','клиринг':'klırıń','теллуридтер':'telýrıdter','таяқтау':'taıaqtaý','шлямбур':'shlámbýr','окклюзия':'oklúzıa','аускультациялық':'aýskúltasıalyq','миграция':'mıgrasıa','сораю':'soraıý','фразеография':'frazeografıa','кавалериялық':'kavalerıalyq','фототерапия':'fototerapıa','гидролог':'gıdrolog','юнкер':'ıýnker','муссурана':'mýsýrana','филлит':'fılıt','қылаяқ':'qylaıaq','томпию':'tompıý','мониторинг':'monıtorıń','нарцисс':'narsıs','оккупациялану':'okýpasıalaný','капиталист':'kapıtalıs','термохимиялық':'termohımıalyq','алыссыну':'alyssyný','элювий':'elúvı','гетерография':'geterografıa','океанология':'okeanologıa','шезлонг':'shezloń','лоторея':'lotoreıa','субвенция':'sýbvensıa','таяздату':'taıazdatý','ықтиятты':'yqtıatty','қаярлық':'qaıarlyq','декларациялық':'deklarasıalyq','бактериялық':'bakterıalyq','магнитобиология':'magnıtobıologıa','анимация':'anımasıa','индукциялы':'ındýksıaly','асфальт':'asfált','тисса':'tısa','альвеококк':'alveokok','мыржию':'myrjıý','грамматикалық':'gramatıkalyq','миниатюра':'mınıatúra','цинкография':'sınkografıa','листинг':'lıstıń','вассал':'vasal','томарқияқ':'tomarqıaq','биолокация':'bıolokasıa','қатаю':'qataıý','өмірзая':'ómirzaıa','грамм-эквивалент':'gram-ekvıvalent','синдикалист':'sındıkalıs','оюлату':'oıýlatý','эмпатия':'empatıa','натурфилософиялық':'natýrfılosofıalyq','естиярлану':'estıarlaný','ринг':'rıng','таяқтай':'taıaqtaı','гносеология':'gnoseologıa','тригонометриялық':'trıgonometrıalyq','төстию':'tóstıý','академиялық':'akademıalyq','сейсмография':'seısmografıa','разрядтық':'razrádtik','морфография':'morfografıa','неофазия':'neofazıa','пресс-конференция':'pres-konferensıa','неоцеребеллум':'neoserebelým','фальц':'fáls','экопсихология':'ekopsıhologıa','аяқ-табақты':'aıaq-tabaqty','тәштию':'táshtıý','джерси':'jersı','тымыраю':'tymyraıý','менингококк':'menıngokok','портьера':'portera','вице-премьер':'vıse-premer','саяз':'saıaz','аязды':'aıazdy','жолаяқ':'jolaıaq','процессор':'prosesor','якудза':'ıakýdza','факультатив':'fakúltatıv','психопатия':'psıhopatıa','тыюлы':'tyıýly','термокарст':'termokars','артерия':'arterıa','материялық':'materıalyq','цитоэкология':'sıtoekologıa','ояну':'oıaný','ометр':'ometr','көнтию':'kóntıý','экосаяси':'ekosaıası','гипюр':'gıpúr','трансляция':'translásıa','редакция':'redaksıa','агроэкологиялық':'agroekologıalyq','эколог':'ekolog','аллохтон':'alohton','аутэкология':'aýtekologıa','вахтёр':'vahtór','геологиялық':'geologıalyq','капелла':'kapela','адмиралиссимус':'admıralısımýs','мая':'maıa','радиогеология':'radıogeologıa','гольф':'gólf','бюрократиясыздандыру':'búrokratıasyzdandyrý','рояль':'roıál','эвритермия':'evrıtermıa','құршаян':'qurshaıan','экскурсиялық':'ekskýrsıalyq','зияндас':'zıandas','шемая':'shemaıa','блюминг':'blúmıń','геолог':'geolog','сөмпию':'sómpıý','миллиграмм':'mıllıgram','махаббат':'mahabbat','урбаэкология':'ýrbaekologıa','десорбция':'desorbsıa','төссіз':'tóssiz','бұдырмия':'budyrmıa','жедді':'jeddi','пароль':'parо́l','вольттік':'vólttik','демобилизациялану':'demobılızasıalaný','тақыраю':'taqyraıý','жалпию':'jalpıý','стенографист':'stenografıs','вольфрам':'vólfram','аббревиатура':'abrevıatýra','компьютерлендіру':'kompúterlendirý','лоббистік':'lobıstik','табыссыздық':'tabyssyzdyq','оккупациялық':'okýpasıalyq','ультра':'últra','риялы':'rıaly','бояусыз':'boıaýsyz','мықыраю':'myqyraıý','невропатолог':'nevropatolog','кобальт':'kоbált','пневмококк':'pnevmokok','құлқуалла':'qulqýalla','джиу-джитсу':'jıý-jıtsý','хронолог':'hronolog','аязсымақ':'aıazsymaq','абляция':'ablásıa','арабист':'arabıs','баянжазба':'baıanjazba','жариялаушы':'jarıalaýshy','типография':'tıpografıa','басаяқтылар':'basaıaqtylar','аллеялы':'aleıaly','қияш':'qıash','қоянқарта':'qoıanqarta','боссораң':'bossorań','альпинист':'álpınıs','полифониялық':'polıfonıalyq','фуксия':'fýksıa','әския':'áskıa','целлюлоза':'selúloza','борбию':'borbıý','бортию':'bortıý','корректура':'korektýra','эллинизм':'elınızm','зияткерлік':'zıatkerlik','радиотерапия':'radıoterapıa','мияу-мияу':'mıaý-mıaý','қиябет':'qıabet','талтаю':'taltaıý','акция':'aksıa','библиография':'bıblıografıa','алааяқтық':'alaaıaqtyq','монументалист':'monýmentalıs','бридж':'brıj','оттоманизм':'otomanızm','сентименталист':'sentımentalıs','диверсиялық-барлаушылық':'dıversıalyq-barlaýshylyq','аллеясыз':'aleıasyz','дивизиялық':'dıvızıalyq','жаяу':'jaıaý','тиянақтау':'tıanaqtaý','желмая':'jelmaıa','профессорлық':'profesorlyq','петиция':'petısıa','маяна':'maıana','парфюмерші':'parfúmershi','мұздаяқ':'muzdaıaq','қию':'qıý','барристер':'barıster','балшию':'balshıý','резервист':'rezervıs','хоккейші':'hokeıshi','ассимиляциялау':'asımılásıalaý','сүмпию':'súmpıý','бұра-саяқ':'bura-saıaq','қидию':'qıdıý','намыссыздық':'namyssyzdyq','пессимист':'pesımıs','авторитарлық-бюрократиялық':'avtorıtarlyq-búrokratıalyq','гектоватт':'gektovatt','киносаяхат':'kınosaıahat','сақсию':'saqsıý','фотографиялау':'fotografıalaý','патергазия':'patergazıa','бояулану':'boıaýlaný','ингаляция':'ıngalásıa','волютин':'volútın','саяхаттау':'saıahattaý','полиция':'polısıa','миялау':'mıalaý','диск':'dısk','ют':'ıýt','терригендік':'terıgendik','талассыз':'talassyz','структуралист':'strýktýralıs','қоянтобық':'qoıantobyq','оккупация':'okýpasıa','баяулаңқырау':'baıaýlańqyraý','ащы-тәтті':'ashshy-tátti','литология':'lıtologıa','патиссон':'patıson','мифолог':'mıfolog','демаркация':'demarkasıa','ащыласу':'ashshylasý','палеозоологиялық':'paleozoologıalyq','тиянақсыздық':'tıanaqsyzdyq','батареялы':'batareıaly','миологиялық':'mıologıalyq','ассимиляция':'asımılásıa','коряк':'korák','долларшыл':'dollarshyl','астрономия':'astronomıa','датаграмма':'datagram','қоянаяқ':'qoıanaıaq','боссөзділік':'bossózdilik','глоттология':'glotologıa','минерагения':'mıneragenıa','брутто':'brýtto','материалист':'materıalıs','саялау':'saıalaý','интервенциялық':'ıntervensıalyq','корреспонденция':'korespondensıa','драматургия':'dramatýrgıa','радиоастрономия':'radıoastronomıa','жарбию':'jarbıý','сульфит':'súlfıt','аяластыру':'aıalastyrý','физиолог':'fızıolog','аллергия':'alergıa','қияқы':'qıaqy','бухгалтерия':'býhgalterıa','модификациялау':'modıfıkasıalaý','аялдамадай':'aıaldamadaı','монотеист':'monoteıs','текстологиялық':'tekstologıalyq','алатұяқ':'alatuıaq','акваланг':'akvalań','зиянкес':'zıankes','венерология':'venerologıa','прогрессивті':'progresıvti','гипертониялық':'gıpertonıalyq','шлюзсіз':'shlúzsiz','тайлы-таяқ':'taıly-taıaq','террарий':'terarı','дифференциация':'dıferensıasıa','педиатриялық':'pedıatrıalyq','вербалдану':'verbaldaný','юнга':'ıýnga','қосжұпаяқты':'qosjupaıaqty','тираннозавр':'tıranozavr','ғылыми-теориялық':'ǵylymı-teorıalyq','бақтияр':'baqtıar','аутопсия':'aýtopsıa','жаясыз':'jaıasyz','үлкею':'úlkeıý','өріссіздік':'órissizdik','боян':'boıan','фтизиатрия':'ftızıatrıa','периферия':'perıferıa','аялдауыш':'aıaldaýysh','модернизация':'modernızasıa','қияпат':'qıapat','коэффициенттік':'koefısıenttik','диссимиляциялану':'dısımılásıalaný','метеорология':'meteorologıa','брошюра':'broshúra','эгопсихология':'egopsıhologıa','габбро-амфиболит':'gabro-amfıbolıt','макропроцессор':'makroprosesor','оқшию':'oqshıý','гирудотерапия':'gırýdoterapıa','латифундист':'latıfýndıs','жалқаяқ':'jalqaıaq','оптимист':'optımıs','интерференция':'ınterferensıa','аяқарба':'aıaqarba','аялдату':'aıaldatý','түюсіз':'túıýsiz','палеомагнитология':'paleomagnıtologıa','тояттану':'toıattaný','геморрой':'gemoroı','оппоненттік':'oponenttik','жаяужол':'jaıaýjol','валокордин':'valokordın','антимонополиялық':'antımonopolıalyq','қапия':'qapıa','қол-аяғы':'qol-aıaǵy','мөлию':'mólıý','тотию':'totıý','гуляш':'gýlásh','артель':'artel','сұм-сұрқия':'sum-surqıa','итаяқ':'ıtaıaq','фракиялықтар':'frakıalyqtar','рияландыру':'rıalandyrý','алхимияшылдар':'alhımıashyldar','анизотропия':'anızotropıa','океанолог':'okeanolog','линогравюра':'lınogravúra','милливольт':'mıllıvolt','валериан':'valerıan','премьера':'premera','миопатия':'mıopatıa','букинист':'býkınıs','ұяңдық':'uıańdyq','қоянқұлақ':'qoıanqulaq','шарқая':'sharqaıa','ләббай':'lábbaı','түп-тұқиян':'túp-tuqıan','биязылау':'bıazylaý','технофобия':'tehnofobıa','шүртию':'shúrtıý','габбро-порфирит':'gabro-porfırıt','қиянат-зұлымдық':'qıanat-zulymdyq','үнжария':'únjarıa','қайқаю':'qaıqaıý','аңыраю':'ańyraıý','ведомстволық':'vedimistik','баяулату':'baıaýlatý','тюбинг':'túbıń','вице-консул':'vıse-konsýl','аппараттық':'aparattyq','гектоватт-сағат':'gektovatt-saǵat','алхимиялық':'alhımıalyq','аккредитив':'akredıtıv','тұяқкесті':'tuıaqkesti','тетрология':'tetrologıa','микроскопия':'mıkroskopıa','гомогамия':'gomogamıa','нутациялық':'nýtasıalyq','гамма-сәуле':'gamma-sáýle','картографиялық':'kartografıalyq','апперкот':'aperkot','геоморфологиялық':'geomorfologıalyq','шлюзді':'shlúzdi','туффит':'týfıt','яхта':'ıahta','бойдақ-саяқ':'boıdaq-saıaq','ағашаяқ':'aǵashaıaq','пиязгүл':'pıazgúl','сидию':'sıdıý','криминалист':'krımınalıs','мұддаға':'muddaǵa','жылмыраю':'jylmyraıý','дүрия':'dúrıa','бельтинг':'beltıń','конспект':'konspekt','сыбыссыз':'sybyssyz','қияңқы':'qıańqy','реквизициялау':'rekvızısıalaý','полярлану':'polárlaný','ықылассыздау':'yqylassyzdaý','ингаляциялау':'ıngalásıalaý','естиярлау':'estıarlaý','анестезиология':'anestezıologıa','антимонополия':'antımonopolıa','тию':'tıý','шаңқию':'shańqıý','ампутация':'ampýtasıa','төсекаяқ':'tósekaıaq','алло':'alo','вице-канцлер':'vıse-kansler','хронологиялық':'hronologıalyq','филармониялық':'fılarmonıalyq','ассонанс':'asonans','космогониялық':'kosmogonıalyq','ыржию':'yrjıý','гамма':'gamma','вокализм':'vokalızm','таянышсыз':'taıanyshsyz','қақшию':'qaqshıý','дамолла':'damola','голланд':'goland','арман-қиял':'arman-qıal','валторна':'valtorna','боянып-тарану':'boıanyp-taraný','қия-таулы':'qıa-taýly','элегия':'elegıa','көппартиялы':'kóppartıaly','ықтият':'yqtıat','фолликулит':'folıkýlıt','диффузия':'dıfýzıa','гидрометриялық':'gıdrometrıalyq','шаянот':'shaıanot','аяқтаусыз':'aıaqtaýsyz','құржию':'qurjıý','гемералопия':'gemeralopıa','кеще':'keshshe','қайрият':'qaırıat','эпизоотия':'epızootıa','социалист':'sosıalıs','итальян':'ıtalán','пневмония':'pnevmonıa','бальзамин':'bálzamın','ащылау':'ashshylaý','металлоид':'metaloıd','бассыз':'bassyz','резолюция':'rezolúsıa','қоссырнай':'qossyrnaı','этимолог':'etımolog','холл':'hol','саяқ':'saıaq','варианттық':'varıanttyq','япыр-ай':'ıapyr-aı','түю':'túıý','тосыннан-тосын':'tosynnan-tosyn','жал-жая':'jal-jaıa','трюм':'trúm','валорлану':'valorlaný','аэрофототопография':'aerofototopografıa','марксист':'marksıs','френология':'frenologıa','теократиялық':'teokratıalyq','аялдай':'aıaldaı','иммунитет':'ımýnıtet','диссертациялық':'dısertasıalyq','тонналау':'tonnalaý','бұлтию':'bultıý','пәсею':'páseıý','амузия':'amýzıa','әлеуметтік-психологиялық':'áleýmettik-psıhologıalyq','қосаяқша':'qosaıaqsha','әдді':'áddi','экстрадация':'ekstradasıa','пропорциялық':'proporsıalyq','урядник':'ýrádnık','жаяулау':'jaıaýlaý','ұялту':'uıaltý','шүршию':'shúrshıý','агрометеорология':'agrometeorologıa','қитию':'qıtıý','дискриминация':'dıskrımınasıa','протозоология':'protozoologıa','қаярсу':'qaıarsý','экосаясаттану':'ekosaıasattaný','тьютор':'tútor','беллетрист':'beletrıs','тұщытқыш':'tushshytqysh','тәутию':'táýtıý','боулинг':'boýlıń','сая':'saıa','ономатология':'onomatologıa','едірею':'edireıý','жаю':'jaıý','ызу-қию':'yzý-qıý','тыңтұяқ':'tyńtuıaq','қаяр':'qaıar','аяқ-қолы':'aıaq-qoly','галактоземия':'galaktozemıa','сапиян':'sapıan','фланг':'flań','тызғаяқтау':'tyzǵaıaqtaý','импульс':'ımpúls','репродукциялық':'reprodýksıalyq','классик':'klasık','апробация':'aprobasıa','жалғызаяқ':'jalǵyzaıaq','қисса':'qıssa','зая':'zaıa','траншея':'transheıa','таяқсыз':'taıaqsyz','қоянжын':'qoıanjyn','бессайыс':'bessaıys','буынаяқты':'býynaıaqty','репарация':'reparasıa','дая':'daıa','глоттогениялық':'glotogenıalyq','координация':'koordınasıa','перпендикуляр':'perpendıkýlár','микрооперация':'mıkrooperasıa','шаялану':'shaıalaný','фонография':'fonografıa','кассирлік':'kasırlik','террамицин':'teramısın','теннис':'tenıs','гинеколог':'gınekolog','өң-түссіз':'óń-tússiz','тақия':'taqıa','қоспартиялық':'qospartıalyq','яһудилік':'ıahýdılik','альянс':'aláns','гидрологиялық':'gıdrologıalyq','аккордтық':'akordtyq','түссіз':'tússiz','аметист':'ametıs','ортаазиялық':'ortaazıalyq','нигилист':'nıgılıs','аллотропия':'alotropıa','ғақлия':'ǵaqlıa','масаю':'masaıý','аялану':'aıalaný','полисемиялы':'polısemıaly','волюнтаристік':'volúntarıstik','айрию':'aırıý','сия':'sıa','сиябүріккіш':'sıabúrikkish','жарыссөз':'jaryssóz','пункция':'pýnksıa','сұрқия':'surqıa','аюдай':'aıýdaı','айтұяқ':'aıtuıaq','ықтиярсыздық':'yqtıarsyzdyq','тырсию':'tyrsıý','қоянбеде':'qoıanbede','гратификация':'gratıfıkasıa','агрессиялық':'agresıalyq','құпияшыл':'qupıashyl','лемминг':'lemmıń','қоссайыс':'qossaıys','альмандин':'álmandın','ұзаю':'uzaıý','дюшес':'dúshes','ноян':'noıan','бәдия':'bádıa','комиссарлық':'komısarlyq','кинорежиссёр':'kınorejısór','резервация':'rezervasıa','биопсия':'bıopsıa','гидрометрия':'gıdrometrıa','авиация':'avıasıa','пресс-бюро':'pres-búro','сарысояу':'sarysoıaý','бюро':'búro','модельер':'modeler','микромиллиметр':'mıkromıllımetr','литургиялық':'lıtýrgıalyq','вариациялану':'varıasıalaný','нармия':'narmıa','яки':'ıakı','молаю':'molaıý','геотехнологиялық':'geotehnologıalyq','демобилизация':'demobılızasıa','қоңқию':'qońqıý','микроассамблер':'mıkroasambler','кумулятивтік':'kýmýlátıvtik','шаялық':'shaıalyq','шатқаяқтау':'shatqaıaqtaý','реверсия':'reversıa','тератология':'teratologıa','иррационал':'ırasıonal','маймию':'maımıý','бұрылыссыз':'burylyssyz','аяқсу':'aıaqsý','алтын-валюта':'altyn-valúta','глоссарий':'glosarı','таяқтату':'taıaqtatý','терренкур':'terenkýr','вольтметр':'vóltmetr','автомобильші':'avtomobılshi','гравюралау':'gravúralaý','қаңыраю':'qańyraıý','пафоссыз':'pafossyz','зымияндану':'zymıandaný','лицензиялау':'lısenzıalaý','альтернатива':'álternatıv','тәмпию':'támpıý','ая':'aıa','пиктография':'pıktografıa','тоннадай':'tonnadaı','аппендикс':'apendıks','антипатия':'antıpatıa','интеграция':'ıntegrasıa','кооперация':'kooperasıa','акварель':'akvarel','боямашылық':'boıamashylyq','хемосорбция':'hemosorbsıa','тиянадай':'tıanadaı','бояуша':'boıaýsha','аянсыз':'aıansyz','глосса':'glosa','микрохимия':'mıkrohımıa','акватория':'akvatorıa','сояулану':'soıaýlaný','орфографиялық':'orfografıalyq','урбанизация':'ýrbanızasıa','қоңылтаяқ':'qońyltaıaq','аюжүн':'aıýjún','палеонтология':'paleontologıa','сықаяқ':'syqaıaq','лингвист':'lıngvıs','қиялдау':'qıaldaý','югославтар':'ıýgoslavtar','биогеохимиялық':'bıogeohımıalyq','хастеллой':'hasteloı','инверсиялық':'ınversıalyq','диверсиялық':'dıversıalyq','аяушылық':'aıaýshylyq','миқию':'mıqıý','сұрқиялық':'surqıalyq','славяншылдық':'slavánshildik','ұятты':'uıatty','фенологиялық':'fenologıalyq','терраса':'terasa','гамма-глобулин':'gamma-globýlın','галлий':'galı','уранография':'ýranografıa','энтомология':'entomologıa','оюлау':'oıýlaý','гаплосемия':'gaplosemıa','аянышты':'aıanyshty','апатиялық':'apatıalyq','аяқкиім':'aıaqkıim','теңаяқтылар':'teńaıaqtylar','микрометрия':'mıkrometrıa','эпидемиолог':'epıdemıolog','бювет':'búvet','оясыздық':'oıasyzdyq','аяусыздық':'aıaýsyzdyq','аяғыштық':'aıaǵyshtyq','уәллаһи':'ýállahı','уағалайкүмассалам':'ýaǵalaıkúmassalam','коммуникативтілік':'komýnıkatıvtilik','барраж':'baraj','фисгармония':'fısgarmonıa','релятивистік':'relátıvıstik','разрядтауыш':'razrádteýish','тилл':'tıl','паразитолог':'parazıtolog','дилемма':'dılem','боямасыз':'boıamasyz','ұягүл':'uıagúl','экономист':'ekonomıs','тырию':'tyrıý','баррель':'barel','яхт-клуб':'ıaht-klýb','элегист':'elegıs','көпаяқты':'kópaıaqty','мүдделі':'múddeli','хост-компьютер':'host-kompúter','разрядшы':'razrádshi','тоңыраю':'tońyraıý','ықтиятсыз':'yqtıatsyz','азаю':'azaıý','доптаяқ':'doptaıaq','экологиялық':'ekologıalyq','тыжыраю':'tyjyraıý','магнитометрия':'magnıtometrıa','ядро':'ıadro','эллипстік':'elıpstik','вице-губернатор':'vıse-gýbernator','я':'ıa','офтальмия':'oftálmıa','эвапотранспирация':'evapotranspırasıa','дефектологиялық':'defektologıalyq','бояушылық':'boıaýshylyq','әлқисса':'álqıssa','шараяқ':'sharaıaq','микроманипулятор':'mıkromanıpýlátor','қақаю':'qaqaıý','баян':'baıan','ыңқию':'yńqıý','мияулау':'mıaýlaý','такт':'takt','аят-хадис':'aıat-hadıs','делдию':'deldıý','қаялы':'qaıaly','қияпас':'qıapas','агломерация':'aglomerasıa','кросс':'kros','дарбию':'darbıý','аяқсыз':'aıaqsyz','поэзиялық':'poezıalyq','таяқталу':'taıaqtalý','тарланқияқ':'tarlanqıaq','кассация':'kasasıa','аюжылан':'aıýjylan','хронография':'hronografıa','бүксию':'búksıý','бояутозаңдатқыш':'boıaýtozańdatqysh','пияз':'pıaz','феррография':'ferografıa','аккумуляттану':'akýmýláttaný','виолончелист':'vıolonchelıs','ювенильді':'ıývenıldi','химмитология':'hımıtologıa','шойқаю':'shoıqaıý','мультфильм':'múltfılm','дермиян':'dermıan','хромолитография':'hromolıtografıa','жалтарыссыз':'jaltaryssyz','фонограмма':'fonogram','аккумуляторлы':'akýmýlátorly','мұртаяқты':'murtaıaqty','аммоний':'amonı','цитологиялық':'sıtologıalyq','ұялау':'uıalaý','ескекаяқ':'eskekaıaq','күмпию':'kúmpıý','қиянкестік':'qıankestik','интеграциялану':'ıntegrasıalaný','таяқша':'taıaqsha','деформация':'deformasıa','даярлық':'daıarlyq','бейкоммерциялық':'beıkomersıalyq','мия':'mıa','гносеологиялық':'gnoseologıalyq','ессіздену':'essizdený','схоласт':'sholas','баялышты':'baıalyshty','дөңкию':'dóńkıý','габброидтену':'gabroıdtený','тұштию':'tushtıý','диалектолог':'dıalektolog','баяулатқыш':'baıaýlatqysh','валидол':'valıdol','құмқоян':'qumqoıan','фенология':'fenologıa','эмулятор':'emýlátor','вахталық':'vahtalyq','юглон':'ıýglon','асканиялық':'askanıalyq','аттылы-жаяулы':'attyly-jaıaýly','отоларинголог':'otolarıngolog','уезд':'ýez','аялау':'aıalaý','жамбассипар':'jambassıpar','қатыссыз':'qatyssyz','аютабан':'aıýtaban','рельеф':'relef','вайербарс':'vaıerbars','веб-сайт':'veb-saıt','бүрсию':'búrsıý','сеньор':'senor','рация':'rasıa','аярлықтай':'aıarlyqtaı','тылтию':'tyltıý','зият':'zıat','биялайдай':'bıalaıdaı','нияз':'nıaz','апелляциялық':'apelásıalyq','океанография':'okeanografıa','солпию':'solpıý','шелтірею':'sheltireıý','оятқызу':'oıatqyzý','қарааяқ':'qaraaıaq','дедукциялы':'dedýksıaly','жаһаннам':'jahannam','морфологиялық':'morfologıalyq','редакциялану':'redaksıalaný','түссіздендіру':'tússizdendirý','саясат':'saıasat','коммюнике':'komúnıke','магиялық':'magıalyq','редакциялық':'redaksıalyq','параллельдік':'paraleldik','бартию':'bartıý','пульт':'púlt','зияттық':'zıattyq','ұядай':'uıadaı','травматология':'travmatologıa','штольня':'shtólná','аяз':'aıaz','қаймию':'qaımıý','жапыраю':'japyraıý','фациялық':'fasıalyq','мелшию':'melshıý','аюқұлақ':'aıýqulaq','қызылбояу':'qyzylboıaý','ақсию':'aqsıý','металл':'metal','баяндаушылық':'baıandaýshylyq','десорбциялау':'desorbsıalaý','оятушы':'oıatýshy','латифундия':'latıfýndıa','тоңқию':'tońqıý','анархия':'anarhıa','яппи':'ıappı','есептаяқ':'eseptaıaq','кальций':'kálsı','альдегид':'áldegıd','антропологиялық':'antropologıalyq','монархиялық':'monarhıalyq','тұщылық':'tushshylyq','вагон-мейрамхана':'vagon-meıramhana','яғни':'ıaǵnı','коммутатор':'komýtator','фонация':'fonasıa','пудинг':'pýdıń','бояу':'boıaý','аюоты':'aıýoty','флюорография':'flúorografıa','хронограмма':'hronogram','артист':'artıs','аялату':'aıalatý','эпидемиология':'epıdemıologıa','мүдіріссіз':'múdirissiz','парафемия':'parafemıa','териология':'terıologıa','пролог':'prolog','мұнай-химия':'munaı-hımıa','ашатұяқ':'ashatuıaq','коммуникациялық':'komýnıkasıalyq','тартыссыз':'tartyssyz','батальон':'batalón','азиялық':'azıalyq','қаяулы':'qaıaýly','аят':'aıat','микрия':'mıkrıa','аллювий':'alúvi','аянбай':'aıanbaı','агрессия':'agresıa','күржию':'kúrjıý','эмбриолог':'embrıolog','аяздау':'aıazdaý','бальзам':'bálzam','теңдессіз':'teńdessiz','саяттық':'saıattyq','фонологиялық':'fonologıalyq','күю':'kúıý','соқию':'soqıý','патологиялық':'patologıalyq','дардию':'dardıý','хоккей':'hokeı','камер-юнкер':'kamer-únker','жымсию':'jymsıý','лауэграмма':'laýegram','боямалау':'boıamalaý','фрустрация':'frýstrasıa','аяқ-табақ':'aıaq-tabaq','биметалл':'bımetal','масс-медиа':'mass-medıa','адия':'adıa','аяныш':'aıanysh','финн-угор':'fın-ýgor','ренессанс':'renesans','конъюгация':'konúgasıa','филантропия':'fılantropıa','конфессия':'konfesıa','қия-қыр':'qıa-qyr','дыбыссыз':'dybyssyz','қосаяқтай':'qosaıaqtaı','индукциялау':'ındýksıalaý','маркетинг':'marketıń','аюқурай':'aıýqýraı','травматолог':'travmatolog','доссыну':'dossyný','ұяшық':'uıashyq','сиялау':'sıalaý','авария':'avarıa','липограмма':'lıpogram','автотурист':'avtotýrıs','тұщыландыру':'tushshylandyrý','барельеф':'barelef','васкулит':'vaskýlıt','шлюп':'shlúp','акцентуация':'aksentýasıa','жезаяқ':'jezaıaq','антология':'antologıa','марқаю':'marqaıý','акцентуациялық':'aksentýasıalyq','эмоциялық':'emosıalyq','биогеохимия':'bıogeohımıa','модулятор':'modýlátor','монофтонг':'monoftoń','ояң':'oıań','бактериятану':'bakterıataný','обсерваториялық':'observatorıalyq','заряд':'zarád','аккорд':'akord','құяқ':'quıaq','баянхат':'baıanhat','кию':'kıý','ирония':'ıronıa','радиотрансляция':'radıotranslásıa','калька':'kálka','аялсыз':'aıalsyz','пирротин':'pırotın','мияулату':'mıaýlatý','венгр':'vengr','госпиталь':'gospıtál','лексикологиялық':'leksıkologıalyq','саптаяқ':'saptaıaq','дзюдо':'dzúdo','партияшыл':'partıashyl','тыңқию':'tyńqıý','полиграфия':'polıgrafıa','көмпию':'kómpıý','шермию':'shermıý','аямпаз':'aıampaz','экспрессионизм':'ekspresıonızm','мақсат-мүдде':'maqsat-múdde','лифт':'lıft','трест':'tres','пропорция':'proporsıa','күннен-күнге':'kúnnen-kúnge','гальманин':'gálmanın','фюзеляж':'fúzeláj','микропсия':'mıkropsıa','лейшмания':'leıshmanıa','шая':'shaıa','аяқбас':'aıaqbas','невролог':'nevrolog','орфографиялану':'orfografıalaný','баяулау':'baıaýlaý','әбессіну':'ábessiný','рационалист':'rasıonalıs','оя':'oıa','валеологиялық':'valeologıalyq','сырию':'syrıý','жаннат':'jannat','гистолог':'gıstolog','ұяттау':'uıattaý','теория':'teorıa','инвестициялық':'ınvestısıalyq','лейборист':'leıborıs','аппендицит':'apendısıt','фармация':'farmasıa','тасыраю':'tasyraıý','бұдыраю':'budyraıý','вакуумдау':'vakýmdaý','формуляр':'formýlár','петрография':'petrografıa','славян':'slaván','окулист':'okýlıs','ашатұяқтылар':'ashatuıaqtylar','монолог':'monolog','пиджак':'pıdjak','флюорограф':'flúorograf','медалист':'medalıs','шөмею':'shómeıý','аллофон':'alofon','тригонометрия':'trıgonometrıa','монополиясыздандыру':'monopolıasyzdandyrý','антиномия':'antınomıa','бояудай':'boıaýdaı','баббит':'babıt','комментатор':'komentator','шілбию':'shilbıý','эпитафия':'epıtafıa','полярлық':'polárlik','еуразияшылдық':'eýrazıashyldyq','объективтілік':'obektıvtilik','ферромагниттілік':'feromagnıttilik','нейроанатомия':'neıroanatomıa','эврифагия':'evrıfagıa','атрибуция':'atrıbýsıa','фракция':'fraksıa','тасқаяқтай':'tasqaıaqtaı','электртермиялық':'elektrtermıalyq','қонжию':'qonjıý','кірпияз':'kirpıaz','алааяқ':'alaaıaq','габбро-пегматит':'gabro-pegmatıt','гидрохимия':'gıdrohımıa','қиямпұрыс':'qıampurys','аңқаюлы':'ańqaıýly','факультет':'fakúltet','адъютант':'adútant','еуразиялық':'eýrazıalyq','баяндама':'baıandama','монархия':'monarhıa','эквайринг':'ekvaırıń','жербояу':'jerboıaý','кеңкию':'keńkıý','саяқтау':'saıaqtaý','биотехниялық':'bıotehnıalyq','герцогиня':'gersogıná','апперцепция':'apersepsıa','қыртию':'qyrtıý','модернизациялау':'modernızasıalaý','базофилиялық':'bazofılıalyq','аджар':'adjar','қауқию':'qaýqıý','қияқшөп':'qıaqshóp','рояльшы':'roıálshi','құрылымдық-формациялық':'qurylymdyq-formasıalyq','андеррайтер':'anderaıter','мифологиялық':'mıfologıalyq','гаммарус':'gammarýs','типографиялық':'tıpografıalyq','помещиктік':'pomeshıktik','ұйқылы-ояу':'uıqyly-oıaý','ұлғаю':'ulǵaıý','әлхамдилла':'álhamdılla','аккумулятор':'akýmýlátor','аллигатор':'alıgator','бассейн':'baseın','гамма-қондырғы':'gamma-qondyrǵy','винегрет':'vınegret','террариум':'terarıým','борщ':'borsh','шоңқаю':'shońqaıý','саябыр':'saıabyr','олигархия':'olıgarhıa','тығыл-таяң':'tyǵyl-taıań','альвекоккоз':'alvekokoz','радиолокация':'radıolokasıa','вотум':'votým','джунгли':'jýnglı','аускультация':'aýskúltasıa','аяқтабақ':'aıaqtabaq','координациялау':'koordınasıalaý','қырықаяқ':'qyryqaıaq','айбатмия':'aıbatmıa','повесть':'poves','тұп-тұщы':'tup-tushshy','милленаризм':'mılenarızm','үкіаяқ':'úkiaıaq','ілмию':'ilmıý','веб-құрамдас':'veb-quramdas','есею':'eseıý','шотаяқ':'shotaıaq','некеқияр':'nekeqıar','автосаяхат':'avtosaıahat','ассистенттік':'asıstenttik','қараю':'qaraıý','микроспоридия':'mıkrosporıdıa','новеллашы':'novelashy','руль':'rúl','кюри':'kúrı','ессіз':'essiz','баяу':'baıaý','сомпаю':'sompaıý','болбию':'bolbıý','шадияр':'shadıar','жеміссерік':'jemisserik','конфигурация':'konfıgýrasıa','аял':'aıal','батрахология':'batrahologıa','тыю':'tyıý','эфтаназия':'eftanazıa','венедтер':'venedter','телестудия':'telestýdıa','онкологиялық':'onkologıalyq','аналогия':'analogıa','әсіресаясаттану':'ásiresaıasattaný','саябан':'saıaban','антропология':'antropologıa','волейболшы':'voleıbolshy','боямалық':'boıamalyq','саяздық':'saıazdyq','телекоммуникация':'telekomýnıkasıa','боржию':'borjıý','ретроспекциялы':'retrospeksıaly','траекториялы':'traektorıaly','дариядай':'darıadaı','типологиялық':'tıpologıalyq','тарбаю':'tarbaıý','бақыраю':'baqyraıý','боямашы':'boıamashy','пирометрия':'pırometrıa','пунктуациялық':'pýnktýasıalyq','диссертация':'dısertasıa','реакция':'reaksıa','калькуляция':'kálkýlásıa','аяңдасу':'aıańdasý','аккомодаттану':'akomodattaný','ою':'oıý','иерархиялық':'ıerarhıalyq','индукциялану':'ındýksıalaný','бассыздық':'bassyzdyq','баржию':'barjıý','технократия':'tehnokratıa','қоянжоңышқа':'qoıanjońyshqa','хикая':'hıkaıa','баяғыдай':'baıaǵydaı','тобанаяқтану':'tobanaıaqtaný','буддизм':'býddızm','онколог':'onkolog','рефлексия':'refleksıa','электрметаллургия':'elektrmetalýrgıa','қия-шың':'qıa-shyń','даярлату':'daıarlatý','координациялық':'koordınasıalyq','тақиятастамақ':'taqıatastamaq','орангутанг':'orangýtań','коррозия':'korozıa','эмболия':'embolıa','вокалды':'vokaldy','жұмыссыздық':'jumyssyzdyq','тоят':'toıat','гистология':'gıstologıa','шікірею':'shikireıý','трюк':'trúk','большевик':'bо́lshevık','биохимия':'bıohımıa','редупликация':'redýplıkasıa','ұятсыздық':'uıatsyzdyq','таяныш':'taıanysh','багги':'bagı','ультиматум':'últımatým','консьерж':'konserj','вестерн':'vestern','кекию':'kekıý','бас-аяғы':'bas-aıaǵy','доллар':'dollar','соя':'soıa','жаңылыссыз':'jańylyssyz','коммуна':'komýna','ось':'ós','аяздату':'aıazdatý','партиялас':'partıalas','маялану':'maıalaný','диффузиялық':'dıfýzıalyq','аяққап':'aıaqqap','томпаю':'tompaıý','рияшылдық':'rıashyldyq','палеоклиматология':'paleoklımatologıa','ықтияр':'yqtıar','орфография':'orfografıa','махист':'mahıs','шелию':'shelıý','ар-ұят':'ar-uıat','валентті':'valentti','жымию':'jymıý','шиллинг':'shılıń','бильярдшы':'bılárdshy','тұяқ':'tuıaq','агроклиматология':'agroklımatologıa','саңқию':'sańqıý','вакуумөлшеуіш':'vakýmólsheýish','ателье':'atele','құдию':'qudıý','режиссер':'rejıser','асфальтен':'asfálten','ояңдық':'oıańdyq','монография':'monografıa','энциклопедия':'ensıklopedıa','пародия':'parodıa','граммофон':'gramofon','жалқаяқтану':'jalqaıaqtaný','мюзик-холл':'múzık-hol','бұжыраю':'bujyraıý','бактериологиялық':'bakterıologıalyq','тұяқтас':'tuıaqtas','фаталист':'fatalıs','ояңдау':'oıańdaý','әсия':'ásıa','аяқтасу':'aıaqtasý','аэрофотоаппарат':'aerofotoaparat','эмульгатор':'emúlgator','микробиология':'mıkrobıologıa','қаяушыл':'qaıaýshyl','монополия':'monopolıa','стратегия':'strategıa','лактация':'laktasıa','эллипсоид':'elıpsoıd','аюбалдырған':'aıýbaldyrǵan','әңгіртаяқ':'áńgirtaıaq','теңкию':'teńkıý','гидрогеология':'gıdrogeologıa','ояз':'oıaz','ясин':'ıasın','қоянқұйрық':'qoıanquıryq','аянкес':'aıankes','әдиял':'ádıal','коммерциялық':'komersıalyq'
        },
        CopycatCyrlToOriginalCyrl: function (cyrlText) {
            return cyrlText.replace(new RegExp('Ə', 'g'), 'Ә')
                .replace(new RegExp('ə', 'g'), 'ә')
                .replace(new RegExp('Ɵ', 'g'), 'Ө')
                .replace(new RegExp('ɵ', 'g'), 'ө');
        },
        QazLatynToUpper: function (latynText) {
            return latynText.replace(new RegExp('ı', 'g'), 'I').replace(new RegExp('i', 'g'), 'İ').toUpperCase();
        },
        QazLatynToLower: function (latynText) {
            return latynText.replace(new RegExp('I', 'g'), 'ı').replace(new RegExp('İ', 'g'), 'i').toLowerCase();
        },
        Contains: function (arr, obj) {
            return (arr.indexOf(obj) != -1);
        },
        ConvertWord: function (oldValue, newValue) {
            if (oldValue === '' || oldValue.length === 0) return '';

            return oldValue === (this.QazLatynToUpper(oldValue)) ? this.QazLatynToUpper(newValue) :
                oldValue === (this.FirstCharToUpper(oldValue)) ? this.FirstCharToUpper(newValue) : this.QazLatynToLower(newValue);
        },
        FirstCharToUpper: function (input) {
            if (input === '' || input === null) return input;
            return this.QazLatynToUpper(input.substring(0, 1)) + input.substring(1);
        },
        Cyrl2Latyn: function (cyrlText) {

            cyrlText = this.CopycatCyrlToOriginalCyrl(cyrlText);
            cyrlText += '.';
            var chars = cyrlText.split(''),
                length = chars.length,
                latynStrs = new Array(),
                firstCharIsUpper = false,
                prevSound = this.Sound.Unknown,
                cyrlWord = '';

            for (var i = 0; i < length; i++) {

                if (!this.Contains(this.cyrlChars, chars[i].toUpperCase())) {

                    if (cyrlWord !== '' || cyrlWord !== null) {
                        var wordLength = cyrlWord.length,
                            k = wordLength,
                            j = (i - wordLength);
                        for (; k > 3 || (wordLength == 3 && k >= 3) || (wordLength == 2 && k >= 2); k--) {
                            var wpKey = cyrlWord.substring(0, k).toLowerCase();
                            if (this.wordsPackDic.hasOwnProperty(wpKey)) {
                                latynStrs[j] = this.ConvertWord(cyrlWord.substring(0, k), this.wordsPackDic[wpKey]);
                                j += k;
                                break;
                            }
                        }
                        cyrlWord = cyrlWord.toLowerCase();
                        firstCharIsUpper = chars[j].toUpperCase() === chars[j];
                        var lastIsUpper = false,
                            prevIsC = false,
                            lastStartIndex = j;
                        for (; j < i; j++) {
                            if (j > lastStartIndex) {
                                prevSound = this.Contains(this.vowelChars, chars[j - 1].toUpperCase()) ? this.Sound.Vowel : this.Sound.Consonant;
                                prevIsC = chars[j - 1].toLowerCase() === 'с';
                            }
                            if (j != length - 1 && this.Contains(this.cyrlChars, chars[j + 1].toUpperCase()) && chars[j + 1] == chars[j + 1].toUpperCase()) {
                                lastIsUpper = true;
                            }
                            if (wordLength > 3) //Word end 3 char 
                            {
                                var key = chars[i - 3] + chars[i - 2] + chars[i - 1];
                                switch (key.toLowerCase()) {
                                    case 'сть':
                                        {
                                            chars[i] = '';chars[i - 1] = '';
                                        }
                                        break;
                                }
                            }
                            if (j + 1 < length) {
                                var key = chars[j] + chars[j + 1];
                                switch (key.toLowerCase()) {
                                    case 'ия':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ıa');j += 1;
                                            continue;
                                        }
                                    case 'йя':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ııa');j += 1;
                                            continue;
                                        }
                                    case 'ию':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ıý');j += 1;
                                            continue;
                                        }
                                    case 'йю':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ıý');j += 1;
                                            continue;
                                        }
                                    case 'сц':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 's');j += 1;
                                            continue;
                                        }
                                    case 'тч':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ch');j += 1;
                                            continue;
                                        }
                                    case 'ий':
                                        {
                                            latynStrs[j] = this.ConvertWord(key, 'ı');j += 1;
                                            continue;
                                        }
                                    case 'ХХ':
                                        {
                                            latynStrs[j] = 'ХХ';j += 1;
                                            continue;
                                        }
                                }
                            }
                            switch (chars[j]) {
                                case 'Я':
                                    {
                                        latynStrs[j] = prevSound == this.Sound.Consonant ? 'Á' : 'Ia';
                                    }
                                    break;
                                case 'я':
                                    {
                                        latynStrs[j] = prevSound == this.Sound.Consonant ? 'á' : 'ıa';
                                    }
                                    break;
                                case 'Ю':
                                    {
                                        latynStrs[j] = prevSound == this.Sound.Consonant ? 'Ú' : 'Iý';
                                    }
                                    break;
                                case 'ю':
                                    {
                                        latynStrs[j] = prevSound == this.Sound.Consonant ? 'ú' : 'ıý';
                                    }
                                    break;
                                case 'Щ':
                                    {
                                        latynStrs[j] = lastIsUpper ? 'SH' : 'Sh';
                                    }
                                    break;
                                case 'щ':
                                    {
                                        latynStrs[j] = 'sh';
                                    }
                                    break;
                                case 'Э':
                                    {
                                        latynStrs[j] = 'E';
                                    }
                                    break;
                                case 'э':
                                    {
                                        latynStrs[j] = 'e';
                                    }
                                    break;
                                case 'А':
                                    {
                                        latynStrs[j] = 'A';
                                    }
                                    break;
                                case 'а':
                                    {
                                        latynStrs[j] = 'a';
                                    }
                                    break;
                                case 'Б':
                                    {
                                        latynStrs[j] = 'B';
                                    }
                                    break;
                                case 'б':
                                    {
                                        latynStrs[j] = 'b';
                                    }
                                    break;
                                case 'Ц':
                                    {
                                        latynStrs[j] = 'S';
                                    }
                                    break;
                                case 'ц':
                                    {
                                        latynStrs[j] = 's';
                                    }
                                    break;
                                case 'Д':
                                    {
                                        latynStrs[j] = 'D';
                                    }
                                    break;
                                case 'д':
                                    {
                                        latynStrs[j] = 'd';
                                    }
                                    break;
                                case 'Е':
                                    {
                                        latynStrs[j] = 'E';
                                    }
                                    break;
                                case 'е':
                                    {
                                        latynStrs[j] = 'e';
                                    }
                                    break;
                                case 'Ф':
                                    {
                                        latynStrs[j] = 'F';
                                    }
                                    break;
                                case 'ф':
                                    {
                                        latynStrs[j] = 'f';
                                    }
                                    break;
                                case 'Г':
                                    {
                                        latynStrs[j] = 'G';
                                    }
                                    break;
                                case 'г':
                                    {
                                        latynStrs[j] = 'g';
                                    }
                                    break;
                                case 'Х':
                                    {
                                        latynStrs[j] = prevIsC ? 'Q' : 'H';
                                    }
                                    break;
                                case 'х':
                                    {
                                        latynStrs[j] = prevIsC ? 'q' : 'h';
                                    }
                                    break;
                                case 'Һ':
                                    {
                                        latynStrs[j] = 'H';
                                    }
                                    break;
                                case 'һ':
                                    {
                                        latynStrs[j] = 'h';
                                    }
                                    break;
                                case 'І':
                                    {
                                        latynStrs[j] = 'İ';
                                    }
                                    break;
                                case 'і':
                                    {
                                        latynStrs[j] = 'i';
                                    }
                                    break;
                                case 'И':
                                    {
                                        latynStrs[j] = 'I';
                                    }
                                    break;
                                case 'и':
                                    {
                                        latynStrs[j] = 'ı';
                                    }
                                    break;
                                case 'Й':
                                    {
                                        latynStrs[j] = 'I';
                                    }
                                    break;
                                case 'й':
                                    {
                                        latynStrs[j] = 'ı';
                                    }
                                    break;
                                case 'К':
                                    {
                                        latynStrs[j] = 'K';
                                    }
                                    break;
                                case 'к':
                                    {
                                        latynStrs[j] = 'k';
                                    }
                                    break;
                                case 'Л':
                                    {
                                        latynStrs[j] = 'L';
                                    }
                                    break;
                                case 'л':
                                    {
                                        latynStrs[j] = 'l';
                                    }
                                    break;
                                case 'М':
                                    {
                                        latynStrs[j] = 'M';
                                    }
                                    break;
                                case 'м':
                                    {
                                        latynStrs[j] = 'm';
                                    }
                                    break;
                                case 'Н':
                                    {
                                        latynStrs[j] = 'N';
                                    }
                                    break;
                                case 'н':
                                    {
                                        latynStrs[j] = 'n';
                                    }
                                    break;
                                case 'О':
                                    {
                                        latynStrs[j] = 'O';
                                    }
                                    break;
                                case 'о':
                                    {
                                        latynStrs[j] = 'o';
                                    }
                                    break;
                                case 'П':
                                    {
                                        latynStrs[j] = 'P';
                                    }
                                    break;
                                case 'п':
                                    {
                                        latynStrs[j] = 'p';
                                    }
                                    break;
                                case 'Қ':
                                    {
                                        latynStrs[j] = 'Q';
                                    }
                                    break;
                                case 'қ':
                                    {
                                        latynStrs[j] = 'q';
                                    }
                                    break;
                                case 'Р':
                                    {
                                        latynStrs[j] = 'R';
                                    }
                                    break;
                                case 'р':
                                    {
                                        latynStrs[j] = 'r';
                                    }
                                    break;
                                case 'С':
                                    {
                                        latynStrs[j] = 'S';
                                    }
                                    break;
                                case 'с':
                                    {
                                        latynStrs[j] = 's';
                                    }
                                    break;
                                case 'Т':
                                    {
                                        latynStrs[j] = 'T';
                                    }
                                    break;
                                case 'т':
                                    {
                                        latynStrs[j] = 't';
                                    }
                                    break;
                                case 'Ұ':
                                    {
                                        latynStrs[j] = 'U';
                                    }
                                    break;
                                case 'ұ':
                                    {
                                        latynStrs[j] = 'u';
                                    }
                                    break;
                                case 'В':
                                    {
                                        latynStrs[j] = 'V';
                                    }
                                    break;
                                case 'в':
                                    {
                                        latynStrs[j] = 'v';
                                    }
                                    break;
                                case 'У':
                                    {
                                        latynStrs[j] = 'Ý';
                                    }
                                    break;
                                case 'у':
                                    {
                                        latynStrs[j] = 'ý';
                                    }
                                    break;
                                case 'Ы':
                                    {
                                        latynStrs[j] = 'Y';
                                    }
                                    break;
                                case 'ы':
                                    {
                                        latynStrs[j] = 'y';
                                    }
                                    break;
                                case 'З':
                                    {
                                        latynStrs[j] = 'Z';
                                    }
                                    break;
                                case 'з':
                                    {
                                        latynStrs[j] = 'z';
                                    }
                                    break;
                                case 'Ә':
                                    {
                                        latynStrs[j] = 'Á';
                                    }
                                    break;
                                case 'ә':
                                    {
                                        latynStrs[j] = 'á';
                                    }
                                    break;
                                case 'Ё':
                                case 'Ө':
                                    {
                                        latynStrs[j] = 'Ó';
                                    }
                                    break;
                                case 'ё':
                                case 'ө':
                                    {
                                        latynStrs[j] = 'ó';
                                    }
                                    break;
                                case 'Ү':
                                    {
                                        latynStrs[j] = 'Ú';
                                    }
                                    break;
                                case 'ү':
                                    {
                                        latynStrs[j] = 'ú';
                                    }
                                    break;
                                case 'Ч':
                                    {
                                        latynStrs[j] = lastIsUpper ? 'CH' : 'Ch';
                                    }
                                    break;
                                case 'ч':
                                    {
                                        latynStrs[j] = 'ch';
                                    }
                                    break;
                                case 'Ғ':
                                    {
                                        latynStrs[j] = 'Ǵ';
                                    }
                                    break;
                                case 'ғ':
                                    {
                                        latynStrs[j] = 'ǵ';
                                    }
                                    break;
                                case 'Ш':
                                    {
                                        latynStrs[j] = lastIsUpper ? 'SH' : 'Sh';
                                    }
                                    break;
                                case 'ш':
                                    {
                                        latynStrs[j] = 'sh';
                                    }
                                    break;
                                case 'Ж':
                                    {
                                        latynStrs[j] = 'J';
                                    }
                                    break;
                                case 'ж':
                                    {
                                        latynStrs[j] = 'j';
                                    }
                                    break;
                                case 'Ң':
                                    {
                                        latynStrs[j] = 'Ń';
                                    }
                                    break;
                                case 'ң':
                                    {
                                        latynStrs[j] = 'ń';
                                    }
                                    break;
                                case 'ь':
                                    {
                                        latynStrs[j] = '';
                                    }
                                    break;
                                case 'Ь':
                                    {
                                        latynStrs[j] = '';
                                    }
                                    break;
                                case 'ъ':
                                    {
                                        latynStrs[j] = '';
                                    }
                                    break;
                                case 'Ъ':
                                    {
                                        latynStrs[j] = '';
                                    }
                                    break;
                                case '¬':
                                    {
                                        latynStrs[j] = '';
                                    }
                                    break;
                                default:
                                    {
                                        latynStrs[j] = chars[j] != '' ? chars[j] : '';
                                    }
                                    break;
                            }


                        }
                        cyrlWord = '';


                    }
                    latynStrs[i] = chars[i];
                    prevSound = this.Sound.Unknown;
                    continue;

                }
                cyrlWord += chars[i];
                prevSound = this.Sound.Unknown;
            }
            latynStrs[length - 1] = '';
            return latynStrs.join('');
        }
    };

    ev.QazLatynConverter;

    function createQazLatynConverterInstance() {

        return new _QazLatynConverter();
    };
    if (!ev.QazLatynConverter) {
        ev.QazLatynConverter = createQazLatynConverterInstance();
    }

})(window);